import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME = "Hello! I'm the virtual assistant for [YOUR PRACTICE NAME]. How can I help you today? I can answer questions about our services, hours, insurance, or help you get started as a new patient.";

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    const assistantMsg: Message = { role: "assistant", content: "" };
    setMessages([...next, assistantMsg]);

    try {
      const response = await fetch("/api/dental/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      if (!response.ok || !response.body) throw new Error("Network error");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const text = decoder.decode(value, { stream: true });
        const lines = text.split("\n");
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          try {
            const data = JSON.parse(line.slice(6));
            if (data.done) break;
            if (data.error) {
              accumulated = data.error;
              break;
            }
            if (data.content) {
              accumulated += data.content;
              setMessages((prev) => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: "assistant",
                  content: accumulated,
                };
                return updated;
              });
            }
          } catch {}
        }
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "I'm sorry, I'm having trouble connecting right now. Please call our office at [PHONE] for immediate assistance.",
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-secondary shadow-2xl flex items-center justify-center text-white hover:bg-secondary/90 transition-all duration-300 ${open ? "scale-0 opacity-0" : "scale-100 opacity-100"}`}
        aria-label="Open chat"
      >
        <MessageCircle size={28} />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white animate-pulse" />
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] flex flex-col rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${open ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}`}
        style={{ height: "520px" }}
      >
        {/* Header */}
        <div className="bg-primary text-white px-5 py-4 flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
            <Bot size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-sm leading-tight">[YOUR PRACTICE NAME]</p>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <p className="text-xs text-white/70">Practice Assistant · Online</p>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white transition-colors"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-[#f8f7f4] flex flex-col gap-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "assistant" && (
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0 mr-2 mt-0.5">
                  <Bot size={14} className="text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-white rounded-br-sm"
                    : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm"
                }`}
              >
                {msg.content || (loading && i === messages.length - 1 ? (
                  <span className="flex gap-1 items-center h-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                ) : null)}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick prompts */}
        {messages.length <= 1 && (
          <div className="px-4 py-2 bg-[#f8f7f4] border-t border-gray-100 flex gap-2 flex-wrap shrink-0">
            {["Book appointment", "New patient info", "Insurance accepted", "Office hours"].map((q) => (
              <button
                key={q}
                onClick={() => { setInput(q); setTimeout(() => inputRef.current?.focus(), 50); }}
                className="text-xs px-3 py-1.5 rounded-full bg-white border border-gray-200 text-primary hover:border-secondary hover:text-secondary transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="bg-white border-t border-gray-100 px-4 py-3 flex items-center gap-2 shrink-0">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Type your message…"
            disabled={loading}
            className="flex-1 text-sm outline-none bg-transparent placeholder-gray-400 text-gray-800 disabled:opacity-50"
          />
          <Button
            size="sm"
            onClick={send}
            disabled={!input.trim() || loading}
            className="w-9 h-9 p-0 rounded-full bg-secondary hover:bg-secondary/90 shrink-0"
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
          </Button>
        </div>
      </div>
    </>
  );
}
