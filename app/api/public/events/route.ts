import { NextResponse } from 'next/server'
import { parseIcs, splitEventsByTime } from '@/lib/api/ics-parser'
import type { EventsResponse } from '@/lib/api/types'

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
      console.error(`Failed to fetch Luma calendar: HTTP ${response.status}`)
      return null
    }

    return await response.text()
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Unknown error'
    console.error(`Error fetching Luma calendar: ${message}`)
    return null
  }
}

export async function GET(): Promise<NextResponse<EventsResponse>> {
  try {
    const icsContent = await fetchLumaCalendar()

    if (!icsContent) {
      return NextResponse.json(
        {
          updatedAt: new Date().toISOString(),
          upcoming: [],
          recent: [],
        } as EventsResponse,
        {
          status: 200,
          headers: {
            'Cache-Control': `s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`,
          },
        }
      )
    }

    const events = parseIcs(icsContent)
    const { upcoming, recent } = splitEventsByTime(events)

    const response: EventsResponse = {
      updatedAt: new Date().toISOString(),
      upcoming: upcoming.slice(0, 10), // Limit to 10 upcoming
      recent: recent.slice(0, 10), // Limit to 10 recent
    }

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': `s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`,
      },
    })
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Unknown error'
    console.error(`Error in /api/public/events: ${message}`)

    return NextResponse.json(
      {
        updatedAt: new Date().toISOString(),
        upcoming: [],
        recent: [],
      } as EventsResponse,
      {
        status: 200,
        headers: {
          'Cache-Control': `s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`,
        },
      }
    )
  }
}
