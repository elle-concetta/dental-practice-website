import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ShieldCheck, CreditCard } from "lucide-react";

export default function Financials() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      {/* Hero Banner */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-4 text-white">Financial Information</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
              Clear, transparent pricing and flexible payment options.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <FadeIn>
              <ShieldCheck className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h2 className="font-serif text-4xl text-primary mb-6">Insurance & Benefits</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe excellent dental care should be accessible. We accept most major PPO insurance plans and have a dedicated team member to help you navigate your benefits, file claims, and maximize your coverage.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="bg-muted rounded-2xl p-10 border border-border">
              <h3 className="font-serif text-2xl text-center text-primary mb-10">Accepted Providers Include</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
                {/* Placeholders for insurance logos - using text for now */}
                <div className="flex items-center justify-center font-bold text-xl text-primary grayscale">Delta Dental</div>
                <div className="flex items-center justify-center font-bold text-xl text-primary grayscale">Cigna</div>
                <div className="flex items-center justify-center font-bold text-xl text-primary grayscale">MetLife</div>
                <div className="flex items-center justify-center font-bold text-xl text-primary grayscale">Aetna</div>
                <div className="flex items-center justify-center font-bold text-xl text-primary grayscale">BlueCross</div>
                <div className="flex items-center justify-center font-bold text-xl text-primary grayscale">Guardian</div>
                <div className="flex items-center justify-center font-bold text-xl text-primary grayscale">United Healthcare</div>
                <div className="flex items-center justify-center font-bold text-xl text-primary grayscale">Humana</div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-10">
                Don't see your provider? Contact our office at [PHONE] to verify your specific plan.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <FadeIn direction="left">
                <CreditCard className="w-16 h-16 text-secondary mb-6" />
                <h2 className="font-serif text-4xl mb-6 text-white">Flexible Financing</h2>
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  For treatments not fully covered by insurance, or for patients without dental benefits, we offer flexible financing solutions. Your health shouldn't wait.
                </p>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  We proudly partner with CareCredit® to provide 0% interest promotional periods and extended payment plans that fit comfortably within your monthly budget.
                </p>
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <a href="https://www.carecredit.com" target="_blank" rel="noopener noreferrer">
                    Learn about CareCredit
                  </a>
                </Button>
              </FadeIn>
            </div>
            
            <div className="w-full md:w-1/2">
              <FadeIn direction="right" delay={0.2}>
                <div className="bg-white text-primary p-10 rounded-2xl">
                  <h3 className="font-serif text-3xl mb-6">Accepted Payment Methods</h3>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-lg">Major Credit Cards (Visa, MC, Amex)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-lg">Debit Cards & HSA/FSA Cards</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-lg">Personal Checks</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      <span className="text-lg">Cash</span>
                    </li>
                  </ul>
                  <div className="pt-6 border-t border-border">
                    <p className="text-muted-foreground">
                      Payments are due at the time of service unless prior arrangements have been made.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
