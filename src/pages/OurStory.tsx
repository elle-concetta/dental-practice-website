import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";

export default function OurStory() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      {/* Hero Banner */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={`${import.meta.env.BASE_URL}/office-exterior.png`} 
            alt="Office Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-4 text-white">Our Story</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
              Built on a foundation of clinical excellence and compassionate care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Meet the Doctor */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-5/12">
              <FadeIn direction="left">
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-xl aspect-[3/4]">
                    <img 
                      src={`${import.meta.env.BASE_URL}/doctor-portrait.png`} 
                      alt="[DOCTOR NAME]" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-secondary rounded-lg -z-10"></div>
                </div>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-7/12">
              <FadeIn direction="right">
                <h2 className="text-secondary font-medium tracking-widest uppercase text-sm mb-2">Lead Clinician</h2>
                <h3 className="font-serif text-4xl text-primary mb-6">[DOCTOR NAME], [DOCTOR CREDENTIALS]</h3>
                
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    With over a decade of experience in advanced restorative and cosmetic dentistry, [DOCTOR NAME] has dedicated their career to transforming smiles and improving patients' quality of life.
                  </p>
                  <p>
                    A graduate of [DENTAL SCHOOL NAME], [DOCTOR NAME] pursued extensive post-graduate training at [PRESTIGIOUS INSTITUTE], mastering the intricacies of full-mouth rehabilitation and aesthetic design.
                  </p>
                  <p>
                    "I believe that the best dentistry is undetectable. We want our patients to leave with smiles that look naturally beautiful, function perfectly, and last a lifetime. But more importantly, we want them to feel completely at ease while they are in our care."
                  </p>
                </div>
                
                <div className="mt-10">
                  <h4 className="font-serif text-xl text-primary mb-4">Professional Affiliations</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      American Dental Association
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      State Dental Association
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      Academy of General Dentistry
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-secondary"></div>
                      American Academy of Cosmetic Dentistry
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-secondary font-medium tracking-widest uppercase text-sm mb-3">Our Dedicated Staff</h2>
              <h3 className="font-serif text-4xl text-primary mb-6">Meet the Team</h3>
              <p className="text-muted-foreground text-lg">Our clinical and administrative professionals are here to ensure your experience is seamless from the moment you walk through our doors.</p>
            </FadeIn>
          </div>

          <div className="mb-16">
            <FadeIn delay={0.2}>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={`${import.meta.env.BASE_URL}/team-photo.png`} 
                  alt="Our Team" 
                  className="w-full h-auto aspect-video md:aspect-[21/9] object-cover"
                />
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah", role: "Registered Dental Hygienist" },
              { name: "Jessica", role: "Patient Coordinator" },
              { name: "Michael", role: "Clinical Assistant" }
            ].map((member, i) => (
              <FadeIn key={i} delay={0.1 * i} direction="up" className="bg-white p-8 rounded-lg shadow-sm border border-border/50 text-center">
                <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 border-2 border-secondary/20 flex items-center justify-center text-muted-foreground font-serif text-2xl">
                  {member.name[0]}
                </div>
                <h4 className="font-serif text-2xl text-primary mb-1">{member.name}</h4>
                <p className="text-secondary font-medium">{member.role}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="font-serif text-4xl text-white mb-6">Ready to experience the difference?</h2>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6">
              <a href="#reserve">Schedule Your Visit</a>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
