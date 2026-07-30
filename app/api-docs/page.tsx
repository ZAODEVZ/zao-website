import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  alternates: { canonical: '/api-docs' },
  title: 'API Documentation - The ZAO',
  description:
    'ZAO Public API - access ZAO ecosystem data: events, WaveWarZ battles, and community stats.',
  openGraph: {
    title: 'API Documentation - The ZAO',
    description: 'Public API for ZAO ecosystem data',
    url: 'https://thezao.com/api-docs',
    siteName: 'The ZAO',
    type: 'website',
  },
}

interface Endpoint {
  path: string
  method: string
  description: string
  example: {
    request: string
    responseFields: Record<string, string>
  }
}

const ENDPOINTS: Endpoint[] = [
  {
    path: '/api/public',
    method: 'GET',
    description:
      'Get the API directory with a list of all available endpoints.',
    example: {
      request: 'https://thezao.com/api/public',
      responseFields: {
        name: 'Name of the API',
        description: 'API description',
        endpoints: 'Array of available endpoints',
        updatedAt: 'ISO 8601 timestamp of last update',
      },
    },
  },
  {
    path: '/api/public/events',
    method: 'GET',
    description:
      'Get upcoming and recent ZAO events from the community calendar.',
    example: {
      request: 'https://thezao.com/api/public/events',
      responseFields: {
        updatedAt: 'ISO 8601 timestamp',
        upcoming: 'Array of future events (sorted by start time)',
        recent: 'Array of past events (sorted by start time descending)',
        'event.title': 'Event name',
        'event.start': 'Event start time (ISO 8601)',
        'event.end': 'Event end time (ISO 8601)',
        'event.url': 'Calendar event URL',
        'event.location': 'Event location (nullable)',
      },
    },
  },
  {
    path: '/api/public/wavewarz',
    method: 'GET',
    description:
      'Get current WaveWarZ data: live battle, recent battles, top artists, and songs.',
    example: {
      request: 'https://thezao.com/api/public/wavewarz',
      responseFields: {
        updatedAt: 'ISO 8601 timestamp',
        volume: 'Total trading volume (Solana)',
        solPriceUsd: 'Current SOL price in USD',
        liveBattle: 'Currently active battle object (nullable)',
        latestBattles: 'Array of recent battles (up to 5)',
        topArtists: 'Array of top artists (up to 5)',
        topSongs: 'Array of top songs (up to 5)',
      },
    },
  },
  {
    path: '/api/public/stats',
    method: 'GET',
    description:
      'Get ZAO-wide headline stats: aggregated WaveWarZ and event metrics.',
    example: {
      request: 'https://thezao.com/api/public/stats',
      responseFields: {
        updatedAt: 'ISO 8601 timestamp',
        'wavewarz.volume': 'Total trading volume (Solana)',
        'wavewarz.solPriceUsd': 'Current SOL price in USD',
        'wavewarz.activeBattles': 'Number of active battles',
        'events.upcomingCount': 'Count of upcoming events',
      },
    },
  },
]

export default function ApiDocs() {
  return (
    <main className="min-h-screen">
      <Nav />

      <section className="py-16 sm:py-24" style={{ borderBottom: '1px solid var(--zao-border)' }}>
        <Container>
          <div className="space-y-6 sm:space-y-8">
            <p
              className="text-xs font-medium uppercase tracking-[0.18em]"
              style={{ color: 'var(--zao-cream)' }}
            >
              API Documentation
            </p>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
              ZAO Public API
            </h1>
            <p
              className="max-w-2xl text-lg leading-relaxed sm:text-xl"
              style={{ color: 'var(--zao-text)' }}
            >
              Access current ZAO ecosystem data - events, WaveWarZ battles, and community metrics.
              Public endpoints, no authentication required.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="space-y-12">
            <div>
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Overview</h2>
              <div className="space-y-4" style={{ color: 'var(--zao-cream-dim)' }}>
                <p>
                  The ZAO Public API serves real-time data about the ZAO ecosystem. All endpoints
                  return JSON, support CORS for browser requests, and include standard HTTP
                  cache headers.
                </p>
                <p>
                  The API is designed to power the zao.com website and can be consumed by agents,
                  partner services, and community dashboards.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Response Format</h2>
              <div
                className="overflow-auto rounded p-4 font-mono text-sm"
                style={{
                  backgroundColor: 'var(--zao-panel)',
                  border: '1px solid var(--zao-border)',
                }}
              >
                <pre>
{`{
  "updatedAt": "2024-07-20T15:30:00Z",
  // ... endpoint-specific data
}`}
                </pre>
              </div>
              <p
                className="mt-3 text-sm"
                style={{ color: 'var(--zao-cream-dim)' }}
              >
                Every response includes an <code className="text-xs">updatedAt</code> ISO 8601
                timestamp. Responses are cached for 60 seconds with stale-while-revalidate
                enabled.
              </p>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Endpoints</h2>
              <div className="space-y-8">
                {ENDPOINTS.map((endpoint) => (
                  <div
                    key={endpoint.path}
                    className="rounded border p-6"
                    style={{ borderColor: 'var(--zao-border)' }}
                  >
                    <div className="mb-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="inline-block rounded px-2 py-1 text-xs font-mono font-bold"
                          style={{
                            backgroundColor: 'var(--zao-cream)',
                            color: 'var(--zao-dark)',
                          }}
                        >
                          {endpoint.method}
                        </span>
                        <code className="font-mono text-base font-semibold">
                          {endpoint.path}
                        </code>
                      </div>
                    </div>

                    <p className="mb-4" style={{ color: 'var(--zao-cream-dim)' }}>
                      {endpoint.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold">Example Request</h4>
                      <div
                        className="overflow-auto rounded p-3 font-mono text-xs"
                        style={{
                          backgroundColor: 'var(--zao-panel)',
                          border: '1px solid var(--zao-border)',
                        }}
                      >
                        <code>{endpoint.example.request}</code>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-semibold">Response Fields</h4>
                      <div
                        className="overflow-x-auto"
                        style={{ borderColor: 'var(--zao-border)' }}
                      >
                        <table className="w-full text-left text-sm">
                          <thead>
                            <tr
                              style={{
                                borderBottom: '1px solid var(--zao-border)',
                              }}
                            >
                              <th className="pb-2 font-semibold">Field</th>
                              <th className="pb-2 font-semibold">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(endpoint.example.responseFields).map(
                              ([field, description]) => (
                                <tr
                                  key={field}
                                  style={{
                                    borderBottom: '1px solid var(--zao-border)',
                                  }}
                                >
                                  <td className="py-2">
                                    <code
                                      className="text-xs"
                                      style={{ color: 'var(--zao-cream)' }}
                                    >
                                      {field}
                                    </code>
                                  </td>
                                  <td
                                    className="py-2"
                                    style={{ color: 'var(--zao-cream-dim)' }}
                                  >
                                    {description}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ backgroundColor: 'var(--zao-panel)', border: '1px solid var(--zao-border)' }} className="rounded p-6">
              <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Usage Notes</h2>
              <ul
                className="space-y-3 list-disc list-inside"
                style={{ color: 'var(--zao-cream-dim)' }}
              >
                <li>All endpoints support CORS for browser requests.</li>
                <li>
                  Responses are cached: 60 seconds hard cache + 5 minutes stale-while-revalidate.
                </li>
                <li>
                  If upstream data sources are unavailable, endpoints return gracefully with
                  available data and zero/empty values for unavailable fields.
                </li>
                <li>
                  The API is versioned at <code className="text-xs">/api/public</code> - future
                  versions may be at <code className="text-xs">/api/v2/public</code> etc.
                </li>
                <li>
                  All timestamps are in ISO 8601 format (UTC, marked with Z suffix).
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
