/*
 * Footer – Aston & Earle Transport V2
 * Design: Dark charcoal footer, maroon accents, clean modern layout
 */
import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      {/* Maroon accent line */}
      <div className="h-1 bg-maroon" />

      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-maroon flex items-center justify-center">
                <span className="text-cream font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>AE</span>
              </div>
              <div>
                <div className="text-white font-bold text-base tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  ASTON & EARLE
                </div>
                <div className="text-maroon-light text-[9px] uppercase tracking-[0.35em] font-semibold">Transport</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Premium logistics brokerage connecting businesses to trusted haulage solutions across the UK, Ireland and Europe.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 hover:bg-maroon/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 hover:bg-maroon/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/></svg>
              </a>
              <a href="https://wa.me/447473252561" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/5 hover:bg-maroon/20 flex items-center justify-center text-white/50 hover:text-white transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.508-.182-.006-.372-.007-.57-.007-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6" style={{ fontFamily: "var(--font-heading)" }}>Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Contact / Quote", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6" style={{ fontFamily: "var(--font-heading)" }}>Services</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>UK Transport</li>
              <li>European Freight</li>
              <li>Irish Freight</li>
              <li>Refrigerated Transport</li>
              <li>Time Critical Loads</li>
              <li>Pallet & Part Loads</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6" style={{ fontFamily: "var(--font-heading)" }}>Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:oliver@astonearle.com" className="flex items-start gap-3 text-white/50 hover:text-white text-sm transition-colors duration-200">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-maroon-light" />
                  oliver@astonearle.com
                </a>
              </li>
              <li>
                <a href="tel:+447473252561" className="flex items-start gap-3 text-white/50 hover:text-white text-sm transition-colors duration-200">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-maroon-light" />
                  +44 7473 252561
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-maroon-light" />
                  Tibley, Gloucestershire
                </div>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-[11px] uppercase tracking-[0.15em] text-white/30 mb-1">Business Hours</p>
              <p className="text-sm text-white/60">Mon – Fri: 06:00 – 20:00</p>
              <p className="text-sm text-white/60">Sat: 07:00 – 14:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/8">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Aston & Earle Transport. All rights reserved.
          </p>
          <p className="text-white/30 text-xs uppercase tracking-[0.15em]">
            European Logistics. Done Properly.
          </p>
        </div>
      </div>
    </footer>
  );
}
