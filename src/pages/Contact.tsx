import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail, CheckCircle } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  reason?: string;
  message?: string;
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePhone(phone: string) {
  return /^[\d\s\-().+]{7,20}$/.test(phone);
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: FormErrors = {};
    if (!form.firstName.trim()) next.firstName = "First name is required.";
    if (!form.lastName.trim()) next.lastName = "Last name is required.";
    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!validateEmail(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (form.phone.trim() && !validatePhone(form.phone)) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!form.reason) next.reason = "Please select a reason for your inquiry.";
    if (!form.message.trim()) next.message = "Please tell us how we can help.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24">
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
            <h1 className="font-serif text-5xl md:text-6xl font-semibold mb-4 text-white">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
              We look forward to hearing from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Info Column */}
            <div className="w-full lg:w-5/12">
              <FadeIn direction="left">
                <h2 className="font-serif text-4xl text-primary mb-8">Get In Touch</h2>

                <div className="space-y-8 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <MapPin className="text-secondary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-1">Our Location</h4>
                      <p className="text-muted-foreground text-lg">[ADDRESS]<br />[CITY, STATE]</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="text-secondary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-1">Phone</h4>
                      <p className="text-muted-foreground text-lg">
                        <a href="tel:[PHONE]" className="hover:text-secondary transition-colors">[PHONE]</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Mail className="text-secondary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-1">Email</h4>
                      <p className="text-muted-foreground text-lg">
                        <a href="mailto:hello@yourpractice.com" className="hover:text-secondary transition-colors">hello@yourpractice.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Clock className="text-secondary w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-1">Office Hours</h4>
                      <table className="text-muted-foreground text-base">
                        <tbody>
                          <tr><td className="pr-6">Mon – Thu</td><td>8:00 am – 5:00 pm</td></tr>
                          <tr><td className="pr-6">Friday</td><td>8:00 am – 2:00 pm</td></tr>
                          <tr><td className="pr-6">Sat – Sun</td><td>Closed</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden shadow-lg h-64 relative">
                  <img
                    src={`${import.meta.env.BASE_URL}/office-exterior.png`}
                    alt="Office Exterior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Form Column */}
            <div className="w-full lg:w-7/12" id="reserve">
              <FadeIn direction="right" delay={0.2}>
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-border">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <CheckCircle className="w-16 h-16 text-secondary mb-6" />
                      <h3 className="font-serif text-3xl text-primary mb-4">Message Received</h3>
                      <p className="text-muted-foreground text-lg max-w-sm">
                        Thank you for reaching out. A member of our team will contact you within one business day.
                      </p>
                      <Button
                        className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", reason: "", message: "" }); }}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-serif text-3xl text-primary mb-2">Send us a Message</h3>
                      <p className="text-muted-foreground mb-8">Fill out the form below to request an appointment or ask a question. Our team will get back to you shortly.</p>

                      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-1">
                            <label htmlFor="firstName" className="text-sm font-medium text-primary">First Name <span className="text-destructive">*</span></label>
                            <Input
                              id="firstName"
                              value={form.firstName}
                              onChange={e => update("firstName", e.target.value)}
                              placeholder="Jane"
                              className={`h-12 border-border/60 bg-muted/50 focus:bg-white ${errors.firstName ? "border-destructive" : ""}`}
                            />
                            {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                          </div>
                          <div className="space-y-1">
                            <label htmlFor="lastName" className="text-sm font-medium text-primary">Last Name <span className="text-destructive">*</span></label>
                            <Input
                              id="lastName"
                              value={form.lastName}
                              onChange={e => update("lastName", e.target.value)}
                              placeholder="Doe"
                              className={`h-12 border-border/60 bg-muted/50 focus:bg-white ${errors.lastName ? "border-destructive" : ""}`}
                            />
                            {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-1">
                            <label htmlFor="email" className="text-sm font-medium text-primary">Email Address <span className="text-destructive">*</span></label>
                            <Input
                              id="email"
                              type="email"
                              value={form.email}
                              onChange={e => update("email", e.target.value)}
                              placeholder="jane@example.com"
                              className={`h-12 border-border/60 bg-muted/50 focus:bg-white ${errors.email ? "border-destructive" : ""}`}
                            />
                            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                          </div>
                          <div className="space-y-1">
                            <label htmlFor="phone" className="text-sm font-medium text-primary">Phone Number</label>
                            <Input
                              id="phone"
                              type="tel"
                              value={form.phone}
                              onChange={e => update("phone", e.target.value)}
                              placeholder="(555) 000-0000"
                              className={`h-12 border-border/60 bg-muted/50 focus:bg-white ${errors.phone ? "border-destructive" : ""}`}
                            />
                            {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label htmlFor="reason" className="text-sm font-medium text-primary">Reason for Inquiry <span className="text-destructive">*</span></label>
                          <select
                            id="reason"
                            value={form.reason}
                            onChange={e => update("reason", e.target.value)}
                            className={`flex h-12 w-full rounded-md border px-3 py-2 text-sm bg-muted/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${errors.reason ? "border-destructive" : "border-border/60"}`}
                          >
                            <option value="">Select an option...</option>
                            <option value="new-patient">New Patient Appointment</option>
                            <option value="existing-patient">Existing Patient Appointment</option>
                            <option value="consultation">Consultation</option>
                            <option value="emergency">Dental Emergency</option>
                            <option value="billing">Billing / Insurance Question</option>
                            <option value="other">Other</option>
                          </select>
                          {errors.reason && <p className="text-sm text-destructive">{errors.reason}</p>}
                        </div>

                        <div className="space-y-1">
                          <label htmlFor="message" className="text-sm font-medium text-primary">Message <span className="text-destructive">*</span></label>
                          <Textarea
                            id="message"
                            value={form.message}
                            onChange={e => update("message", e.target.value)}
                            placeholder="How can we help you?"
                            className={`min-h-[120px] resize-none border-border/60 bg-muted/50 focus:bg-white ${errors.message ? "border-destructive" : ""}`}
                          />
                          {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                        </div>

                        <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg">
                          Submit Request
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          Fields marked <span className="text-destructive">*</span> are required. We'll respond within one business day.
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

      {/* Map Placeholder */}
      <section className="h-96 w-full bg-muted relative">
        <iframe
          title="Office Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.1!2d-115.1728!3d36.1699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDEwJzExLjYiTiAxMTXCsDEwJzIyLjEiVw!5e0!3m2!1sen!2sus!4v1&markers=36.1699,-115.1728"
          className="w-full h-full border-0 grayscale opacity-80"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg text-center">
            <MapPin className="w-5 h-5 text-secondary mx-auto mb-1" />
            <p className="font-medium text-primary text-sm">[ADDRESS], [CITY, STATE]</p>
            <p className="text-xs text-muted-foreground mt-0.5">Replace map embed with your practice coordinates</p>
          </div>
        </div>
      </section>
    </div>
  );
}
