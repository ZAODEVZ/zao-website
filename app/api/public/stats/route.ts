import { NextResponse } from 'next/server'
import { parseIcs, splitEventsByTime } from '@/lib/api/ics-parser'
import { fetchWaveWarZData } from '@/lib/api/wavewarz-client'
import type { StatsResponse } from '@/lib/api/types'

const LUMA_ICS_URL =
  'https://api.lu.ma/ics/get?entity=calendar&id=cal-jPH4al7AMlXzdNN'
const FETCH_TIMEOUT_MS = 10000
const CACHE_MAX_AGE = 60 // 1 minute
const STALE_WHILE_REVALIDATE = 300 // 5 minutes

async function fetchLumaCalendar(): Promise<string | null> {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)

    const response = await fetch(LUMA_ICS_URL, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ZAO-API/1.0)',
      },
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      return null
    }

    return await response.text()
  } catch {
    return null
  }
}

export async function GET(): Promise<NextResponse<StatsResponse>> {
  try {
    // Fetch data in parallel
    const [lumaIcsContent, waveWarzData] = await Promise.all([
      fetchLumaCalendar(),
      fetchWaveWarZData(),
    ])

    let upcomingCount = 0

    if (lumaIcsContent) {
      const events = parseIcs(lumaIcsContent)
      const { upcoming } = splitEventsByTime(events)
      upcomingCount = upcoming.length
    }

    const response: StatsResponse = {
      updatedAt: new Date().toISOString(),
      wavewarz: {
        volume: waveWarzData.volume,
        solPriceUsd: waveWarzData.solPriceUsd,
        activeBattles: waveWarzData.latestBattles.length,
      },
      events: {
        upcomingCount,
      },
    }

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': `s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`,
      },
    })
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Unknown error'
    console.error(`Error in /api/public/stats: ${message}`)

    return NextResponse.json(
      {
        updatedAt: new Date().toISOString(),
        wavewarz: {
          volume: 0,
          solPriceUsd: 0,
          activeBattles: 0,
        },
        events: {
          upcomingCount: 0,
        },
      } as StatsResponse,
      {
        status: 200,
        headers: {
          'Cache-Control': `s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`,
        },
      }
    )
  }
}
