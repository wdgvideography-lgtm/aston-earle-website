/*
 * Home Page – Aston & Earle Transport V2
 * Design: Premium modern sans-serif, white bg, maroon/cream/black
 * Sections: Hero, Stats, Services overview, Coverage, Why Us, Process, Testimonials, CTA, Footer
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import {
  ShieldCheck,
  Handshake,
  Clock,
  Trophy,
  Truck,
  Thermometer,
  Globe,
  Zap,
  Package,
  ArrowRight,
  ChevronDown,
  Quote,
  MapPin,
} from "lucide-react";

/* ─── Images ─── */
const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/hero-european-nRrYC7qmjk65wYZzCYdxYy.webp";
const PORT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/european-port-E8rGoigFU49NRwucLeAdLH.webp";
const WAREHOUSE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/warehouse-logistics-53rAr2W64JaZoR58bYVGK7.webp";
const IRISH = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/irish-crossing-AwVNaMTx5y7ETs9EgGsjL2.webp";

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO} alt="European truck on motorway at dusk" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/75 to-charcoal/30" />
      </div>

      <div className="container relative z-10 py-24 lg:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-maroon/20 border border-maroon/30 px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 bg-maroon rounded-full" />
            <span className="text-cream text-[11px] uppercase tracking-[0.2em] font-semibold">UK &middot; Ireland &middot; Europe</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white font-black leading-[1.05] mb-6 tracking-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            European Logistics.
            <br />
            <span className="text-cream">Done Properly.</span>
          </h1>

          <p className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg font-light">
            Premium logistics brokerage connecting businesses to trusted haulage solutions. From single pallets to full loads, across the UK and beyond.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-maroon text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] hover:bg-maroon-light transition-all duration-200 active:scale-[0.97]"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 border-2 border-white/25 text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] hover:border-cream hover:text-cream transition-all duration-200"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("stats")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-cream transition-colors duration-200 animate-bounce"
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </section>
  );
}

/* ─── Stats Bar ─── */
function StatsBar() {
  const stats = [
    { value: "UK Wide", label: "Coverage" },
    { value: "24/7", label: "Availability" },
    { value: "Europe", label: "& Ireland" },
    { value: "100%", label: "Commitment" },
  ];

  return (
    <section id="stats" className="bg-maroon">
      <div className="container py-10 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 80}>
              <div className="text-center">
                <div className="text-cream text-2xl sm:text-3xl font-black tracking-tight mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.value}
                </div>
                <div className="text-white/50 text-xs uppercase tracking-[0.2em] font-semibold">{s.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services Overview ─── */
function ServicesOverview() {
  const services = [
    { icon: Truck, title: "General Haulage", desc: "Full and part-load haulage across the UK. The right vehicle, the right haulier, every time." },
    { icon: Globe, title: "European Freight", desc: "Seamless freight solutions spanning the continent. From the UK to mainland Europe and back." },
    { icon: MapPin, title: "Irish Freight", desc: "Reliable transport links between the UK and Ireland. Cross-channel logistics handled properly." },
    { icon: Thermometer, title: "Refrigerated Transport", desc: "Temperature-controlled haulage for perishable and sensitive goods. Cold chain integrity guaranteed." },
    { icon: Zap, title: "Time Critical Loads", desc: "When it absolutely has to be there. Dedicated, urgent transport for time-sensitive freight." },
    { icon: Package, title: "Pallet & Part Loads", desc: "Cost-effective solutions for smaller consignments. From single pallets to part-load shipments." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <AnimatedSection>
          <div className="max-w-2xl mb-16">
            <span className="text-maroon text-[11px] uppercase tracking-[0.25em] font-bold">What We Do</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mt-3 mb-5 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Logistics solutions that
              <br className="hidden sm:block" /> actually deliver.
            </h2>
            <p className="text-charcoal/60 leading-relaxed max-w-lg">
              We connect your freight with the right hauliers. No middlemen, no runaround. Just reliable transport, handled properly from start to finish.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 80}>
              <div className="group p-7 lg:p-8 border border-border hover:border-maroon/30 transition-all duration-300 hover:shadow-lg hover:shadow-maroon/5 h-full bg-white">
                <div className="w-11 h-11 bg-cream flex items-center justify-center mb-5 group-hover:bg-maroon/10 transition-colors duration-300">
                  <s.icon className="w-5 h-5 text-maroon" />
                </div>
                <h3 className="text-lg text-charcoal font-bold mb-2 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  {s.title}
                </h3>
                <p className="text-charcoal/55 text-sm leading-relaxed">{s.desc}</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-maroon text-[12px] font-bold uppercase tracking-[0.1em] mt-5 hover:gap-3 transition-all duration-200"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] hover:bg-charcoal-light transition-all duration-200 active:scale-[0.97]"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── Coverage Section ─── */
function CoverageSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={IRISH} alt="Cargo ferry crossing the Irish Sea" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/88" />
      </div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <span className="text-maroon-light text-[11px] uppercase tracking-[0.25em] font-bold">Our Reach</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-6 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              UK. Ireland. Europe.
              <br />
              <span className="text-cream">Wherever you need us.</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
              From local UK deliveries to cross-channel European freight, we have the network and the know-how to get your goods where they need to be. Our trusted haulier partnerships span the continent.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { region: "United Kingdom", detail: "Nationwide coverage" },
                { region: "Ireland", detail: "North & Republic" },
                { region: "Europe", detail: "Continent-wide" },
              ].map((r) => (
                <div key={r.region}>
                  <div className="text-cream font-bold text-sm mb-1" style={{ fontFamily: "var(--font-heading)" }}>{r.region}</div>
                  <div className="text-white/40 text-xs">{r.detail}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={200}>
            <img src={PORT} alt="European freight port at twilight" className="w-full aspect-[4/3] object-cover shadow-2xl" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─── */
function WhyUs() {
  const reasons = [
    { icon: ShieldCheck, title: "Integrity", desc: "Honest, transparent and reliable. We say what we mean and deliver what we promise." },
    { icon: Handshake, title: "Relationships", desc: "We build long-term partnerships, not one-off transactions. Your success is our business." },
    { icon: Clock, title: "Accountability", desc: "We take ownership of every job. If something needs sorting, we sort it. No excuses." },
    { icon: Trophy, title: "Results", desc: "We're not here to talk. We're here to deliver. The right solution, every single time." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-maroon text-[11px] uppercase tracking-[0.25em] font-bold">Why Aston & Earle</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mt-3 mb-5 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Built on values that matter.
            </h2>
            <p className="text-charcoal/60 leading-relaxed">
              We're real transport people. No corporate buzzwords, no empty promises. Just straight-talking logistics that gets the job done.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <AnimatedSection key={r.title} delay={i * 100}>
              <div className="bg-white p-7 h-full border border-border">
                <r.icon className="w-8 h-8 text-maroon mb-5" />
                <h3 className="text-charcoal font-bold text-lg mb-2 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  {r.title}
                </h3>
                <p className="text-charcoal/55 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Process ─── */
function Process() {
  const steps = [
    { num: "01", title: "Request a Quote", desc: "Tell us what you need moved, where from and where to. We'll come back with a competitive price." },
    { num: "02", title: "We Source the Haulier", desc: "We tap into our trusted network to find the right vehicle and driver for your specific job." },
    { num: "03", title: "We Manage the Job", desc: "From collection to delivery, we oversee everything. You'll get updates, not surprises." },
    { num: "04", title: "Delivered. Done Properly.", desc: "Your freight arrives safely, on time. That's the standard. That's the promise." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-maroon text-[11px] uppercase tracking-[0.25em] font-bold">How It Works</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mt-3 mb-5 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Simple. Effective. Reliable.
            </h2>
            <p className="text-charcoal/60 leading-relaxed">
              We handle the logistics so you can focus on your business. Four steps, no hassle.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 120}>
              <div className="relative">
                <div className="text-[64px] font-black text-cream leading-none mb-4 tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
                  {step.num}
                </div>
                <h3 className="text-charcoal font-bold text-lg mb-2 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  {step.title}
                </h3>
                <p className="text-charcoal/55 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials (future-ready) ─── */
function Testimonials() {
  const testimonials = [
    {
      text: "Aston & Earle have been handling our European freight for months now. Reliable, communicative, and they actually care about getting it right. Proper outfit.",
      name: "Logistics Manager",
      company: "Manufacturing Client",
    },
    {
      text: "We needed a last-minute temperature-controlled load sorted and Oliver had it covered within the hour. That's the kind of service you can't put a price on.",
      name: "Operations Director",
      company: "Food Distribution Client",
    },
    {
      text: "Straight-talking, no messing about. They tell you what they can do, and then they do it. Refreshing in this industry.",
      name: "Supply Chain Manager",
      company: "Retail Client",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="container">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-maroon text-[11px] uppercase tracking-[0.25em] font-bold">What People Say</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mt-3 mb-5 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Trusted by businesses.
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="bg-white p-8 border border-border h-full flex flex-col">
                <Quote className="w-8 h-8 text-cream-dark mb-5" />
                <p className="text-charcoal/70 text-sm leading-relaxed flex-1 italic">"{t.text}"</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="text-charcoal font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>{t.name}</div>
                  <div className="text-charcoal/40 text-xs mt-0.5">{t.company}</div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={WAREHOUSE} alt="Logistics warehouse" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>
      <div className="container relative z-10 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-black tracking-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Ready to move freight?
          </h2>
          <p className="text-white/60 max-w-lg mx-auto mb-10 leading-relaxed">
            Whether it's a single pallet or a full fleet, get in touch and let's get it sorted. No obligation, just a straight quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-maroon text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] hover:bg-maroon-light transition-all duration-200 active:scale-[0.97]"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+447473252561"
              className="inline-flex items-center gap-3 border-2 border-white/25 text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] hover:border-cream hover:text-cream transition-all duration-200"
            >
              Call Us Now
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/* ─── Main ─── */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ServicesOverview />
        <CoverageSection />
        <WhyUs />
        <Process />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
