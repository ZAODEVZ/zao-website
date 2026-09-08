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

      // The Webflow pages nothing on that site links to, found via the Wayback
      // index rather than by crawling. They are LIVE today and 404 the moment
      // DNS moves.
      //
      // TEMPORARY on purpose - soft landings, not final homes. The 17 /drops
      // pages are Jango UU's release archive, 2,162 words of real editorial, and
      // sending them to his profile keeps the URLs alive without claiming the
      // content moved there. If it is ever ported, these come out; a permanent
      // redirect would cache hard and outlive that choice. Full text and images
      // are preserved in the offline archive either way.
      { source: '/drops/djangos-10th-release-never-been-the-same-since', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/djangos-11th-release-game-in-2023', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/djangos-12th-release-talkin-fly', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/djangos-3rd-release-alice', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/djangos-4th-release-gucci-shit', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/djangos-5th-release-your-perception-my-reality', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/djangos-6th-release-and-first-album-ragepop', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/djangos-7th-release-let-them-hoes-rock', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/djangos-8th-release-want-it-like-me-', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/djangos-9th-release-bezos', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/djangos-first-music-video-gucci-shit', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/djangos-first-release-wide-awake-3-track', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/djangos-second-release-reads-n-replies', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/dual-wield', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/ragepop-reimagined', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/south-of-the-city', destination: '/community/jango-uu', permanent: false },
      { source: '/drops/sunrider', destination: '/community/jango-uu', permanent: false },
      { source: '/blog-categories/3-track', destination: '/community', permanent: false },
      { source: '/blog-categories/album', destination: '/community', permanent: false },
      { source: '/blog-categories/ep', destination: '/community', permanent: false },
      { source: '/blog-categories/single', destination: '/community', permanent: false },
      { source: '/blog-categories/video', destination: '/community', permanent: false },
      { source: '/music-releases', destination: '/community/jango-uu', permanent: false },
      { source: '/oldpages/music-releases', destination: '/community/jango-uu', permanent: false },
      ...WEBFLOW_MEMBERS.map((m) => ({
        source: `/artists/${m.slug}`,
        destination: `/community/${m.slug}`,
        permanent: true,
      })),
    ]
  },
}

export default nextConfig
