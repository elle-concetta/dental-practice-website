import { Link } from "wouter";
import { Facebook, Instagram, MapPin, Phone, Clock, Youtube, Star } from "lucide-react";

const googleReviews = [
  { name: "Sarah M.", rating: 5, text: "Absolutely love this practice! The staff is so kind and the results are incredible." },
  { name: "James T.", rating: 5, text: "Best dental experience of my life. I actually look forward to my appointments now." },
  { name: "Emily R.", rating: 5, text: "My smile transformation has completely changed my confidence. Thank you!" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">

      {/* ── Widgets Row: YouTube · Google Reviews · Google Maps ── */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* YouTube Widget */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <Youtube className="w-6 h-6 text-red-400" />
                <h3 className="font-serif text-xl text-white">Watch &amp; Learn</h3>
              </div>
              <div className="rounded-xl overflow-hidden aspect-video bg-black/30 relative">
                <iframe
                  src="https://www.youtube.com/embed/videoseries?list=PLbpi6ZahtOH6Ar_3GPy3workpCMSlS83"
                  title="[YOUR PRACTICE NAME] — Dental Tips & Patient Stories"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 pointer-events-none" id="yt-overlay">
                  <div className="text-center text-white/80 p-4">
                    <Youtube className="w-12 h-12 mx-auto mb-2 text-red-400" />
                    <p className="text-sm">Replace the YouTube playlist ID above<br />with your practice's channel URL</p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.youtube.com/@yourpractice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:underline mt-3 inline-block"
              >
                Visit our YouTube Channel →
              </a>
            </div>

            {/* Google Reviews Widget */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <svg viewBox="0 0 48 48" className="w-6 h-6 shrink-0"><path fill="#EA4335" d="M24 9.5c3.5 0 6.4 1.2 8.8 3.2l6.6-6.6C35.3 2.6 30 .5 24 .5 14.8.5 6.9 6 3 13.8l7.7 6C12.6 13 17.9 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8C43.3 37.3 46.5 31.4 46.5 24.5z"/><path fill="#FBBC05" d="M10.7 28.2A14.9 14.9 0 0 1 9.5 24c0-1.5.3-2.9.7-4.2l-7.7-6A24 24 0 0 0 0 24c0 3.9.9 7.5 2.5 10.8l8.2-6.6z"/><path fill="#34A853" d="M24 47.5c6 0 11.1-2 14.8-5.5l-7.5-5.8c-2 1.3-4.5 2.1-7.3 2.1-6.1 0-11.3-4.1-13.2-9.7l-8.1 6.3C6.8 41.9 14.8 47.5 24 47.5z"/></svg>
                <h3 className="font-serif text-xl text-white">Google Reviews</h3>
              </div>

              {/* Rating summary */}
              <div className="flex items-center gap-4 mb-5 bg-white/10 rounded-xl p-4">
                <div className="text-center">
                  <p className="text-5xl font-bold text-white">5.0</p>
                  <div className="flex gap-0.5 justify-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-white/60 mt-1">200+ Reviews</p>
                </div>
                <div className="flex-1 space-y-1">
                  {[5,4,3,2,1].map((n) => (
                    <div key={n} className="flex items-center gap-2">
                      <span className="text-xs text-white/60 w-2">{n}</span>
                      <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-400 rounded-full" style={{ width: n === 5 ? "94%" : n === 4 ? "5%" : "1%" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Review cards */}
              <div className="space-y-3">
                {googleReviews.map((r) => (
                  <div key={r.name} className="bg-white/10 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-full bg-secondary/60 flex items-center justify-center text-white text-xs font-bold">
                        {r.name[0]}
                      </div>
                      <span className="text-sm font-medium text-white">{r.name}</span>
                      <div className="flex gap-0.5 ml-auto">
                        {Array.from({ length: r.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">"{r.text}"</p>
                  </div>
                ))}
              </div>

              <a
                href="https://maps.google.com/?cid=YOUR_PLACE_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:underline mt-3 inline-block"
              >
                See all reviews on Google →
              </a>
            </div>

            {/* Google Maps Widget */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <MapPin className="w-6 h-6 text-secondary" />
                <h3 className="font-serif text-xl text-white">Find Us</h3>
              </div>
              <div className="rounded-xl overflow-hidden h-64 relative mb-3">
                <iframe
                  title="[YOUR PRACTICE NAME] Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.1!2d-115.1728!3d36.1699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDEwJzExLjYiTiAxMTXCsDEwJzIyLjEiVw!5e0!3m2!1sen!2sus!4v1"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="space-y-2 text-sm text-white/80">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <span>[ADDRESS], [CITY, STATE]</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-secondary shrink-0" />
                  <a href="tel:[PHONE]" className="hover:text-secondary transition-colors">[PHONE]</a>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <div>Mon–Thu 8am–5pm · Fri 8am–2pm<br />Sat–Sun Closed</div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=[ADDRESS]+[CITY]+[STATE]"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:underline mt-3 inline-block"
              >
                Get directions →
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="pt-14 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="flex flex-col gap-6">
              <Link href="/" className="font-serif text-3xl font-semibold text-white">
                [YOUR PRACTICE NAME]
              </Link>
              <p className="text-primary-foreground/80 leading-relaxed">
                Experience modern, compassionate dental care in a setting designed for your comfort and peace of mind.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors text-white" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors text-white" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://www.youtube.com/@yourpractice" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-500 transition-colors text-white" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-xl font-medium text-white mb-2">Practice</h3>
              <Link href="/our-story" className="text-primary-foreground/80 hover:text-secondary transition-colors">Our Story</Link>
              <Link href="/services" className="text-primary-foreground/80 hover:text-secondary transition-colors">Our Services</Link>
              <Link href="/for-patients" className="text-primary-foreground/80 hover:text-secondary transition-colors">For Patients</Link>
              <Link href="/financials" className="text-primary-foreground/80 hover:text-secondary transition-colors">Financials</Link>
              <Link href="/contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact</Link>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-xl font-medium text-white mb-2">Services</h3>
              <Link href="/services/general-dentistry" className="text-primary-foreground/80 hover:text-secondary transition-colors">General Dentistry</Link>
              <Link href="/services/cosmetic-dentistry" className="text-primary-foreground/80 hover:text-secondary transition-colors">Cosmetic Dentistry</Link>
              <Link href="/services/restorative-dentistry" className="text-primary-foreground/80 hover:text-secondary transition-colors">Restorative Dentistry</Link>
              <Link href="/services/orthodontics" className="text-primary-foreground/80 hover:text-secondary transition-colors">Orthodontics</Link>
              <Link href="/services/pediatric-dentistry" className="text-primary-foreground/80 hover:text-secondary transition-colors">Pediatric Dentistry</Link>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif text-xl font-medium text-white mb-2">Hours</h3>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <Clock size={18} className="shrink-0 mt-1 text-secondary" />
                <div className="flex flex-col gap-1 text-sm">
                  <span>Mon – Thu: 8:00 am – 5:00 pm</span>
                  <span>Friday: 8:00 am – 2:00 pm</span>
                  <span>Sat – Sun: Closed</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone size={18} className="shrink-0 text-secondary" />
                <a href="tel:[PHONE]" className="hover:text-secondary transition-colors">[PHONE]</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {new Date().getFullYear()} [YOUR PRACTICE NAME]. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
