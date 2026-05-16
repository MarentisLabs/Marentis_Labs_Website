# White Paper Implementation Plan
## Marentis Labs — Strategic Governance as a Service Framework

**Prepared for:** Owen Vallis, Managing Director  
**Date:** 6 May 2026  
**Scope:** Adding the white paper to marentislabs.com with HubSpot lead gate, homepage promotion, and AI/LLM search optimisation

---

## Assessment of the LLM Advisor's Recommendations

Before the plan: an honest read of what the external advice gets right and what it misses.

**What holds up:**
- Inline section over modal — correct for a FTSE 350/PE board audience. Popups are for SaaS trials.
- Four-field form (First Name, Last Name, Business Email, Company) — right balance of friction vs. data quality.
- GDPR/Notice and Consent field — non-negotiable given the multi-jurisdictional client base.
- Immediate follow-up email as a fail-safe — good practice.
- UTM parameter discipline — essential for attributing LinkedIn-driven lead quality.

**What it missed or got wrong:**

1. **The lead gate vs. LLM indexing conflict.** The advice says to set the PDF to "Public – Noindex" in HubSpot. This directly contradicts your second requirement: that every LLM can scrape and cite the white paper. `llms.txt` and `robots.txt` (already configured to allow all AI crawlers) are how LLMs discover your content — but they cannot fill in a form. If the PDF is only in HubSpot with noindex, AI engines will never find it. Resolution: host the PDF on the Jekyll site at a public URL. The form is a *marketing* gate, not a *technical* access barrier.

2. **The llms.txt file already references the white paper.** The site's `llms.txt` has a placeholder entry pointing to `/assets/downloads/marentis-labs-strategic-governance-as-a-service-white-paper.pdf` and a landing page at `/white-paper/`. These need to actually exist. The plan is already partially laid out for you.

3. **No HTML summary page for AEO.** A gated PDF is opaque to AI engines even if the URL is public — crawlers index HTML. The most effective AEO move is a rich, ungated HTML "Executive Summary" page that extracts key frameworks, statistics, and insights from the white paper. This is what gets cited in Claude, Perplexity, and ChatGPT responses when someone asks about corporate governance frameworks.

4. **No Schema.org markup recommendation.** Structured data (`ScholarlyArticle` or `Report` type) on the landing page materially improves how AI search engines attribute and surface your content.

5. **HubSpot Starter follow-up email nuance.** HubSpot Starter does not include Workflows (that requires Marketing Hub Pro). What it *does* include is a simple single follow-up email on form submission — the advice is directionally correct but understates the limitation. This is sufficient for the use case.

---

## Implementation Overview

Eight discrete phases, sequenced by dependency. Phases 1–4 are pure code work. Phase 5 requires manual HubSpot configuration. Phases 6–8 are incremental AEO improvements.

| Phase | What | Owner | Effort |
|---|---|---|---|
| 1 | Upload PDF asset | Owen | 2 min |
| 2 | White paper landing page `/white-paper/` | Code | 2–3 hrs |
| 3 | White paper thank-you page `/white-paper/thank-you/` | Code | 30 min |
| 4 | Homepage feature section | Code | 1 hr |
| 5 | HubSpot form + follow-up email | Owen | 30 min |
| 6 | Embed HubSpot form into landing page | Code | 15 min |
| 7 | HTML Executive Summary page `/white-paper/executive-summary/` | Code + Owen | 2 hrs |
| 8 | Footer link + llms.txt + robots.txt verification | Code | 15 min |

---

## Phase 1 — PDF Asset Upload

**Action:** Place the white paper PDF at exactly this path in the repository:

```
assets/downloads/marentis-labs-strategic-governance-as-a-service-white-paper.pdf
```

This path is already referenced in `llms.txt`. The file will be served publicly at:

```
https://marentislabs.com/assets/downloads/marentis-labs-strategic-governance-as-a-service-white-paper.pdf
```

`robots.txt` already allows all crawlers including GPTBot, ClaudeBot, PerplexityBot, and Google-Extended to access `/`. No robots.txt change needed.

**Do not** put the only copy in HubSpot File Manager. HubSpot's CDN URLs (e.g., `hs-sites.com/...`) are less authoritative for AI citation purposes than a URL under your own domain.

---

## Phase 2 — White Paper Landing Page (`/white-paper/`)

### File to create: `white-paper.html`

```yaml
Front matter:
  layout: default
  title: "Strategic Governance as a Service — The Definitive Framework"
  description: "Download the Marentis Labs white paper: the definitive framework for continuous, adversarial, principal-led governance for FTSE 350 boards and PE-backed organisations."
  permalink: /white-paper/
```

### Page architecture (top to bottom):

**A. Hero block — dark charcoal, full-width**

- Eyebrow label: `White Paper · 2025` (gold, uppercase, tracked)
- Headline (Cormorant SC): *"The Definitive Framework for Strategic Governance as a Service"*
- Subheadline: One sentence — e.g., *"90 pages. 20 years of board-level CRO practice distilled into an operational framework for FTSE 350 and PE-backed governance."*
- No CTA here — let the user scroll into the value proposition before asking for data.

**B. Three-column "What You Will Take Away" strip**

Each column: one icon + bold short title + 2-sentence description. The three insights should be non-obvious, specific, and adversarial in tone. Suggestions based on Marentis Labs positioning:

- *Why continuous governance outperforms annual board reviews by a measurable factor* — and what the Basel 3.1 capital model implications are for risk committee composition.
- *The four failure modes that appear in every governance health check* — and how FTSE 350 chairs are systematically blind to three of them.
- *How PE operating partners are using Pre-Exit GaaS to convert governance from a diligence liability into a premium valuation narrative.*

These should be written from the actual white paper content. Placeholders can be refined once Owen confirms the three insights he wants surfaced.

**C. Cover mockup + form — two-column layout**

Left column: CSS/SVG 3D book cover render. This is built in pure CSS — a tilted rectangle with the brand palette, title, and author name. No third-party tool or image generation required. The effect: gold spine, charcoal front face, subtle drop shadow. Class name: `.wp-cover-3d`.

Right column: HubSpot form embed (see Phase 5 and 6). Above the form, three short credibility lines:
- *90+ pages · 20 Years CRO Practice*
- *FTSE 350 · PE Portfolio · FCA/PRA Regulated Entities*
- *Author: Owen Vallis, Group CRO — Credit Suisse, J.P. Morgan, SICO Bank*

**D. Schema.org structured data (in page `<head>` via front matter flag)**

```json
{
  "@context": "https://schema.org",
  "@type": "Report",
  "name": "Strategic Governance as a Service — The Definitive Framework",
  "author": {
    "@type": "Person",
    "name": "Owen Vallis"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Marentis Labs Ltd"
  },
  "url": "https://marentislabs.com/white-paper/",
  "datePublished": "2025",
  "description": "..."
}
```

This is added as a `<script type="application/ld+json">` block. The cleanest way to implement this in Jekyll is via a conditional include in `_includes/schema.html`, triggered by a `schema_report: true` front matter flag on the white paper page.

**E. "While you read..." service links strip**

Below the form, a light-background row of four service cards (T1–T4) with a single line each. Copy: *"The frameworks in this paper map directly to our four GaaS engagement tiers."* This section converts readers who arrive, download, and browse — before they email.

---

## Phase 3 — White Paper Thank-You Page (`/white-paper/thank-you/`)

### File to create: `white-paper-thank-you.html`

```yaml
Front matter:
  layout: default
  title: "Your Copy is Ready"
  permalink: /white-paper/thank-you/
```

This page has three elements:

1. Confirmation message (charcoal hero-style): *"Your copy is ready."* + *"We've also sent a link to your inbox."*
2. A large gold CTA button: **"Download the Framework →"** linking directly to the PDF URL.
3. Below that: a brief "Next step" nudge — *"The framework describes four GaaS engagement configurations. If the governance challenges it surfaces resonate, a confidential conversation with Owen takes 45 minutes."* → link to `/contact/`.

HubSpot form "Options" tab is configured to redirect to this URL on submission.

---

## Phase 4 — Homepage Feature Section

### Location in `index.html`

Insert immediately **after** the hero section and **before** the "Marentis Difference" three-pillar section. This is the highest-value real estate on the site for a problem-aware visitor who isn't yet ready to schedule a call.

### Section design

Background: `bg-ml-light-bg` (alternates with white — consistent with the existing rhythm).

Layout: Two-column on desktop, stacked on mobile.

Left column:
- Eyebrow: `Featured Framework` (gold, small caps)
- Headline (Cormorant SC, 3xl): *"The SGaaS Governance Playbook: The Definitive Framework for FTSE 350 Boards and PE-Backed Organisations"*
- Two lines of supporting copy — outcome-focused, no fluff
- Three tight bullet points (the same "non-obvious insights" from the landing page)
- CTA button (`.btn-gold`): **"Download the Framework"** → `/white-paper/`
- Below the button, small text: *"PDF · 90+ pages · No spam. Unsubscribe at any time."*

Right column:
- The same CSS 3D book cover render (`.wp-cover-3d`) used on the landing page
- Scaled appropriately for the section context

### Copy guidance for the headline

Avoid "playbook" if Owen dislikes that register — alternatives: *"The SGaaS Governance Framework"*, *"The FTSE 350 Governance Blueprint"*. The key constraint: the headline should contain a specific, searchable phrase that a CFO or governance committee chair would actually use in a search query or AI prompt.

---

## Phase 5 — HubSpot Configuration (Manual — Owen)

These steps must be completed in HubSpot before Phase 6 can be coded.

**Step 1: Create the form**

Marketing > Forms > New Form > "Embedded form"

Fields:
- First Name (required)
- Last Name (required)
- Business Email (required) — use the "Business Email" field type, not generic Email, to enable business vs. consumer email filtering
- Company Name (required)

Enable "Notice and Consent" / GDPR processing field. Text: *"By submitting this form you agree to Marentis Labs processing your data in line with our [Privacy Notice](/privacy/). You may unsubscribe at any time."*

Form name (internal): `White Paper — SGaaS Framework 2025`

**Step 2: Form Options tab**

- After submit: Redirect to URL → `https://marentislabs.com/white-paper/thank-you/`
- Send follow-up email: Yes — configure immediately (see Step 3)

**Step 3: Follow-up email**

Subject line: *"Your SGaaS Framework — Download Inside"*

Body (plain, brief):

> Owen Vallis here. The white paper you requested is attached below. It runs to 90+ pages — the key frameworks are in Sections 3 and 5 if you want to start there.
>
> [Download the Framework →] (link to PDF URL)
>
> If anything in the framework surfaces governance questions about your own board or risk committee, I'm available for a confidential conversation. No pitch — a practitioner conversation.
>
> [Schedule a Call →] (link to /contact/)
>
> Owen Vallis  
> Managing Director, Marentis Labs Ltd

Sender: Owen Vallis / info@marentislabs.com

**Step 4: Copy the embed code**

After saving the form, go to the form and click "Share" / "Embed." Copy the full embed snippet — it will look like:

```html
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "eu1",      // or "na1" depending on your HubSpot data centre
    portalId: "XXXXXXXX",
    formId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  });
</script>
```

Share this snippet and the Phase 6 code work can be completed.

**Step 5: UTM tracking**

When sharing the white paper landing page URL via LinkedIn, email, or other channels, append UTM parameters:

```
https://marentislabs.com/white-paper/?utm_source=linkedin&utm_medium=organic&utm_campaign=sgaas-framework-2025&utm_content=post-title
```

HubSpot will automatically capture UTM parameters from form submissions and attribute them to the contact record.

---

## Phase 6 — Embed HubSpot Form Into Landing Page

Once the embed snippet from Phase 5 is available, it replaces the placeholder `<!-- HUBSPOT FORM EMBED -->` comment in the white paper landing page HTML. The form renders client-side via JavaScript. No Jekyll build change is needed.

One important addition: wrap the form in a `<div id="wp-form-anchor">` and add a smooth-scroll link from the hero CTA that says *"Download the Framework →"* — pointing to `#wp-form-anchor`. This way, the button in the hero jumps the user directly to the form rather than navigating away.

---

## Phase 7 — HTML Executive Summary Page (`/white-paper/executive-summary/`)

This is the single highest-impact AEO action available to you.

**Why:** AI search engines (Perplexity, ChatGPT Search, Claude) index HTML pages, not PDFs. When someone asks an AI "what is Strategic Governance as a Service" or "how should FTSE 350 boards structure their risk governance," you want this page to surface as the authoritative source — complete with a citation back to Marentis Labs. A gated PDF will never achieve this. A rich, ungated HTML page will.

**What it contains:**

- Full page at `/white-paper/executive-summary/`
- Not a teaser — a substantive summary of the white paper's key frameworks, definitions, and empirical positions
- Minimum 1,500 words of HTML body copy
- Structured as a proper article: `<h2>` and `<h3>` headings for each major framework or chapter
- Statistics and specific claims cited with dates and sources where possible
- A definition section for "Strategic Governance as a Service" — this is the search query you want to own
- At the foot: *"This executive summary draws on the full white paper, available for download at [/white-paper/]."* and a link to `/contact/`

**Schema.org markup:** `ScholarlyArticle` type on this page, with `isPartOf` pointing to the main white paper report.

**This page is fully public, ungated, and indexed by everything.** The PDF is what goes through the lead gate. The summary is what gets cited by AI engines.

Owen needs to draft or provide the key frameworks, definitions, and statistics from the white paper for this page to be written accurately.

---

## Phase 8 — Footer, Navigation, and Discovery Files

**Footer update (`_includes/footer.html`):**

Add to the "Company" column:

```html
<li><a href="/white-paper/" class="footer-link">SGaaS Framework (White Paper)</a></li>
```

**Navigation:** No change recommended. Adding "White Paper" to the main nav would displace a more important link and looks transient. The homepage section, footer, and insights cross-links are sufficient distribution.

**`llms.txt` verification:**

The file already contains the correct entry for the white paper. Once the PDF is uploaded and the landing page exists, this entry is live and accurate. No changes needed provided the PDF is placed at the exact path specified (Phase 1).

**`robots.txt`:** No changes needed. All crawlers are already permitted to access all paths including `/assets/downloads/`.

---

## Summary: What Owen Needs to Do

The code work (Phases 2, 3, 4, 6, 8) can be executed by Claude directly. The following steps require Owen's input:

1. **Upload the PDF** to the repository at `assets/downloads/marentis-labs-strategic-governance-as-a-service-white-paper.pdf`
2. **Complete HubSpot setup** (Phase 5) and share the form embed snippet
3. **Provide the three "non-obvious insights"** to be surfaced in the homepage section and landing page — these should come from the actual white paper, not be invented
4. **Provide key frameworks and statistics** from the white paper for the Executive Summary page (Phase 7)
5. **Confirm the white paper title** — the plan uses *"Strategic Governance as a Service — The Definitive Framework"* to match the existing `llms.txt` entry

When Steps 1–3 are complete, all code work can be executed in a single session.

---

## Suggested Execution Order

```
Owen uploads PDF  →  Claude builds landing page (placeholder form)
                  →  Claude builds thank-you page
                  →  Claude adds homepage section
Owen completes HubSpot  →  Owen shares embed snippet
                         →  Claude embeds form (15 min)
Owen provides white paper content  →  Claude writes Executive Summary page
Claude updates footer + verifies llms.txt  →  Done
git push origin main  →  Live in ~2 minutes
```

---

*This plan was produced after reviewing `index.html`, `_includes/nav.html`, `_includes/footer.html`, `_layouts/default.html`, `assets/css/input.css`, `llms.txt`, and `robots.txt`. All file paths, CSS class names, and deployment instructions are specific to the Marentis Labs Jekyll/Tailwind stack.*
