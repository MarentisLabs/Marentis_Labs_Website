# Publishing Articles on Marentis Labs — Standard Operating Procedure

**Audience:** Anyone publishing articles to marentislabs.com/insights/
**Skill level required:** Basic familiarity with a text editor and file system. No coding knowledge needed.
**Time to publish:** 10–15 minutes once the article is written.

---

## Overview

Articles on the Insights section are written in Markdown — a simple text format that uses plain characters to indicate formatting. A `##` at the start of a line becomes a heading. `**bold**` becomes **bold**. No special software is required to write them.

Publishing involves three things:

1. Creating the article file
2. Adding a card to the Insights landing page
3. Pushing to GitHub (the site deploys automatically within ~2 minutes)

---

## Prerequisites (one-time setup)

You need:

- **Git** installed on your machine — [git-scm.com](https://git-scm.com)
- **A text editor** — [VS Code](https://code.visualstudio.com) is recommended (free)
- **Access to the repository** — the `marentis-site` folder on Proton Drive

If you have not done this before, open VS Code, go to **File → Open Folder**, and select the `marentis-site` folder. You will use VS Code's built-in terminal (**Terminal → New Terminal**) to run the publish commands.

---

## Step 1 — Create the article file

Navigate to the `insights/posts/` folder inside the repository.

Create a new file. The filename must follow this format exactly:

```
YYYY-MM-slug.md
```

Where:
- `YYYY` is the four-digit year (e.g. `2025`)
- `MM` is the two-digit month (e.g. `10` for October)
- `slug` is a short, lowercase, hyphenated version of the article title

**Examples:**
```
2025-10-board-effectiveness-review.md
2025-11-pe-exit-governance.md
2026-01-regulatory-risk-framework.md
```

> **Rule:** Use only lowercase letters, numbers, and hyphens in the filename. No spaces, no apostrophes, no special characters.

---

## Step 2 — Add the front matter

Every article file begins with a block of metadata called "front matter." It must be the very first thing in the file, surrounded by three dashes on each side.

Copy this template exactly and fill in your details:

```markdown
---
title: "Your Full Article Title Here"
description: "One or two sentences summarising the article. This appears on the Insights listing page and in search results."
author: "Owen Vallis"
date: YYYY-MM-DD
categories: [Category One, Category Two]
permalink: /insights/posts/your-slug/
---
```

**Field guide:**

| Field | What to write |
|---|---|
| `title` | The full article title, in quotes |
| `description` | 1–2 sentences, in quotes. This is the preview text on the listing page. |
| `author` | Always `"Owen Vallis"` unless another author is credited |
| `date` | Publication date in `YYYY-MM-DD` format. No quotes. Example: `2025-10-15` |
| `categories` | A list of tags in square brackets, separated by commas. See approved categories below. |
| `permalink` | The URL the article will be served at. Must start and end with `/`. Use the same slug as the filename. |

**Approved categories** (use these consistently — capitalisation matters):

```
Risk Management
Strategy
Resilience
Governance
Portfolio Strategy
Regulatory
Board Performance
Pre-Exit
```

You may use 1–3 categories per article. If a new category is genuinely needed, add it — but prefer existing ones for consistency.

**Permalink rule:** The slug in the permalink must match the slug in the filename.

| Filename | Permalink |
|---|---|
| `2025-10-board-effectiveness-review.md` | `/insights/posts/board-effectiveness-review/` |
| `2025-11-pe-exit-governance.md` | `/insights/posts/pe-exit-governance/` |

---

## Step 3 — Write the article

Below the closing `---` of the front matter, write the article body in Markdown.

### Markdown formatting reference

| What you type | What it produces |
|---|---|
| `## Section Heading` | Large section heading (appears in the Contents sidebar) |
| `### Sub-heading` | Smaller sub-heading (also appears in Contents sidebar) |
| `**bold text**` | **bold text** |
| `*italic text*` | *italic text* |
| `[link text](/contact/)` | A hyperlink |
| `- Item one` | Bullet list item |
| `1. Item one` | Numbered list item |
| `---` | A horizontal dividing line |

> **TOC note:** Every `##` and `###` heading you write automatically appears in the Contents navigation sidebar on the right side of the article page. Structure your article with clear headings — this directly improves readability for long articles.

### Article structure

A well-structured article follows this pattern:

```markdown
## Opening section

Introductory paragraphs. Set up the problem or question.

## Main body section

Substantive content.

### Sub-section if needed

Detail under the main section.

## Another main section

Continue the argument.

## Conclusion

Close the article. What should the reader take away?

---

*Owen Vallis is the founder of Marentis Labs. [Description of relevance to a service or engagement type.] [Schedule a confidential discussion](/contact/).*
```

The final italicised paragraph and horizontal rule (`---`) are the standard article attribution and call-to-action. Adjust the middle sentence to reference the relevant service (Diagnostic GaaS, Retained GaaS, etc.) but keep the structure consistent.

### Linking within the article

To link to other pages on the site, use site-relative links:

```markdown
[our Diagnostic GaaS service](/services/diagnostic-gaas/)
[schedule a call](/contact/)
```

To link to external sites, use the full URL:

```markdown
[UK Corporate Governance Code](https://www.frc.org.uk/...)
```

### A complete article example

```markdown
---
title: "Board Effectiveness Reviews: What Good Looks Like"
description: "Most board effectiveness reviews confirm what boards already know. A governance-led approach surfaces the questions boards are not asking themselves."
author: "Owen Vallis"
date: 2025-10-01
categories: [Governance, Board Performance]
permalink: /insights/posts/board-effectiveness-review/
---

## The Problem With Most Effectiveness Reviews

Most board effectiveness reviews are comfortable exercises...

## What a Rigorous Review Actually Tests

### Independence of judgement

...

### Information quality

...

## Conclusion

...

---

*Owen Vallis is the founder of Marentis Labs. Board effectiveness is a core component of our Retained GaaS engagements. [Schedule a confidential discussion](/contact/).*
```

---

## Step 4 — Add the article card to the Insights landing page

The Insights landing page does not update automatically — you need to add the article card manually.

Open the file:

```
insights-landing.html
```

Find the section that begins:

```html
<div class="grid md:grid-cols-2 gap-8">
```

Copy one of the existing article card blocks (from `<article class="service-card...">` to the closing `</article>`) and paste it immediately after the last `</article>` closing tag, before the `</div>`.

Then update the copied card with your article's details:

```html
<article class="service-card bg-white border border-gray-200 rounded-lg p-7 reveal">
  <div class="flex flex-wrap gap-2 mb-4">
    <span class="tool-tag">Category One</span>
    <span class="tool-tag">Category Two</span>
  </div>
  <p class="text-xs text-ml-slate-grey uppercase tracking-wide mb-2">October 2025 &middot; 6 min read</p>
  <h3 class="text-xl font-bold text-ml-charcoal mb-3 leading-snug">
    <a href="/insights/posts/your-slug/" class="hover:text-ml-gold transition-colors">
      Your Full Article Title Here
    </a>
  </h3>
  <p class="text-ml-slate-grey text-sm leading-relaxed mb-5">
    Your description text here. Same as the description in the front matter.
  </p>
  <a href="/insights/posts/your-slug/"
     class="text-ml-gold text-sm font-semibold hover:text-ml-gold-dark transition-colors">
    Read article &rarr;
  </a>
</article>
```

**Reading time estimate:** Divide the article word count by 200 and round up to the nearest minute. A 1,200-word article is approximately 6 minutes.

> **Card ordering:** Cards appear in the order they are written in the HTML file. Put the newest article first (at the top of the grid).

---

## Step 5 — Preview locally (optional but recommended)

Before publishing, you can preview the article exactly as it will appear on the live site.

In the VS Code terminal, run:

```bash
bundle exec jekyll serve
```

Then open a browser and go to:

```
http://localhost:4000/insights/posts/your-slug/
```

Check:
- The article title and description appear correctly in the hero
- All headings appear in the Contents sidebar on the right
- Links work
- The article card appears correctly at `http://localhost:4000/insights/`

When finished, stop the server with `Ctrl + C` in the terminal.

---

## Step 6 — Publish

Once you are satisfied with the article, run these three commands in the terminal, one at a time:

```bash
git add -A
```
```bash
git commit -m "Add article: Your Article Title"
```
```bash
git push origin main
```

**What each command does:**

| Command | What it does |
|---|---|
| `git add -A` | Stages all changed and new files for publishing |
| `git commit -m "..."` | Saves a snapshot with a description of what changed |
| `git push origin main` | Sends the changes to GitHub, which triggers the automatic deployment |

After pushing, GitHub Actions builds and deploys the site automatically. This takes approximately **2 minutes**.

---

## Step 7 — Verify the article is live

After 2 minutes, visit the article URL on the live site:

```
https://marentislabs.com/insights/posts/your-slug/
```

Also check the Insights listing page to confirm the card appears:

```
https://marentislabs.com/insights/
```

If the article does not appear after 5 minutes, check the Actions tab in the GitHub repository for build errors.

---

## Quick checklist

Before running `git push`, confirm:

- [ ] Article file is in `insights/posts/` and named `YYYY-MM-slug.md`
- [ ] Front matter is present, complete, and surrounded by `---`
- [ ] `date:` is in `YYYY-MM-DD` format with no quotes
- [ ] `permalink:` matches the filename slug and ends with `/`
- [ ] Article ends with the attribution paragraph and `/contact/` link
- [ ] Article card has been added to `insights-landing.html`
- [ ] Card links point to the correct `/insights/posts/your-slug/` URL
- [ ] Newest article card is at the top of the grid

---

## Common mistakes

**The article is not appearing at the right URL**
Check that the `permalink:` in the front matter exactly matches the filename slug, and that it starts and ends with `/`. Example: `permalink: /insights/posts/board-effectiveness-review/`

**The Contents sidebar is empty**
The TOC is built from `##` and `###` headings. If you used `#` (single hash) for headings, they will not appear. Change them to `##`.

**The article card links to a 404**
The `href` in the card HTML must match the `permalink` in the article's front matter exactly.

**Git says "nothing to commit"**
You may not have saved the file. Make sure both the article `.md` file and `insights-landing.html` are saved before running `git add -A`.

**Build error after pushing**
The most common cause is a formatting error in the front matter. Check that:
- The opening and closing `---` lines are present
- `date:` has no quotes around it
- `categories:` uses square brackets: `[Category One, Category Two]`

---

## File locations reference

| What | Where |
|---|---|
| Article files | `insights/posts/YYYY-MM-slug.md` |
| Insights landing page | `insights-landing.html` |
| Article layout (do not edit) | `_layouts/article.html` |
| Site configuration (do not edit) | `_config.yml` |
