'use client'

import Link from 'next/link'
import { NOTABLE_ARTISTS, NAV_LINKS } from '@/lib/constants'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#141e27' }}>
      {/* Navigation */}
      <nav className="py-6 px-4 sm:px-8 border-b" style={{ borderColor: '#e0ddaa' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold" style={{ color: '#e0ddaa' }}>
            The ZAO
          </div>
          <div className="hidden sm:flex gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:opacity-80 transition-opacity"
                style={{ color: '#e0ddaa' }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 border-b" style={{ borderColor: '#e0ddaa' }}>
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-6xl font-bold leading-tight" style={{ color: '#e0ddaa' }}>
              The ZAO
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl leading-relaxed" style={{ color: '#ffffff' }}>
              A web3 music community and incubator. We build tools, spaces, and systems for artists and creators who want to own their work and grow on their own terms.
            </p>
            <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#c0bfaa' }}>
              From the stage to the chain, from the workshop to the wallet. Where music meets technology, and community drives everything.
            </p>
          </div>
        </div>
      </section>

      {/* Notable Artists Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8 border-b" style={{ borderColor: '#e0ddaa' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12" style={{ color: '#e0ddaa' }}>
            Notable Artists & Builders
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {NOTABLE_ARTISTS.map((artist) => (
              <div
                key={artist}
                className="p-4 sm:p-6 rounded border text-center transition-all hover:scale-105"
                style={{
                  borderColor: '#e0ddaa',
                  backgroundColor: 'rgba(224, 221, 170, 0.05)',
                }}
              >
                <p className="font-medium text-sm sm:text-base" style={{ color: '#e0ddaa' }}>
                  {artist}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#e0ddaa' }}>
            Join the Community
          </h2>
          <p className="text-base sm:text-lg mb-8 leading-relaxed" style={{ color: '#c0bfaa' }}>
            Whether you make music, build tools, or just love what we are doing, there is a place for you here. Come build with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/community"
              className="px-8 py-3 rounded font-semibold transition-opacity hover:opacity-80"
              style={{
                backgroundColor: '#e0ddaa',
                color: '#141e27',
              }}
            >
              Explore Community
            </Link>
            <a
              href="https://farcaster.xyz/~/channel/zao"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded font-semibold border transition-all hover:scale-105"
              style={{
                borderColor: '#e0ddaa',
                color: '#e0ddaa',
              }}
            >
              Follow on Farcaster
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-8 border-t text-center" style={{ borderColor: '#e0ddaa' }}>
        <div className="max-w-6xl mx-auto">
          <p style={{ color: '#9d9a7f' }}>
            The ZAO - a web3 music community building tools for artists to own their work.
          </p>
        </div>
      </footer>
    </main>
  )
}
