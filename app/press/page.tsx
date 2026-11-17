import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { PRESS_COVERAGE, PRESS_EVENTS, PRESS_TALKS, type ProofItem } from '@/lib/press'

export const metadata: Metadata = {
  alternates: { canonical: '/press' },
  title: 'Press - The ZAO',
  description: 'Events, coverage and talks from The ZAO. Every line links to the recording, the page or the show that proves it.',
  openGraph: {
    title: 'Press - The ZAO',
    description: 'Events, coverage and talks from The ZAO, each with its proof.',
    url: 'https://thezao.com/press',
    siteName: 'The ZAO',
    type: 'website',
    images: ['https://thezao.com/og-image.png'],
  },
}

function fmt(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })
}

function ProofList({ items }: { items: ProofItem[] }) {
  return (
    <ul className="divide-y" style={{ borderTop: '1px solid var(--zao-border)', borderBottom: '1px solid var(--zao-border)' }}>
      {items.map((i) => (
        <li key={i.href} className="py-5" style={{ borderColor: 'var(--zao-border)' }}>
          <a href={i.href} target="_blank" rel="noreferrer" className="group grid gap-1 sm:grid-cols-[9rem_1fr_auto] sm:items-baseline sm:gap-6">
            <span className="text-sm" style={{ color: 'var(--zao-cream-dim)' }}>{fmt(i.date)}</span>
            <span>
              <span className="text-lg font-semibold group-hover:underline">{i.title}</span>
              <span className="block text-sm" style={{ color: 'var(--zao-cream-dim)' }}>{i.where}</span>
            </span>
            <span className="text-sm" style={{ color: 'var(--zao-cream)' }}>See it -&gt;</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function Press() {
  return (
    <main className="min-h-screen">
      <Nav />
      <section className="py-16 sm:py-24" style={{ borderBottom: '1px solid var(--zao-border)' }}>
        <Container>
          <p className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: 'var(--zao-cream)' }}>
            Press
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">Don&apos;t take our word for it.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: 'var(--zao-text)' }}>
            Every line on this page links to the recording, the page or the show that proves it.
          </p>
        </Container>
      </section>
      <Section eyebrow="Events" heading="Where we have played">
        <ProofList items={PRESS_EVENTS} />
      </Section>
      <Section eyebrow="Coverage" heading="Where we have been featured">
        <ProofList items={PRESS_COVERAGE} />
      </Section>
      <Section eyebrow="Talks" heading="Where we have spoken">
        <ProofList items={PRESS_TALKS} />
      </Section>
      <Footer />
    </main>
  )
}
