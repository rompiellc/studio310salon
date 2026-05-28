import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Browse Studio 310 Hair Salon\'s work — braids, color, extensions, blowouts, and more. Located in Charlestown, Boston.',
}

const galleryImages = [
  { src: '/hair1.png', alt: 'Hair styling at Studio 310', width: 243, height: 304 },
  { src: '/hair2.png', alt: 'Hair styling at Studio 310', width: 243, height: 244 },
  { src: '/hair3.png', alt: 'Hair styling at Studio 310', width: 243, height: 406 },
  { src: '/hair4.png', alt: 'Hair styling at Studio 310', width: 243, height: 406 },
  { src: '/hair5.png', alt: 'Hair styling at Studio 310', width: 243, height: 244 },
  { src: '/hair6.png', alt: 'Hair styling at Studio 310', width: 243, height: 406 },
  { src: '/hair7.png', alt: 'Hair styling at Studio 310', width: 243, height: 406 },
  { src: '/hair8.png', alt: 'Hair styling at Studio 310', width: 243, height: 244 },
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
                  width={img.width}
                  height={img.height}
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
          href="https://www.fresha.com/lvp/studio-310-hair-salon-main-street-boston-3oJQYv"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-10 py-4 bg-[#C4607A] text-white font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#9E4D64] transition-all duration-300 hover:-translate-y-0.5 rounded-sm"
        >
          Book Now on Fresha
        </a>
      </section>
    </>
  )
}
