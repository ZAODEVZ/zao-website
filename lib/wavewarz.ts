// Live WaveWarZ stats, fetched server-side. Cached for an hour (ISR) so the
// homepage stays fast and the numbers stay current without hardcoding them.
// Per the brand rule: pull WaveWarZ figures live, never hardcode.

export type WaveWarZStats = {
  volumeUsd: number
  volumeSol: number
  battles: number
  artistPayoutsUsd: number
  updatedAt: string
}

export async function getWaveWarZStats(): Promise<WaveWarZStats | null> {
  try {
    const res = await fetch('https://wavewarz.info/api/public/stats', {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const d = await res.json()
    return {
      volumeUsd: Math.round(d?.volume?.totalUsd ?? 0),
      volumeSol: Math.round(d?.volume?.totalSol ?? 0),
      battles: d?.battles?.total ?? 0,
      artistPayoutsUsd: Math.round(d?.artistPayouts?.totalUsd ?? 0),
      updatedAt: d?.updatedAt ?? '',
    }
  } catch {
    return null
  }
}

// Formatting helpers.
export const fmtUsd = (n: number) =>
  n >= 1000 ? `$${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k` : `$${n}`
export const fmtNum = (n: number) => n.toLocaleString('en-US')
