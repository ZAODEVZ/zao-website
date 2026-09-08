import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { WHITEPAPER, chapterUrl } from '@/lib/papers'

export const metadata: Metadata = {
  alternates: { canonical: '/papers' },
  title: 'Papers - The ZAO',
  description:
    'The ZAO Fractal Whitepaper: earned governance, verified on-chain. Read the full paper and its twelve chapters - the theory, the mechanics, and the on-chain architecture behind a vote you earn, not buy.',
  openGraph: {
    title: 'Papers - The ZAO',
    description: 'The ZAO Fractal Whitepaper - earned governance, verified on-chain.',
    url: 'https://thezao.com/papers',
    siteName: 'The ZAO',
    type: 'website',
    images: ['https://zao-website.vercel.app/og-image.png'],
  },
}

export default function Papers() {
  return (
    <main className="min-h-screen">
      <Nav />

      <section className="py-16 sm:py-24" style={{ borderBottom: '1px solid var(--zao-border)' }}>
        <Container>
          <div className="space-y-6 sm:space-y-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: 'var(--zao-cream)' }}>
              Papers
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
              The thinking behind The ZAO.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed sm:text-xl" style={{ color: 'var(--zao-text)' }}>
              The core of The ZAO is an idea: a vote is something you earn, not something you
              buy. The whitepaper argues it in full - the theory, the mechanics, and the
              verifiable on-chain architecture.
            </p>
          </div>
        </Container>
      </section>

      {/* The whitepaper */}
      <Section heading={WHITEPAPER.title}>
        <div className="max-w-3xl space-y-5">
          <p className="text-lg" style={{ color: 'var(--zao-cream)' }}>
            {WHITEPAPER.subtitle} <span style={{ color: 'var(--zao-cream-faint)' }}>({WHITEPAPER.version})</span>
          </p>
          <p style={{ color: 'var(--zao-cream-dim)' }}>{WHITEPAPER.abstract}</p>
          <div className="pt-1">
            <Button href={WHITEPAPER.readUrl} variant="primary" external>
              Read the full whitepaper
            </Button>
          </div>
        </div>
      </Section>

      {/* Chapters */}
      <Section heading="Chapters">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {WHITEPAPER.chapters.map((c) => (
            <a
              key={c.n}
              href={chapterUrl(c.slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 rounded p-4 transition-all hover:-translate-y-0.5 sm:p-5"
              style={{ border: '1px solid var(--zao-border)', backgroundColor: 'var(--zao-panel)' }}
            >
              <div
                className="shrink-0 font-bold tabular-nums"
                style={{ color: 'var(--zao-cream-faint)', minWidth: '1.5rem' }}
              >
                {String(c.n).padStart(2, '0')}
              </div>
              <div>
                <div className="font-bold" style={{ color: 'var(--zao-cream)' }}>
                  {c.title}
                </div>
                <div className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--zao-cream-dim)' }}>
                  {c.blurb}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Read it in full</h2>
            <p className="mb-8 text-base leading-relaxed sm:text-lg" style={{ color: 'var(--zao-cream-dim)' }}>
              The whitepaper is the clearest window into how The ZAO governs itself.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button href={WHITEPAPER.readUrl} external>
                Read the whitepaper
              </Button>
              <Button href="/zao-leaderboard" variant="secondary">
                How Respect works
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
