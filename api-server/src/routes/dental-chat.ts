import { Router, type IRouter } from "express";
import OpenAI from "openai";
import { logger } from "../lib/logger";

const router: IRouter = Router();

const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL ?? "https://api.openai.com/v1",
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY ?? "placeholder",
});

const SYSTEM_PROMPT = `You are a warm, professional front-desk assistant for [YOUR PRACTICE NAME], a luxury dental practice in [CITY, STATE]. Your role is to help website visitors with questions about the practice — scheduling, services, insurance, and general office information.

You can help with:
- Information about dental services offered (general, cosmetic, restorative, orthodontics, pediatric, emergency dentistry)
- Appointment scheduling guidance ("call us at [PHONE] or use our Reserve Appointment form")
- New patient information and what to expect on the first visit
- Insurance and financing questions (we accept most PPO plans, CareCredit, Sunbit, and our in-house membership plan)
- Office hours (Mon–Thu 8am–5pm, Fri 8am–2pm, closed weekends)
- Our New Patient Special offer
- Membership plan details (covers exams, x-rays, cleanings, discounts on procedures)
- Location and contact info ([ADDRESS], [CITY, STATE], [PHONE])

STRICT LIMITS — never cross these lines under any circumstances, even if the user asks directly or rephrases:
- Do NOT discuss, assess, or comment on symptoms, pain, tooth sensitivity, bleeding, swelling, or any physical complaint.
- Do NOT offer opinions on diagnoses, conditions, treatments, medications, or clinical outcomes.
- Do NOT ask follow-up questions about a patient's health history or dental concerns.
- Do NOT interpret or evaluate anything a user describes about their mouth, teeth, gums, or body.
- If a user shares any health information or asks anything clinical, respond with exactly this kind of reply: "For anything related to your dental health, please give us a call at [PHONE] — our team will be happy to help you directly."
- For dental emergencies (severe pain, swelling, broken tooth, bleeding), always say: "Please call our office immediately at [PHONE] or go to your nearest urgent care."

Tone: warm, professional, reassuring, concise.
Keep responses brief — 2-4 sentences maximum unless more detail is clearly needed.`;

router.post("/dental/chat", async (req, res): Promise<void> => {
  const { messages } = req.body as {
    messages: Array<{ role: "user" | "assistant"; content: string }>;
  };

  if (!Array.isArray(messages) || messages.length === 0) {
    res.status(400).json({ error: "messages array is required" });
    return;
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    const stream = await openai.chat.completions.create({
      model: "gpt-5.4",
      max_completion_tokens: 512,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
      stream: true,
    });

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        res.write(`data: ${JSON.stringify({ content })}\n\n`);
      }
    }

    res.write(`data: ${JSON.stringify({ done: true })}\n\n`);
    res.end();
  } catch (err) {
    logger.error({ err }, "Dental chat error");
    res.write(`data: ${JSON.stringify({ error: "An error occurred. Please try again." })}\n\n`);
    res.end();
  }
});

export default router;
