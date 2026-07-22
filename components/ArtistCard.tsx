export function ArtistCard({ name }: { name: string }) {
  return (
    <div
      className="rounded p-4 text-center transition-all hover:scale-105 sm:p-6"
      style={{
        border: '1px solid var(--zao-border)',
        backgroundColor: 'var(--zao-panel)',
      }}
    >
      <p className="text-sm font-medium sm:text-base" style={{ color: 'var(--zao-cream)' }}>
        {name}
      </p>
    </div>
  )
}
