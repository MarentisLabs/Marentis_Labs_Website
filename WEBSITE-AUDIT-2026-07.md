# Marentis Labs — Website Audit & Enhancement Plan

**Audited:** repository `HEAD` source (not the live deploy) against the June 2026 strategy canon in the Obsidian vault (docs 00–18).
**Date:** 9 July 2026 · **Auditor scope:** full estate — pages, includes, data, technical SEO/GEO, repo structure.
**Benchmark:** the *June 2026 canon* — Business Plan (00), Executive Summary (01), Service Architecture (07), Pricing (08), AI Search (13), Roadmap (17). Where the older Website Architecture note (12) disagrees with the June canon, the June canon wins, per the ownership rule in doc 00.

---

## 1. Verdict

The site is **strategically sound and materially ahead of the doc 03 "sparse website" critique**. Positioning, voice, thought-leadership depth and technical foundations are genuinely strong, and the single biggest historical credibility risk — fabricated case studies — has been correctly retired and replaced with disclaimered Illustrative Engagements.

The problem is no longer *absence*. It is **two things the strategy itself says are decisive and that are not yet true on the site**:

1. **Estate integrity.** The firm sells the discipline of "one version of the truth" and treats surviving its own consistency check as a *product feature* (docs 00, 01). The live source fails that check in several checkable, buyer-facing places — the same class of defect the June roadmap flagged as "must fix before any outbound push", plus more instances than the roadmap realised.
2. **Conversion infrastructure for the September gate.** The three assets the plan names as gate-critical — a **buyable Provision 29 readiness page**, the **Board Risk Readiness Assessment**, and the canonical **/what-is-sgaas/** definition page — are not built. Provision 29 is the firm's dated demand wedge; it currently has no owning landing page for the highest-intent query in the funnel.

Priorities below are ordered by *credibility risk × proximity to the 30 Sep 2026 gate*, not by effort.

---

## 2. What is already strong (protect this)

| Strength | Evidence | Why it matters |
|---|---|---|
| Distinctive, canon-aligned positioning & voice | Hero "We simulate failure so leaders don't have to experience it"; adversarial-by-design throughout | Differentiates from generic Big-4/consulting copy; justifies premium |
| Fabricated case studies retired | `_illustrations/` + `illustrative-engagements.html`, disclaimers, `/case-studies/` redirected | Closes the worst credibility landmine (doc 17 Phase 1) — do **not** reintroduce testimonials/named cases; canon forbids them |
| Real thought-leadership depth | 10 Insights articles, 90-page **gated** white paper (`/white-paper/` → form → `/white-paper/thank-you/`), 7 interactive data-viz | This is the inbound engine doc 03 said was missing. It now exists |
| Technical AEO/GEO foundations | `llms.txt`, `robots.txt` (GPTBot/ClaudeBot/PerplexityBot/CCBot…), JSON-LD graph (Organization, Person, Service, Report, BlogPosting) + inline **FAQPage** on `/faq/` | Doc 13's "own the category" play is wired at the plumbing level |
| Pricing kept off public pages | Service pages + FAQ say "bespoke, quoted after inquiry" | On-canon (CLAUDE.md rule). **One exception leaks — see D1** |
| Procurement/compliance credibility | privacy, cookies, terms, modern slavery, carbon, company registration | Expected by FTSE/regulated/PE buyers |

---

## 3. Findings (prioritised)

Severity: **P0** credibility-critical & cheap · **P1** gate-critical build · **P2** funnel · **P3** SEO/GEO · **P4** repo hygiene.
"Fixed this session" = applied as a safe, text-only edit (no new CSS classes, no deploy) — see §5.

### A. Estate-integrity defects — P0 (mostly fixed this session)

| # | Finding | Where | Canon says | Status |
|---|---|---|---|---|
| A1 | **Diagnostic duration wrong: "2–4 weeks"** in ~12 places | `faq.html` (5 visible + 5 in FAQ schema JSON), `services/index.html:117`, `services/diagnostic-gaas.md:9`, `llms.txt:15`, `CLAUDE.md:133` | Tier 1 Diagnostic is **4–8 weeks** (docs 07, 08, 01) | **Fixed** |
| A2 | **Children's Commissioner NED implied *current*** | `llms.txt:10`, `faq.html:123/293/549/709`, homepage badge `index.html:476–478` | Role is **former: 2016–2020** (doc 01, doc 17 Phase 1) | **Fixed** |
| A3 | **"338% turnaround" is arithmetically wrong/ambiguous** — £6.5m→£22m is **3.4×** (i.e. +238%), not +338% | `index.html:478`, `about.html:249/388`, `faq.html:123/293/549/709`, `_data/credentials.yml:36`, `CLAUDE.md` | Standardise on **"revenue grew 3.4×, £6.5m to £22m"** (doc 17 Phase 1) | **Fixed** |
| A4 | **llms.txt exposes stale pricing to AI engines** — "From £25k", "From £8k/month", "From £25k/month" | `llms.txt:15–17` | Contradicts June card (08) *and* the site's own bespoke-pricing posture | **Fixed** (aligned to bespoke posture) |
| A5 | "**Parliamentary** statutory body" — the Children's Commissioner for England is a statutory body, not a parliamentary one | `about.html:259`, `faq.html:293/709` | Doc 01: "statutory NED term … Children's Commissioner for England" | **Fixed** |

> Why this is P0 for *this* firm specifically: a sceptical audit-committee-chair buyer (the exact ICP) who catches a misstated NED currency or an incoherent turnaround statistic discounts every other claim on the site. Doc 00 lists "illustrative case studies discovered by a sophisticated buyer" as a top risk; the same logic applies to any self-inconsistency.

### B. Missing gate-critical assets — P1 (build next; not done this session)

| # | Finding | Canon reference | Recommendation |
|---|---|---|---|
| B1 | **No buyable Provision 29 readiness page.** Provision 29 is the dated demand wedge (personal director accountability, 2026–27 cycles). It appears only incidentally (one article, one illustration, inside `retained-gaas.md`). No landing page owns the query. | Doc 17 Phase 2 §4 ("add a buyable Provision 29 readiness page to the services architecture"); doc 13 target query #2 | Build **`/provision-29/`** (or `/services/provision-29-readiness/`): definition-first opening, "what evidence stands behind the declaration", scoped diagnostic offer, FAQ block, CTA. This is the single highest-leverage new page. |
| B2 | **No Board Risk Readiness Assessment.** Copy references it (`index.html`, `pre-exit-gaas.md`, an article) but the tool/page does not exist. | Proprietary IP (doc 11); named Sept-gate deliverable (docs 00, 01, 17) | Build **`/assessment/`**: 10–12 question self-serve tool, email-gated report (score + top-3 priorities + next step). Second gated asset after the white paper; feeds the funnel and the benchmarking database. |
| B3 | **No canonical `/what-is-sgaas/` page.** The firm coined the category but has no single authoritative definition URL for AI engines to cite. | Doc 13 technical foundation #4 | Build **`/what-is-sgaas/`**: one-sentence definition first, then origin, the four tiers, the methodology, FAQ. Point `llms.txt` and internal links at it. |

### C. Conversion & funnel — P2

| # | Finding | Recommendation |
|---|---|---|
| C1 | Most intents funnel to a single next step (contact/call). The white paper gate is the only mid-funnel capture. | B2 (assessment) is the fix. Until then, add a Provision 29 CTA path (B1). |
| C2 | Homepage does not surface either **verified tailwind** — the Big-4 audit-independence conflict or Provision 29 — despite these being the whole wedge (docs 00, 01). | Add a short, ICP-facing section or hero sub-line aimed at the audit-committee chair: the conflict + the deadline + "documented, defensible evidence of challenge." On-canon, high-conversion. |
| C3 | Confirm the Web3Forms key on `contact.html` is live and routing (CLAUDE.md says implemented). | 5-minute test submission before the outbound push. |

### D. AI-search / GEO / technical SEO — P3

| # | Finding | Recommendation |
|---|---|---|
| D1 | See A4 — `llms.txt` was the concrete GEO defect (stale figures fed to citation engines). | Fixed. When B1–B3 ship, add them to `llms.txt` Core Pages. |
| D2 | **Duplicate sitemap sources.** A hand-maintained `sitemap.xml` is committed *and* `jekyll-sitemap` is enabled. The manual file will silently go stale as pages are added (it must already be missing newer pages). | Pick one owner. Recommended: delete the static `sitemap.xml` and let `jekyll-sitemap` generate it, or remove the plugin. Don't run both. |
| D3 | `Person` schema is thin (no `alumniOf`, board roles, `hasOccupation`). | Enrich for stronger entity grounding — a cheap GEO win once A2/A3 facts are settled. |

### E. Repo hygiene / maintainability — P4 (dev-facing, real risk)

| # | Finding | Recommendation |
|---|---|---|
| E1 | **Full duplicate site nested at `Marentis_Labs_Website/Marentis_Labs_Website/`** — an older copy carrying the *pre-fix* estate (old `_case_studies/`, `case-studies-landing.html`, monthly-pricing homepage, CC-as-current). | `git rm -r` it. It pollutes search, invites edits to the wrong copy, and re-introduces retired content. |
| E2 | **Malformed directory `{_layouts,_includes,_data,assets`** at repo root — a shell brace-expansion artifact. | Delete. |
| E3 | `.fuse_hidden*` files throughout (ProtonDrive tombstones of open-but-deleted files). | Add to `.gitignore`; clean the tree. |
| E4 | Heavy dev/scratch files in the deployed tree: two ~646 KB `white-paper-*implementation*.html`, `_mockups/`, `implement-web3forms.md`, coverage `.xlsx`, loose logo duplicates. | Move to an excluded `/_dev/` folder (or `_config.yml` `exclude:`) so they don't ship. |
| E5 | `CLAUDE.md` itself carried the stale 2–4 week duration and 338% figure — the instruction file is part of the estate. | **Fixed** (T1 duration, background credential line, and the tone-guidance example). |

---

## 4. Sequenced roadmap to the 30 Sep 2026 gate

The gate (doc 00): **three paid diagnostics signed, ten interviews complete, one nameable client.** The site's job is to make the founding-client outreach land against a coherent, high-intent estate.

**Stage 0 — before any outbound (this week).**
Estate-integrity P0 fixes (A1–A5, done) + repo hygiene E1/E2 (remove the duplicate site and malformed dir). A cold third-party read must surface no contradiction (doc 17 Phase 1 success test).

**Stage 1 — the wedge (weeks 1–2).**
Build **`/provision-29/`** (B1) and **`/what-is-sgaas/`** (B3). Wire them into the homepage, the services hub, `llms.txt` and the sitemap. This gives the Provision 29 outreach and every "what is SGaaS" AI query a page to land on.

**Stage 2 — mid-funnel capture (weeks 2–4).**
Ship the **Board Risk Readiness Assessment** (B2) as the second gated asset. Add the ICP tailwind section to the homepage (C2). Confirm the contact form (C3).

**Stage 3 — durability (ongoing).**
Resolve the sitemap owner (D2), enrich Person schema (D3), clear dev files from the deployed tree (E3/E4), and route the LinkedIn campaign to the white paper and the assessment.

---

## 5. Quick-wins applied this session

Text-only edits (no new Tailwind classes, no `git push`). **Review the diff and commit yourself.** Files touched:

- `faq.html` — diagnostic duration 2–4 → 4–8 weeks (5 visible + 5 FAQ-schema instances); Children's Commissioner recast to former (2016–2020); "parliamentary statutory body" → "statutory body"; "338% turnaround" → "3.4× / revenue grew 3.4×" (visible + schema JSON).
- `llms.txt` — duration fix; pricing lines re-cut to the canonical bespoke posture (no stale "From £X" figures); founder credential CC marked former.
- `services/index.html` — Tier 1 duration 2–4 → 4–8 weeks.
- `services/diagnostic-gaas.md` — front-matter `duration` 2–4 → 4–8 weeks.
- `index.html` — founder credential badge: CC marked former; "338% turnaround" → "revenue grew 3.4×, £6.5m to £22m".
- `about.html` — "338% financial turnaround" → "3.4× revenue turnaround" (×2); CC authority block dated 2016–2020 and "Parliamentary" → "Statutory"; lower board entry dated.
- `_data/credentials.yml` — Active Prospects "338%" → "3.4×"; Children's Commissioner summary dated 2016–2020.
- `CLAUDE.md` — T1 duration, founder background (3.4× + CC former), and the tone-guidance example aligned.

**Not touched (need your decision / larger builds):** all P1 pages (B1–B3), homepage tailwind section (C2), sitemap owner (D2), and repo hygiene deletions (E1–E4) — flagged for you to action or approve.

---

## 6. One-line summary

The website has stopped being a liability and become an asset; the remaining work is to make it *consistent enough to survive its own buyer* and *equipped to convert the Provision 29 window* before that window starts to close.
