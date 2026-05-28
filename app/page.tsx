import Image from 'next/image'
import Link from 'next/link'
import { Phone, MapPin, ArrowRight } from 'lucide-react'

const services = [
  'Balayage', 'Blow Dry', 'Curly Hair', 'Hair Braiding',
  'Hair Coloring', 'Hair Extensions', 'Hair Weaves', 'Highlights',
  'Keratin Treatment', 'Locs', 'Perm', 'Haircuts',
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/hair1.png"
            alt="Studio 310 Hair Salon"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10 py-32 w-full">
          <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.35em] uppercase text-[#C4607A] mb-4">
            Charlestown, Boston
          </p>
          <h1
            className="font-[family-name:var(--font-playfair)] text-[#2C1518] leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            Your Hair,<br />
            <span className="text-[#C4607A]">Your Story.</span>
          </h1>
          <p className="font-[family-name:var(--font-inter)] text-[#5C3A40]/70 text-base md:text-lg max-w-md mb-10 leading-relaxed">
            Premium hair services crafted for every texture, every style, every you —
            right in the heart of Charlestown.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.fresha.com/lvp/studio-310-hair-salon-main-street-boston-3oJQYv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C4607A] text-white font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#9E4D64] transition-all duration-300 hover:-translate-y-0.5 rounded-sm"
            >
              Book Now
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-[#C4607A] text-[#C4607A] font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#C4607A] hover:text-white transition-all duration-300 rounded-sm"
            >
              View Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section className="bg-[#C4607A] py-5 px-6">
        <p className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.3em] uppercase text-white/90 text-center">
          310 Main St, Charlestown MA · (617) 241-0089 · Walk-ins Welcome
        </p>
      </section>

      {/* ── ABOUT / STORY ── */}
      <section className="py-24 px-6 md:px-10 bg-[#FFFBFC]" aria-label="About Studio 310">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/hair2.png"
              alt="Stylist at work at Studio 310"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 border border-[#F2C4CE]/60 rounded-sm" />
          </div>

          <div>
            <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.35em] uppercase text-[#C4607A] mb-4">
              Our Story
            </p>
            <h2
              className="font-[family-name:var(--font-playfair)] text-[#2C1518] mb-6 leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Where Skill Meets Style
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[#5C3A40]/70 text-sm leading-relaxed mb-6">
              Located at 310 Main Street in Charlestown, Studio 310 is a full-service hair salon
              dedicated to bringing out the best in every client. From vibrant color and sleek
              blowouts to intricate braids and healthy hair treatments — our stylists are here for you.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-[#5C3A40]/70 text-sm leading-relaxed mb-10">
              We believe great hair is for everyone. That&apos;s why we offer a full range of services
              for all hair types, textures, and styles.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase text-[#C4607A] hover:text-[#9E4D64] transition-colors duration-300"
            >
              See All Services <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-24 px-6 md:px-10 bg-[#FDF0F3]" aria-label="Services overview">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.35em] uppercase text-[#C4607A] mb-3">
              What We Offer
            </p>
            <h2
              className="font-[family-name:var(--font-playfair)] text-[#2C1518]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
            {services.map((service) => (
              <div
                key={service}
                className="bg-white border border-[#F2C4CE]/60 rounded-sm px-4 py-4 text-center hover:border-[#C4607A] hover:shadow-sm transition-all duration-300 group"
              >
                <span className="font-[family-name:var(--font-inter)] text-xs text-[#5C3A40] group-hover:text-[#C4607A] transition-colors duration-300">
                  {service}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C4607A] text-white font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#9E4D64] transition-all duration-300 rounded-sm"
            >
              Full Service Menu <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ── */}
      <section className="py-24 px-6 md:px-10 bg-[#FFFBFC]" aria-label="Gallery preview">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.35em] uppercase text-[#C4607A] mb-3">
              Our Work
            </p>
            <h2
              className="font-[family-name:var(--font-playfair)] text-[#2C1518]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              The Gallery
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {[
              '/hair1.png',
              '/hair2.png',
              '/hair3.png',
              '/hair4.png',
              '/hair5.png',
              '/hair6.png',
            ].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-sm group">
                <Image
                  src={src}
                  alt={`Studio 310 gallery photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#C4607A]/0 group-hover:bg-[#C4607A]/20 transition-all duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#C4607A] text-[#C4607A] font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#C4607A] hover:text-white transition-all duration-300 rounded-sm"
            >
              View Full Gallery <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-6 md:px-10 bg-[#2C1518] text-center" aria-label="Book appointment">
        <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.35em] uppercase text-[#C4607A] mb-4">
          Ready to Book?
        </p>
        <h2
          className="font-[family-name:var(--font-playfair)] text-white mb-6"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Give Us a Call
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-[#F2C4CE]/60 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          Call or stop by at 310 Main St, Charlestown — we&apos;d love to see you.
        </p>
        <a
          href="https://www.fresha.com/lvp/studio-310-hair-salon-main-street-boston-3oJQYv"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-4 bg-[#C4607A] text-white font-[family-name:var(--font-inter)] text-sm tracking-[0.2em] uppercase font-medium hover:bg-[#9E4D64] transition-all duration-300 hover:-translate-y-0.5 rounded-sm"
        >
          Book Now on Fresha
        </a>
        <div className="mt-6 flex items-center justify-center gap-2 text-[#F2C4CE]/40">
          <MapPin size={13} />
          <span className="font-[family-name:var(--font-inter)] text-xs">310 Main St, Charlestown MA 02129</span>
        </div>
      </section>
    </>
  )
}
