import type { MetadataRoute } from 'next'
import { MEMBERS } from '@/lib/members'
import { WEBFLOW_MEMBERS, ARTIST_CATEGORIES } from '@/lib/webflowMembers'

const BASE = 'https://thezao.com'

// Public, indexable routes. /drop is intentionally excluded (noindexed ops tool).
const ROUTES = [
  '',
  '/nexus',
  '/papers',
  '/brand',
  '/community',
  '/calendar',
  '/zao-leaderboard',
  '/about',
  '/zao-token',
  '/zaal',
  '/links',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const core = ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.7,
  }))
  const members = MEMBERS.map((m) => ({
    url: `${BASE}/${m.handle}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  // The 43 profiles carried over from the Webflow site, at their original paths
  // so inbound links and search results keep resolving after the switch.
  const community = WEBFLOW_MEMBERS.map((m) => ({
    url: `${BASE}/community/${m.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  // The Webflow artist-category paths, rebuilt so inbound links keep resolving.
  const categories = ARTIST_CATEGORIES.map((c) => ({
    url: `${BASE}/artist-category/${c.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))
  return [...core, ...members, ...community, ...categories]
}
