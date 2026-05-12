/*
 * Services Page – Aston & Earle Transport V2
 * All services with clear icons, descriptions, and CTAs
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import {
  Truck,
  Globe,
  MapPin,
  Thermometer,
  Zap,
  Package,
  Network,
  Target,
  Layers,
  ArrowRight,
} from "lucide-react";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/european-port-E8rGoigFU49NRwucLeAdLH.webp";
const FRIDGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/refrigerated-truck-CSiLxbfPAmydumKG6tZmyC.webp";
const IRISH = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/irish-crossing-AwVNaMTx5y7ETs9EgGsjL2.webp";
const AERIAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/freight-aerial-KW6H8rxrii75SFAi2Pkb2R.webp";

const services = [
  {
    icon: Truck,
    title: "UK Transport Coordination",
    desc: "Full and part-load haulage services covering the entire UK. We match your freight with the right vehicle and the right haulier, ensuring reliable, cost-effective delivery wherever you need it. From single drops to multi-stop routes, we coordinate it all.",
    features: ["Nationwide coverage", "Full & part loads", "Multi-drop routes", "Same-day options"],
  },
  {
    icon: Globe,
    title: "European Freight",
    desc: "Seamless freight solutions spanning the continent. Whether you're shipping to France, Germany, Spain, the Netherlands or beyond, we have the network and expertise to get your goods across borders efficiently and on time.",
    features: ["Cross-channel logistics", "Customs support", "Groupage & full loads", "Continent-wide network"],
  },
  {
    icon: MapPin,
    title: "Irish Freight",
    desc: "Reliable transport links between the UK and Ireland, covering both Northern Ireland and the Republic. We handle the cross-channel logistics so you don't have to worry about ferry bookings, timings, or compliance.",
    features: ["UK–Ireland routes", "North & Republic", "Ferry coordination", "Regular services"],
  },
  {
    icon: Thermometer,
    title: "Refrigerated Transport",
    desc: "Temperature-controlled haulage for perishable and sensitive goods. Our trusted hauliers maintain cold chain integrity from collection to delivery, with real-time temperature monitoring and full compliance.",
    features: ["Chilled & frozen", "Temperature monitoring", "HACCP compliant", "Pharma capable"],
  },
  {
    icon: Truck,
    title: "General Haulage",
    desc: "The backbone of what we do. Curtain-siders, flatbeds, box trailers — whatever your freight needs, we source the right vehicle from our vetted network. Reliable, straightforward haulage that gets the job done.",
    features: ["All trailer types", "Vetted hauliers", "Competitive rates", "Flexible scheduling"],
  },
  {
    icon: Zap,
    title: "Time Critical Loads",
    desc: "When it absolutely has to be there. Dedicated, urgent transport for time-sensitive freight. We prioritise speed without compromising on reliability, with real-time tracking and proactive communication throughout.",
    features: ["Dedicated vehicles", "Priority scheduling", "Live tracking", "24/7 availability"],
  },
  {
    icon: Network,
    title: "Brokerage & Logistics Solutions",
    desc: "More than just moving freight. We provide end-to-end logistics solutions, connecting you with the right transport partners for your specific needs. Strategic planning, route optimisation, and cost management.",
    features: ["Strategic planning", "Route optimisation", "Cost management", "Supplier sourcing"],
  },
  {
    icon: Target,
    title: "Dedicated Loads",
    desc: "For freight that needs its own vehicle. Dedicated load services ensure your goods travel direct, without stops or shared space. Ideal for high-value, fragile, or time-sensitive consignments.",
    features: ["Direct delivery", "No shared loads", "High-value freight", "Express options"],
  },
  {
    icon: Layers,
    title: "Pallet & Part Loads",
    desc: "Cost-effective solutions for smaller consignments. From a single pallet to a handful, we consolidate and coordinate to get your goods moving without the cost of a full vehicle. Smart logistics for every size.",
    features: ["Single pallets", "Consolidated loads", "Cost-effective", "Regular networks"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative py-28 lg:py-36 overflow-hidden">
          <div className="absolute inset-0">
            <img src={HERO} alt="European freight port" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-charcoal/90" />
          </div>
          <div className="container relative z-10">
            <AnimatedSection>
              <span className="text-maroon-light text-[11px] uppercase tracking-[0.25em] font-bold">Our Services</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-black tracking-tight mt-3 mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                Everything you need.
                <br />
                <span className="text-cream">Nothing you don't.</span>
              </h1>
              <p className="text-white/60 text-lg max-w-xl leading-relaxed">
                From local UK haulage to European freight, refrigerated transport to time-critical loads. We've got the network, the experience, and the drive to deliver.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container">
            <div className="space-y-6">
              {services.map((s, i) => (
                <AnimatedSection key={s.title} delay={Math.min(i * 60, 300)}>
                  <div className="group grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 p-8 lg:p-10 border border-border hover:border-maroon/30 transition-all duration-300 hover:shadow-lg hover:shadow-maroon/5 bg-white">
                    <div>
                      <div className="flex items-start gap-5 mb-4">
                        <div className="w-12 h-12 bg-cream flex items-center justify-center shrink-0 group-hover:bg-maroon/10 transition-colors duration-300">
                          <s.icon className="w-6 h-6 text-maroon" />
                        </div>
                        <div>
                          <h3 className="text-xl lg:text-2xl text-charcoal font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                            {s.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-charcoal/60 leading-relaxed mb-5 lg:pl-[68px]">{s.desc}</p>
                      <div className="flex flex-wrap gap-2 lg:pl-[68px]">
                        {s.features.map((f) => (
                          <span key={f} className="text-[11px] uppercase tracking-[0.1em] font-semibold text-maroon bg-cream px-3 py-1.5">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center lg:pl-8 lg:border-l lg:border-border">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-maroon text-white px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-maroon-light transition-all duration-200 active:scale-[0.97] whitespace-nowrap"
                      >
                        Get a Quote <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Image break */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={FRIDGE} alt="Refrigerated truck in mountains" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-charcoal/80" />
          </div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl sm:text-4xl text-white font-black tracking-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                  Specialist transport
                  <br />
                  <span className="text-cream">for specialist freight.</span>
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  Whether it's temperature-sensitive pharmaceuticals, oversized machinery, or urgent time-critical deliveries — we have the specialist hauliers and the expertise to handle it properly.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-maroon text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] hover:bg-maroon-light transition-all duration-200 active:scale-[0.97]"
                >
                  Discuss Your Requirements <ArrowRight className="w-4 h-4" />
                </Link>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <img src={IRISH} alt="Cargo ferry" className="w-full aspect-[4/3] object-cover shadow-2xl" />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl text-charcoal font-black tracking-tight mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                Not sure what you need?
              </h2>
              <p className="text-charcoal/60 max-w-lg mx-auto mb-10 leading-relaxed">
                No problem. Get in touch and tell us about your freight. We'll work out the best solution and come back with a straight quote. No obligation.
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
                  className="inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] hover:bg-charcoal-light transition-all duration-200"
                >
                  Call Us
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
