/*
 * Navbar – Aston & Earle Transport
 * Design: Warm Authority — sticky nav, transparent → solid on scroll
 * Typography: Cormorant Garamond display, Source Sans 3 body
 * Colors: burgundy, gold accents, ivory background
 */
import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Services", id: "services" },
    { label: "How It Works", id: "process" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-burgundy text-white/90 text-sm">
        <div className="container flex justify-between items-center py-2">
          <div className="flex items-center gap-6">
            <a href="mailto:oliver@astonearle.com" className="flex items-center gap-2 hover:text-gold transition-colors duration-200">
              <Mail className="w-3.5 h-3.5" />
              oliver@astonearle.com
            </a>
            <a href="tel:+447473252561" className="flex items-center gap-2 hover:text-gold transition-colors duration-200">
              <Phone className="w-3.5 h-3.5" />
              +44 7473 252561
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-200">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors duration-200">Facebook</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-md shadow-md"
            : "bg-ivory/80 backdrop-blur-sm"
        }`}
        style={{ backgroundColor: scrolled ? "oklch(0.97 0.008 80 / 0.95)" : "oklch(0.97 0.008 80 / 0.8)" }}
      >
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-sm bg-burgundy flex items-center justify-center">
              <span className="text-gold font-display text-xl font-bold leading-none" style={{ fontFamily: "var(--font-display)" }}>AE</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-burgundy font-semibold text-lg tracking-wide leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                Aston & Earle
              </div>
              <div className="text-burgundy/60 text-[10px] uppercase tracking-[0.25em] leading-tight">
                Transport
              </div>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-espresso/80 hover:text-burgundy text-sm font-medium uppercase tracking-wider transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("contact")}
              className="hidden sm:inline-flex items-center gap-2 bg-burgundy text-white px-5 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-burgundy-light transition-all duration-200 active:scale-[0.97]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Get a Quote
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-burgundy"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gold/20 bg-ivory pb-4" style={{ backgroundColor: "oklch(0.97 0.008 80)" }}>
            <div className="container flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left py-3 px-2 text-espresso/80 hover:text-burgundy hover:bg-stone/50 text-sm font-medium uppercase tracking-wider transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-2 pt-3 border-t border-gold/20 flex flex-col gap-2 px-2">
                <a href="mailto:oliver@astonearle.com" className="flex items-center gap-2 text-sm text-espresso/70">
                  <Mail className="w-4 h-4" /> oliver@astonearle.com
                </a>
                <a href="tel:+447473252561" className="flex items-center gap-2 text-sm text-espresso/70">
                  <Phone className="w-4 h-4" /> +44 7473 252561
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
