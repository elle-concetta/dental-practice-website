import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { Seo } from "@/components/Seo";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Star,
  ShieldCheck,
  HeartPulse,
  Clock,
  CheckCircle,
  CreditCard,
  Gift,
  Sparkles,
  ArrowRight,
  Phone,
} from "lucide-react";

const galleryImages = [
  { src: "hero-office.png", alt: "Reception Area", span: "col-span-2 row-span-2" },
  { src: "office-exterior.png", alt: "Office Exterior", span: "" },
  { src: "team-photo.png", alt: "Our Team", span: "" },
  { src: "service-cosmetic.png", alt: "Treatment Suite", span: "" },
  { src: "doctor-portrait.png", alt: "Doctor", span: "" },
];

const testimonials = [
  {
    quote: "The team at [YOUR PRACTICE NAME] made me feel completely at ease. Best dental experience of my life.",
    name: "Sarah M.",
    detail: "Patient since 2021",
  },
  {
    quote: "I was terrified of dentists until I found this practice. [DOCTOR NAME] is incredibly gentle and thorough.",
    name: "James T.",
    detail: "Patient since 2020",
  },
  {
    quote: "My smile has completely transformed. The cosmetic work exceeded every expectation I had.",
    name: "Emily R.",
    detail: "Cosmetic Patient",
  },
  {
    quote: "Bringing my whole family here was the best decision. The kids actually look forward to their visits!",
    name: "David & Lisa K.",
    detail: "Family Patients",
  },
];

const financingOptions = [
  {
    name: "CareCredit",
    desc: "0% interest financing with approved credit. Apply in minutes.",
    icon: <CreditCard className="w-8 h-8 text-secondary" />,
  },
  {
    name: "Sunbit",
    desc: "Flexible pay-over-time plans with fast approvals.",
    icon: <Sparkles className="w-8 h-8 text-secondary" />,
  },
  {
    name: "In-House Membership",
    desc: "No insurance? Our annual plan covers your preventive care.",
    icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
  },
];

const membershipTiers = [
  {
    name: "Individual",
    price: "$349",
    period: "/year",
    features: [
      "2 Comprehensive exams",
      "2 Professional cleanings",
      "1 Set of bitewing X-rays",
      "1 Panoramic X-ray",
      "Emergency exam (1/year)",
      "15% off all other procedures",
    ],
  },
  {
    name: "Family",
    price: "$599",
    period: "/year",
    badge: "Most Popular",
    features: [
      "Everything in Individual",
      "Covers up to 4 family members",
      "20% off all other procedures",
      "Priority scheduling",
      "Complimentary whitening kit",
    ],
  },
];

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Home() {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/*
        ── SEO: HOME PAGE ────────────────────────────────────────────────────────
        Edit the title and description below with your practice name and city.
        This controls what Google shows in search results for your home page.
      */}
      <Seo
        title="[Your Practice Name] | Luxury Dentist in [City, State]"
        description="[Your Practice Name] offers luxury dental care in [City, State] — implants, cosmetic dentistry, clear aligners, crowns, and more. Book your appointment today."
      />

      {/* ── Hero ── */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}/hero-office.png`}
            alt="Pristine dental office"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white mt-20">
          <FadeIn direction="up" delay={0.1}>
            <p className="text-secondary font-medium tracking-[0.35em] uppercase text-xs md:text-sm mb-5 drop-shadow">
              [YOUR PRACTICE NAME] · [CITY, STATE]
            </p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight mb-6 drop-shadow-2xl">
              Dentistry,<br />
              <span className="italic font-normal text-secondary/90">Elevated.</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.3}>
            <p className="text-lg md:text-xl font-light max-w-xl mx-auto mb-10 text-white/85 drop-shadow-md">
              Luxury care. Gentle touch. A smile you'll be proud of.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.5}>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-white hover:bg-secondary/90 text-lg px-10 py-7 rounded-md font-semibold tracking-wide shadow-2xl hover:shadow-secondary/30 transition-all duration-300"
            >
              <a href="#contact">Reserve Your Appointment</a>
            </Button>
          </FadeIn>

        </div>
      </section>

      {/* ── Practice Photos Showcase ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn>
              <h2 className="text-secondary font-medium tracking-widest uppercase text-xs mb-3">Inside Our Practice</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-primary">Where Comfort Meets Excellence</h3>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[560px]">
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}/hero-office.png`}
                  alt="Reception Area"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}/office-exterior.png`}
                  alt="Office Exterior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}/team-photo.png`}
                  alt="Our Team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-3 mt-3 h-56">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}/service-cosmetic.png`}
                  alt="Treatment Suite"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}/service-pediatric.png`}
                  alt="Pediatric Suite"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── The Relaxing Environment ── */}
      <section className="py-24 bg-muted overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <FadeIn direction="left">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                  <img
                    src={`${import.meta.env.BASE_URL}/hero-office.png`}
                    alt="Our relaxing environment"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              </FadeIn>
            </div>

            <div className="w-full lg:w-1/2">
              <FadeIn direction="right">
                <h2 className="text-secondary font-medium tracking-widest uppercase text-xs mb-3">Our Environment</h2>
                <h3 className="font-serif text-4xl md:text-5xl text-primary mb-6 leading-tight">
                  The Relaxing<br />
                  <span className="italic">Environment</span>
                </h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  We designed every detail of our practice with one goal: your comfort. From the moment you walk through our doors, you're welcomed by soft ambient lighting, a calming spa-like atmosphere, warm blankets, and a complimentary beverage station.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Our treatment suites feature massage-enabled chairs, noise-canceling headphones, and personal entertainment screens. Because exceptional dentistry doesn't have to feel clinical — it can feel like a retreat.
                </p>
                <ul className="space-y-3 mb-10">
                  {["Massage chairs & heated neck pillows", "Personal entertainment screens", "Noise-canceling headphones", "Aromatherapy & calming scents", "Sedation options available"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg">
                  <Link href="/our-story">Tour Our Practice</Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Strip ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <FadeIn>
              <h2 className="text-secondary font-medium tracking-widest uppercase text-xs mb-3">Comprehensive Care</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-primary">Everything Your Smile Needs</h3>
            </FadeIn>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: "General", icon: "🦷", slug: "general-dentistry" },
              { label: "Cosmetic", icon: "✨", slug: "cosmetic-dentistry" },
              { label: "Restorative", icon: "🔬", slug: "restorative-dentistry" },
              { label: "Orthodontics", icon: "😁", slug: "orthodontics" },
              { label: "Pediatric", icon: "👧", slug: "pediatric-dentistry" },
              { label: "Emergency", icon: "🚨", slug: "emergency-dentistry" },
            ].map((svc, i) => (
              <FadeIn key={svc.slug} delay={0.05 * i}>
                <Link href={`/services/${svc.slug}`}>
                  <div className="group flex flex-col items-center p-6 bg-muted hover:bg-primary rounded-2xl transition-all duration-300 cursor-pointer text-center">
                    <span className="text-4xl mb-4">{svc.icon}</span>
                    <span className="font-serif text-lg font-medium text-primary group-hover:text-white transition-colors">{svc.label}</span>
                    <ArrowRight className="w-4 h-4 text-secondary mt-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── New Patient Special ── */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 border-2 border-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-2/3 text-white">
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                  <Gift className="w-4 h-4" /> Limited Time Offer
                </div>
                <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  New Patient<br />
                  <span className="italic font-normal">Special</span>
                </h2>
                <p className="text-white/90 text-2xl font-light mb-6">
                  Comprehensive Exam + Full X-Rays + Professional Cleaning
                </p>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-white/60 text-2xl line-through">$450</span>
                  <span className="text-white text-6xl font-bold">$149</span>
                </div>
                <ul className="space-y-2 mb-8">
                  {["Complete oral exam & health evaluation", "Digital X-rays (full set)", "Professional teeth cleaning", "Personalized treatment plan", "No hidden fees, ever"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-white/70 text-sm">* For new patients only. Cannot be combined with insurance. Limited availability.</p>
              </FadeIn>
            </div>

            <div className="w-full lg:w-1/3">
              <FadeIn direction="right" delay={0.2}>
                <div className="bg-white rounded-3xl p-8 text-center shadow-2xl">
                  <p className="text-primary font-medium tracking-widest uppercase text-xs mb-3">Claim Your Spot</p>
                  <h3 className="font-serif text-3xl text-primary mb-2">Only $149</h3>
                  <p className="text-muted-foreground text-sm mb-6">Reserve your new patient appointment today</p>
                  <Button asChild className="w-full bg-secondary text-white hover:bg-secondary/90 py-6 text-lg mb-4">
                    <a href="#contact">Book Now</a>
                  </Button>
                  <a href="tel:[PHONE]" className="flex items-center justify-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-medium">
                    <Phone className="w-4 h-4" />
                    Or call [PHONE]
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn>
              <h2 className="text-secondary font-medium tracking-widest uppercase text-xs mb-3">Patient Stories</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-primary">What Our Patients Say</h3>
              <div className="flex justify-center items-center gap-1 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                ))}
                <span className="ml-2 text-muted-foreground font-medium">5.0 · 200+ reviews</span>
              </div>
            </FadeIn>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={0.08 * i}>
                <div className="bg-muted rounded-2xl p-7 h-full flex flex-col border border-border/40 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <blockquote className="font-serif text-xl text-primary italic mb-6 leading-relaxed flex-1">
                    "{t.quote}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-primary">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Financing ── */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-14">
            <FadeIn>
              <h2 className="font-medium tracking-widest uppercase text-xs text-secondary mb-3">Flexible Payment</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-white mb-4">Financing Options</h3>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Your health shouldn't have to wait for your wallet. We offer a variety of payment solutions to make quality dental care accessible.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            {financingOptions.map((f, i) => (
              <FadeIn key={f.name} delay={0.1 * i}>
                <div className="bg-white/10 rounded-2xl p-8 hover:bg-white/15 transition-colors duration-300 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-5">
                    {f.icon}
                  </div>
                  <h4 className="font-serif text-2xl text-white mb-3">{f.name}</h4>
                  <p className="text-white/75 leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="bg-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="flex-1">
                <h4 className="font-serif text-2xl text-white mb-2">We Also Accept</h4>
                <p className="text-white/70">All major credit cards, HSA/FSA accounts, and most PPO dental insurance plans. We'll file your insurance and handle the paperwork.</p>
              </div>
              <Button asChild className="bg-secondary text-white hover:bg-secondary/90 px-8 py-6 text-lg shrink-0 whitespace-nowrap">
                <a href="#contact">Get a Free Cost Estimate</a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Membership Plan + Contact Form ── */}
      <section className="py-24 bg-muted" id="contact">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn>
              <h2 className="text-secondary font-medium tracking-widest uppercase text-xs mb-3">Save More, Smile More</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-primary">Membership Plan & Contact</h3>
            </FadeIn>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Membership Plan */}
            <div className="w-full lg:w-1/2">
              <FadeIn direction="left">
                <div className="mb-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    No dental insurance? No problem. Our in-house membership plan gives you comprehensive preventive care at a simple annual fee — with exclusive discounts on everything else.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {membershipTiers.map((tier) => (
                    <div
                      key={tier.name}
                      className={`rounded-2xl p-7 relative ${tier.badge ? "bg-primary text-white" : "bg-white border border-border"}`}
                    >
                      {tier.badge && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-4 py-1 rounded-full">
                          {tier.badge}
                        </span>
                      )}
                      <h4 className={`font-serif text-2xl font-semibold mb-1 ${tier.badge ? "text-white" : "text-primary"}`}>
                        {tier.name}
                      </h4>
                      <div className="flex items-baseline gap-1 mb-5">
                        <span className={`text-4xl font-bold ${tier.badge ? "text-secondary" : "text-primary"}`}>{tier.price}</span>
                        <span className={`text-sm ${tier.badge ? "text-white/60" : "text-muted-foreground"}`}>{tier.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {tier.features.map((f) => (
                          <li key={f} className={`flex items-start gap-2 text-sm ${tier.badge ? "text-white/85" : "text-muted-foreground"}`}>
                            <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${tier.badge ? "text-secondary" : "text-secondary"}`} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className={`w-full mt-6 ${tier.badge ? "bg-secondary text-white hover:bg-secondary/90" : "bg-primary text-white hover:bg-primary/90"}`}
                      >
                        <a href="#contact">Get Started</a>
                      </Button>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <FadeIn direction="right" delay={0.15}>
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-border/40">
                  {sent ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <CheckCircle className="w-14 h-14 text-secondary mb-5" />
                      <h3 className="font-serif text-3xl text-primary mb-3">Message Sent!</h3>
                      <p className="text-muted-foreground text-lg max-w-sm">
                        We'll be in touch within one business day.
                      </p>
                      <Button
                        className="mt-6 bg-primary text-white hover:bg-primary/90"
                        onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                      >
                        Send Another
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-serif text-3xl text-primary mb-2">Request an Appointment</h3>
                      <p className="text-muted-foreground mb-7">Fill out the form below and we'll follow up to confirm your visit.</p>
                      <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-primary mb-1 block">Full Name *</label>
                            <Input
                              required
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="Jane Doe"
                              className="h-11 bg-muted/50"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-primary mb-1 block">Phone</label>
                            <Input
                              type="tel"
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder="(555) 000-0000"
                              className="h-11 bg-muted/50"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-primary mb-1 block">Email *</label>
                          <Input
                            required
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="jane@email.com"
                            className="h-11 bg-muted/50"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-primary mb-1 block">How can we help?</label>
                          <Textarea
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="New patient appointment, specific service, question…"
                            className="resize-none min-h-[100px] bg-muted/50"
                          />
                        </div>
                        <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 h-12 text-base">
                          Send Request
                        </Button>
                        <p className="text-center text-sm text-muted-foreground">
                          Prefer to call? <a href="tel:[PHONE]" className="text-secondary font-medium hover:underline">[PHONE]</a>
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── Before & After Gallery ── */}
      <BeforeAfterGallery />

    </div>
  );
}
