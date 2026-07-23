export function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="rounded p-5 text-center sm:p-6"
      style={{ border: '1px solid var(--zao-border)', backgroundColor: 'var(--zao-panel)' }}
    >
      <div
        className="text-2xl font-bold tabular-nums sm:text-4xl"
        style={{ color: 'var(--zao-cream)' }}
      >
        {value}
      </div>
      <div className="mt-2 text-xs leading-snug sm:text-sm" style={{ color: 'var(--zao-cream-dim)' }}>
        {label}
      </div>
    </div>
  )
}
