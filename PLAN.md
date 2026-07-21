# Migration plan - thezao.com off Webflow

## Decisions (2026-07-21, Zaal)
- Keep thezao.com domain (repoint from Webflow when ready).
- Next.js App Router + Tailwind v4, fresh design (not a Webflow copy).
- Design + copy from the ZAO brand system (`~/Documents/zaobrand`).

## Phases
1. **Scaffold** - Next.js 16 + Tailwind v4 + TS. Build green.
2. **Design system** - tokens (palette #141e27 / #e0ddaa), type, base components from zaobrand.
3. **Pages** (one PR each, sitemap order): home, community, calendar, zao-leaderboard, about, zao-token.
4. **GEO** - metadata + JSON-LD + llms.txt on every page (front-door AI-answer surface).
5. **Cutover** (Zaal-gated) - Vercel deploy, verify, then switch thezao.com DNS off Webflow to the new site.

## Guardrails
- PR-only to main. Verify build + typecheck before each PR.
- Never switch the live domain without Zaal's explicit go (DNS is his).
- No invented content - pull real artist/community/event data where it exists.
