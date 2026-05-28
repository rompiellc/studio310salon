import Link from 'next/link'
import { MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2C1518] text-[#F2C4CE]/70">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#F2C4CE] tracking-wide block mb-2">
              Studio 310
            </span>
            <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.25em] uppercase text-[#F2C4CE]/50 block mb-5">
              Hair Salon
            </span>
            <p className="font-[family-name:var(--font-inter)] text-xs leading-relaxed text-[#F2C4CE]/50">
              Premium hair services in the heart of Charlestown, Boston.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C4607A] mb-6">
              Pages
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/gallery', label: 'Gallery' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-[family-name:var(--font-inter)] text-xs text-[#F2C4CE]/60 hover:text-[#F2C4CE] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-[#C4607A] mb-6">
              Visit Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C4607A] mt-0.5 flex-shrink-0" />
                <address className="not-italic font-[family-name:var(--font-inter)] text-xs text-[#F2C4CE]/60 leading-relaxed">
                  310 Main St<br />
                  Charlestown, MA 02129
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#C4607A] flex-shrink-0" />
                <a
                  href="tel:+16172410089"
                  className="font-[family-name:var(--font-inter)] text-xs text-[#F2C4CE]/60 hover:text-[#F2C4CE] transition-colors duration-300"
                >
                  (617) 241-0089
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-[#F2C4CE]/10 mb-8" />

        <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-widest uppercase text-[#F2C4CE]/30 text-center">
          © 2026 Studio 310 Hair Salon. All rights reserved. · Charlestown, Boston
        </p>
      </div>
    </footer>
  )
}
