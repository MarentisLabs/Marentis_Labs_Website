# Marentis Labs — Website Project Context

This file gives Claude Code the context needed to work on the Marentis Labs website without losing continuity between sessions.

---

## What This Site Is

**Marentis Labs** is a Strategic Governance as a Service (SGaaS) firm founded by Owen Vallis. The firm serves FTSE 350 boards and PE-backed organisations. The tagline is: **"Strategic Governance as a Service. Adversarial by Design."**

The website is a marketing and credibility tool targeting:
- FTSE 350 CFOs, Chairs, and Governance Committees
- PE Operating Partners and portfolio company boards
- Regulated entities requiring governance uplift

Every editorial and design decision should serve that audience. Copy should be precise, authoritative, and devoid of generic consulting language.

---

## Technical Stack

| Layer | Technology | Notes |
|---|---|---|
| Static site | Jekyll 3.9 | Runs locally and on GitHub Pages |
| CSS | Tailwind CSS v3 + custom CSS | `style.css` is compiled output — do not hand-edit it |
| CSS source | `assets/css/input.css` | Edit this, then recompile |
| JS | Vanilla JS | `assets/js/main.js` — mobile nav, scroll-reveal, cookie consent |
| Insights | Quarto (`insights/`) | Separate build, `.qmd` files, SCSS theme |
| Hosting | GitHub Pages | Free, automated via GitHub Actions |
| Deployment | `.github/workflows/deploy.yml` | Triggers on push to `main` |
| Forms | Web3Forms | Free tier, key in `contact.html` |

**Ruby version: 3.4.x** (specifically tested on 3.4.9). Do not upgrade to Ruby 4.x — Jekyll 3.9 is not fully compatible.

---

## Repository Structure

```
marentis-site/
├── _config.yml                  # Site-wide settings: title, email, Calendly URL, baseurl
├── _layouts/
│   ├── default.html             # Master layout — nav, head, footer, analytics
│   └── service.html             # Service page layout — breadcrumb, sidebar, CTA
├── _includes/
│   ├── nav.html                 # Shared navigation (edit once, applies everywhere)
│   ├── footer.html              # Shared footer (auto-updating copyright year)
│   ├── schema.html              # Schema.org structured data
│   └── cookie-consent.html      # Cookie banner
├── _data/
│   └── credentials.yml          # Owen's career data — used by about.html
├── assets/
│   ├── css/
│   │   ├── input.css            # Tailwind SOURCE — edit this
│   │   └── style.css            # Compiled output — do not hand-edit
│   ├── js/main.js               # Mobile nav, scroll-reveal, cookie consent
│   └── images/                  # Logo and headshot files (filenames use spaces)
├── index.html                   # Homepage
├── about.html                   # Owen's credentials page
├── contact.html                 # Contact form + Calendly
├── contact-thank-you.html       # Post-form redirect page
├── services/
│   ├── index.html               # Services hub — four-tier GaaS architecture
│   ├── diagnostic-gaas.md       # T1 service page
│   ├── retained-gaas.md         # T2 service page (primary revenue)
│   ├── embedded-gaas.md         # T3 service page
│   ├── pre-exit-gaas.md         # T4 service page
│   ├── red-team-review.md       # Adversarial tool — standalone or within GaaS
│   └── adversarial-methodology.md  # Methodology umbrella page
├── insights/
│   ├── _quarto.yml              # Quarto config — Flatly theme + brand SCSS
│   ├── insights-theme.scss      # Brand colour overrides for Quarto/Bootstrap
│   ├── index.qmd                # Article listing page
│   └── posts/                   # Articles — one .qmd file per article
├── Gemfile                      # Ruby dependencies — do not add github-pages gem
├── .github/workflows/deploy.yml # GitHub Actions: Tailwind + Jekyll + Quarto + deploy
├── llms.txt                     # AI engine discovery
└── robots.txt                   # Crawler permissions
```

---

## Brand Identity

### Colours (CSS custom properties defined in `assets/css/input.css`)

| Token | Hex | Usage |
|---|---|---|
| `--ml-charcoal` | `#212529` | Primary dark — hero backgrounds, headings, dark sections |
| `--ml-gold` | `#a98c5a` | Accent — buttons, underlines, highlights, tier badges |
| `--ml-gold-dark` | `#8a7048` | Gold hover state |
| `--ml-slate-grey` | `#495057` | Body text |
| `--ml-slate-blue` | `#4a6572` | Secondary — links, tier T1/T3 labels |
| `--ml-light-bg` | `#f8f9fa` | Alternating section backgrounds |

All colours are also registered as Tailwind custom colours in `tailwind.config.js`:
`ml-charcoal`, `ml-gold`, `ml-gold-dark`, `ml-slate-grey`, `ml-slate-blue`, `ml-light-bg`

### Typography
- **Font:** Inter (Google Fonts, loaded in `default.html`)
- **Headings:** Inter Black (900 weight) for hero/display; Bold (700) for section headings
- **Body:** Inter Regular (400) / Light (300) for long-form prose
- **Labels/tags:** Inter SemiBold (600), uppercase, tracked

### Tone of voice
- Precise and senior — no generic consulting language
- Adversarial framing where appropriate ("We simulate failure", "kill the project to save it")
- Numbers and specifics preferred over adjectives ("338% turnaround", "£50bn AUM")
- British English spelling throughout (organisation, centre, rigour, colour)

---

## Image Files

Images live in `assets/images/`. **File names use spaces**, not underscores. Reference them in HTML with `%20` encoding:

| Usage | Filename | HTML reference |
|---|---|---|
| Nav logo (all pages) | `Marentis Labs NoTag Logo.png` | `Marentis%20Labs%20NoTag%20Logo.png` |
| Hero logo (homepage) | `Marentis Labs Full Logo.png` | `Marentis%20Labs%20Full%20Logo.png` |
| Founder portrait | `owen-vallis-headshot.jpg` | `owen-vallis-headshot.jpg` |

The headshot was professionally processed (B&W, editorial S-curve, warm-neutral tint). Do not replace it without Owen's input.

---

## Service Architecture

The firm's services follow a four-tier model. This structure must be preserved consistently across all pages:

| Tier | Name | Positioning | Duration |
|---|---|---|---|
| T1 | Diagnostic GaaS | Entry point — governance health check | 2–4 weeks |
| T2 | Retained GaaS | Core revenue — continuous fractional CRO | 12+ months |
| T3 | Embedded GaaS | Deep — board seat / governance ownership | 12–18 months |
| T4 | Pre-Exit GaaS | PE portfolio — exit-aligned governance | 12–18 months pre-exit |

Pricing is bespoke and quoted after inquiry. Do not add price figures to any service page or index.

The **Adversarial Governance Methodology** (Red Team Review, Risk Simulation Lab, Pre-Mortem Diagnostic) is a methodology layer deployed *within* all tiers — not a separate competing product.

---

## Jekyll Templating Rules

### Layouts
All pages use `layout: default` (set in `_config.yml` defaults). Service pages use `layout: service`.

### Service page front matter
Service pages (`.md` files in `services/`) control their sidebar automatically via front matter:
```yaml
---
layout: service
title: "Page Title"
headline: "Headline: Subtitle Style"
strapline: "One sentence under the headline."
description: "Meta description for SEO."
tools: ["Tool Tag 1", "Tool Tag 2"]
best_for: "Ideal client description."
duration: "Timeline"
tier: "Tier X — Name"

cta_label: "Button Text"
permalink: /services/page-name/
---
```
Body content below the `---` is plain Markdown. `##` creates section headings.

### Shared components
Nav and footer are in `_includes/`. Edit them there — never copy-paste them into page files.

### Do NOT use `gem "github-pages"` in the Gemfile
This meta-gem locks old dependency versions that conflict with Ruby 3.4. The Gemfile specifies `gem "jekyll", "~> 3.9"` directly. Keep it this way.

### Required gems for Ruby 3.4 compatibility
These must stay in the Gemfile — they were removed from Ruby's standard library:
```
gem "csv"
gem "base64"
gem "bigdecimal"
gem "logger"
gem "kramdown-parser-gfm"
gem "liquid", ">= 4.0.4"
gem "webrick"
```

---

## CSS — Tailwind v3

The compiled `assets/css/style.css` is committed to the repo. GitHub Actions recompiles it on every push. For local changes that add new Tailwind classes, recompile with:

```bash
npx tailwindcss@3 -i ./assets/css/input.css -o ./assets/css/style.css --minify
```

**Do not run `npm install tailwindcss` without the `@3` pin** — this installs v4 which has a different architecture and will not work with this project.

Custom CSS classes (defined in `input.css`, not Tailwind utilities):

| Class | Purpose |
|---|---|
| `.btn-primary` | Gold background button |
| `.btn-outline` | White border button (hero) |
| `.nav-link` / `.nav-link-active` | Navigation links |
| `.hero-section` | Dark charcoal hero with geometric pattern |
| `.section-title` | Heading with gold underline accent |
| `.service-card` | Card with gold left-border on hover |
| `.tier-card` | Tier card with gold top-border on hover |
| `.credential-badge` | Gold left-border credential block |
| `.tool-tag` | Small gold label pill |
| `.step-number` | Gold circle with number (T1/T2/T3/T4) |
| `.reveal` | Scroll-reveal animation target |
| `.engagement-profile` | Dark sidebar on service pages |
| `.stat-block` | Gold top-border stat card |
| `.bio-card` | Dark card used on About page |

---

## Insights (Quarto)

Articles are `.qmd` files in `insights/posts/`. Name format: `YYYY-MM-slug.qmd`.

Required front matter:
```yaml
---
title: "Article Title"
description: "One sentence for the listing page."
author: "Owen Vallis"
date: "YYYY-MM-DD"
categories: [Risk Management, Strategy]
reading-time: true
---
```

Body is standard Markdown. Quarto-specific features available:
- `::: {.callout-tip}` / `::: {.callout-note}` — styled callout boxes
- `## Heading` — auto-added to the right-side Table of Contents
- Tables render natively with the brand SCSS theme

Articles end with a personal attribution line linking to `/contact/`.

The Quarto section uses **Bootstrap 5 / Flatly theme** with brand overrides in `insights/insights-theme.scss`. Do not use Tailwind classes inside `.qmd` files — they will not be compiled into the Quarto output.

---

## Deployment

**Local preview:**
```bash
bundle exec jekyll serve
# → http://localhost:4000
```

**Publish to live site (three commands):**
```bash
git add -A
git commit -m "Brief description of what changed"
git push origin main
```

GitHub Actions then: compiles Tailwind → builds Jekyll → renders Quarto → merges outputs → deploys to GitHub Pages. Live in approximately 2 minutes. Monitor at the repository's Actions tab.

**`Gemfile.lock` is gitignored.** Do not commit it. The GitHub Actions environment manages its own dependency resolution.

---

## Known Issues / Decisions Log

| Issue | Resolution | Status |
|---|---|---|
| `wdm` gem incompatible with Ruby 3.4 | Removed from Gemfile entirely | Fixed |
| `csv`, `base64`, `bigdecimal`, `logger` not in Ruby 3.4 stdlib | Added explicitly to Gemfile | Fixed |
| Liquid 4.0.3 calls `Object#tainted?` removed in Ruby 3.2+ | Pinned `gem "liquid", ">= 4.0.4"` | Fixed |
| `kramdown-parser-gfm` not auto-installed | Added to Gemfile | Fixed |
| Tailwind CDN (3MB) replaced by compiled build | `style.css` compiled and committed | Fixed |
| Logo filenames use spaces, HTML used underscores | HTML updated to use `%20` encoding | Fixed |
| `github-pages` gem conflicts with Ruby 3.4 | Replaced with `gem "jekyll", "~> 3.9"` directly | Fixed |
| Liquid `for reg in "X,Y" \| split: ","` syntax fails | Replaced with static HTML blocks | Fixed |

---

## What Has Not Been Built Yet

These were planned but not yet implemented:

- `/services/risk-simulation-lab/` — service page (the live site has a server error on this URL)
- Case studies section (`/case-studies/`) — collection defined in `_config.yml`, pages not written
- Client testimonials
- ~~Web3Forms access key~~ — implemented, key `aa5011de-b672-438e-a7fe-ea12c4f693ec` active
- Cloudflare DNS setup (recommended but not done)
- HubSpot CRM webhook connection

---

## Owner

**Owen Vallis** — Managing Director, Marentis Labs Ltd  
Contact: info@marentislabs.com  
Calendly: configured in `_config.yml` under `calendly:`

Background: 20-year Group Chief Risk Officer career (Credit Suisse, JP Morgan, SICO Bank, Morgan Stanley). Active board Chair (Active Prospects — 338% turnaround) and NED (Children's Commissioner, EdAct Trust). Multi-jurisdictional regulatory experience: FCA, CBB, CMA, SCA.
