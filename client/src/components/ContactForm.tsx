/*
 * ContactForm – Aston & Earle Transport
 * Design: Warm Authority — elegant form with dropdowns for service type, freight type, client status
 * Sends data via mailto link (static site)
 */
import { useState } from "react";
import { toast } from "sonner";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  clientStatus: string;
  serviceType: string;
  freightType: string;
  origin: string;
  destination: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  clientStatus: "",
  serviceType: "",
  freightType: "",
  origin: "",
  destination: "",
  message: "",
};

const clientStatusOptions = [
  { value: "new", label: "New Client" },
  { value: "existing", label: "Existing Client" },
  { value: "returning", label: "Returning Client" },
];

const serviceTypeOptions = [
  { value: "freight-moving", label: "Freight Moving / Haulage" },
  { value: "temperature-controlled", label: "Temperature-Controlled Transport" },
  { value: "step-frames", label: "Step Frames & Low Loaders" },
  { value: "uk-distribution", label: "UK Distribution" },
  { value: "european-distribution", label: "European Distribution" },
  { value: "general-enquiry", label: "General Enquiry" },
  { value: "other", label: "Other" },
];

const freightTypeOptions = [
  { value: "palletised", label: "Palletised Goods" },
  { value: "full-load", label: "Full Truck Load (FTL)" },
  { value: "part-load", label: "Part Load (LTL)" },
  { value: "temperature-sensitive", label: "Temperature-Sensitive Goods" },
  { value: "heavy-haulage", label: "Heavy / Oversized Loads" },
  { value: "hazardous", label: "Hazardous Materials (ADR)" },
  { value: "fragile", label: "Fragile / High-Value Goods" },
  { value: "container", label: "Container Haulage" },
  { value: "other", label: "Other / Not Sure" },
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.clientStatus || !form.serviceType) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Build mailto body
    const clientLabel = clientStatusOptions.find(o => o.value === form.clientStatus)?.label || form.clientStatus;
    const serviceLabel = serviceTypeOptions.find(o => o.value === form.serviceType)?.label || form.serviceType;
    const freightLabel = freightTypeOptions.find(o => o.value === form.freightType)?.label || form.freightType;

    const subject = encodeURIComponent(`Quote Request - ${serviceLabel} - ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nClient Status: ${clientLabel}\nService Required: ${serviceLabel}\nFreight Type: ${freightLabel}\nOrigin: ${form.origin}\nDestination: ${form.destination}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:oliver@astonearle.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    toast.success("Opening your email client...");
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
        <h3 className="text-3xl text-burgundy mb-4" style={{ fontFamily: "var(--font-display)" }}>
          Thank You
        </h3>
        <p className="text-espresso/70 max-w-md mx-auto mb-8">
          Your email client should have opened with your enquiry details. If it didn't, please email us directly at{" "}
          <a href="mailto:oliver@astonearle.com" className="text-burgundy underline">oliver@astonearle.com</a>
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm(initialForm); }}
          className="text-sm text-gold hover:text-gold-dark underline underline-offset-4 transition-colors duration-200"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Client Status - prominent at top */}
      <div>
        <label className="block text-xs uppercase tracking-[0.15em] text-espresso/60 font-semibold mb-2">
          Are you a new or existing client? <span className="text-burgundy">*</span>
        </label>
        <div className="flex flex-wrap gap-3">
          {clientStatusOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => update("clientStatus", opt.value)}
              className={`px-5 py-2.5 text-sm font-medium border transition-all duration-200 ${
                form.clientStatus === opt.value
                  ? "bg-burgundy text-white border-burgundy"
                  : "bg-white text-espresso/70 border-border hover:border-gold/50 hover:text-burgundy"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-espresso/60 font-semibold mb-2">
            Full Name <span className="text-burgundy">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="w-full px-4 py-3 bg-white border border-border text-espresso text-sm focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all duration-200"
            placeholder="Your full name"
            required
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-espresso/60 font-semibold mb-2">
            Company Name
          </label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            className="w-full px-4 py-3 bg-white border border-border text-espresso text-sm focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all duration-200"
            placeholder="Your company"
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-espresso/60 font-semibold mb-2">
            Email Address <span className="text-burgundy">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="w-full px-4 py-3 bg-white border border-border text-espresso text-sm focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all duration-200"
            placeholder="your@email.com"
            required
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-espresso/60 font-semibold mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="w-full px-4 py-3 bg-white border border-border text-espresso text-sm focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all duration-200"
            placeholder="+44 ..."
          />
        </div>
      </div>

      {/* Service Type & Freight Type dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-espresso/60 font-semibold mb-2">
            Service Required <span className="text-burgundy">*</span>
          </label>
          <select
            value={form.serviceType}
            onChange={(e) => update("serviceType", e.target.value)}
            className="w-full px-4 py-3 bg-white border border-border text-espresso text-sm focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all duration-200 appearance-none"
            required
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
            }}
          >
            <option value="">Select a service...</option>
            {serviceTypeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-espresso/60 font-semibold mb-2">
            Type of Freight
          </label>
          <select
            value={form.freightType}
            onChange={(e) => update("freightType", e.target.value)}
            className="w-full px-4 py-3 bg-white border border-border text-espresso text-sm focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all duration-200 appearance-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
            }}
          >
            <option value="">Select freight type...</option>
            {freightTypeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Origin & Destination */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-espresso/60 font-semibold mb-2">
            Collection Point / Origin
          </label>
          <input
            type="text"
            value={form.origin}
            onChange={(e) => update("origin", e.target.value)}
            className="w-full px-4 py-3 bg-white border border-border text-espresso text-sm focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all duration-200"
            placeholder="City or postcode"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-[0.15em] text-espresso/60 font-semibold mb-2">
            Delivery Destination
          </label>
          <input
            type="text"
            value={form.destination}
            onChange={(e) => update("destination", e.target.value)}
            className="w-full px-4 py-3 bg-white border border-border text-espresso text-sm focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all duration-200"
            placeholder="City or postcode"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs uppercase tracking-[0.15em] text-espresso/60 font-semibold mb-2">
          Additional Details
        </label>
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-white border border-border text-espresso text-sm focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all duration-200 resize-none"
          placeholder="Tell us about your requirements, timelines, special handling needs..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full sm:w-auto flex items-center justify-center gap-3 bg-burgundy text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-burgundy-light transition-all duration-200 active:scale-[0.97] group"
      >
        <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        Send Enquiry
      </button>
    </form>
  );
}
