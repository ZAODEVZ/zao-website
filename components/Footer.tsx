import { Container } from './Container'

export function Footer() {
  return (
    <footer className="py-8 text-center" style={{ borderTop: '1px solid var(--zao-border)' }}>
      <Container>
        <p style={{ color: 'var(--zao-cream-faint)' }}>
          The ZAO - a web3 music community building tools for artists to own their work.
        </p>
      </Container>
    </footer>
  )
}
