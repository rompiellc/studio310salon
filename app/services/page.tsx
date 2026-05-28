import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Studio 310 Hair Salon full service menu — balayage, braiding, hair extensions, color, highlights, keratin treatments, locs, perms, and more in Charlestown, Boston.',
}

const services = [
  {
    name: 'Balayage',
    description:
      'Sun-kissed, natural-looking color hand-painted through your hair for a soft, dimensional, lived-in effect.',
  },
  {
    name: 'Blow Dry',
    description:
      'A smooth, voluminous blow-dry finish that adds shine and body while keeping your hair healthy.',
  },
  {
    name: 'Curly Hair',
    description:
      'Specialized cutting and styling techniques designed to celebrate and define your natural curl pattern.',
  },
  {
    name: 'Hair Braiding',
    description:
      'From box braids to cornrows and knotless styles — intricate braid work installed with care and precision.',
  },
  {
    name: 'Hair Coloring',
    description:
      'Full color services using professional-grade formulas designed for richness, longevity, and hair health.',
  },
  {
    name: 'Hair Extensions',
    description:
      'Add length, volume, or dimension with expert extension application matched to your texture and tone.',
  },
  {
    name: 'Hair Weaves',
    description:
      'Full and partial sew-in weave installations tailored to your desired look, density, and lifestyle.',
  },
  {
    name: 'Highlights',
    description:
      'Dimensional highlights applied by hand or foil to brighten your base and add movement and depth.',
  },
  {
    name: 'Keratin Treatment',
    description:
      'A smoothing treatment that reduces frizz, enhances shine, and cuts styling time — lasting up to 5 months.',
  },
  {
    name: 'Locs',
    description:
      'Loc starting, maintenance, retwisting, and styling services to keep your locs healthy and thriving.',
  },
  {
    name: 'Perm',
    description:
      'Add lasting curl, wave, or texture with a professional perm service customized to your desired look.',
  },
  {
    name: 'Haircuts',
    description:
      'Precision cuts tailored to your face shape, texture, and lifestyle — for all hair types and lengths.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-36 pb-16 px-6 md:px-10 bg-[#FDF0F3]" aria-label="Services header">
        <div className="mx-auto max-w-6xl">
          <p className="font-[family-name:var(--font-inter)] text-[11px] tracking-[0.35em] uppercase text-[#C4607A] mb-3">
            What We Offer
          </p>
          <h1
            className="font-[family-name:var(--font-playfair)] text-[#2C1518]"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Our Services
          </h1>
        </div>
      </section>

      {/* ── SERVICE LIST ── */}
      <section className="py-20 px-6 md:px-10 bg-[#FFFBFC]" aria-label="Service menu">
        <div className="mx-auto max-w-4xl">
          <p className="font-[family-name:var(--font-inter)] italic text-[#9E7A80] text-sm text-center mb-16 leading-relaxed">
            All services include a personal consultation. Call us for pricing and availability.
          </p>

          <div className="space-y-0">
            {services.map((service, i) => (
              <div key={service.name}>
                <div className="py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 group">
                  <div className="flex-1 max-w-xl">
                    <h2 className="font-[family-name:var(--font-playfair)] text-xl text-[#2C1518] mb-1.5 group-hover:text-[#C4607A] transition-colors duration-300">
                      {service.name}
                    </h2>
                    <p className="font-[family-name:var(--font-inter)] text-xs text-[#9E7A80] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <a
                    href="https://www.fresha.com/lvp/studio-310-hair-salon-main-street-boston-3oJQYv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] uppercase text-[#C4607A] hover:text-[#9E4D64] transition-colors duration-300 whitespace-nowrap flex-shrink-0"
                  >
                    Book Now <ArrowRight size={10} />
                  </a>
                </div>
                {i < services.length - 1 && (
                  <div className="h-px bg-[#F2C4CE]/40" />
                )}
              </div>
            ))}
          </div>

          {/* Pricing note */}
          <div className="mt-16 p-8 border border-[#F2C4CE]/60 bg-[#FDF0F3] rounded-sm text-center">
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#9E7A80] leading-relaxed">
              Pricing varies based on hair length, density, and service complexity.
              Call us at{' '}
              <a href="tel:+16172410089" className="text-[#C4607A] hover:underline">
                (617) 241-0089
              </a>{' '}
              for a quote or to schedule your appointment.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://www.fresha.com/lvp/studio-310-hair-salon-main-street-boston-3oJQYv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#C4607A] text-white font-[family-name:var(--font-inter)] text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-[#9E4D64] transition-all duration-300 hover:-translate-y-0.5 rounded-sm"
            >
              Book Now on Fresha
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
