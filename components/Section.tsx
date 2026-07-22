import { Container } from './Container'

export function Section({
  children,
  eyebrow,
  heading,
  bordered = true,
  className = '',
}: {
  children: React.ReactNode
  eyebrow?: string
  heading?: string
  bordered?: boolean
  className?: string
}) {
  return (
    <section
      className={`py-16 sm:py-24 ${className}`}
      style={bordered ? { borderBottom: '1px solid var(--zao-border)' } : undefined}
    >
      <Container>
        {eyebrow ? (
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.18em]"
            style={{ color: 'var(--zao-cream)' }}
          >
            {eyebrow}
          </p>
        ) : null}
        {heading ? (
          <h2 className="mb-8 text-2xl font-bold sm:text-3xl">{heading}</h2>
        ) : null}
        {children}
      </Container>
    </section>
  )
}
