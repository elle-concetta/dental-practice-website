import { Link } from "wouter";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/Seo";

const services = [
  {
    title: "General Dentistry",
    slug: "general-dentistry",
    desc: "Comprehensive exams, cleanings, and preventative care to maintain optimal oral health.",
    img: "hero-office.png"
  },
  {
    title: "Preventive Dentistry",
    slug: "preventive-dentistry",
    desc: "Proactive care with sealants, fluoride treatments, and early intervention to stop problems before they start.",
    img: "hero-office.png"
  },
  {
    title: "Endodontics Treatment",
    slug: "endodontics-treatment",
    desc: "Gentle, precise root canal therapy and pulp treatments to save your natural teeth and relieve pain.",
    img: "doctor-portrait.png"
  },
  {
    title: "Cosmetic Dentistry",
    slug: "cosmetic-dentistry",
    desc: "Veneers, whitening, and smile design to unlock your most confident self.",
    img: "service-cosmetic.png"
  },
  {
    title: "Clear Aligners",
    slug: "clear-aligners",
    desc: "Discreet, comfortable teeth straightening with custom-fitted clear aligner trays.",
    img: "service-cosmetic.png"
  },
  {
    title: "Crowns and Bridges",
    slug: "crowns-and-bridges",
    desc: "Durable, natural-looking porcelain crowns and bridges to restore damaged or missing teeth.",
    img: "doctor-portrait.png"
  },
  {
    title: "Dentures",
    slug: "dentures",
    desc: "Custom full and partial dentures crafted for comfort, function, and a natural appearance.",
    img: "office-exterior.png"
  },
  {
    title: "Restorative Dentistry",
    slug: "restorative-dentistry",
    desc: "Full-mouth reconstruction using the finest materials to rebuild form, function, and beauty.",
    img: "doctor-portrait.png"
  },
  {
    title: "Implants",
    slug: "implants",
    desc: "Permanent, titanium-rooted tooth replacements that look, feel, and function like your natural teeth.",
    img: "hero-office.png"
  },
  {
    title: "Oral Surgery",
    slug: "oral-surgery",
    desc: "Expert tooth extractions, wisdom teeth removal, and bone grafting in a calm, comfortable setting.",
    img: "office-exterior.png"
  },
  {
    title: "Emergency Dentistry",
    slug: "emergency-dentistry",
    desc: "Prompt, compassionate care for toothaches, broken teeth, and urgent dental needs.",
    img: "office-exterior.png"
  },
  {
    title: "Technology",
    slug: "technology",
    desc: "3D cone beam imaging, digital impressions, laser dentistry, and same-day restorations.",
    img: "team-photo.png"
  },
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      {/*
        ── SEO: OUR SERVICES PAGE ────────────────────────────────────────────────
        Edit the title and description below to match your practice and city.
        Each individual service page has its own SEO set in ServiceDetail.tsx.
      */}
      <Seo
        title="Our Services | [Your Practice Name] — [City, State] Dentist"
        description="From dental implants and clear aligners to crowns, oral surgery, and preventive care — [Your Practice Name] in [City, State] offers comprehensive dentistry for the whole family."
      />

      {/* Hero Banner */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={`${import.meta.env.BASE_URL}/hero-office.png`} 
            alt="Office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-4 text-white">Our Services</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
              Elevated dental care tailored to your unique needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.05} className="group h-full">
                <Link href={`/services/${service.slug}`} className="block h-full flex flex-col bg-white border border-border/50 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={`${import.meta.env.BASE_URL}/${service.img}`} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="font-serif text-2xl text-primary mb-2">{service.title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">{service.desc}</p>
                    <div className="mt-4 flex items-center text-secondary font-medium text-sm group-hover:gap-2 gap-1 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6">Ready for exceptional care?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
              Our team is here to help you achieve the healthy, beautiful smile you deserve.
            </p>
            <Button asChild size="lg" className="bg-secondary text-white hover:bg-secondary/90 text-lg px-10 py-6">
              <a href="#contact">Reserve Your Appointment</a>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
