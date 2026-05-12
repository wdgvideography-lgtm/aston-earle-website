/*
 * Home Page – Aston & Earle Transport
 * Design: Warm Authority
 * Sections: Hero, Features, Services, Process, About, Contact, Footer
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ShieldCheck,
  Handshake,
  Globe,
  Trophy,
  Truck,
  Thermometer,
  Container,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

/* ─── Image URLs ─── */
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/hero-trucks-TcKMqA8XC2x9acaPAZScrJ.webp";
const WAREHOUSE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/warehouse-logistics-53rAr2W64JaZoR58bYVGK7.webp";
const DRIVER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/about-driver-SUXC9mDQnPp3mZgkqQUPsF.webp";
const AERIAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/freight-aerial-KW6H8rxrii75SFAi2Pkb2R.webp";
const OFFICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/contact-office-E9Vp3R7y5cZGPvWoPPZvpn.webp";

/* ─── Animated Section Wrapper ─── */
function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`fade-up ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Hero Section ─── */
function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Fleet of trucks on motorway" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark/90 via-burgundy-dark/70 to-burgundy-dark/40" />
      </div>

      <div className="container relative z-10 py-24 lg:py-32">
        <div className="max-w-2xl">
          {/* Accent line */}
          <div className="w-16 h-[2px] bg-gold mb-8" />

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Logistics.{" "}
            <span className="text-gold">Done Properly.</span>
          </h1>

          <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg">
            Expert logistics brokerage connecting businesses to the right haulage solutions, everywhere.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-3 bg-gold text-espresso px-7 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-all duration-200 active:scale-[0.97]"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="inline-flex items-center gap-3 border-2 border-white/30 text-white px-7 py-4 text-sm font-semibold uppercase tracking-wider hover:border-gold hover:text-gold transition-all duration-200"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("features")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-gold transition-colors duration-200 animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}

/* ─── Features Bar ─── */
function FeaturesBar() {
  const features = [
    { icon: ShieldCheck, title: "Reliable Transport", desc: "On time. Every time." },
    { icon: Handshake, title: "Strong Relationships", desc: "Built on trust." },
    { icon: Globe, title: "Nationwide Coverage", desc: "Delivering across the UK." },
    { icon: Trophy, title: "Results Driven", desc: "Your success is our priority." },
  ];

  return (
    <section id="features" className="bg-burgundy-dark relative">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 100}>
              <div className="text-center group">
                <f.icon className="w-8 h-8 text-gold mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-1">{f.title}</h3>
                <p className="text-white/50 text-sm">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services Section ─── */
function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: "General Haulage",
      desc: "Full and part-load haulage services across the UK. We match your freight with the right vehicle and haulier for reliable, cost-effective delivery.",
    },
    {
      icon: Thermometer,
      title: "Temperature-Controlled",
      desc: "Specialist temperature-controlled transport for perishable and sensitive goods. Maintaining the cold chain from collection to delivery.",
    },
    {
      icon: Container,
      title: "Step Frames & Low Loaders",
      desc: "Heavy and oversized load transport using step frames and low loaders. Expert handling for challenging freight that requires specialist equipment.",
    },
    {
      icon: Globe,
      title: "UK & European Distribution",
      desc: "Seamless distribution networks spanning the UK and Europe. Whether it's a single pallet or a full fleet, we've got you covered.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28" style={{ backgroundColor: "oklch(0.97 0.008 80)" }}>
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold uppercase text-xs tracking-[0.25em] font-semibold">What We Offer</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-burgundy mt-4 mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Our Services
            </h2>
            <div className="w-12 h-[2px] bg-gold mx-auto mb-6" />
            <p className="text-espresso/70 leading-relaxed">
              At Aston & Earle, we connect your freight with the right hauliers — ensuring every job is handled professionally from start to finish.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 120}>
              <div className="group bg-white p-8 lg:p-10 border border-border hover:border-gold/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5 h-full">
                <div className="w-12 h-12 bg-burgundy/5 flex items-center justify-center mb-6 group-hover:bg-burgundy/10 transition-colors duration-300">
                  <s.icon className="w-6 h-6 text-burgundy" />
                </div>
                <h3 className="text-xl text-burgundy font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {s.title}
                </h3>
                <p className="text-espresso/65 leading-relaxed text-sm">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Process Section ─── */
function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Request a Quote",
      desc: "Tell us about your freight, where it needs to go, and when. We'll respond with a competitive quote tailored to your needs.",
    },
    {
      num: "02",
      title: "Sourcing the Haulier",
      desc: "We tap into our trusted network of vetted hauliers to find the perfect match for your specific requirements.",
    },
    {
      num: "03",
      title: "Managing the Job",
      desc: "From collection to delivery, we oversee every step. Real-time updates and proactive communication keep you informed.",
    },
    {
      num: "04",
      title: "Delivered — Done Properly",
      desc: "Your freight arrives safely, on time, every time. That's our promise and the standard we hold ourselves to.",
    },
  ];

  return (
    <section id="process" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={AERIAL_IMG} alt="Aerial view of logistics hub" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-burgundy-dark/92" />
      </div>

      <div className="container relative z-10">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold uppercase text-xs tracking-[0.25em] font-semibold">Simple & Effective</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-6" style={{ fontFamily: "var(--font-display)" }}>
              How It Works
            </h2>
            <div className="w-12 h-[2px] bg-gold mx-auto mb-6" />
            <p className="text-white/60 leading-relaxed">
              We handle the process so you don't have to. Four simple steps to get your freight moving.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 150}>
              <div className="relative group">
                {/* Connector line (hidden on mobile, last item) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%+0.5rem)] w-[calc(100%-2rem)] h-[1px] bg-gold/20" />
                )}
                <div className="text-5xl font-bold text-gold/15 mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  {step.num}
                </div>
                <h3 className="text-lg text-white font-semibold mb-3" style={{ fontFamily: "var(--font-display)" }}>
                  {step.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About Section ─── */
function AboutSection() {
  const values = [
    { icon: ShieldCheck, title: "Integrity", desc: "Honest, transparent and reliable in everything we do." },
    { icon: Handshake, title: "Relationships", desc: "We build strong, long-term partnerships based on trust." },
    { icon: Trophy, title: "Accountability", desc: "We take ownership and deliver on our promises." },
    { icon: Globe, title: "Results", desc: "Focused on finding the best solutions that drive your success." },
  ];

  return (
    <section id="about" className="py-20 lg:py-28" style={{ backgroundColor: "oklch(0.94 0.012 80)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <AnimatedSection>
            <div className="relative">
              <img
                src={DRIVER_IMG}
                alt="Professional logistics team member"
                className="w-full max-w-md mx-auto lg:mx-0 object-cover shadow-2xl"
                style={{ aspectRatio: "3/4" }}
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/20 -z-10 hidden lg:block" />
            </div>
          </AnimatedSection>

          {/* Content side */}
          <AnimatedSection delay={200}>
            <div>
              <span className="text-gold uppercase text-xs tracking-[0.25em] font-semibold">About Us</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-burgundy mt-4 mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Built on Experience.{" "}
                <span className="text-gold">Driven by Standards.</span>
              </h2>
              <div className="w-12 h-[2px] bg-gold mb-8" />

              <p className="text-espresso/70 leading-relaxed mb-6">
                Aston & Earle Transport is a logistics brokerage built on years of industry experience, strong values and a commitment to doing things the right way.
              </p>
              <p className="text-espresso/70 leading-relaxed mb-8">
                We pride ourselves on providing reliable solutions, strong communication and results our clients can depend on.
              </p>

              {/* Quote */}
              <blockquote className="border-l-2 border-gold pl-6 mb-10">
                <p className="text-burgundy italic text-lg leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                  "Aston & Earle was founded in honour of William Earle — a man who set the standard for how things should be done. His work ethic, respect for others and high standards continue to inspire everything we do."
                </p>
                <footer className="mt-3 text-gold text-sm font-semibold uppercase tracking-wider">
                  His Legacy. Our Foundation.
                </footer>
              </blockquote>

              {/* Values grid */}
              <div className="grid grid-cols-2 gap-6">
                {values.map((v) => (
                  <div key={v.title} className="group">
                    <v.icon className="w-5 h-5 text-gold mb-2" />
                    <h4 className="text-burgundy font-semibold text-sm mb-1">{v.title}</h4>
                    <p className="text-espresso/55 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── Warehouse CTA Section ─── */
function WarehouseCTA() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={WAREHOUSE_IMG} alt="Logistics warehouse" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-burgundy-dark/80" />
      </div>
      <div className="container relative z-10 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>
            Moving Business <span className="text-gold">Forward</span>
          </h2>
          <p className="text-white/70 max-w-lg mx-auto mb-10 leading-relaxed">
            Whether you need a single pallet moved or a full fleet coordinated, we have the network and expertise to deliver.
          </p>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-3 bg-gold text-espresso px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-all duration-200 active:scale-[0.97]"
          >
            Work With Us
            <ArrowRight className="w-4 h-4" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── Contact Section ─── */
function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28" style={{ backgroundColor: "oklch(0.97 0.008 80)" }}>
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold uppercase text-xs tracking-[0.25em] font-semibold">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-burgundy mt-4 mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Request a Quote
            </h2>
            <div className="w-12 h-[2px] bg-gold mx-auto mb-6" />
            <p className="text-espresso/70 leading-relaxed">
              Tell us about your freight requirements and we'll get back to you with a competitive quote. No obligation, just straightforward pricing.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <AnimatedSection className="lg:col-span-2">
            <div className="bg-white p-8 lg:p-10 border border-border shadow-sm">
              <ContactForm />
            </div>
          </AnimatedSection>

          {/* Contact info sidebar */}
          <AnimatedSection delay={200}>
            <div className="space-y-8">
              {/* Contact card */}
              <div className="relative overflow-hidden">
                <img src={OFFICE_IMG} alt="Office" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-dark/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                    Tibley, Gloucestershire
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 border border-border">
                <h4 className="text-burgundy font-semibold text-lg mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Contact Details
                </h4>
                <div className="space-y-5">
                  <a href="mailto:oliver@astonearle.com" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-burgundy/5 flex items-center justify-center shrink-0 group-hover:bg-burgundy/10 transition-colors">
                      <Mail className="w-4 h-4 text-burgundy" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-espresso/50 mb-0.5">Email</p>
                      <p className="text-burgundy text-sm font-medium">oliver@astonearle.com</p>
                    </div>
                  </a>
                  <a href="tel:+447473252561" className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-burgundy/5 flex items-center justify-center shrink-0 group-hover:bg-burgundy/10 transition-colors">
                      <Phone className="w-4 h-4 text-burgundy" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-espresso/50 mb-0.5">Phone</p>
                      <p className="text-burgundy text-sm font-medium">+44 7473 252561</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-burgundy/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-burgundy" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-espresso/50 mb-0.5">Location</p>
                      <p className="text-burgundy text-sm font-medium">Tibley, Gloucestershire</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick response promise */}
              <div className="bg-burgundy p-6 text-center">
                <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">Quick Response</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  We aim to respond to all enquiries within 2 hours during business hours.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── Main Home Page ─── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesBar />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <WarehouseCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
