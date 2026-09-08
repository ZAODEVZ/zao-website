import type { NextConfig } from 'next'
import { WEBFLOW_MEMBERS } from './lib/webflowMembers'

// URLs the Webflow site answers today. Without these they 404 the moment DNS
// moves, taking any inbound link, bookmark or search result with them.
//
// /artists is a LIVE 301 to /community on Webflow right now - replicating it is
// parity, not a new decision.
//
// /artists/<slug> was the member URL scheme before /community/<slug>. Those
// already 404 on Webflow, so this is an improvement on the old site rather than
// parity: the slugs are identical, the profiles exist, and the links are still
// out in the world. Only slugs that actually exist are redirected, so none of
// these can land on a 404.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  async redirects() {
    return [
      { source: '/artists', destination: '/community', permanent: true },
      ...WEBFLOW_MEMBERS.map((m) => ({
        source: `/artists/${m.slug}`,
        destination: `/community/${m.slug}`,
        permanent: true,
      })),
    ]
  },
}

export default nextConfig
