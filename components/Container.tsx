export function Container({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`mx-auto w-full px-4 sm:px-8 ${className}`}
      style={{ maxWidth: 'var(--zao-maxw)' }}
    >
      {children}
    </div>
  )
}
