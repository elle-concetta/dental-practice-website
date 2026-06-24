import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download, CheckCircle, ShieldCheck } from "lucide-react";

const insurers = [
  "Delta Dental",
  "Cigna Dental",
  "Aetna",
  "BlueCross BlueShield",
  "Humana",
  "United Healthcare",
  "MetLife",
  "Ameritas",
  "Guardian",
  "Principal",
  "Sun Life",
  "Anthem",
];

export default function ForPatients() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      {/* Hero Banner */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-4 text-white">Patient Resources</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
              Everything you need for a seamless experience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* New Patient Info */}
      <section className="py-24" id="new-patient">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <h2 className="text-secondary font-medium tracking-widest uppercase text-sm mb-3">Welcome</h2>
                <h3 className="font-serif text-4xl text-primary mb-6">Your First Visit</h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  We look forward to welcoming you to our practice. Your first visit is an opportunity for us to get to know you, understand your goals, and establish a foundation for a lifetime of healthy smiles.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-4 items-start">
                    <CheckCircle className="text-secondary w-6 h-6 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-1">Comprehensive Exam</h4>
                      <p className="text-muted-foreground">A thorough evaluation of your teeth, gums, and overall oral health.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <CheckCircle className="text-secondary w-6 h-6 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-1">Digital Imaging</h4>
                      <p className="text-muted-foreground">State-of-the-art X-rays for precise diagnostics with minimal exposure.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <CheckCircle className="text-secondary w-6 h-6 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-1">Personalized Plan</h4>
                      <p className="text-muted-foreground">A detailed discussion of findings and a tailored treatment strategy.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <CheckCircle className="text-secondary w-6 h-6 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-1">What to Bring</h4>
                      <p className="text-muted-foreground">Your insurance card, a list of current medications, and any prior dental records if available.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="w-full lg:w-1/2" id="forms">
              <FadeIn delay={0.2}>
                <div className="bg-muted p-10 rounded-2xl border border-border">
                  <h3 className="font-serif text-3xl text-primary mb-4">Patient Forms</h3>
                  <p className="text-muted-foreground mb-8">
                    Save time at your appointment by downloading and completing your new patient paperwork in advance.
                  </p>

                  <div className="space-y-4 mb-8">
                    <Button variant="outline" className="w-full justify-between bg-white hover:bg-white/60 h-14 text-lg">
                      New Patient Registration
                      <Download className="w-5 h-5 text-secondary" />
                    </Button>
                    <Button variant="outline" className="w-full justify-between bg-white hover:bg-white/60 h-14 text-lg">
                      Medical History Form
                      <Download className="w-5 h-5 text-secondary" />
                    </Button>
                    <Button variant="outline" className="w-full justify-between bg-white hover:bg-white/60 h-14 text-lg">
                      HIPAA Privacy Notice
                      <Download className="w-5 h-5 text-secondary" />
                    </Button>
                    <Button variant="outline" className="w-full justify-between bg-white hover:bg-white/60 h-14 text-lg">
                      Insurance Authorization
                      <Download className="w-5 h-5 text-secondary" />
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground text-center">
                    Having trouble? <a href="/contact" className="text-secondary hover:underline">Contact our office</a> and we'll gladly send them by email.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Accepted */}
      <section className="py-24 bg-primary/5" id="insurance">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h2 className="font-serif text-4xl text-primary mb-4">Insurance Accepted</h2>
              <p className="text-muted-foreground text-lg">
                We work with most major PPO dental insurance plans and will submit claims on your behalf to maximize your benefits. Not sure if we accept yours? <a href="/contact" className="text-secondary hover:underline">Contact us</a> to verify.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {insurers.map((ins, i) => (
                <div
                  key={ins}
                  className="bg-white rounded-xl border border-border/50 flex items-center justify-center p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="font-medium text-primary text-center text-sm leading-snug">{ins}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-12 bg-white rounded-2xl border border-border p-8 max-w-3xl mx-auto text-center">
              <h3 className="font-serif text-2xl text-primary mb-3">Don't see your plan?</h3>
              <p className="text-muted-foreground mb-6">
                We also offer flexible in-house financing and accept all major credit cards, CareCredit, and Sunbit. We'll work with you to make your care affordable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <a href="/financials">View Financing Options</a>
                </Button>
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <a href="/contact">Verify Your Coverage</a>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted" id="faq">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="font-serif text-4xl text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">Answers to common questions about your care.</p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border border-border/50 px-6 py-2">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-serif text-xl text-primary hover:text-secondary">Are you accepting new patients?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Yes, we are currently welcoming new patients to our practice. We would be honored to care for you and your family. Please call our office or use our online booking system to schedule your initial visit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-serif text-xl text-primary hover:text-secondary">Do you take my insurance?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  We work with most major PPO dental insurance plans and will gladly submit claims on your behalf to maximize your benefits. Please visit our <a href="/financials" className="text-secondary hover:underline">Financials page</a> or contact our team to verify your specific coverage.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-serif text-xl text-primary hover:text-secondary">What if I have a dental emergency?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  If you are experiencing a dental emergency, please call our office immediately at [PHONE]. We reserve time in our daily schedule to accommodate urgent needs and provide prompt relief.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-serif text-xl text-primary hover:text-secondary">Do you offer sedation options?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  Absolutely. We understand that dental anxiety is common, and your comfort is our priority. We offer nitrous oxide (laughing gas) and oral conscious sedation to help you relax during your treatment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="font-serif text-xl text-primary hover:text-secondary">At what age should my child first see the dentist?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  The American Academy of Pediatric Dentistry recommends that a child's first dental visit occur within six months after the presence of the first tooth or by their first birthday. Early visits help establish a dental home and identify any potential issues early.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
