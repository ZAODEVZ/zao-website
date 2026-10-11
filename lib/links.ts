// Every public surface in the ZAO ecosystem, for the reveal.
//
// Every URL here was fetched and returned HTTP 200 on 2026-10-11 (23 of 23,
// including the five added that day on Zaal's 2026-09-21 ruling). Zlank is
// linked at zlank.vercel.app because zlank.online refused connections on port
// 443 that day; move the row back when the domain serves HTTPS. Two URLs from
// notes/socials-map.md are deliberately NOT here because they do not resolve at
// all (connection failure, not a 404): loanz.zao.lol and studentloanz.xyz. A
// reveal page with dead links on it is worse than a shorter one.
//
// Names follow the brand glossary exactly - ZABAL Gamez with a z, COC Concertz
// with a z, FISHBOWLZ capitalised. Do not restyle them.

export type EcoLink = {
  name: string
  blurb: string
  href: string
  /** true when the domain is a redirect to a third-party host we do not control */
  offsite?: boolean
}

export type LinkGroup = { heading: string; note?: string; links: EcoLink[] }

export const LINK_GROUPS: LinkGroup[] = [
  {
    heading: 'The ZAO',
    note: 'The network itself, and how it governs.',
    links: [
      { name: 'thezao.com', blurb: 'The main site - who we are and how to find the door in.', href: 'https://thezao.com' },
      { name: 'The ZAO Co-Works', blurb: 'The coworking product - a separate site from this one, not a section of it.', href: 'https://thezao.xyz' },
      { name: 'Hats tree', blurb: 'The live role tree - who holds what, readable by anyone.', href: 'https://hats.thezao.com', offsite: true },
      { name: 'poidhz', blurb: "The ZAO bounty board - paid bounties for the network's work, judged in public, with notes for everyone who enters.", href: 'https://poidhz.com' },
      { name: 'ZABAL', blurb: 'The ZABAL hub - a weekly vote on where The ZAO focuses (music, governance, events, build), and the home of $ZABAL.', href: 'https://zabal.art' },
    ],
  },
  {
    heading: 'What we build',
    note: 'Projects that started in the community and graduated to their own home.',
    links: [
      { name: 'WaveWarZ', blurb: 'Live-traded music battles on Solana, with automated payouts to artists.', href: 'https://wavewarz.com' },
      { name: 'WaveWarZ Intelligence', blurb: 'The numbers behind WaveWarZ - every battle, verifiable onchain, and the public API this site reads its stats from.', href: 'https://wavewarz.info' },
      { name: 'COC Concertz', blurb: 'The recurring metaverse concert series.', href: 'https://cocconcertz.com' },
      { name: 'ZAOstock', blurb: 'The ZAO festival - a real place bridged to an onchain community.', href: 'https://zaostock.com' },
      { name: 'ZAO OS', blurb: 'The lab where ecosystem projects get built before they graduate.', href: 'https://zaoos.com' },
      { name: 'ZABAL Gamez', blurb: 'The build-a-thon program - artists and builders shipping together.', href: 'https://zabalgamez.com' },
      { name: 'FISHBOWLZ', blurb: 'Open conversations, in public, on the record.', href: 'https://www.fishbowlz.com' },
      { name: 'Zlank', blurb: 'A no-code builder for Farcaster Snaps, built in the ZAO ecosystem - make and share interactive Snaps in the feed.', href: 'https://zlank.vercel.app' },
    ],
  },
  {
    heading: 'Collect & support',
    note: 'Every one of these leaves this site. Most go to platforms we do not host; Donate goes to our own ZAOstock site.',
    links: [
      { name: 'ZAO Cards', blurb: 'Digital collectibles, ZAO-PALOOZA edition.', href: 'https://zao.cards', offsite: true },
      { name: 'Merch', blurb: 'Shirts and the rest.', href: 'https://merch.zaofestivals.com', offsite: true },
      { name: 'Music minting', blurb: 'Community music, minted onchain.', href: 'https://song.zaofestivals.com', offsite: true },
      { name: 'MemeBook', blurb: 'Put it on a shirt.', href: 'https://zao.lol', offsite: true },
      { name: 'Donate', blurb: 'Fund the festival and the community work.', href: 'https://zaostock.com/donate', offsite: true },
    ],
  },
  {
    heading: 'Read & follow',
    links: [
      { name: 'Newsletter', blurb: 'The ZAO newsletter on Paragraph.', href: 'https://paragraph.com/@thezao', offsite: true },
      { name: 'Farcaster', blurb: 'The /zao channel - where the community actually talks.', href: 'https://farcaster.xyz/~/channel/zao', offsite: true },
      { name: 'X', blurb: '@TheZAODAO - announcements and partnerships.', href: 'https://x.com/TheZAODAO', offsite: true },
      { name: 'BetterCallZaal', blurb: "Zaal's own site - the founder track.", href: 'https://bettercallzaal.com' },
      { name: 'BCZ YapZ', blurb: "Zaal's long-form conversations with web3 builders and music-first founders - the people around The ZAO, on the record.", href: 'https://bczyapz.com' },
    ],
  },
]

/** Date every href above was last fetched and confirmed to return HTTP 200. */
export const LINKS_VERIFIED_ON = '2026-10-11'
