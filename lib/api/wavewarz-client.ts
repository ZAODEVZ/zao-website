import type {
  WaveWarZBattle,
  WaveWarZArtist,
  WaveWarZSong,
  WaveWarZStatsResponse,
  WaveWarZResponse,
} from './types'

const WAVEWARZ_BASE = 'https://wavewarz.info/api/public'
const FETCH_TIMEOUT_MS = 10000

interface FetchResult<T> {
  ok: boolean
  data?: T
  error?: string
}

async function fetchWithTimeout<T>(
  url: string,
  timeoutMs: number = FETCH_TIMEOUT_MS
): Promise<FetchResult<T>> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs)

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ZAO-API/1.0)',
      },
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      return {
        ok: false,
        error: `HTTP ${response.status}`,
      }
    }

    const data = await response.json()
    return { ok: true, data: data as T }
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Unknown error'
    return {
      ok: false,
      error: message,
    }
  }
}

async function fetchStats(): Promise<FetchResult<WaveWarZStatsResponse>> {
  return fetchWithTimeout<WaveWarZStatsResponse>(`${WAVEWARZ_BASE}/stats`)
}

async function fetchBattles(
  limit: number = 5
): Promise<FetchResult<{ battles: WaveWarZBattle[] }>> {
  return fetchWithTimeout<{ battles: WaveWarZBattle[] }>(
    `${WAVEWARZ_BASE}/battles?limit=${limit}`
  )
}

async function fetchTopArtists(
  limit: number = 5
): Promise<FetchResult<{ artists: WaveWarZArtist[] }>> {
  return fetchWithTimeout<{ artists: WaveWarZArtist[] }>(
    `${WAVEWARZ_BASE}/leaderboards/artists?limit=${limit}`
  )
}

async function fetchTopSongs(
  limit: number = 5
): Promise<FetchResult<{ songs: WaveWarZSong[] }>> {
  return fetchWithTimeout<{ songs: WaveWarZSong[] }>(
    `${WAVEWARZ_BASE}/leaderboards/songs?limit=${limit}`
  )
}

export async function fetchWaveWarZData(): Promise<WaveWarZResponse> {
  const now = new Date().toISOString()

  // Fetch all data in parallel with fault tolerance
  const [statsResult, battlesResult, artistsResult, songsResult] =
    await Promise.allSettled([
      fetchStats(),
      fetchBattles(5),
      fetchTopArtists(5),
      fetchTopSongs(5),
    ])

  let volume = 0
  let solPriceUsd = 0

  if (statsResult.status === 'fulfilled' && statsResult.value.ok && statsResult.value.data) {
    volume = statsResult.value.data.volume || 0
    solPriceUsd = statsResult.value.data.solPriceUsd || 0
  }

  let latestBattles: WaveWarZBattle[] = []
  let liveBattle: WaveWarZBattle | null = null

  if (
    battlesResult.status === 'fulfilled' &&
    battlesResult.value.ok &&
    battlesResult.value.data
  ) {
    latestBattles = battlesResult.value.data.battles || []
    // The first battle is typically the live one if it exists
    if (latestBattles.length > 0) {
      liveBattle = latestBattles[0]
    }
  }

  let topArtists: WaveWarZArtist[] = []
  if (
    artistsResult.status === 'fulfilled' &&
    artistsResult.value.ok &&
    artistsResult.value.data
  ) {
    topArtists = artistsResult.value.data.artists || []
  }

  let topSongs: WaveWarZSong[] = []
  if (
    songsResult.status === 'fulfilled' &&
    songsResult.value.ok &&
    songsResult.value.data
  ) {
    topSongs = songsResult.value.data.songs || []
  }

  return {
    updatedAt: now,
    volume,
    solPriceUsd,
    liveBattle,
    latestBattles,
    topArtists,
    topSongs,
  }
}
