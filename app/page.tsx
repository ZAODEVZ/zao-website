import { Nav } from '@/components/Nav'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { ArtistCard } from '@/components/ArtistCard'
import { EcosystemCard } from '@/components/EcosystemCard'
import { StatTile } from '@/components/StatTile'
import { NOTABLE_ARTISTS, ECOSYSTEM } from '@/lib/constants'
import { getWaveWarZStats, fmtUsd, fmtNum } from '@/lib/wavewarz'

const WHITEPAPER_URL = 'https://zaofractal.vercel.app/whitepaper/zao-fractal-whitepaper'

export default async function Home() {
  const ww = await getWaveWarZStats()

  return (
    <main className="min-h-screen">
      <Nav />

      {/* Hero - lead with the thesis */}
      <section className="py-16 sm:py-24" style={{ borderBottom: '1px solid var(--zao-border)' }}>
        <Container>
          <div className="space-y-6 sm:space-y-8">
            <p className="text-xs font-medium uppercase tracking-[0.18em]" style={{ color: 'var(--zao-cream)' }}>
              Web3 music community & incubator
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
              A home where artists own their work.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed sm:text-xl" style={{ color: 'var(--zao-text)' }}>
              The ZAO builds tools, spaces, and systems for artists and creators - and governs
              itself with a vote you earn, not one you buy. Built in the open, on Farcaster and Base.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="/community">Explore the community</Button>
              <Button href={WHITEPAPER_URL} variant="secondary" external>
                Read the whitepaper
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Proof - live and firm numbers */}
      <Section heading="By the numbers">
        <p className="-mt-4 mb-8 max-w-2xl" style={{ color: 'var(--zao-cream-dim)' }}>
          Receipts, not vanity. WaveWarZ figures are pulled live from chain; the rest are the
          current community counts.
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          <StatTile value="188" label="Community members" />
          <StatTile value="156" label="Respect holders" />
          {ww ? (
            <>
              <StatTile value={fmtNum(ww.battles)} label="WaveWarZ battles" />
              <StatTile value={fmtUsd(ww.volumeUsd)} label="On-chain volume traded" />
              <StatTile value={fmtUsd(ww.artistPayoutsUsd)} label="Paid to artists" />
            </>
          ) : (
            <StatTile value="Live" label="WaveWarZ battles on Solana" />
          )}
        </div>
      </Section>

      {/* Governance spine - the differentiator */}
      <Section heading="Earned, not bought">
        <div className="max-w-2xl space-y-4">
          <p style={{ color: 'var(--zao-cream-dim)' }}>
            In most communities a vote is something you buy - hold the most tokens, hold the
            most power. The ZAO takes the opposite position. Here, a vote is something you earn,
            through Respect: an onchain reputation built by showing up and contributing, ranked
            by peers each week. It cannot be bought, sold, or transferred.
          </p>
          <p style={{ color: 'var(--zao-cream-dim)' }}>
            The whitepaper lays out the theory, the mechanics, and the verifiable on-chain
            architecture in full.
          </p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <Button href={WHITEPAPER_URL} variant="primary" external>
              Read the whitepaper
            </Button>
            <Button href="/zao-leaderboard" variant="secondary">
              How Respect works
            </Button>
          </div>
        </div>
      </Section>

      {/* Ecosystem */}
      <Section heading="What we build">
        <p className="-mt-4 mb-8 max-w-2xl" style={{ color: 'var(--zao-cream-dim)' }}>
          Everything under the umbrella serves the same idea. Each is its own project, built in
          the open. See them all in the <a href="/nexus" style={{ color: 'var(--zao-cream)' }}>Nexus</a>.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {ECOSYSTEM.map((p) => (
            <EcosystemCard key={p.name} name={p.name} blurb={p.blurb} href={p.href} />
          ))}
        </div>
      </Section>

      <Section heading="Notable artists & builders">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {NOTABLE_ARTISTS.map((artist) => (
            <ArtistCard key={artist} name={artist} />
          ))}
        </div>
      </Section>

      {/* Convert */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">Come build with us</h2>
            <p className="mb-8 text-base leading-relaxed sm:text-lg" style={{ color: 'var(--zao-cream-dim)' }}>
              Whether you make music, build tools, or just like what we are doing, there is a
              place for you here. Show up, contribute, and earn your standing.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="https://farcaster.xyz/~/channel/zao" external>
                Join on Farcaster
              </Button>
              <Button href="/nexus" variant="secondary">
                Browse the Nexus
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
