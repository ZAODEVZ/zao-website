import { NextResponse } from 'next/server'
import type { ApiDirectoryResponse } from '@/lib/api/types'

const CACHE_MAX_AGE = 3600 // 1 hour
const STALE_WHILE_REVALIDATE = 86400 // 24 hours

export async function GET(): Promise<NextResponse<ApiDirectoryResponse>> {
  const response: ApiDirectoryResponse = {
    name: 'ZAO Public API',
    description:
      'Public API for accessing ZAO ecosystem data - events, WaveWarZ battle stats, and community metrics. All endpoints are public, require no authentication, and return JSON.',
    endpoints: [
      {
        path: '/api/public/events',
        method: 'GET',
        description:
          'Get upcoming and recent ZAO events from the community calendar. Returns events with title, start/end times (ISO 8601), location, and calendar URL.',
      },
      {
        path: '/api/public/wavewarz',
        method: 'GET',
        description:
          'Get current WaveWarZ data - live battle, recent battles, top artists, and top songs. Includes Solana volume and SOL price USD.',
      },
      {
        path: '/api/public/stats',
        method: 'GET',
        description:
          'Get ZAO-wide headline stats: WaveWarZ volume/SOL price, active battles, and count of upcoming events.',
      },
    ],
    updatedAt: new Date().toISOString(),
  }

  return NextResponse.json(response, {
    headers: {
      'Cache-Control': `s-maxage=${CACHE_MAX_AGE}, stale-while-revalidate=${STALE_WHILE_REVALIDATE}`,
    },
  })
}
