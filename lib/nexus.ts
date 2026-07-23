// The Nexus: every ZAO project in one place, plus onboarding paths that route a
// visitor to what they came for. Names are canon (zaobrand naming glossary).

// "Where do you want to go?" - the onboarding paths.
export const ONBOARDING = [
  {
    want: 'Listen to music',
    blurb: 'On-chain music battles and a Farcaster music app.',
    href: 'https://wavewarz.com',
    external: true,
  },
  {
    want: 'Come to an event',
    blurb: 'Metaverse concerts and the festival. See what is on.',
    href: '/calendar',
    external: false,
  },
  {
    want: 'Build something',
    blurb: 'The lab, the build-a-thon, and the tools to ship on top of The ZAO.',
    href: '#build',
    external: false,
  },
  {
    want: 'Earn a voice',
    blurb: 'How Respect works - governance you earn, not buy.',
    href: '/zao-leaderboard',
    external: false,
  },
  {
    want: 'Understand The ZAO',
    blurb: 'The story, and the whitepaper behind the governance.',
    href: '/about',
    external: false,
  },
]

export type NexusProject = {
  name: string
  blurb: string
  href: string
  external: boolean
}

// The full directory, grouped. Only real, reachable destinations.
export const NEXUS: { group: string; id: string; projects: NexusProject[] }[] = [
  {
    group: 'Music & events',
    id: 'music',
    projects: [
      { name: 'WaveWarZ', blurb: 'Live-traded music battles on Solana, with automated artist payouts.', href: 'https://wavewarz.com', external: true },
      { name: 'COC Concertz', blurb: 'A recurring metaverse concert series.', href: 'https://cocconcertz.com', external: true },
      { name: 'ZAOstock', blurb: 'The ZAO festival - bridging a real place to an onchain community.', href: 'https://zaostock.com', external: true },
    ],
  },
  {
    group: 'Build & tools',
    id: 'build',
    projects: [
      { name: 'ZAO OS', blurb: 'The lab where ecosystem projects are built before they graduate.', href: 'https://zaoos.com', external: true },
      { name: 'ZABAL Games', blurb: 'The build-a-thon program for artists and builders.', href: 'https://zabalgamez.com', external: true },
      { name: 'Open source', blurb: 'Everything is built in the open. Browse the code.', href: 'https://github.com/bettercallzaal', external: true },
    ],
  },
  {
    group: 'Governance',
    id: 'governance',
    projects: [
      { name: 'The Whitepaper', blurb: 'Earned governance, verified on-chain - the full theory and mechanics.', href: 'https://zaofractal.vercel.app/whitepaper/zao-fractal-whitepaper', external: true },
      { name: 'Respect', blurb: 'The reputation you earn by contributing. How standing works.', href: '/zao-leaderboard', external: false },
      { name: 'The token stance', blurb: 'Community-first, not token-first. How value and contribution work.', href: '/zao-token', external: false },
    ],
  },
  {
    group: 'Community',
    id: 'community',
    projects: [
      { name: 'The community', blurb: 'Artists and builders shipping together. Meet them.', href: '/community', external: false },
      { name: 'Calendar', blurb: 'What is happening - shows, sessions, events.', href: '/calendar', external: false },
      { name: 'Newsletter', blurb: 'The build-in-public newsletter on Paragraph.', href: 'https://paragraph.com/@thezao', external: true },
      { name: 'Farcaster', blurb: 'The /zao channel - daily ecosystem activity.', href: 'https://farcaster.xyz/~/channel/zao', external: true },
    ],
  },
]
