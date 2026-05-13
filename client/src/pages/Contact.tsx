/*
 * Contact Page – Aston & Earle Transport V2
 * Enhanced form with weight/pallet count, WhatsApp, business hours, social links
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/freight-aerial-KW6H8rxrii75SFAi2Pkb2R.webp";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  clientStatus: string;
  serviceType: string;
  freightType: string;
  collection: string;
  delivery: string;
  weight: string;
  palletCount: string;
  notes: string;
}

const initial: FormData = {
  name: "", company: "", email: "", phone: "",
  clientStatus: "", serviceType: "", freightType: "",
  collection: "", delivery: "", weight: "", palletCount: "", notes: "",
};

const clientOptions = [
  { value: "new", label: "New Client" },
  { value: "existing", label: "Existing Client" },
];

const serviceOptions = [
  { value: "uk-transport", label: "UK Transport" },
  { value: "european-freight", label: "European Freight" },
  { value: "irish-freight", label: "Irish Freight" },
  { value: "refrigerated", label: "Refrigerated Transport" },
  { value: "general-haulage", label: "General Haulage" },
  { value: "time-critical", label: "Time Critical Loads" },
  { value: "brokerage", label: "Brokerage & Logistics" },
  { value: "dedicated", label: "Dedicated Loads" },
  { value: "pallet-part", label: "Pallet & Part Loads" },
  { value: "other", label: "Other / General Enquiry" },
];

const loadOptions = [
  { value: "full-load", label: "Full Truck Load (FTL)" },
  { value: "part-load", label: "Part Load (LTL)" },
  { value: "pallets", label: "Palletised Goods" },
  { value: "temperature", label: "Temperature-Sensitive" },
  { value: "heavy", label: "Heavy / Oversized" },
  { value: "hazardous", label: "Hazardous (ADR)" },
  { value: "fragile", label: "Fragile / High-Value" },
  { value: "container", label: "Container" },
  { value: "other", label: "Other / Not Sure" },
];

function SelectField({ label, required, value, onChange, options, placeholder }: {
  label: string; required?: boolean; value: string; onChange: (v: string) => void;
  options: { value: string; label: string }[]; placeholder: string;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.15em] text-charcoal/50 font-bold mb-2">
        {label} {required && <span className="text-maroon">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full px-4 py-3 bg-white border border-border text-charcoal text-sm focus:border-maroon focus:ring-1 focus:ring-maroon/20 outline-none transition-all duration-200 appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
        }}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

function InputField({ label, required, type = "text", value, onChange, placeholder }: {
  label: string; required?: boolean; type?: string; value: string; onChange: (v: string) => void; placeholder: string;
}) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.15em] text-charcoal/50 font-bold mb-2">
        {label} {required && <span className="text-maroon">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-white border border-border text-charcoal text-sm focus:border-maroon focus:ring-1 focus:ring-maroon/20 outline-none transition-all duration-200"
      />
    </div>
  );
}

function QuoteForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const u = (field: keyof FormData, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.serviceType) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const clientLabel = clientOptions.find(o => o.value === form.clientStatus)?.label || form.clientStatus;
    const serviceLabel = serviceOptions.find(o => o.value === form.serviceType)?.label || form.serviceType;
    const loadLabel = loadOptions.find(o => o.value === form.freightType)?.label || form.freightType;

    const subject = encodeURIComponent(`Quote Request — ${serviceLabel} — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nClient Status: ${clientLabel}\nService Required: ${serviceLabel}\nLoad Type: ${loadLabel}\nWeight: ${form.weight}\nPallet Count: ${form.palletCount}\n\nCollection: ${form.collection}\nDelivery: ${form.delivery}\n\nAdditional Notes:\n${form.notes}`
    );

    window.location.href = `mailto:oliver@astonearle.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    toast.success("Opening your email client...");
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle className="w-14 h-14 text-maroon mx-auto mb-6" />
        <h3 className="text-2xl text-charcoal font-bold mb-3 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
          Thank you for your enquiry.
        </h3>
        <p className="text-charcoal/60 max-w-md mx-auto mb-8">
          Your email client should have opened with your details. If it didn't, email us directly at{" "}
          <a href="mailto:oliver@astonearle.com" className="text-maroon font-semibold underline">oliver@astonearle.com</a>
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initial); }}
          className="text-sm text-maroon font-semibold underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Client Status */}
      <div>
        <label className="block text-[11px] uppercase tracking-[0.15em] text-charcoal/50 font-bold mb-3">
          Are you a new or existing client?
        </label>
        <div className="flex gap-3">
          {clientOptions.map((o) => (
            <button
              key={o.value}
              type="button"
              onClick={() => u("clientStatus", o.value)}
              className={`px-5 py-2.5 text-sm font-semibold border transition-all duration-200 ${
                form.clientStatus === o.value
                  ? "bg-maroon text-white border-maroon"
                  : "bg-white text-charcoal/60 border-border hover:border-maroon/40"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </div>

      {/* Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Full Name" required value={form.name} onChange={(v) => u("name", v)} placeholder="Your full name" />
        <InputField label="Company" value={form.company} onChange={(v) => u("company", v)} placeholder="Your company name" />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Email Address" required type="email" value={form.email} onChange={(v) => u("email", v)} placeholder="your@email.com" />
        <InputField label="Phone Number" type="tel" value={form.phone} onChange={(v) => u("phone", v)} placeholder="+44 ..." />
      </div>

      {/* Service & Load Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <SelectField label="Service Required" required value={form.serviceType} onChange={(v) => u("serviceType", v)} options={serviceOptions} placeholder="Select a service..." />
        <SelectField label="Load Type" value={form.freightType} onChange={(v) => u("freightType", v)} options={loadOptions} placeholder="Select load type..." />
      </div>

      {/* Collection & Delivery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Collection Location" value={form.collection} onChange={(v) => u("collection", v)} placeholder="City, postcode or address" />
        <InputField label="Delivery Location" value={form.delivery} onChange={(v) => u("delivery", v)} placeholder="City, postcode or address" />
      </div>

      {/* Weight & Pallets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <InputField label="Weight (approx)" value={form.weight} onChange={(v) => u("weight", v)} placeholder="e.g. 500kg, 2 tonnes" />
        <InputField label="Pallet Count" value={form.palletCount} onChange={(v) => u("palletCount", v)} placeholder="e.g. 4 pallets" />
      </div>

      {/* Notes */}
      <div>
        <label className="block text-[11px] uppercase tracking-[0.15em] text-charcoal/50 font-bold mb-2">
          Additional Notes
        </label>
        <textarea
          value={form.notes}
          onChange={(e) => u("notes", e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-white border border-border text-charcoal text-sm focus:border-maroon focus:ring-1 focus:ring-maroon/20 outline-none transition-all duration-200 resize-none"
          placeholder="Any other details — timelines, special requirements, etc."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full sm:w-auto flex items-center justify-center gap-3 bg-maroon text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] hover:bg-maroon-light transition-all duration-200 active:scale-[0.97] group"
      >
        <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        Send Enquiry
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative py-28 lg:py-36 overflow-hidden">
          <div className="absolute inset-0">
            <img src={HERO} alt="Freight aerial view" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-charcoal/90" />
          </div>
          <div className="container relative z-10">
            <AnimatedSection>
              <span className="text-maroon-light text-[11px] uppercase tracking-[0.25em] font-bold">Contact Us</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-black tracking-tight mt-3 mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                Let's get your
                <br />
                <span className="text-cream">freight moving.</span>
              </h1>
              <p className="text-white/60 text-lg max-w-xl leading-relaxed">
                Tell us what you need and we'll come back with a straight quote. No obligation, no runaround.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Form */}
              <AnimatedSection className="lg:col-span-2">
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl text-charcoal font-bold tracking-tight mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    Request a Quote
                  </h2>
                  <p className="text-charcoal/55 text-sm">
                    Fill in the details below and we'll get back to you as quickly as possible.
                  </p>
                </div>
                <div className="bg-cream/50 p-8 lg:p-10 border border-border">
                  <QuoteForm />
                </div>
              </AnimatedSection>

              {/* Sidebar */}
              <AnimatedSection delay={200}>
                <div className="space-y-6">
                  {/* Contact Details */}
                  <div className="bg-cream/50 p-7 border border-border">
                    <h3 className="text-charcoal font-bold text-lg mb-6 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                      Contact Details
                    </h3>
                    <div className="space-y-5">
                      <a href="mailto:oliver@astonearle.com" className="flex items-start gap-4 group">
                        <div className="w-10 h-10 bg-maroon/5 flex items-center justify-center shrink-0 group-hover:bg-maroon/10 transition-colors">
                          <Mail className="w-4 h-4 text-maroon" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.15em] text-charcoal/40 font-bold mb-0.5">Email</p>
                          <p className="text-charcoal font-semibold text-sm">oliver@astonearle.com</p>
                        </div>
                      </a>
                      <a href="tel:+447473252561" className="flex items-start gap-4 group">
                        <div className="w-10 h-10 bg-maroon/5 flex items-center justify-center shrink-0 group-hover:bg-maroon/10 transition-colors">
                          <Phone className="w-4 h-4 text-maroon" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.15em] text-charcoal/40 font-bold mb-0.5">Phone</p>
                          <p className="text-charcoal font-semibold text-sm">+44 7473 252561</p>
                        </div>
                      </a>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-maroon/5 flex items-center justify-center shrink-0">
                          <MapPin className="w-4 h-4 text-maroon" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.15em] text-charcoal/40 font-bold mb-0.5">Location</p>
                          <p className="text-charcoal font-semibold text-sm">Gloucestershire, UK</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-maroon/5 flex items-center justify-center shrink-0">
                          <Clock className="w-4 h-4 text-maroon" />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.15em] text-charcoal/40 font-bold mb-0.5">Business Hours</p>
                          <p className="text-charcoal font-semibold text-sm">Mon – Fri: 06:00 – 20:00</p>
                          <p className="text-charcoal/60 text-sm">Sat: 07:00 – 14:00</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/447473252561"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#25D366] text-white p-4 font-bold text-sm uppercase tracking-[0.1em] hover:bg-[#20BD5A] transition-all duration-200 active:scale-[0.97]"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.508-.182-.006-.372-.007-.57-.007-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Message on WhatsApp
                  </a>

                  {/* Quick response */}
                  <div className="bg-maroon p-6 text-center">
                    <p className="text-cream text-sm font-bold uppercase tracking-[0.15em] mb-2">Quick Response</p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      We aim to respond to all enquiries within 2 hours during business hours.
                    </p>
                  </div>

                  {/* Social */}
                  <div className="bg-cream/50 p-7 border border-border">
                    <h3 className="text-charcoal font-bold text-sm mb-4 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                      Follow Us
                    </h3>
                    <div className="flex gap-3">
                      <a href="https://www.instagram.com/astonearletransport" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-charcoal/5 hover:bg-maroon/10 flex items-center justify-center text-charcoal/50 hover:text-maroon transition-all duration-200">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      </a>
                      <a href="https://www.facebook.com/share/1GjU8xxZut/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-charcoal/5 hover:bg-maroon/10 flex items-center justify-center text-charcoal/50 hover:text-maroon transition-all duration-200">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-cream">
          <div className="container py-16">
            <AnimatedSection>
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl text-charcoal font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  Based in Gloucestershire, UK
                </h2>
                <p className="text-charcoal/55 text-sm mt-2">Serving the UK, Ireland and Europe</p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="w-full h-[400px] bg-charcoal/5 border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155959.35!2d-2.25!3d51.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871b0e3e4f1c3a7%3A0x5e3b3b3b3b3b3b3b!2sGloucestershire!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aston & Earle Transport Location"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
