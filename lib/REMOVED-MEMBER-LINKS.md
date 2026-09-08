# Member links removed 2026-09-08

Zaal's decision: **drop dead links rather than ask the members.** *"A profile with
no link beats a profile with a broken one."* The reveal is 13 September.

**If a member supplies a current link, it goes back in.** That is why this file
exists - so "where did my link go" has an answer, and so re-adding is a one-line
change rather than an archaeology exercise.

**Nobody was messaged about this.** Dropping was chosen over asking.

## What was removed - 12 links across 11 members

Each was fetched **twice, a day apart**, with a browser User-Agent, and each time
against a **known-good control on the same host in the same run** - because social
platforms 404 bots routinely and a bare 404 proves nothing on its own. Controls
`youtube.com/@MrBeast` and `x.com/TheZAODAO` returned **200** every time.

| Member | Removed | Result | Cause |
|---|---|---|---|
| `attabotty` | `fractgram.web.app/NFT.NYC` | 404 | page gone, host alive |
| `brook-x-koda` | `youtube.com/@brookxkoda` | 404 | handle gone |
| `brook-x-koda` | `brookxkoda.com` (website) | **NXDOMAIN** | domain expired |
| `gesd1` | `youtube.com/@gesd1` | 404 | handle gone |
| `hurric4n3ike` | `wavyfans.net` (website) | **NXDOMAIN** | domain expired |
| `jack-miller` | `twitter.com/jackxmller` | 404 | handle gone |
| `jango-uu` | `youtube.com/@jangouuforever` | 404 | handle gone |
| `jedxo` | `youtube.com/@jedxo` | 404 | handle gone |
| `maxwell-aden` | `maxwelladen.com` (website) | **cert mismatch** | resolves to Netlify, no valid certificate for the hostname - unusable over HTTPS |
| `nessytherilla` | `twitter.com/NessyTheRilla` | 404 | handle gone |
| `pr0f-t` | `x.com/pr0fitvsPr0phet` | 404 | handle gone |
| `timi-wale-lomo` | `youtube.com/@LOMO_MUSIC` | 404 | handle gone |

## Nobody was left without links

Checked before removing. **Every affected member keeps between 2 and 8 working
links**, and three keep a link on a platform related to the one removed:

- **`jango-uu`** keeps `music.youtube.com/channel/UCl_VvAZmdCv6UI6YAnqMoLg` - his
  YouTube presence survives; only the stale `@handle` went.
- **`pr0f-t`** keeps Spotify. **`maxwell-aden`** keeps `twitter.com/iammaxwelladen`
  (his website went, not his X).
- **`attabotty`** keeps `attabotty.com` and YouTube.

## The honest limit of this check

A YouTube or X **rename 404s the old handle without redirecting to the new one**.
So "404 with a passing control" proves the *old handle* is dead; it does **not**
prove the member has no current channel. That is the reason these are recorded
rather than deleted, and the reason re-adding is expected rather than exceptional.

Totals: socials 163 -> 154, websites 21 -> 18, members unchanged at 43.

## Hosts that CANNOT be checked from here - do not treat these as dead

A later audit will find these failing and must not conclude they are broken. Each
was control-tested against a **known-good account on the same host**, and the
control failed too:

| Host | Links affected | Control | Verdict |
|---|---|---|---|
| **tiktok.com** | 19 member links | `tiktok.com/@tiktok` - TikTok's own official account - **also fails** (connection reset, both curl and Python) | **UNMEASURABLE** |
| **facebook.com** | 1 (`timi-wale-lomo`) | `facebook.com/zuck` **also returns 400** | **UNMEASURABLE** |
| `zadan.xyz` | 1 | returned 200 earlier the same day, fails now; DNS resolves | **UNMEASURED** - transient or blocked |

**None of these were removed and none should be** on the strength of a failed fetch
from this machine. Stripping 19 members' TikTok links because a bot cannot reach
TikTok is exactly the harm this process is meant to prevent.

**The rule this encodes:** a failure is only evidence when a control on the same
host succeeds in the same run. Every one of the 12 removals above passed that bar;
none of these 21 do.
