# CLAUDE.md - The ZAO website (thezao.com rebuild)

This terminal rebuilds **thezao.com** as a coded Next.js site, off Webflow. Sibling to `zaobrand`, `zaomeetings`, `bczstrat`.

## The mandate (decided 2026-07-21)

- **Keep the domain.** thezao.com stays; when the rebuild is ready, point thezao.com at this site instead of Webflow. No new domain, no bio changes.
- **Next.js, fresh design.** App Router + Tailwind v4, matching the ZAO stack. Do NOT copy the Webflow design - rebuild fresh from the ZAO brand system.
- **Brand source of truth = the `zaobrand` repo** (`~/Documents/zaobrand`, `bettercallzaal/zao-brand`): palette `#141e27` / `#e0ddaa`, voice (prose not lists, no emojis, no em dashes), canon, naming glossary. Pull design + copy direction from there.

## Sitemap (from the current Webflow site - same content, fresh design)

- `/` Home - hero + Notable Artists (Jango UU, Songs of Eden, Hurric4n3Ike, Attabotty, Clejan, NessytheRilla, Jadyn Violet, Maxwell Aden) + Join the Community CTA
- `/community` Community Members / Artists
- `/calendar` Calendar (ZAO events - luma.com/zao)
- `/zao-leaderboard` ZAO Leaderboard (Respect / contribution)
- `/about` About The ZAO
- `/zao-token` $ZAO

## How this terminal works (autonomous, PR-only)

- One page/feature at a time. Scaffold -> build -> verify (`npm run build` + `npm run typecheck`) -> PR. Zaal reviews.
- **PR-only to `main`.** Branch from `ws/`. Never push to main, never deploy to the live domain without Zaal's go.
- Mobile-first, dark, the brand palette. Real content (pull artist/community data where it exists), no lorem.
- GEO-aware: this is a front-door + AI-answer surface (see ZAOOS `research/identity` GEO docs) - include proper metadata, JSON-LD, llms.txt.

## First tasks (in order)

1. Scaffold Next.js 16 App Router + Tailwind v4 + TS. Verify it builds.
2. Build the design system from `zaobrand` (palette, type, components) - one PR.
3. Build `/` (home + Notable Artists + CTA) - one PR.
4. Then the remaining pages one PR each, in sitemap order.
5. When the full set is ready + Zaal approves: Vercel deploy + point thezao.com at it (Zaal-gated - DNS is his to switch).

See `PLAN.md` for the phased plan.
