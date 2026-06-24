import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpandedSection(null);
  }, [location]);

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection(prev => prev === section ? null : section);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-white py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo — replace /logo.svg in the public/ folder with your actual logo file */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt="Practice logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">

              {/* Our Story dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium hover:text-secondary transition-colors bg-transparent">
                  Our Story
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[280px] p-4 bg-white flex flex-col gap-2">
                    <Link href="/our-story" className="block p-2 hover:bg-muted rounded-md transition-colors">
                      <div className="font-serif text-lg font-medium text-primary">Meet the Doctor</div>
                      <div className="text-xs text-muted-foreground mt-1">Our doctor's background and philosophy</div>
                    </Link>
                    <Link href="/our-story#team" className="block p-2 hover:bg-muted rounded-md transition-colors">
                      <div className="font-serif text-lg font-medium text-primary">Meet the Team</div>
                      <div className="text-xs text-muted-foreground mt-1">The caring professionals behind your care</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Our Services dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium hover:text-secondary transition-colors bg-transparent">
                  Our Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 w-[720px] p-4 gap-2 bg-white">
                    <div className="flex flex-col gap-1">
                      <Link href="/services/general-dentistry" className="block p-2 hover:bg-muted rounded-md transition-colors">
                        <div className="font-serif text-base font-medium text-primary">General Dentistry</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Exams, cleanings, preventative care</div>
                      </Link>
                      <Link href="/services/preventive-dentistry" className="block p-2 hover:bg-muted rounded-md transition-colors">
                        <div className="font-serif text-base font-medium text-primary">Preventive Dentistry</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Sealants, fluoride, early intervention</div>
                      </Link>
                      <Link href="/services/endodontics-treatment" className="block p-2 hover:bg-muted rounded-md transition-colors">
                        <div className="font-serif text-base font-medium text-primary">Endodontics Treatment</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Root canals and pulp therapy</div>
                      </Link>
                      <Link href="/services/emergency-dentistry" className="block p-2 hover:bg-muted rounded-md transition-colors">
                        <div className="font-serif text-base font-medium text-primary">Emergency Dentistry</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Urgent care when you need it most</div>
                      </Link>
                    </div>
                    <div className="flex flex-col gap-1">
                      <Link href="/services/cosmetic-dentistry" className="block p-2 hover:bg-muted rounded-md transition-colors">
                        <div className="font-serif text-base font-medium text-primary">Cosmetic Dentistry</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Veneers, whitening, smile design</div>
                      </Link>
                      <Link href="/services/clear-aligners" className="block p-2 hover:bg-muted rounded-md transition-colors">
                        <div className="font-serif text-base font-medium text-primary">Clear Aligners</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Discreet teeth straightening</div>
                      </Link>
                      <Link href="/services/crowns-and-bridges" className="block p-2 hover:bg-muted rounded-md transition-colors">
                        <div className="font-serif text-base font-medium text-primary">Crowns and Bridges</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Durable porcelain restorations</div>
                      </Link>
                      <Link href="/services/dentures" className="block p-2 hover:bg-muted rounded-md transition-colors">
                        <div className="font-serif text-base font-medium text-primary">Dentures</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Full and partial denture solutions</div>
                      </Link>
                    </div>
                    <div className="flex flex-col gap-1">
                      <Link href="/services/restorative-dentistry" className="block p-2 hover:bg-muted rounded-md transition-colors">
                        <div className="font-serif text-base font-medium text-primary">Restorative Dentistry</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Full-mouth reconstruction</div>
                      </Link>
                      <Link href="/services/implants" className="block p-2 hover:bg-muted rounded-md transition-colors">
                        <div className="font-serif text-base font-medium text-primary">Implants</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Permanent tooth replacement</div>
                      </Link>
                      <Link href="/services/oral-surgery" className="block p-2 hover:bg-muted rounded-md transition-colors">
                        <div className="font-serif text-base font-medium text-primary">Oral Surgery</div>
                        <div className="text-xs text-muted-foreground mt-0.5">Extractions and bone grafting</div>
                      </Link>
                      <Link href="/services/technology" className="block p-2 hover:bg-muted rounded-md transition-colors">
                        <div className="font-serif text-base font-medium text-primary">Technology</div>
                        <div className="text-xs text-muted-foreground mt-0.5">3D imaging, lasers, and more</div>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-muted p-3">
                    <Link href="/services" className="text-sm font-medium text-secondary hover:underline flex items-center justify-center">
                      View All Services &rarr;
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* For Patients dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium hover:text-secondary transition-colors bg-transparent">
                  For Patients
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[280px] p-4 bg-white flex flex-col gap-2">
                    <Link href="/for-patients#new-patient" className="block p-2 hover:bg-muted rounded-md transition-colors">
                      <div className="font-serif text-lg font-medium text-primary">New Patient Info</div>
                      <div className="text-xs text-muted-foreground mt-1">What to expect on your first visit</div>
                    </Link>
                    <Link href="/for-patients#forms" className="block p-2 hover:bg-muted rounded-md transition-colors">
                      <div className="font-serif text-lg font-medium text-primary">Patient Forms</div>
                      <div className="text-xs text-muted-foreground mt-1">Download paperwork before your visit</div>
                    </Link>
                    <Link href="/for-patients#insurance" className="block p-2 hover:bg-muted rounded-md transition-colors">
                      <div className="font-serif text-lg font-medium text-primary">Insurance Accepted</div>
                      <div className="text-xs text-muted-foreground mt-1">View our accepted plans</div>
                    </Link>
                    <Link href="/for-patients#faq" className="block p-2 hover:bg-muted rounded-md transition-colors">
                      <div className="font-serif text-lg font-medium text-primary">FAQ</div>
                      <div className="text-xs text-muted-foreground mt-1">Common patient questions answered</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/financials" className="text-sm font-medium hover:text-secondary transition-colors px-3 py-2">
                  Financials
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" className="text-sm font-medium hover:text-secondary transition-colors px-3 py-2">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA & Phone Desktop */}
        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <a href="tel:[PHONE]" className="flex items-center gap-2 text-primary hover:text-secondary transition-colors">
            <Phone size={18} />
            <span className="font-medium">[PHONE]</span>
          </a>
          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-medium px-6">
            <a href="#reserve">Reserve Appointment</a>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-muted py-4 px-4 flex flex-col">
          {/* Our Story */}
          <button
            className="flex items-center justify-between text-lg font-medium text-primary py-3 border-b border-muted"
            onClick={() => toggleMobileSection("story")}
          >
            Our Story <ChevronDown size={18} className={`transition-transform ${mobileExpandedSection === "story" ? "rotate-180" : ""}`} />
          </button>
          {mobileExpandedSection === "story" && (
            <div className="pl-4 py-2 flex flex-col gap-2 border-b border-muted">
              <Link href="/our-story" className="text-base text-muted-foreground py-1">Meet the Doctor</Link>
              <Link href="/our-story#team" className="text-base text-muted-foreground py-1">Meet the Team</Link>
            </div>
          )}

          {/* Our Services */}
          <button
            className="flex items-center justify-between text-lg font-medium text-primary py-3 border-b border-muted"
            onClick={() => toggleMobileSection("services")}
          >
            Our Services <ChevronDown size={18} className={`transition-transform ${mobileExpandedSection === "services" ? "rotate-180" : ""}`} />
          </button>
          {mobileExpandedSection === "services" && (
            <div className="pl-4 py-2 flex flex-col gap-2 border-b border-muted">
              <Link href="/services/general-dentistry" className="text-base text-muted-foreground py-1">General Dentistry</Link>
              <Link href="/services/preventive-dentistry" className="text-base text-muted-foreground py-1">Preventive Dentistry</Link>
              <Link href="/services/endodontics-treatment" className="text-base text-muted-foreground py-1">Endodontics Treatment</Link>
              <Link href="/services/cosmetic-dentistry" className="text-base text-muted-foreground py-1">Cosmetic Dentistry</Link>
              <Link href="/services/clear-aligners" className="text-base text-muted-foreground py-1">Clear Aligners</Link>
              <Link href="/services/crowns-and-bridges" className="text-base text-muted-foreground py-1">Crowns and Bridges</Link>
              <Link href="/services/dentures" className="text-base text-muted-foreground py-1">Dentures</Link>
              <Link href="/services/restorative-dentistry" className="text-base text-muted-foreground py-1">Restorative Dentistry</Link>
              <Link href="/services/implants" className="text-base text-muted-foreground py-1">Implants</Link>
              <Link href="/services/oral-surgery" className="text-base text-muted-foreground py-1">Oral Surgery</Link>
              <Link href="/services/emergency-dentistry" className="text-base text-muted-foreground py-1">Emergency Dentistry</Link>
              <Link href="/services/technology" className="text-base text-muted-foreground py-1">Technology</Link>
            </div>
          )}

          {/* For Patients */}
          <button
            className="flex items-center justify-between text-lg font-medium text-primary py-3 border-b border-muted"
            onClick={() => toggleMobileSection("patients")}
          >
            For Patients <ChevronDown size={18} className={`transition-transform ${mobileExpandedSection === "patients" ? "rotate-180" : ""}`} />
          </button>
          {mobileExpandedSection === "patients" && (
            <div className="pl-4 py-2 flex flex-col gap-2 border-b border-muted">
              <Link href="/for-patients#new-patient" className="text-base text-muted-foreground py-1">New Patient Info</Link>
              <Link href="/for-patients#forms" className="text-base text-muted-foreground py-1">Patient Forms</Link>
              <Link href="/for-patients#insurance" className="text-base text-muted-foreground py-1">Insurance Accepted</Link>
              <Link href="/for-patients#faq" className="text-base text-muted-foreground py-1">FAQ</Link>
            </div>
          )}

          <Link href="/financials" className="text-lg font-medium text-primary py-3 border-b border-muted">Financials</Link>
          <Link href="/contact" className="text-lg font-medium text-primary py-3 border-b border-muted">Contact</Link>

          <div className="pt-4 flex flex-col gap-4">
            <a href="tel:[PHONE]" className="flex items-center gap-2 text-primary justify-center">
              <Phone size={18} />
              <span className="font-medium text-lg">[PHONE]</span>
            </a>
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full py-6 text-lg">
              <a href="#reserve">Reserve Appointment</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
