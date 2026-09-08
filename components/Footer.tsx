import { Container } from './Container'

export function Footer() {
  return (
    <footer className="py-8 text-center" style={{ borderTop: '1px solid var(--zao-border)' }}>
      <Container>
        <p style={{ color: 'var(--zao-cream-faint)' }}>
          The ZAO - a decentralized impact network bringing profit margin, data and IP
          rights back to artists.
        </p>
        {/* Cross-link, not a redirect. thezao.com and thezao.xyz are deliberately
            separate products; this exists so a visitor on one can find the other. */}
        <p className="mt-3 text-sm" style={{ color: 'var(--zao-cream-dim)' }}>
          Looking for the coworking space?{' '}
          <a
            href="https://thezao.xyz"
            className="underline underline-offset-4 transition-opacity hover:opacity-70"
            style={{ color: 'var(--zao-cream)' }}
          >
            The ZAO Co-Works
          </a>{' '}
          is at thezao.xyz.
        </p>
      </Container>
    </footer>
  )
}
