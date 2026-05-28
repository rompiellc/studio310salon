import type { Metadata } from 'next'
import Image from 'next/image'
import { Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse Studio 310 Hair Salon\'s work — braids, color, extensions, blowouts, and more. Located in Charlestown, Boston.',
}

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    alt: 'Braided protective style',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    alt: 'Precision cut and blowout',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    alt: 'Balayage color highlights',
  },
  {
    src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80',
    alt: 'Natural curl definition',
  },
  {
    src: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e9?w=800&q=80',
    alt: 'Silk press finish',
  },
  {
    src: 'https://images.unsplash.com/photo-1614084689073-9fb1a8d8c5e3?w=800&q=80',
    alt: 'Box braids installation',
  },
  {
    src: 'https://images.unsplash.com/photo-1597983073493-88cd30e27b3b?w=800&q=80',
    alt: 'Vibrant hair color',
  },
  {
    src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=800&q=80',
    alt: 'Hair styling in salon',
  },
  {
    src: 'https://images.unsplash.com/photo-1594897030264-ab7d87efc473?w=800&q=80',
    alt: 'Special occasion updo',
  },
]

export default function GalleryPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-[#FDF0F3]" aria-label="Gallery header">
        <div className="mx-auto max-w-6xl">
          <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.35em] uppercase text-[#C4607A] mb-3">
            Our Work
          </p>
          <h1
            className="font-[family-name:var(--font-playfair)] text-[#2C1518]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            The Gallery
          </h1>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section className="py-20 px-6 md:px-10 bg-[#FFFBFC]" aria-label="Photo gallery">
        <div className="mx-auto max-w-6xl">
          <p className="font-[family-name:var(--font-inter)] text-[#9E7A80] text-sm italic text-center mb-14 leading-relaxed">
            A glimpse into the transformations that happen every day at Studio 310.
          </p>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid relative overflow-hidden rounded-sm group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={i < 3 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-[#C4607A]/0 group-hover:bg-[#C4607A]/20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 md:px-10 bg-[#FDF0F3] text-center" aria-label="Book a service">
        <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.35em] uppercase text-[#C4607A] mb-4">
          Love What You See?
        </p>
        <h2
          className="font-[family-name:var(--font-playfair)] text-[#2C1518] mb-6"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
        >
          Book Your Appointment
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-[#9E7A80] text-sm mb-8 max-w-md mx-auto leading-relaxed">
          Call us or stop by — we&apos;re always happy to find the perfect look for you.
        </p>
        <a
          href="tel:+16172410089"
          className="inline-flex items-center gap-2 px-10 py-4 bg-[#C4607A] text-white font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#9E4D64] transition-all duration-300 hover:-translate-y-0.5 rounded-sm"
        >
          <Phone size={14} />
          (617) 241-0089
        </a>
      </section>
    </>
  )
}
