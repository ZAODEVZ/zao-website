import { NextResponse } from 'next/server'
import { fetchWaveWarZData } from '@/lib/api/wavewarz-client'
import type { WaveWarZResponse } from '@/lib/api/types'

const CACHE_MAX_AGE = 60 // 1 minute
const STALE_WHILE_REVALIDATE = 300 // 5 minutes

export async function GET(): Promise<NextResponse<WaveWarZResponse>> {
  try {
    const data = await fetchWaveWarZData()

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': `s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`,
      },
    })
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Unknown error'
    console.error(`Error in /api/public/wavewarz: ${message}`)

    // Return a minimal response with default values on error
    return NextResponse.json(
      {
        updatedAt: new Date().toISOString(),
        volume: 0,
        solPriceUsd: 0,
        liveBattle: null,
        latestBattles: [],
        topArtists: [],
        topSongs: [],
      } as WaveWarZResponse,
      {
        status: 200,
        headers: {
          'Cache-Control': `s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`,
        },
      }
    )
  }
}
