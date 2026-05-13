/*
 * Home Page – Aston & Earle Transport V3
 * Design: Apple-style cinematic scroll experience
 * Dark backgrounds, bold typography, scroll-triggered animations, parallax
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";

/* ─── Images ─── */
const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/hero-european-nRrYC7qmjk65wYZzCYdxYy.webp";
const PORT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/european-port-E8rGoigFU49NRwucLeAdLH.webp";
const WAREHOUSE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/warehouse-logistics-53rAr2W64JaZoR58bYVGK7.webp";
const IRISH = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/irish-crossing-AwVNaMTx5y7ETs9EgGsjL2.webp";
const FRIDGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/refrigerated-truck-CSiLxbfPAmydumKG6tZmyC.webp";
const LOGO = "/manus-storage/ae-logo_efe7df47.png";
const VEHICLE_VAN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/vehicle-van-T5E2ApzAvN7a39SbF7HP7p.png";
const VEHICLE_RIGID = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/vehicle-rigid-fVJVuotwb4xZdSxBTKmuqC.png";
const VEHICLE_HGV = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/vehicle-hgv-cJoQAHA7SVJQYfdQfBEQwY.png";

/* ─── Scroll-triggered section hook ─── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Cinematic Section Component ─── */
function CinematicSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal(0.1);
  return (
    <div ref={ref} className={`transition-all duration-[1200ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
      {children}
    </div>
  );
}

/* ─── Hero ─── */
function Hero() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handle = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Parallax background */}
      <div className="absolute inset-0" style={{ transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.3}px)` }}>
        <img src={HERO} alt="" className="w-full h-full object-cover opacity-60" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />

      {/* Content */}
      <div className="relative z-10 text-center px-4" style={{ transform: `translateY(${scrollY * -0.2}px)`, opacity: Math.max(0, 1 - scrollY / 600) }}>
        <img src={LOGO} alt="Aston & Earle" className="h-[80px] lg:h-[110px] w-auto mx-auto mb-10 drop-shadow-2xl" />
        <h1 className="text-5xl sm:text-6xl lg:text-8xl text-white font-black tracking-tighter leading-[0.9]" style={{ fontFamily: "var(--font-heading)" }}>
          European Logistics.
          <br />
          <span className="text-cream">Done Properly.</span>
        </h1>
        <p className="text-white/50 text-lg mt-6 max-w-md mx-auto font-light">
          Premium haulage brokerage. UK. Ireland. Europe.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
}

/* ─── Statement Section ─── */
function StatementSection() {
  return (
    <section className="bg-black py-32 lg:py-44">
      <div className="container">
        <CinematicSection>
          <p className="text-3xl sm:text-4xl lg:text-6xl text-white font-black tracking-tight leading-[1.1] max-w-4xl" style={{ fontFamily: "var(--font-heading)" }}>
            We don't just move freight.
            <br />
            <span className="text-white/30">We move businesses forward.</span>
          </p>
        </CinematicSection>
      </div>
    </section>
  );
}

/* ─── Fleet Showcase ─── */
function FleetShowcase() {
  const { ref, visible } = useReveal(0.15);
  const vehicles = [
    { img: VEHICLE_VAN, name: "Van", label: "Light Freight" },
    { img: VEHICLE_RIGID, name: "Rigid", label: "Insulated" },
    { img: VEHICLE_HGV, name: "Class 1 HGV", label: "Insulated Trailer" },
  ];

  return (
    <section ref={ref} className="bg-charcoal py-28 lg:py-40 overflow-hidden">
      <div className="container">
        <CinematicSection>
          <div className="text-center mb-20">
            <p className="text-maroon-light text-[11px] uppercase tracking-[0.3em] font-bold mb-4">The Fleet</p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl text-white font-black tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
              Three sizes.<br /><span className="text-white/30">One standard.</span>
            </h2>
          </div>
        </CinematicSection>

        <div className="flex items-end justify-center gap-8 sm:gap-12 lg:gap-20">
          {vehicles.map((v, i) => (
            <div
              key={v.name}
              className={`flex flex-col items-center transition-all duration-[1200ms] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[80px]"
              }`}
              style={{
                transitionDelay: `${300 + i * 200}ms`,
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <img
                src={v.img}
                alt={v.name}
                className={`${i === 0 ? "w-[120px] sm:w-[160px] lg:w-[220px]" : i === 1 ? "w-[140px] sm:w-[200px] lg:w-[280px]" : "w-[180px] sm:w-[240px] lg:w-[360px]"} h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)] hover:scale-[1.05] transition-transform duration-500`}
              />
              <div className={`mt-6 text-center transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
                style={{ transitionDelay: `${800 + i * 150}ms` }}>
                <p className="text-white font-bold text-base tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>{v.name}</p>
                <p className="text-white/30 text-[11px] uppercase tracking-[0.15em] mt-1">{v.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Cinematic Image Section ─── */
function CinematicImage({ src, alt, children }: { src: string; alt: string; children: React.ReactNode }) {
  const { ref, visible } = useReveal(0.1);
  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className={`absolute inset-0 transition-all duration-[2000ms] ${visible ? "scale-100 opacity-50" : "scale-110 opacity-0"}`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />
      <div className="container relative z-10">
        <div className={`transition-all duration-[1200ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: "400ms", transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}>
          {children}
        </div>
      </div>
    </section>
  );
}

/* ─── Services Scroll ─── */
function ServicesScroll() {
  const services = [
    "UK Transport", "European Freight", "Irish Freight", "Refrigerated",
    "Time Critical", "General Haulage", "Dedicated Loads", "Pallet & Part Loads", "Brokerage",
  ];

  return (
    <section className="bg-black py-20 overflow-hidden">
      <div className="relative">
        {/* Marquee */}
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...services, ...services].map((s, i) => (
            <span key={i} className="text-white/10 text-6xl sm:text-7xl lg:text-9xl font-black tracking-tighter mx-8" style={{ fontFamily: "var(--font-heading)" }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Section ─── */
function StatsSection() {
  const { ref, visible } = useReveal(0.2);
  const stats = [
    { value: "UK", sub: "Wide Coverage" },
    { value: "24/7", sub: "Availability" },
    { value: "EU", sub: "& Ireland" },
    { value: "100%", sub: "Commitment" },
  ];

  return (
    <section ref={ref} className="bg-black py-28 lg:py-36 border-t border-white/5">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((s, i) => (
            <div
              key={s.sub}
              className={`text-center transition-all duration-[1000ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 150}ms`, transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl text-white font-black tracking-tighter" style={{ fontFamily: "var(--font-heading)" }}>
                {s.value}
              </div>
              <div className="text-white/30 text-[11px] uppercase tracking-[0.2em] mt-3 font-semibold">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Values Section ─── */
function ValuesSection() {
  const values = [
    { title: "Integrity", desc: "We say what we mean. We deliver what we promise." },
    { title: "Relationships", desc: "Long-term partnerships, not one-off transactions." },
    { title: "Accountability", desc: "We take ownership. No excuses. No passing the buck." },
    { title: "Results", desc: "The right solution. Every single time." },
  ];

  return (
    <section className="bg-black py-28 lg:py-40">
      <div className="container max-w-4xl">
        <CinematicSection>
          <p className="text-maroon-light text-[11px] uppercase tracking-[0.3em] font-bold mb-4">Our Values</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-black tracking-tighter mb-16" style={{ fontFamily: "var(--font-heading)" }}>
            Built on values<br /><span className="text-white/30">that actually matter.</span>
          </h2>
        </CinematicSection>

        <div className="space-y-12">
          {values.map((v, i) => (
            <CinematicSection key={v.title} className={`border-t border-white/8 pt-10`}>
              <div className="flex items-start gap-8">
                <span className="text-white/10 text-5xl font-black tracking-tighter shrink-0" style={{ fontFamily: "var(--font-heading)" }}>
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-white text-2xl font-bold tracking-tight mb-2" style={{ fontFamily: "var(--font-heading)" }}>{v.title}</h3>
                  <p className="text-white/40 text-lg leading-relaxed">{v.desc}</p>
                </div>
              </div>
            </CinematicSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function CTASection() {
  return (
    <section className="bg-black py-32 lg:py-44 border-t border-white/5">
      <div className="container text-center">
        <CinematicSection>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl text-white font-black tracking-tighter leading-[0.95]" style={{ fontFamily: "var(--font-heading)" }}>
            Ready to move?
          </h2>
          <p className="text-white/40 text-lg mt-6 max-w-md mx-auto">
            Get a straight quote. No obligation. No runaround.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-charcoal px-10 py-5 text-[14px] font-bold uppercase tracking-[0.1em] hover:bg-cream transition-all duration-200 active:scale-[0.97]"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+447473252561"
              className="inline-flex items-center gap-3 border border-white/20 text-white px-10 py-5 text-[14px] font-bold uppercase tracking-[0.1em] hover:border-white/50 transition-all duration-200"
            >
              Call Us
            </a>
          </div>
        </CinematicSection>
      </div>
    </section>
  );
}

/* ─── Main ─── */
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <StatementSection />
        <FleetShowcase />
        <CinematicImage src={PORT} alt="European freight port">
          <p className="text-maroon-light text-[11px] uppercase tracking-[0.3em] font-bold mb-4">European Reach</p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl text-white font-black tracking-tighter leading-[0.95]" style={{ fontFamily: "var(--font-heading)" }}>
            UK. Ireland.<br />Europe.
          </h2>
          <p className="text-white/50 text-lg mt-6 max-w-lg leading-relaxed">
            From local UK deliveries to cross-channel European freight. Our trusted haulier partnerships span the continent.
          </p>
        </CinematicImage>
        <ServicesScroll />
        <CinematicImage src={FRIDGE} alt="Refrigerated truck in mountains">
          <p className="text-maroon-light text-[11px] uppercase tracking-[0.3em] font-bold mb-4">Specialist Transport</p>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl text-white font-black tracking-tighter leading-[0.95]" style={{ fontFamily: "var(--font-heading)" }}>
            Temperature<br />controlled.
          </h2>
          <p className="text-white/50 text-lg mt-6 max-w-lg leading-relaxed">
            Cold chain integrity from collection to delivery. Chilled, frozen, pharma-capable.
          </p>
        </CinematicImage>
        <StatsSection />
        <ValuesSection />
        <CinematicImage src={IRISH} alt="Cargo ferry crossing Irish Sea">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-maroon-light text-[11px] uppercase tracking-[0.3em] font-bold mb-4">Cross-Channel</p>
            <h2 className="text-4xl sm:text-5xl lg:text-7xl text-white font-black tracking-tighter leading-[0.95]" style={{ fontFamily: "var(--font-heading)" }}>
              Ireland.<br /><span className="text-white/30">Handled properly.</span>
            </h2>
            <p className="text-white/50 text-lg mt-6 max-w-lg mx-auto leading-relaxed">
              Ferry coordination, customs, compliance. We handle the cross-channel logistics so you don't have to.
            </p>
          </div>
        </CinematicImage>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
