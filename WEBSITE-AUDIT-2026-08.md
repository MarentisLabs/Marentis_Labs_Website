# Marentis Labs Website Audit — August 2026

**Date:** 13 August 2026
**Scope:** AI-creation indicators (ai-stripper skill) plus editorial and copy-quality review
**Method:** Live crawl of all 63 sitemap URLs at marentislabs.com, cross-read against local source in this repository
**Files changed in this audit:** none. This is a read-only report.

> **Before the next push:** add `WEBSITE-AUDIT-2026-08.md` and `WEBSITE-AUDIT-2026-08-ACTIONS.md` to the `exclude:` list in `_config.yml`. `WEBSITE-AUDIT-2026-07.md` is already excluded; these two are not, and Jekyll will otherwise publish them as static files at `/WEBSITE-AUDIT-2026-08.md`.

---

## 1. Headline

The site is in good shape. There are no broken internal links, no ghost unicode anywhere in the source, no crawl errors on any indexed page, and the SGaaS category claim survives external scrutiny — a search for the exact phrase returns marentislabs.com in positions one and two, with no competing use of the term. The AI-language scan turned up nothing that would trip a detector.

Three things do need attention, and they are not stylistic:

1. **A credential on the homepage attributes £50bn+ AUM to the SICO Bank CRO role.** The £50bn+ figure belongs to Credit Suisse; SICO is $6bn. For a firm selling adversarial scrutiny, a misattributed number on the most-read page is the single highest-risk item on this list.
2. **No page on the site emits an `og:image`.** Every LinkedIn and X share of every article, the white paper and the homepage renders as a bare text card. The social card image exists and is correct; the config key pointing at it is one jekyll-seo-tag does not read.
3. **"Rather than" appears 136 times across the site**, at up to 5.7 per thousand words. This is the one prose habit dense enough to read as machine-generated to an attentive reader, and it clusters hardest in the white-paper chapters.

---

## 2. Technical artifacts — ai-stripper mechanical scan

The scan covered 74 extracted content files (all HTML pages, all service and illustration markdown, all thirteen insight posts, all white-paper chapters and interactives).

| Check | Result |
|---|---|
| Ghost unicode (ZWSP, ZWJ, soft hyphen, BOM, directional marks) | **Clean** — zero instances across every `.html`, `.md`, `.yml`, `.css` and `.js` file in the repository |
| Zip integrity / document metadata | Not applicable — no `.docx` deliverables in the published site |
| Non-breaking spaces | 7 instances, all deliberate typography, leave alone |
| Em dash / en dash usage | 51 em, 69 en in visible copy — proportionate for the volume, not a tell at this density |

**One technical inconsistency worth fixing:** apostrophe and quote typography is split down the middle of the site's two authoring routes.

- Visible copy across 59 indexed pages contains **410 curly apostrophes and 73 straight ones**, plus 214 curly and 48 straight double quotes.
- The straight ones cluster on the hand-written HTML pages, because kramdown applies smart quotes to markdown automatically and nothing applies them to raw HTML.
- Result: `/` (6 straight, 0 curly), `/about/` (3, 0), `/faq/` (5, 0), `/services/` (4, 0) and `/contact/` (2, 0) render `Don't` and `board's` with a typewriter apostrophe, while every insight post renders `’`.

Thirty pages are affected. It reads as sloppy rather than machine-made, but on a site whose proposition is precision, it is the kind of detail the target buyer notices.

---

## 3. Language tells — judgement findings

### 3.1 "Rather than" — the dominant pattern

136 instances site-wide. Highest density:

| Page | Instances | Per 1,000 words |
|---|---|---|
| `/white-paper/read/what-is-strategic-governance-as-a-service/` | 13 | 5.4 |
| `/white-paper/read/the-theory-of-governance-failure/` | 13 | 3.6 |
| `/white-paper/read/the-three-lines-model-value-gap/` | 12 | 3.5 |
| `/white-paper/read/the-evidence-of-governance-failure/` | 10 | 1.7 |
| `/illustrative-engagements/diagnostic-embedded-sgaas-fca-regulated-insurer/` | 3 | 5.7 |
| `/services/retained-gaas/` | 3 | 3.6 |
| `/what-is-sgaas/` | 3 | 3.3 |

Two passages show the problem at full strength. From the theory chapter: *"It is a system that produces comfort rather than challenge, assurance rather than resilience, and compliance rather than insight."* Three in one sentence. From `/what-is-sgaas/`: *"It operates continuously rather than episodically. It is human-led rather than platform-delivered. And it complements rather than replaces internal governance functions."* Three consecutive sentences with the same skeleton.

The construction is not wrong. The volume is. Where the contrast carries real weight, keep it. Where it does not, state the positive claim and delete the comparison — most of these sentences survive intact without the second half.

**Suggested target:** halve the count. Prioritise `/what-is-sgaas/` and the four service pages, which are commercial pages a buyer reads closely; the white-paper chapters matter less because readers arrive there already convinced.

### 3.2 Banned vocabulary

Twenty-two flagged instances. Most are legitimate and should stay: "leverage" as a noun in the PE context (*"when the seller has least leverage"*), "robust" inside quoted Post Office Horizon evidence, "elevated" as a factual description of housing vulnerabilities. Those are correct usage and the scanner cannot tell the difference.

Seven are genuine and worth changing:

| Location | Text | Comment |
|---|---|---|
| `faq.html:197` and `:622` | "Conversion is contractual and seamless." | Marketing filler in an otherwise precise FAQ. Say what actually happens — no re-scoping, no new engagement letter, the retainer converts on the existing terms. |
| `about.html:137` | "he built the holistic risk management function from inception" | "Holistic" adds nothing here. "Built the group risk function from inception" is stronger and shorter. |
| `about.html:54` | "A board that has been genuinely challenged" | Drop "genuinely". A board has been challenged or it has not. |
| `services/embedded-gaas.md:32` | "fiduciary duties are holistic, collective, and non-delegable" | Same word, different page. This one is closer to a term of art, but "collective and non-delegable" carries the point alone. |
| `services/provision-29-readiness.md:29` | "the balance sheet date the declaration speaks to" | "The balance sheet date the declaration covers." |
| `assets/interactives/ai-governance-gap.html` | "a continuous-risk landscape requires continuous board attention" (x2) | "Landscape" is the reflex noun. "Continuous risk requires continuous attention" says it better. |
| `insights/posts/2025-08-navigating-the-polycrisis.md` | "elevate geopolitical risk from the risk committee" | "Move geopolitical risk out of the risk committee and onto the board agenda." |

### 3.3 Negation and elliptical structures

Beyond "rather than": 14 instances of "not just / not only / not merely", 12 of the "not X, it is Y" shape. Two on the homepage sit in the firm's core differentiation copy, which is where they cost the most:

- `index.html:391` — *"Our approach is not a traditional leveraged consulting model."* Defines the firm by what it is not, in the section headed "Principal-Led Engagement". The positive version is already sitting in the sentence before it.
- `index.html` — *"Twenty years at the top of institutional finance, not generic consulting methodology."* Same move, same section.

`about.html:68–71` runs an elliptical stack: *"No Overhead. All Expertise."* immediately followed by *"No associates. No project teams. No overhead layer between the client and the principal."* The second is a legitimate factual enumeration and reads well. The heading above it is the tell — a four-word inverted parallel that performs punchiness. "Fees fund expertise, not structure" or simply "Where the fees go" would carry it.

`/white-paper/read/why-traditional-advisory-models-under-deliver/` and the objections chapter each carry six to seven negations. Same treatment as 3.1: judge density per paragraph, not per instance.

### 3.4 Verbatim duplication between commercial and research pages

This is the most consequential language finding after "rather than", and it is a copy-paste artifact rather than a style question.

Measured on the live site, comparing 12-word windows:

| Service page | White-paper chapter | Overlap |
|---|---|---|
| `/services/retained-gaas/` | `/white-paper/read/the-four-tier-architecture/` | **23.3%** |
| `/services/embedded-gaas/` | `/white-paper/read/the-four-tier-architecture/` | **22.9%** |
| `/services/adversarial-methodology/` | `/white-paper/read/the-adversarial-governance-methodology/` | **22.6%** |
| `/services/red-team-review/` | `/white-paper/read/the-adversarial-governance-methodology/` | **13.9%** |

Both sides of every pair are indexable, with self-referential canonicals and no relationship declared between them. Two costs follow. Search engines have to choose which page to rank for the same passages, and they may not choose the commercial one. And a reader who moves from a service page into the white paper — exactly the journey the site is built to encourage — meets paragraphs they have already read, which undercuts the impression that the paper contains ninety pages of original work.

The fix is not to delete either page. It is to make the service page do a different job from the chapter: the chapter argues the case, the service page states the offer, the timeline, and what the board ends up holding. Rewriting the four service pages to stop restating the argument would remove most of the overlap and make them better sales pages at the same time.

Related: `/index.html` and `/services/index.html` share 101 overlapping phrases, and `/illustrative-engagements/`, `/` and `/services/` share the Provision 29 retainer sentence verbatim. Card summaries repeating across hub pages is normal practice; flagged for awareness, not action.

---

## 4. Factual consistency

For a governance firm, these matter more than prose.

### 4.1 AUM misattribution on the homepage — highest priority

`index.html:537–541` renders as a single credential block:

> Credit Suisse · J.P. Morgan · Morgan Stanley · SICO Bank
> **Group Chief Risk Officer · £50bn+ AUM · Basel III implementation**

The job title and the AUM figure sit on one line under a list of four employers. `_data/credentials.yml` records the £50bn+ AUM against **Credit Suisse, Head of Fiduciary Risk (UK)**, and the SICO Group CRO role against **$6bn AUM**. `/what-is-sgaas/` states the correct sequence: *"20-year risk career culminated as Group Chief Risk Officer at SICO Bank, following ten years as Head of Fiduciary Risk (UK) at Credit Suisse."*

As written, the homepage invites the reading that the CRO role carried £50bn+. Anyone who then reads `/about/` finds $6bn. Split the line — CRO at SICO, and £50bn+ AUM under direct governance oversight at Credit Suisse — and the claim is both stronger and unarguable.

### 4.2 "Tripled" versus 3.4x

`about.html:144` says Active Prospects revenue *"tripled during his tenure"*. Three other places on the same page and the homepage say 3.4x, £6.5m to £22m+. £6.5m to £22m is 3.38x. "Tripled" understates the actual result and contradicts the number printed three inches below it. Use the figure everywhere.

Minor: the homepage says "£6.5m to £22m", `/about/` says "£6.5m to £22m+". Pick one.

### 4.3 One appointment, three titles

The Children's Commissioner role appears as:

- "Non-Executive Director on the Audit and Risk Committee of a government statutory body" (`about.html`, prose)
- "NED, Audit & Risk Committee · Statutory body · 2016–2020" (`about.html`, timeline)
- "Non-Executive Advisor, Audit & Risk Committee" (`_data/credentials.yml`, rendered lower on the same page)

Director and Advisor are not the same appointment. Whichever is correct, it should be the only one on the site.

### 4.4 Regulator lists disagree

Homepage: FCA · PRA · FINMA · CSSF · CBB · SCA, described as "the UK, Europe, Switzerland and the GCC".
`/about/`: the same six plus NAO, CMA and BaFIN.
`CLAUDE.md`: FCA, CBB, CMA, SCA.

Three different sets. The homepage is a deliberate short list, which is fine, but it should be a subset chosen for impact rather than an accident, and the geographic gloss should match whichever list is shown (BaFIN and CSSF are Europe; NAO and CMA are neither financial-services regulators nor covered by the gloss).

### 4.5 Trademark symbols applied inconsistently

"Red Team Protocol" appears 48 times, with ™ on 5 of them. "Pre-Mortem Diagnostic" 40 times, ™ on 2. "Risk Simulation Lab" 39 times, ™ never. "SGaaS™" once. Either mark first use on each page or drop the symbols entirely — the current pattern looks like an incomplete edit, and inconsistent marking weakens rather than strengthens a claim to the name.

---

## 5. Structural and configuration findings

### 5.1 `og:image` missing site-wide

Confirmed on all 63 sitemap URLs. `_config.yml` sets `image: "/assets/images/marentis-labs-social-card.png"`, and the file is present and serving with HTTP 200 — but `image` is not a key jekyll-seo-tag reads at site level. With no image resolved, the plugin also silently downgrades `twitter:card` from the configured `summary_large_image` to `summary`.

Every share of the white paper, every insight post posted to LinkedIn, renders without an image.

### 5.2 Empty Twitter handles rendering as bare "@"

The homepage head contains:

```html
<meta name="twitter:site" content="@" />
<meta name="twitter:creator" content="@" />
```

`twitter.username: ""` and `author.twitter: ""` in `_config.yml` are empty strings, and jekyll-seo-tag treats an empty string as present. The fix is to remove the keys rather than blank them.

### 5.3 `/services/risk-simulation-lab/` returns 404

Still outstanding from the July audit, and still a 404 (not a server error — GitHub Pages returns its standard not-found page). Nothing on the site links to it, so no user hits it. But the Risk Simulation Lab™ is one of three named methodology tools, and it is the only one without a page: Red Team Review has `/services/red-team-review/`, and both it and the Pre-Mortem Diagnostic are described at length on `/services/adversarial-methodology/`. The asymmetry is an unclaimed search position more than a bug.

### 5.4 Meta titles and descriptions overflow

Of 59 HTML pages: **34 titles exceed 65 characters** and **29 descriptions exceed 160**. Worst cases are the insight posts, where the pattern is a long editorial title plus " | Marentis Labs":

- `/insights/posts/ned-adversarial-governance-function/` — 112 characters
- `/insights/posts/the-governance-paradox/` — 110
- `/insights/posts/navigating-the-polycrisis/` — 93
- `/insights/posts/capital-allocation-pre-exit-risk/` — description 257 characters

Google truncates around 580 pixels, so roughly the last third of these titles never appears in results. Adding a short `seo_title` to the front matter of the worst offenders fixes it without touching the on-page headline.

### 5.5 `/carbon_reduction_plan/` uses an underscore

Every other URL on the site is hyphenated. `/carbon-reduction-plan/` returns 404. Low impact — it is a footer compliance page — but it is the one inconsistent URL on an otherwise clean structure, and `_data/credentials.yml` already points at the hyphenated version that does not exist.

### 5.6 Dead data in `_data/credentials.yml`

The file defines three top-level keys. Only one is used.

- `executive:` — read by `about.html:316`, renders correctly on the live page (confirmed).
- `board:` — never referenced. `about.html` hard-codes the board section, and the data-file version contains a detail the page does not show: "10,000+ beneficiaries annually".
- `policies:` — `about.html:479` reads `site.data.policies`, which does not resolve; the correct path would be `site.data.credentials.policies`. The `{% unless %}` fallback fires and the hard-coded list renders, so the page looks right. The dead entry also points at `/carbon-reduction/`, a URL that 404s.

Nothing is broken for a visitor. The risk is that the file reads as the source of truth for credentials while two-thirds of it is inert, which is how the "Non-Executive Advisor" versus "Non-Executive Director" discrepancy in 4.3 survived.

### 5.7 `CLAUDE.md` has drifted from the codebase

Worth correcting, because it is what future sessions read first:

| `CLAUDE.md` says | Actual |
|---|---|
| Insights are Quarto `.qmd` files with `_quarto.yml` and a Flatly SCSS theme | Insights are Jekyll `.md` files under `insights/posts/` using `_layouts/article.html`; there is no `_quarto.yml` |
| Font is Inter throughout | `_layouts/default.html` loads Cormorant SC, Cormorant, DM Sans and Inter |
| Image filenames use spaces, referenced with `%20` | Live references use underscores: `Marentis_Labs_NoTag_Logo.png` |
| Cloudflare DNS "recommended but not done" | Cloudflare is live — the footer email is served through `/cdn-cgi/l/email-protection` |
| `/services/risk-simulation-lab/` "has a server error" | Returns a clean 404 |
| Deployment pipeline renders Quarto | No Quarto step is doing anything |

---

## 6. What is working

Worth recording so it does not get changed by accident.

- **Category ownership is real.** A web search for the exact phrase "Strategic Governance as a Service" returns marentislabs.com first and second, ahead of every generic governance-as-a-service page. No competitor uses the term. The AI-engine strategy is also working: the search summariser reproduced the `/what-is-sgaas/` definition almost verbatim, which is precisely what `llms.txt` and the DefinedTerm schema were built to achieve.
- **No broken internal links.** Every internal href across all 63 sitemap pages resolves, with the single exception of Cloudflare's `/cdn-cgi/l/email-protection` placeholder, which is rewritten in the browser and is not a real link.
- **Redirect stubs work.** `/case-studies/`, `/services.html`, `/cookies.html` and the other legacy URLs all resolve.
- **Duplicate-content control on the interactives is correct.** The raw widget files at `/assets/interactives/*.html` carry `noindex, follow` and are excluded from the sitemap; the canonical pages at `/insights/interactives/…/` carry proper canonicals. Handled cleanly.
- **Schema is valid everywhere it was tested** — Organization, Person, Service, WebPage, BreadcrumbList, FAQPage and DefinedTerm all parse without error.
- **Illustrative engagements hold the line.** All three read as openly constructed scenarios in the present tense, with no regulator outcomes, transaction outcomes, dates or client identifiers. The disclaimer discipline established in July is intact.
- **Zero thin pages.** No indexed HTML page falls under 250 words.
- **The prose is good.** The homepage Provision 29 block — *"The declaration lands in 2027. The evidence has to exist in 2026."* — and the About page line *"The team that pitches is the team that delivers"* are the kind of writing the rest of the site should be measured against. Nothing in this audit suggests a machine wrote this site; the findings above are the residue of heavy editing across many sessions, not of generation.

---

## 7. Verification notes

- All 63 sitemap URLs fetched live on 13 August 2026 and parsed in-browser; status codes, canonicals, robots directives, heading counts, meta lengths and word counts recorded per page.
- Duplication percentages computed on rendered visible text with navigation, footer, script and style content removed.
- Apostrophe and dash counts taken from rendered `innerText`, not source, so template and attribute quoting does not distort them.
- The ai-stripper scan ran against 74 extracted content files; the raw scan output is available if you want the per-instance detail behind any figure above.
- Line numbers cite local source files in this repository as at the time of the audit.
- No file in this repository was modified during this audit.

---

*Audit prepared 13 August 2026. Companion action list: `WEBSITE-AUDIT-2026-08-ACTIONS.md`.*
