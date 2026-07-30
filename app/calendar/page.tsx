import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  alternates: { canonical: '/calendar' },
  title: 'Calendar - The ZAO',
  description:
    'What is happening in The ZAO - shows, sessions, and events. The community calendar, live on Luma.',
  openGraph: {
    title: 'Calendar - The ZAO',
    description: 'Shows, sessions, and events across The ZAO community.',
    url: 'https://thezao.com/calendar',
    siteName: 'The ZAO',
    type: 'website',
  },
}

const LUMA_CALENDAR = 'https://lu.ma/zao'
const LUMA_EMBED = 'https://lu.ma/embed/calendar/cal-jPH4al7AMlXzdNN/events'

export default function Calendar() {
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
              Calendar
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
              What is happening.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed sm:text-xl" style={{ color: 'var(--zao-text)' }}>
              Shows, sessions, and events across the community. Subscribe on Luma so the next
              one lands in your calendar.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div
            className="overflow-hidden rounded"
            style={{ border: '1px solid var(--zao-border)', backgroundColor: 'var(--zao-panel)' }}
          >
            <iframe
              src={LUMA_EMBED}
              title="The ZAO events calendar"
              className="w-full"
              style={{ height: '640px', border: 'none' }}
              loading="lazy"
              allowFullScreen
            />
          </div>
          <div className="mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row">
            <Button href={LUMA_CALENDAR} variant="primary" external>
              Open the full calendar
            </Button>
            <Button href="https://farcaster.xyz/~/channel/zao" variant="secondary" external>
              Get updates on Farcaster
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
