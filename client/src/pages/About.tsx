/*
 * About Page – Aston & Earle Transport V2
 * Focus: Oliver Aston founder story, William Earle legacy, values, timeline
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import { ShieldCheck, Handshake, Clock, Trophy, ArrowRight } from "lucide-react";

const OLIVER = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/about-oliver-YyiiVMrpGTMHAPxQrt36Nb.webp";
const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/hero-european-nRrYC7qmjk65wYZzCYdxYy.webp";
const WAREHOUSE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/warehouse-logistics-53rAr2W64JaZoR58bYVGK7.webp";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Page Hero */}
        <section className="relative py-28 lg:py-36 overflow-hidden">
          <div className="absolute inset-0">
            <img src={HERO} alt="European truck" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-charcoal/90" />
          </div>
          <div className="container relative z-10">
            <AnimatedSection>
              <span className="text-maroon-light text-[11px] uppercase tracking-[0.25em] font-bold">About Us</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-black tracking-tight mt-3 mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                Built properly.
                <br />
                <span className="text-cream">From the ground up.</span>
              </h1>
              <p className="text-white/60 text-lg max-w-xl leading-relaxed">
                A logistics brokerage built on years of industry experience, strong values and a commitment to doing things the right way.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Founder Story */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <AnimatedSection direction="left">
                <img src={OLIVER} alt="Oliver Aston, Founder" className="w-full max-w-md mx-auto lg:mx-0 aspect-[3/2] object-cover shadow-xl" />
              </AnimatedSection>
              <AnimatedSection direction="right" delay={150}>
                <div>
                  <span className="text-maroon text-[11px] uppercase tracking-[0.25em] font-bold">The Founder</span>
                  <h2 className="text-3xl sm:text-4xl text-charcoal mt-3 mb-6 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                    Oliver Aston
                  </h2>
                  <div className="space-y-4 text-charcoal/65 leading-relaxed">
                    <p>
                      Aston & Earle Transport was founded by Oliver Aston with a clear vision: to build a logistics business that does things properly. Not cutting corners, not over-promising, just delivering reliable transport solutions that businesses can actually depend on.
                    </p>
                    <p>
                      With years of experience in the transport and logistics industry, Oliver saw a gap for a brokerage that genuinely cares about the service it provides. One that picks up the phone, keeps you updated, and treats every load like it matters — because it does.
                    </p>
                    <p>
                      Based in Gloucestershire, Aston & Earle has grown through word of mouth and repeat business. That tells you everything you need to know about how we operate.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <span className="text-maroon text-[11px] uppercase tracking-[0.25em] font-bold">The Legacy</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-charcoal mt-3 mb-8 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  His Legacy. Our Foundation.
                </h2>
                <div className="w-16 h-[2px] bg-maroon mx-auto mb-8" />
                <p className="text-charcoal/65 text-lg leading-relaxed mb-6">
                  The "Earle" in Aston & Earle is a tribute to William Earle — a man who set the standard for how things should be done. His work ethic, his respect for others, and his refusal to accept anything less than the best are the principles this business was built on.
                </p>
                <p className="text-charcoal/65 text-lg leading-relaxed">
                  William's legacy isn't just a name on a logo. It's a daily reminder of the standards we hold ourselves to. Every job we take on, every promise we make — we ask ourselves whether it would meet his approval. That's the bar.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-maroon text-[11px] uppercase tracking-[0.25em] font-bold">Our Journey</span>
                <h2 className="text-3xl sm:text-4xl text-charcoal mt-3 mb-5 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  How we got here.
                </h2>
              </div>
            </AnimatedSection>

            <div className="max-w-2xl mx-auto space-y-0">
              {[
                { year: "The Beginning", title: "Industry Experience", desc: "Years spent working in transport and logistics, learning the industry from the inside out. Understanding what works, what doesn't, and what clients actually need." },
                { year: "The Vision", title: "A Better Way", desc: "Recognising the gap for a logistics brokerage that genuinely delivers on its promises. One built on relationships, not just transactions." },
                { year: "Est. 2024", title: "Aston & Earle Founded", desc: "Launching the business in Gloucestershire with a clear mission: European logistics, done properly. Named in honour of William Earle and the standards he set." },
                { year: "Today", title: "Growing Through Trust", desc: "Expanding our network of trusted hauliers across the UK, Ireland and Europe. Every new client comes through reputation and results." },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <div className="flex gap-6 lg:gap-10 pb-12 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-maroon rounded-full shrink-0 mt-1.5" />
                      {i < 3 && <div className="w-[1px] bg-border flex-1 mt-2" />}
                    </div>
                    <div className="pb-2">
                      <span className="text-maroon text-[11px] uppercase tracking-[0.2em] font-bold">{item.year}</span>
                      <h3 className="text-charcoal font-bold text-xl mt-1 mb-2 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                        {item.title}
                      </h3>
                      <p className="text-charcoal/55 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-maroon text-[11px] uppercase tracking-[0.25em] font-bold">Our Values</span>
                <h2 className="text-3xl sm:text-4xl text-charcoal mt-3 mb-5 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  What we stand for.
                </h2>
                <p className="text-charcoal/60 leading-relaxed">
                  These aren't just words on a wall. They're how we operate, every single day.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, title: "Integrity", desc: "Honest, transparent and reliable in everything we do. If we say it, we mean it." },
                { icon: Handshake, title: "Relationships", desc: "We build long-term partnerships based on trust. Your business matters to us." },
                { icon: Clock, title: "Accountability", desc: "We take ownership and deliver on our promises. No passing the buck." },
                { icon: Trophy, title: "Results", desc: "Focused on finding the best solutions that drive your success. That's the bottom line." },
              ].map((v, i) => (
                <AnimatedSection key={v.title} delay={i * 100}>
                  <div className="bg-white p-7 h-full border border-border text-center">
                    <v.icon className="w-8 h-8 text-maroon mx-auto mb-5" />
                    <h3 className="text-charcoal font-bold text-lg mb-2 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                      {v.title}
                    </h3>
                    <p className="text-charcoal/55 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img src={WAREHOUSE} alt="Logistics warehouse" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-charcoal/85" />
          </div>
          <div className="container relative z-10 text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-black tracking-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Want to work with us?
              </h2>
              <p className="text-white/60 max-w-lg mx-auto mb-10 leading-relaxed">
                We're always looking to build new partnerships. Get in touch and let's see how we can help.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-maroon text-white px-8 py-4 text-[13px] font-bold uppercase tracking-[0.12em] hover:bg-maroon-light transition-all duration-200 active:scale-[0.97]"
              >
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
