// The ZAO's papers. The whitepaper is canonical; it is rendered in full on the
// fractal site, and this hub is its native home on thezao.com.

const WP = 'https://zaofractal.vercel.app/whitepaper'

export const WHITEPAPER = {
  title: 'The ZAO Fractal Whitepaper',
  subtitle: 'Earned governance, verified on-chain.',
  version: 'v0.1',
  readUrl: `${WP}/zao-fractal-whitepaper`,
  abstract:
    'In most decentralized organizations, a vote is something you buy - tokens are capital, capital is voting power, and governance drifts toward whoever holds the most. The ZAO takes the opposite position: here, a vote is something you earn. Each week, members rank their contribution in small circles, and those rankings mint Respect - a soulbound reputation that cannot be bought, sold, or transferred. Governance runs on ORDAO, an optimistic, Respect-weighted system on Optimism. Every award and every vote is verifiable on-chain.',
  chapters: [
    { n: 0, title: 'Abstract', blurb: 'The thesis in one page: a vote you earn, not buy.', slug: 'draft/ch00-abstract' },
    { n: 1, title: 'Preamble and Vision', blurb: 'Governance flows from contribution, not capital.', slug: 'draft/ch01-preamble-and-vision' },
    { n: 2, title: 'The Problem', blurb: 'Why token-weighted voting fails a music community.', slug: 'draft/ch02-the-problem' },
    { n: 3, title: 'Fractal Democracy - First Principles', blurb: "Larimer's theory of true, non-plutocratic democracy.", slug: 'draft/ch03-fractal-democracy-first-principles' },
    { n: 4, title: 'The Respect Token', blurb: 'The non-transferable reputation that records contribution.', slug: 'draft/ch04-the-respect-token' },
    { n: 5, title: 'The Respect Game', blurb: 'The weekly 90-minute ritual that turns contribution into standing.', slug: 'draft/ch05-the-respect-game' },
    { n: 6, title: 'On-Chain Architecture', blurb: 'ORDAO and OREC - the verifiable governance machinery.', slug: 'draft/ch06-on-chain-architecture' },
    { n: 7, title: 'Why Fractal', blurb: 'Fractal governance versus every alternative.', slug: 'draft/ch07-why-fractal' },
    { n: 8, title: 'The ZAO Fractal', blurb: 'What makes The ZAO the longest-running fractal in the ecosystem.', slug: 'draft/ch08-the-zao-fractal' },
    { n: 9, title: 'Limitations and Open Problems', blurb: 'The honest tradeoffs and unsolved questions.', slug: 'draft/ch09-limitations-and-open-problems' },
    { n: 10, title: 'Roadmap', blurb: 'What is next for governance and the token.', slug: 'draft/ch10-roadmap' },
    { n: 11, title: 'Conclusion', blurb: 'Earned governance as the answer to plutocracy.', slug: 'draft/ch11-conclusion' },
  ],
}

export const chapterUrl = (slug: string) => `${WP}/${slug}`
