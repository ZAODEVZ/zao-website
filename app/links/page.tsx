import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { LINK_GROUPS, LINKS_VERIFIED_ON } from '@/lib/links'

export const metadata: Metadata = {
  alternates: { canonical: '/links' },
  title: 'Everything in one place - The ZAO',
  description:
    'Every public surface in the ZAO ecosystem: the network, what we build, where to collect and support, and where to follow along.',
  openGraph: {
    title: 'Everything in one place - The ZAO',
    description: 'Every public surface in the ZAO ecosystem, in one page.',
    url: 'https://thezao.com/links',
    siteName: 'The ZAO',
    type: 'website',
  },
}

export default function Links() {
  const total = LINK_GROUPS.reduce((n, g) => n + g.links.length, 0)

  return (
    <main className="min-h-screen">
      <Nav />

      <section className="py-16 sm:py-24" style={{ borderBottom: '1px solid var(--zao-border)' }}>
        <Container>
          <div className="space-y-6 sm:space-y-8">
            <p
              className="text-xs font-medium uppercase tracking-[0.18em]"
              style={{ color: 'var(--zao-cream)' }}
            >
              The whole ecosystem
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
              Everything in one place.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed sm:text-xl" style={{ color: 'var(--zao-text)' }}>
              The ZAO is a lot of things at once - a network, a festival, a battle platform, a
              build-a-thon, a label. {total} places to find it, all in one page.
            </p>
          </div>
        </Container>
      </section>

      {LINK_GROUPS.map((group) => (
        <Section key={group.heading} heading={group.heading}>
          {group.note && (
            <p className="section-sub -mt-4 mb-8" style={{ color: 'var(--zao-cream-dim)' }}>
              {group.note}
            </p>
          )}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {group.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded p-5 transition-all hover:scale-[1.02] sm:p-6"
                style={{ border: '1px solid var(--zao-border)', backgroundColor: 'var(--zao-panel)' }}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-base font-medium sm:text-lg" style={{ color: 'var(--zao-cream)' }}>
                    {link.name}
                  </p>
                  {link.offsite && (
                    <span className="shrink-0 text-xs" style={{ color: 'var(--zao-cream-dim)' }}>
                      offsite
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--zao-cream-dim)' }}>
                  {link.blurb}
                </p>
                <p className="mt-3 text-xs" style={{ color: 'var(--zao-cream-dim)' }}>
                  {link.href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                </p>
              </a>
            ))}
          </div>
        </Section>
      ))}

      <section className="pb-16 sm:pb-24">
        <Container>
          <p className="text-xs" style={{ color: 'var(--zao-cream-dim)' }}>
            Every link on this page was fetched and confirmed working on {LINKS_VERIFIED_ON}.
          </p>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
