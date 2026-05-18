/*
 * About Page – Aston & Earle Transport V3
 * Updated with real founder story (Oliver Aston) and William "Billy Whizz" Earle memorial
 * Location: Gloucestershire, UK | Est. 2026
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const OLIVER = "/images/oliver-scania.jpg";
const BILLY_TRUCK = "/images/billy-whizz-truck.jpg";
const BILLY_PORTRAIT = "/images/billy-whizz-portrait.jpg";
const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/hero-european-nRrYC7qmjk65wYZzCYdxYy.webp";
const WAREHOUSE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663571760510/BHBaG53LjHiyeiVeW5bVd3/warehouse-logistics-53rAr2W64JaZoR58bYVGK7.webp";
const LOGO = "/images/ae-logo.png";

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
                Old school standards. Modern day solutions. Done Properly.
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
                      Aston & Earle Transport was founded by Oliver Aston with one clear goal — to build a transport business based on old-school standards, honest relationships and doing things properly.
                    </p>
                    <p>
                      Raised around trucks, workshops and the realities of the haulage industry from a young age, Oliver's experience comes from being hands-on in the job himself. From European fridge work to heavy machinery and specialist transport operations, Aston & Earle was built from genuine industry experience rather than a boardroom idea.
                    </p>
                    <p>
                      The company was created to bring a more personal, reliable approach to transport brokerage — built on communication, accountability and pride in the work.
                    </p>
                    <p>
                      Based in Gloucestershire, Aston & Earle continues to grow through reputation, relationships and repeat business.
                    </p>
                    <p className="text-charcoal font-semibold italic">
                      No inflated promises. No corporate nonsense. Just transport done properly.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* William "Billy Whizz" Earle Memorial */}
        <section className="py-20 lg:py-28 bg-charcoal">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <AnimatedSection>
                <img src={LOGO} alt="Aston & Earle Transport" className="h-[80px] w-auto object-contain mx-auto mb-10 opacity-80" />
                <span className="text-maroon-light text-[11px] uppercase tracking-[0.25em] font-bold">The Legacy</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mt-3 mb-8 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  William "Billy Whizz" Earle
                </h2>
                {/* Billy Whizz Photos */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <img src={BILLY_TRUCK} alt="Billy Whizz in his truck" className="w-full sm:w-[280px] h-[220px] object-cover object-top border-2 border-white/10" />
                  <img src={BILLY_PORTRAIT} alt="Billy Whizz" className="w-full sm:w-[280px] h-[220px] object-cover object-top border-2 border-white/10" />
                </div>
                <div className="w-16 h-[2px] bg-maroon mx-auto mb-10" />
                <div className="space-y-5 text-white/60 text-lg leading-relaxed text-left sm:text-center">
                  <p>
                    Aston & Earle was built on the standards, mentality and work ethic passed down by William "Billy Whizz" Earle.
                  </p>
                  <p>
                    Bill spent his life around trucks, workshops and transport yards. From driving across Europe to repairing machinery with his own hands, transport was never simply a job to him — it was who he was.
                  </p>
                  <p>
                    He believed in doing things properly. Keeping your word. Looking after equipment. Taking pride in your work and never cutting corners.
                  </p>
                  <p>
                    There was nothing he couldn't fix, nobody he wouldn't help, and no problem he would walk away from.
                  </p>
                  <p>
                    Those old-school values became the foundation Aston & Earle was built on.
                  </p>
                  <p>
                    Today, every load moved, every relationship built and every mile covered carries that legacy forward.
                  </p>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-cream text-lg font-bold italic" style={{ fontFamily: "var(--font-heading)" }}>
                    Old school standards. Modern day solutions. Done Properly.
                  </p>
                </div>
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
                { year: "The Beginning", title: "Hands-On Experience", desc: "Years spent in the thick of it — European fridge work, heavy machinery, specialist transport operations. Learning the industry from the cab, not a classroom." },
                { year: "The Vision", title: "A Better Way", desc: "Recognising the gap for a transport brokerage that genuinely cares. One built on communication, accountability and pride in the work." },
                { year: "Est. 2026", title: "Aston & Earle Founded", desc: "Launching in Gloucestershire with a clear mission: old-school standards, modern solutions. Named in honour of William 'Billy Whizz' Earle and the values he stood for." },
                { year: "Today", title: "Growing Through Reputation", desc: "Expanding through word of mouth and repeat business. Every new client comes through results, not marketing." },
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
