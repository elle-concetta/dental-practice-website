import { useParams, Link } from "wouter";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import NotFound from "./not-found";
import { Seo } from "@/components/Seo";

interface ServiceData {
  title: string;
  subtitle: string;
  img: string;
  desc: string;
  bullets: string[];
  /**
   * ── SEO: PER-SERVICE PAGE ──────────────────────────────────────────────────
   * seoTitle   → browser tab + Google headline (under 60 chars)
   * seoDesc    → Google search snippet (120–155 chars, include city + service)
   * ──────────────────────────────────────────────────────────────────────────
   */
  seoTitle: string;
  seoDesc: string;
}

const servicesData: Record<string, ServiceData> = {
  "general-dentistry": {
    title: "General Dentistry",
    subtitle: "The foundation of a healthy smile.",
    img: "hero-office.png",
    desc: "Our general dentistry services focus on disease prevention and overall wellness. We believe that maintaining optimal oral health is directly tied to your systemic health.",
    bullets: [
      "Comprehensive Oral Exams & Digital X-Rays",
      "Professional Cleanings & Prophylaxis",
      "Oral Cancer Screenings",
      "Fluoride Treatments & Sealants",
      "Periodontal (Gum) Therapy"
    ],
    seoTitle: "General Dentistry | [Practice Name] — [City, State]",
    seoDesc: "Comprehensive dental exams, cleanings, and preventative care at [Practice Name] in [City, State]. Family-friendly general dentistry — book your visit today."
  },
  "preventive-dentistry": {
    title: "Preventive Dentistry",
    subtitle: "Stop problems before they start.",
    img: "hero-office.png",
    desc: "Prevention is the most powerful tool in dentistry. Our proactive approach uses the latest techniques to protect your teeth and gums — keeping you out of the dental chair and enjoying life.",
    bullets: [
      "Dental Sealants for Children & Adults",
      "Professional Fluoride Treatments",
      "Custom Nightguards & Mouthguards",
      "Early Cavity Detection (DIAGNOdent)",
      "Periodontal Disease Prevention"
    ],
    seoTitle: "Preventive Dentistry | [Practice Name] — [City, State]",
    seoDesc: "Protect your smile with preventive dental care at [Practice Name] in [City, State]. Sealants, fluoride, nightguards, and early cavity detection. Book today."
  },
  "endodontics-treatment": {
    title: "Endodontics Treatment",
    subtitle: "Save your natural tooth. Eliminate the pain.",
    img: "doctor-portrait.png",
    desc: "Root canal therapy has an undeserved reputation. With modern technology and gentle technique, our endodontic treatments are comfortable, efficient, and designed to save your natural tooth for life.",
    bullets: [
      "Root Canal Therapy (single & multi-visit)",
      "Pulp Capping & Pulpotomy",
      "Endodontic Retreatment",
      "Apicoectomy (Root-End Surgery)",
      "Cracked Tooth Diagnosis & Treatment"
    ],
    seoTitle: "Endodontics & Root Canal Treatment | [Practice Name] — [City, State]",
    seoDesc: "Gentle, pain-free root canal treatment at [Practice Name] in [City, State]. Save your natural tooth with expert endodontic care. Same-day appointments available."
  },
  "cosmetic-dentistry": {
    title: "Cosmetic Dentistry",
    subtitle: "Design the smile of your dreams.",
    img: "service-cosmetic.png",
    desc: "Your smile is your signature. Our cosmetic services are tailored to enhance the natural beauty of your teeth, boosting your confidence and leaving a lasting impression.",
    bullets: [
      "Porcelain & Composite Veneers",
      "Professional Teeth Whitening",
      "Cosmetic Bonding",
      "Gum Contouring",
      "Complete Smile Makeovers"
    ],
    seoTitle: "Cosmetic Dentistry | [Practice Name] — [City, State]",
    seoDesc: "Transform your smile with veneers, whitening, and smile makeovers at [Practice Name] in [City, State]. Expert cosmetic dentist — book your consultation today."
  },
  "clear-aligners": {
    title: "Clear Aligners",
    subtitle: "A straighter smile, without the wires.",
    img: "service-cosmetic.png",
    desc: "Achieve beautifully aligned teeth with custom clear aligner trays that fit your lifestyle. Our aligner therapy is discreet, comfortable, and monitored by our expert team at every step.",
    bullets: [
      "Invisalign® Certified Provider",
      "Custom Digital Treatment Planning",
      "Accelerated Aligner Options",
      "Retainers & Post-Treatment Care",
      "Teen & Adult Aligner Programs"
    ],
    seoTitle: "Clear Aligners & Invisalign | [Practice Name] — [City, State]",
    seoDesc: "Straighten your teeth discreetly with clear aligners at [Practice Name] in [City, State]. Invisalign-certified provider. Get your free smile assessment today."
  },
  "crowns-and-bridges": {
    title: "Crowns and Bridges",
    subtitle: "Restore strength, function, and beauty.",
    img: "doctor-portrait.png",
    desc: "Our precision-crafted porcelain crowns and bridges are designed to blend seamlessly with your natural teeth — protecting damaged teeth and filling gaps with lasting, beautiful results.",
    bullets: [
      "All-Ceramic & Zirconia Crowns",
      "3-Unit and Multi-Unit Bridges",
      "Same-Day CEREC Crowns (select cases)",
      "Implant-Supported Crowns",
      "Crown Lengthening Procedures"
    ],
    seoTitle: "Dental Crowns & Bridges | [Practice Name] — [City, State]",
    seoDesc: "Natural-looking porcelain crowns and bridges at [Practice Name] in [City, State]. Restore damaged or missing teeth with durable, precision-crafted restorations."
  },
  "dentures": {
    title: "Dentures",
    subtitle: "Reclaim your smile and your confidence.",
    img: "office-exterior.png",
    desc: "Whether you need full or partial dentures, we create custom appliances designed for comfort, stability, and a natural appearance — so you can eat, speak, and smile with confidence.",
    bullets: [
      "Complete (Full) Dentures",
      "Partial Dentures",
      "Implant-Supported Overdentures",
      "Same-Day & Immediate Dentures",
      "Denture Repairs & Relines"
    ],
    seoTitle: "Dentures | [Practice Name] — [City, State]",
    seoDesc: "Custom full and partial dentures at [Practice Name] in [City, State]. Comfortable, natural-looking dentures including implant-supported options. Book a consult."
  },
  "restorative-dentistry": {
    title: "Restorative Dentistry",
    subtitle: "Rebuild strength, function, and aesthetics.",
    img: "doctor-portrait.png",
    desc: "When dental issues arise, we utilize the finest materials and advanced techniques to restore your teeth to their optimal state, seamlessly blending with your natural smile.",
    bullets: [
      "Full-Mouth Reconstruction",
      "Tooth-Colored Fillings (Composite)",
      "Inlays and Onlays",
      "Smile Rehabilitation Planning",
      "Post & Core Build-Ups"
    ],
    seoTitle: "Restorative Dentistry | [Practice Name] — [City, State]",
    seoDesc: "Full-mouth reconstruction and restorative dental care at [Practice Name] in [City, State]. Rebuild your smile with tooth-colored fillings, inlays, onlays, and more."
  },
  "implants": {
    title: "Implants",
    subtitle: "The closest thing to a natural tooth.",
    img: "hero-office.png",
    desc: "Dental implants are the gold standard for replacing missing teeth. Our titanium implants fuse with your jawbone for a permanent, stable foundation that looks, feels, and functions like your natural tooth.",
    bullets: [
      "Single Tooth Implants",
      "Implant-Supported Bridges",
      "All-on-4® & Full-Arch Implants",
      "Bone Grafting & Socket Preservation",
      "3D Cone Beam CT Guided Placement"
    ],
    seoTitle: "Dental Implants | [Practice Name] — [City, State]",
    seoDesc: "Permanent tooth replacement with dental implants at [Practice Name] in [City, State]. Single implants, All-on-4, and full-arch solutions. Free consultation available."
  },
  "oral-surgery": {
    title: "Oral Surgery",
    subtitle: "Expert surgical care in a comfortable setting.",
    img: "office-exterior.png",
    desc: "Our oral surgery services are performed with precision and compassion. From routine extractions to complex bone grafting, we ensure your comfort and safety at every step.",
    bullets: [
      "Tooth Extractions (simple & surgical)",
      "Wisdom Teeth Removal",
      "Bone Grafting & Ridge Augmentation",
      "Sinus Lift Procedures",
      "Oral Pathology & Biopsy"
    ],
    seoTitle: "Oral Surgery & Tooth Extractions | [Practice Name] — [City, State]",
    seoDesc: "Gentle oral surgery, tooth extractions, and wisdom teeth removal at [Practice Name] in [City, State]. Expert surgical care with same-day appointments available."
  },
  "emergency-dentistry": {
    title: "Emergency Dentistry",
    subtitle: "Prompt care when you need it most.",
    img: "office-exterior.png",
    desc: "Dental emergencies can be stressful. We are here to provide immediate relief and expert care to address pain, trauma, and urgent dental issues.",
    bullets: [
      "Toothache Relief",
      "Chipped, Cracked, or Broken Teeth",
      "Knocked-Out (Avulsed) Teeth",
      "Lost Fillings or Crowns",
      "Abscesses and Infections"
    ],
    seoTitle: "Emergency Dentist | [Practice Name] — [City, State]",
    seoDesc: "Same-day emergency dental care at [Practice Name] in [City, State]. Toothaches, broken teeth, lost crowns — call us now for immediate relief."
  },
  "technology": {
    title: "Technology",
    subtitle: "Where advanced science meets exceptional care.",
    img: "team-photo.png",
    desc: "We invest in the latest dental technology so every visit is faster, more comfortable, and more precise. From 3D imaging to laser dentistry, our tools allow us to see more, do more, and treat with greater accuracy.",
    bullets: [
      "3D Cone Beam CT (CBCT) Imaging",
      "Digital Intraoral Scanners (no goop)",
      "Diode Laser Dentistry",
      "Same-Day CEREC Restorations",
      "Digital Smile Design Software"
    ],
    seoTitle: "Advanced Dental Technology | [Practice Name] — [City, State]",
    seoDesc: "State-of-the-art dental technology at [Practice Name] in [City, State]. 3D imaging, digital impressions, laser dentistry, and same-day crowns for precise, comfortable care."
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return <NotFound />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
      {/*
        ── SEO: SERVICE DETAIL PAGE ───────────────────────────────────────────────
        Each service has its own seoTitle and seoDesc defined in the servicesData
        object above. Find the entry for this service and update those two fields
        with your practice name and city.
      */}
      <Seo title={service.seoTitle} description={service.seoDesc} />

      {/* Hero Banner */}
      <section className="relative py-24 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src={`${import.meta.env.BASE_URL}/${service.img}`} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <FadeIn>
            <Link href="/services" className="inline-flex items-center text-white/70 hover:text-secondary transition-colors mb-6 text-sm font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
            </Link>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold mb-4 text-white">{service.title}</h1>
            <p className="text-xl text-white/80 max-w-2xl font-light">
              {service.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <FadeIn>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src={`${import.meta.env.BASE_URL}/${service.img}`} 
                    alt={service.title} 
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
              </FadeIn>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <FadeIn delay={0.1}>
                <h2 className="font-serif text-3xl text-primary mb-6">Expert {service.title} in [CITY, STATE]</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  {service.desc}
                </p>
                
                <h3 className="font-serif text-2xl text-primary mb-6">What this includes:</h3>
                <ul className="space-y-4 mb-10">
                  {service.bullets.map((bullet: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-6 h-6 text-secondary mr-3 shrink-0" />
                      <span className="text-lg text-muted-foreground">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 self-start">
                  <a href="#reserve">Schedule an Appointment</a>
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
