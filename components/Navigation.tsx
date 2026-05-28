'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#F2C4CE]/40'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <nav
          className="mx-auto max-w-6xl px-6 md:px-10 h-20 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none" aria-label="Studio 310 — Home">
            <span className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#C4607A] tracking-wide">
              Studio 310
            </span>
            <span className="font-[family-name:var(--font-inter)] text-[9px] tracking-[0.25em] uppercase text-[#9E7A80]">
              Hair Salon
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10" role="list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`nav-link text-[11px] tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] transition-colors duration-300 ${
                      isActive
                        ? 'text-[#C4607A] active'
                        : 'text-[#5C3A40]/70 hover:text-[#C4607A]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Book CTA */}
          <a
            href="tel:+16172410089"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-[#C4607A] text-white text-[10px] tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] font-medium hover:bg-[#9E4D64] transition-all duration-300 hover:-translate-y-0.5 rounded-sm"
          >
            Call to Book
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-[#C4607A] hover:text-[#9E4D64] transition-colors duration-300 p-1"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col items-center gap-8" role="list">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      className={`font-[family-name:var(--font-playfair)] text-3xl transition-colors duration-300 ${
                        pathname === link.href ? 'text-[#C4607A]' : 'text-[#2C1518] hover:text-[#C4607A]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + navLinks.length * 0.07 }}
                >
                  <a
                    href="tel:+16172410089"
                    className="mt-4 inline-flex items-center px-8 py-3 bg-[#C4607A] text-white text-sm tracking-[0.2em] uppercase font-[family-name:var(--font-inter)] font-medium rounded-sm"
                  >
                    Call to Book
                  </a>
                </motion.li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
