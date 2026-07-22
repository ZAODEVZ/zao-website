import Link from 'next/link'
import { Container } from './Container'
import { NAV_LINKS } from '@/lib/constants'

export function Nav() {
  return (
    <nav className="py-6" style={{ borderBottom: '1px solid var(--zao-border)' }}>
      <Container className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold" style={{ color: 'var(--zao-cream)' }}>
          The ZAO
        </Link>
        <div className="hidden gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: 'var(--zao-cream)' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  )
}
