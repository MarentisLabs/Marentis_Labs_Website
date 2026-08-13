# Website Audit — Prioritised Action List

**From:** `WEBSITE-AUDIT-2026-08.md` (13 August 2026)
**Status of this session:** read-only. Nothing below has been done.

Ordered by impact against effort. Tiers 1 and 2 are roughly a day's work in total.

---

## Tier 1 — Do before the next push

**1. Exclude these two audit files from the build.**
`_config.yml` → add `WEBSITE-AUDIT-2026-08.md` and `WEBSITE-AUDIT-2026-08-ACTIONS.md` to `exclude:`. Without this, Jekyll publishes them at `/WEBSITE-AUDIT-2026-08.md`.
*2 minutes.*

**2. Fix the AUM attribution on the homepage.**
`index.html:537–541`. The block reads "Credit Suisse · J.P. Morgan · Morgan Stanley · SICO Bank / Group Chief Risk Officer · £50bn+ AUM · Basel III implementation". £50bn+ is the Credit Suisse figure; SICO is $6bn. Split into two credential lines so each number sits with the role that earned it.
*15 minutes. Highest reputational exposure on the site.*

**3. Fix `og:image`.**
`_config.yml` `image:` is not read by jekyll-seo-tag at site level. Either set `logo:` / add a `defaults` entry setting `image:` per page, or hard-code `og:image` and `twitter:image` in `_layouts/default.html` ahead of `{% seo %}`. Verify `twitter:card` flips back to `summary_large_image` afterwards.
*20 minutes. Affects every LinkedIn share of every article and the white paper.*

**4. Remove the empty Twitter handles.**
`_config.yml` — delete `twitter.username: ""` and `author.twitter: ""` rather than leaving them blank. They currently render as `content="@"`.
*5 minutes. Ships with item 3.*

**5. Reconcile "tripled" with 3.4x.**
`about.html:144`. Replace "revenue tripled during his tenure" with the 3.4x figure used everywhere else. Align "£22m" (homepage) and "£22m+" (about) while you are in there.
*10 minutes.*

**6. Settle the Children's Commissioner title.**
Three variants live on `/about/`: "Non-Executive Director", "NED", "Non-Executive Advisor" (the last from `_data/credentials.yml`). Choose the accurate one and make it the only one.
*10 minutes.*

---

## Tier 2 — This week

**7. Rewrite the seven genuine banned-vocabulary hits.**
Table in §3.2 of the report gives location, current text and a suggested replacement for each. The `faq.html` "contractual and seamless" line appears twice — visible copy at L197 and FAQPage schema at L622 — change both.
*45 minutes.*

**8. Cut the two negation constructions in the homepage differentiation block.**
`index.html` — "not a traditional leveraged consulting model" and "not generic consulting methodology". Both define the firm by what it is not, in the section meant to say what it is.
*20 minutes.*

**9. Thin out "rather than" on the five commercial pages.**
`/what-is-sgaas/` (3), `/services/retained-gaas/` (3), `/services/pre-exit-gaas/` (1), `/services/red-team-review/` (1), `/services/provision-29-readiness/` (3). Target: halve them. Where the contrast does no work, state the positive claim and delete the comparison.
*1 hour. Leave the white-paper chapters for Tier 3.*

**10. Add `seo_title` to the eight worst meta titles.**
Anything over 90 characters: the NED adversarial governance post (112), the governance paradox post (110), navigating the polycrisis (93), and the five next longest. Trim the over-length descriptions on the same pages while editing front matter.
*45 minutes.*

**11. Curly-quote the hand-written HTML pages.**
`index.html`, `about.html`, `faq.html`, `services/index.html`, `contact.html`, `illustrative-engagements.html`, `assessment.html`, `what-is-sgaas.html`. 73 straight apostrophes and 48 straight double quotes in visible copy across 30 pages. A careful find-and-replace on prose only — do not touch HTML attributes, Liquid tags or JSON-LD, where straight quotes are required.
*30 minutes. Test the JSON-LD parses afterwards.*

---

## Tier 3 — This month

**12. Differentiate the four service pages from the white-paper chapters.**
Currently 13–23% verbatim overlap, both sides indexable. Rewrite the service pages so they state the offer, the timeline and the outcome, and let the chapters carry the argument. Improves the sales pages and removes the cannibalisation in one pass.
*Half a day. The most valuable item in this list after Tier 1.*

**13. Build `/services/risk-simulation-lab/`.**
The only one of three named methodology tools without a page; the URL has 404'd since the July audit. Model it on `/services/red-team-review/`.
*2 hours, plus a Tailwind recompile if new utility classes appear.*

**14. Standardise the trademark symbols.**
Red Team Protocol (5 of 48 marked), Pre-Mortem Diagnostic (2 of 40), Risk Simulation Lab (0 of 39), SGaaS (1). Mark first use per page, or drop the symbols site-wide. Pick one rule.
*30 minutes.*

**15. Align the regulator lists.**
Homepage shows six, `/about/` shows nine, `CLAUDE.md` records four. Make the homepage a deliberate subset and correct the geographic gloss to match what is displayed.
*20 minutes.*

**16. Clean up `_data/credentials.yml`.**
`board:` and `policies:` are never read — `about.html:479` calls `site.data.policies`, which does not resolve (correct path is `site.data.credentials.policies`), so a hard-coded fallback renders instead. Either wire both keys up properly or delete them. The dead `policies:` entry also points at `/carbon-reduction/`, which 404s.
*30 minutes.*

**17. Update `CLAUDE.md`.**
Six documented facts have drifted: Quarto insights (now Jekyll markdown), Inter-only typography (now Cormorant SC + DM Sans + Inter), spaced image filenames (now underscored), Cloudflare "not done" (it is live), risk-simulation-lab "server error" (it is a 404), and the Quarto build step. Future sessions read this first.
*30 minutes.*

---

## Tier 4 — Optional

**18. Redirect `/carbon_reduction_plan/` to a hyphenated URL.**
The only underscore URL on the site. Add `/carbon-reduction-plan/` with a redirect stub from the old path so nothing breaks.

**19. Reduce "rather than" in the white-paper chapters.**
36 instances across the four densest chapters. Lower priority than the service pages — readers arrive already convinced — but the three-in-one-sentence constructions in the theory chapter and `/what-is-sgaas/` are worth breaking up whenever those files are next open.

**20. Consider dropping the four PDFs from the sitemap.**
They carry no title or meta description, so they appear in the per-page reports as empty. Harmless; tidier without them. Note `/the-price-tag-on-governance-failure.pdf` sits at the repository root rather than in `assets/downloads/`.

---

## Not recommended

- **Do not rewrite the white paper for AI tells.** The scan found nothing that would trip a detector, and the prose is dense with real evidence and citation. The "rather than" habit is the only pattern worth touching, and only where it stacks.
- **Do not touch the illustrative engagements framing.** All three hold the July rules exactly — present tense, constructed scenarios, no outcomes, no identifiers.
- **Do not change the interactives' noindex setup.** The canonical / noindex split between `/assets/interactives/` and `/insights/interactives/` is correct as built.
