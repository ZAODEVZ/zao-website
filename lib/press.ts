// The ZAO's press page and the home page's "story so far". Every line links to its
// proof (Zaal, 17 Nov 2026, from the attabotty.art review, ZAOresearch doc 2506:
// "a press page where every claim links to proof", "the story as a numbered path").
// Sources: the ZM media archive (bettercallzaal.github.io/zao-media, class "earned"),
// zaostock.com and wavewarz.info. Add a row only with a link that proves it.

export type ProofItem = { date: string; title: string; where: string; href: string }

const ZM = 'https://bettercallzaal.github.io/zao-media/appearances'

export const STORY: { step: string; title: string; body: string; href: string; proof: string }[] = [
  {
    step: '01',
    title: 'ZAO-PALOOZA, New York',
    body: 'The first ZAO festival, 2024: independent artists on one stage, built by the community.',
    href: `${ZM}/2025-04-03-space-zao-palooza-1-year-anniversary-space-get-your-at/`,
    proof: 'One year on, in our own words',
  },
  {
    step: '02',
    title: 'ZAO-CHELLA, Miami Art Basel',
    body: 'December 2024, and the first live WaveWarZ battle, traded by the crowd.',
    href: `${ZM}/2025-01-15-zao-chella-countdown/`,
    proof: 'The countdown series',
  },
  {
    step: '03',
    title: 'WaveWarZ',
    body: 'Song against song, fans trade on the result, and artists are paid automatically on every battle.',
    href: 'https://wavewarz.info',
    proof: 'Live numbers',
  },
  {
    step: '04',
    title: 'ZAOstock, Ellsworth, Maine',
    body: '3 October 2026, the artist-run festival at the Franklin Street Parklet, streamed all day.',
    href: 'https://zaostock.com',
    proof: 'zaostock.com',
  },
]

export const PRESS_EVENTS: ProofItem[] = [
  { date: '2026-10-03', title: 'ZAOstock', where: 'Franklin Street Parklet, Ellsworth, Maine', href: 'https://zaostock.com' },
  { date: '2026-07-18', title: 'COC Concertz #7', where: 'Community of Communities', href: `${ZM}/2026-07-18-coc-concertz-7/` },
  { date: '2026-06-14', title: 'COC Concertz #6', where: 'Community of Communities', href: `${ZM}/2026-06-14-coc-concertz-6/` },
  { date: '2025-03-29', title: 'COC Concertz in the metaverse, with CLEJAN and Attabotty', where: 'Community of Communities', href: `${ZM}/2025-03-29-coc-concertz-metaverse/` },
  { date: '2024-12-04', title: 'ZAO-CHELLA at Art Basel', where: 'Miami', href: `${ZM}/2024-12-04-space-super-wednesday-digital-miami-zao-chella-x-art-b/` },
]

export const PRESS_COVERAGE: ProofItem[] = [
  { date: '2026-10-11', title: 'Rebuilding Ownership for Independent Artists', where: 'People in Crypto (print feature)', href: `${ZM}/2026-10-11-people-in-crypto-fusdcrypto/` },
  { date: '2026-03-03', title: 'WaveWarZ Epic Battle, Ep. 50', where: 'Crypto Magic Hour', href: `${ZM}/2026-03-03-crypto-magic-hour-ep50/` },
  { date: '2025-09-28', title: 'Season 2, Episode 5 with BetterCallZaal', where: 'Undivided Attention', href: `${ZM}/2025-09-28-undivided-attention-s2e5/` },
  { date: '2025-04-01', title: 'How The ZAO Is Helping Artists Keep Their Music, Data, and Dollars', where: 'Token for Your Thoughts', href: `${ZM}/2025-04-01-token-for-your-thoughts/` },
]

export const PRESS_TALKS: ProofItem[] = [
  { date: '2026-07-30', title: 'Building a Music DAO, and AI Agent Legal Entities', where: 'Just DAO It', href: `${ZM}/2026-07-30-just-dao-it/` },
  { date: '2026-06-18', title: 'The Growth of ZAO Fractal (ETH 81)', where: 'Eden Creators', href: `${ZM}/2026-06-18-eden-creators-eth81-zao-fractal/` },
  { date: '2026-06-03', title: 'Zaal presents The ZAO and ZABAL Gamez', where: 'Farcaster Batches, Day 3', href: `${ZM}/2026-06-03-farcaster-batches-day-3/` },
  { date: '2026-07-06', title: 'Fractal Decision-Making for Nonprofits (ETH 83)', where: 'Eden Creators', href: `${ZM}/2026-07-06-eden-creators-eth83/` },
]
