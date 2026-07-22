import Link from 'next/link'

type ButtonProps = {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  external?: boolean
}

const base =
  'inline-flex items-center justify-center px-8 py-3 rounded font-semibold transition-all hover:scale-[1.03]'

const styles: Record<'primary' | 'secondary', React.CSSProperties> = {
  primary: { backgroundColor: 'var(--zao-cream)', color: 'var(--zao-dark)' },
  secondary: { border: '1px solid var(--zao-border)', color: 'var(--zao-cream)' },
}

export function Button({ href, children, variant = 'primary', external }: ButtonProps) {
  const style = styles[variant]
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base} style={style}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={base} style={style}>
      {children}
    </Link>
  )
}
