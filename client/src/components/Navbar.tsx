/*
 * Navbar – Aston & Earle Transport V2
 * Design: Premium modern, white bg, maroon/cream, bold typography
 * Real logo prominently displayed
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Mail, Menu, X } from "lucide-react";

const LOGO = "/images/ae-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location === href;

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-charcoal text-white/80 text-[13px]">
        <div className="container flex justify-between items-center py-2.5">
          <div className="flex items-center gap-8">
            <a href="mailto:oliver@astonearle.com" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
              <Mail className="w-3.5 h-3.5 text-maroon-light" />
              oliver@astonearle.com
            </a>
            <a href="tel:+447473252561" className="flex items-center gap-2 hover:text-white transition-colors duration-200">
              <Phone className="w-3.5 h-3.5 text-maroon-light" />
              +44 7473 252561
            </a>
          </div>
          <div className="flex items-center gap-6 text-white/60">
            <span>UK</span>
            <span className="text-white/20">|</span>
            <span>Ireland</span>
            <span className="text-white/20">|</span>
            <span>Europe</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-sm border-border"
            : "bg-white border-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src={LOGO}
              alt="Aston & Earle Transport"
              className="h-[60px] w-auto object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-maroon"
                    : "text-charcoal/70 hover:text-maroon"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <div className="h-[2px] bg-maroon mt-1 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/447473252561"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-[13px] font-semibold text-charcoal/70 hover:text-maroon transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.508-.182-.006-.372-.007-.57-.007-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-maroon text-white px-6 py-2.5 text-[13px] font-bold uppercase tracking-[0.1em] hover:bg-maroon-light transition-all duration-200 active:scale-[0.97]"
            >
              Get a Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-charcoal"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white pb-6">
            <div className="container flex flex-col pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3.5 text-[14px] font-semibold uppercase tracking-[0.1em] border-b border-border/50 transition-colors duration-200 ${
                    isActive(link.href) ? "text-maroon" : "text-charcoal/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="bg-maroon text-white text-center py-3 text-[13px] font-bold uppercase tracking-[0.1em]"
                >
                  Get a Quote
                </Link>
                <div className="flex items-center gap-4 pt-2 text-sm text-charcoal/60">
                  <a href="mailto:oliver@astonearle.com" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> oliver@astonearle.com
                  </a>
                </div>
                <a href="tel:+447473252561" className="flex items-center gap-2 text-sm text-charcoal/60">
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
