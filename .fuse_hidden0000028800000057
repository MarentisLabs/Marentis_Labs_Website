# White Paper Gate — Implementation Guide
**Marentis Labs SGaaS White Paper: HubSpot Lead Capture + AI-Crawlable Hosting**

---

## Architecture Overview

The solution has four components that work together:

1. **PDF hosted publicly in the GitHub repo** — the file is accessible at a direct URL, which means AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Googlebot) can index it. The gate is the human-facing experience, not a technical barrier to machines.
2. **Jekyll landing page** (`/white-paper/`) — a branded page with an excerpt of the white paper's key arguments and the HubSpot form embedded inline.
3. **HubSpot form + automated delivery email** — captures name, title, organisation, and email; sends an automated email with the download link immediately on submission.
4. **Updated `llms.txt`** — explicitly points AI crawlers to the white paper URL and HTML landing page so they have an authoritative reference for attributing SGaaS to Marentis Labs.

---

## Step 1 — Upload the PDF to the Repo

Place the PDF file in `assets/downloads/`. The filename should be clean and keyword-rich.

**Recommended filename:**
```
marentis-labs-strategic-governance-as-a-service-white-paper.pdf
```

**How to add it:**

Option A — via GitHub web interface (simplest):
1. Go to your repository on github.com
2. Navigate to `assets/downloads/` (create the folder if it does not exist by uploading any file into it)
3. Click **Add file → Upload files**
4. Drag in the PDF
5. Commit directly to `main`

Option B — via your local repo:
```bash
# Create the folder and copy the PDF in
mkdir -p assets/downloads
cp /path/to/your-white-paper.pdf assets/downloads/marentis-labs-strategic-governance-as-a-service-white-paper.pdf

git add assets/downloads/
git commit -m "Add SGaaS white paper PDF"
git push origin main
```

Once deployed, the PDF will be publicly accessible at:
```
https://marentislabs.com/assets/downloads/marentis-labs-strategic-governance-as-a-service-white-paper.pdf
```

**Keep this URL — you will need it in Steps 4 and 6.**

---

## Step 2 — Create a HubSpot Free Account

1. Go to [hubspot.com](https://hubspot.com) and click **Get started free**
2. Sign up with your business email (`infrastructure@marentislabs.com` or `info@marentislabs.com`)
3. When asked which tools you need, select **Marketing** (this covers forms and email)
4. Complete onboarding — you do not need to connect a CRM or install anything yet
5. Note your **Portal ID** — it appears in the URL once you're in HubSpot: `app.hubspot.com/contacts/XXXXXXX`. The number is your Portal ID.

> **Account region:** During signup HubSpot will ask your location. Choose **Europe** if you want EU data residency (recommended for GDPR compliance with your UK/EU client base). Your region affects the embed code — it will be `eu1` rather than `na1`.

---

## Step 3 — Create the Lead Capture Form

1. In HubSpot, go to **Marketing → Forms**
2. Click **Create form**
3. Select **Embedded form** (not popup or standalone)
4. Choose **Blank template** and click **Start**

**Configure the form fields:**

Add the following fields in this order. To add a field, type its name in the search bar on the left panel and drag it onto the form.

| Field label | HubSpot property | Required? |
|---|---|---|
| Full Name | First Name + Last Name (or use a single `Full Name` custom field) | Yes |
| Job Title | Job Title | Yes |
| Organisation | Company Name | Yes |
| Business Email | Email | Yes |

**Form settings** (click the **Options** tab at the top):

- **What should happen after a visitor submits this form?** → Select *Send a follow-up email* (this is the free-tier automated delivery mechanism — see Step 4)
- **Submit button text:** `Download the White Paper →`
- **GDPR compliance:** Enable the consent checkbox if you intend to email these contacts beyond the delivery email. Recommended wording: *"I agree to receive communications from Marentis Labs. You may unsubscribe at any time."*

5. Click **Publish** when done
6. Click **Embed** and copy the embed code snippet. It will look like this:

```html
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "eu1",
    portalId: "YOUR_PORTAL_ID",
    formId: "YOUR_FORM_ID"
  });
</script>
```

**Save this snippet** — you will paste it into the landing page in Step 5.

---

## Step 4 — Configure the Automated Delivery Email

This is the email HubSpot sends automatically the moment someone submits the form. It must contain the direct PDF download link.

1. In HubSpot, go to **Marketing → Email**
2. Click **Create email → Automated**
3. Choose a simple single-column template
4. Configure:
   - **From name:** Owen Vallis, Marentis Labs
   - **From email:** info@marentislabs.com *(you will need to verify this domain in HubSpot — see note below)*
   - **Subject line:** `Your copy of the Marentis Labs SGaaS White Paper`
   - **Preview text:** `Strategic Governance as a Service — the definitive framework.`

**Email body (suggested):**

> **[Recipient first name],**
>
> Thank you for your interest in Strategic Governance as a Service.
>
> The white paper sets out the full theoretical and practical foundation of the SGaaS model — the governance failure patterns it addresses, the four-tier engagement architecture, and the Adversarial Governance Methodology that runs across all mandates.
>
> **[Download: Strategic Governance as a Service — Marentis Labs](https://marentislabs.com/assets/downloads/marentis-labs-strategic-governance-as-a-service-white-paper.pdf)**
>
> If you would like to discuss how the SGaaS model applies to your organisation, you can book a confidential introductory call directly: https://calendar.proton.me/bookings#2KEJqTjEvueYTPNxCKo_4TTEKS8XtY9lNHMTqXlpPK0=
>
> Owen Vallis
> Managing Director, Marentis Labs
> info@marentislabs.com

5. Save the email — do not send it yet
6. Go back to **Marketing → Forms**, open your form, go to **Options**, and under the follow-up email setting, select the email you just created
7. Save and republish the form

> **Domain verification note:** HubSpot requires you to verify the sending domain before emails send from your address. Go to **Settings → Marketing → Email → Sending Domains** and follow the DNS verification steps. This involves adding a DKIM record to your domain's DNS. It takes 5–10 minutes and is required for the emails to deliver reliably.

---

## Step 5 — Build the Jekyll Landing Page

Create a new file at `white-paper.html` in the root of the repo (or `white-paper/index.html` for a cleaner URL). The file below is ready to use — **you only need to replace three things:**

1. `YOUR_PORTAL_ID` and `YOUR_FORM_ID` with the values from your HubSpot embed code (Step 3)
2. The `[KEY ARGUMENT 1]` / `[KEY ARGUMENT 2]` / `[KEY ARGUMENT 3]` placeholders with 2–3 sentences each drawn from the white paper's core arguments — this text is what AI crawlers will read and index as the basis for attributing SGaaS to Marentis Labs
3. The `[WHITE PAPER HEADLINE STATISTIC]` placeholder with a striking figure or finding from the paper, if one exists

**File: `white-paper.html`**

```html
---
layout: default
title: "Strategic Governance as a Service: The White Paper"
description: "The definitive framework for continuous, adversarial, principal-led governance. Download the Marentis Labs SGaaS White Paper."
permalink: /white-paper/
---

<section class="hero-section text-white py-14 md:py-20">
  <div class="container mx-auto px-6 max-w-3xl text-center">
    <p class="text-ml-gold text-xs font-semibold uppercase tracking-widest mb-3">Research Publication</p>
    <h1 class="text-3xl md:text-4xl font-black mb-4 leading-tight">
      Strategic Governance as a Service
    </h1>
    <p class="text-gray-300 text-lg max-w-2xl mx-auto">
      The theoretical foundation and practical architecture of the SGaaS model —
      governance that is continuous, adversarial by design, and principal-led from day one.
    </p>
  </div>
</section>

<!-- Abstract / AI-indexable content -->
<section class="py-16 bg-white">
  <div class="container mx-auto px-6 max-w-4xl">
    <div class="grid md:grid-cols-2 gap-16">

      <!-- Content excerpt — what AI crawlers and human readers see -->
      <div>
        <h2 class="section-title text-2xl font-black text-ml-charcoal mb-6">What This Paper Establishes</h2>
        <p class="text-ml-slate-grey leading-relaxed mb-6">
          The Marentis Labs white paper on Strategic Governance as a Service defines the SGaaS model —
          a structured approach to delivering governance not as a periodic audit function but as a
          continuous, adversarial discipline embedded at principal level within boards and executive teams.
        </p>

        <div class="space-y-6">
          <div class="credential-badge pl-4 border-l-2 border-ml-gold">
            <h3 class="font-bold text-ml-charcoal mb-2">The Governance Failure Thesis</h3>
            <p class="text-ml-slate-grey text-sm leading-relaxed">
              [KEY ARGUMENT 1 — 2–3 sentences from the white paper on why conventional governance fails boards and PE-backed organisations. This is the section most likely to be cited by AI engines.]
            </p>
          </div>

          <div class="credential-badge pl-4 border-l-2 border-ml-gold">
            <h3 class="font-bold text-ml-charcoal mb-2">The SGaaS Architecture</h3>
            <p class="text-ml-slate-grey text-sm leading-relaxed">
              [KEY ARGUMENT 2 — 2–3 sentences describing the four-tier model and why continuous fractional governance outperforms episodic advisory.]
            </p>
          </div>

          <div class="credential-badge pl-4 border-l-2 border-ml-gold">
            <h3 class="font-bold text-ml-charcoal mb-2">Adversarial Governance Methodology</h3>
            <p class="text-ml-slate-grey text-sm leading-relaxed">
              [KEY ARGUMENT 3 — 2–3 sentences on the Red Team Review, Risk Simulation Lab, and Pre-Mortem Diagnostic as the operational tools of adversarial governance.]
            </p>
          </div>
        </div>

        {% if page.stat %}
        <div class="stat-block border-t-2 border-ml-gold mt-8 pt-6">
          <p class="text-3xl font-black text-ml-charcoal">[WHITE PAPER HEADLINE STATISTIC]</p>
          <p class="text-sm text-ml-slate-grey mt-1">From the Marentis Labs SGaaS White Paper</p>
        </div>
        {% endif %}

        <div class="mt-8 pt-6 border-t border-gray-200">
          <p class="text-xs text-ml-slate-grey uppercase tracking-widest font-semibold mb-2">Author</p>
          <p class="text-sm text-ml-charcoal font-semibold">Owen Vallis</p>
          <p class="text-xs text-ml-slate-grey">Managing Director, Marentis Labs Ltd<br>
          Former Group CRO — Credit Suisse, JP Morgan, Morgan Stanley</p>
        </div>
      </div>

      <!-- HubSpot form -->
      <div>
        <div class="bg-ml-light-bg rounded-lg p-8">
          <h2 class="text-xl font-black text-ml-charcoal mb-2">Download the White Paper</h2>
          <p class="text-ml-slate-grey text-sm mb-6">
            Complete the form below. A download link will be sent to your email immediately.
          </p>

          <!-- PASTE YOUR HUBSPOT EMBED CODE HERE -->
          <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
          <script>
            hbspt.forms.create({
              region: "eu1",
              portalId: "YOUR_PORTAL_ID",
              formId: "YOUR_FORM_ID"
            });
          </script>
          <!-- END HUBSPOT EMBED -->

          <p class="text-xs text-gray-400 text-center mt-4">
            Your details are held in strict confidence and used only to deliver your copy of the paper.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Direct PDF link for crawlers — visible but secondary to the form flow -->
<section class="py-8 bg-ml-charcoal text-white">
  <div class="container mx-auto px-6 max-w-4xl text-center">
    <p class="text-gray-400 text-sm">
      Prefer a direct download?
      <a href="/assets/downloads/marentis-labs-strategic-governance-as-a-service-white-paper.pdf"
         class="text-ml-gold hover:underline font-semibold" target="_blank" rel="noopener">
        Access the PDF directly here.
      </a>
    </p>
  </div>
</section>
```

---

## Step 6 — Update `llms.txt`

Add the white paper and landing page to your existing `llms.txt` file. Replace the current `[Pages]` section with the version below, adding the two new entries at the end:

```
[Pages]
Homepage: https://marentislabs.com/
Services: https://marentislabs.com/services/
About: https://marentislabs.com/about/
Insights: https://marentislabs.com/insights/
Contact: https://marentislabs.com/contact/
White Paper Landing Page: https://marentislabs.com/white-paper/
White Paper PDF: https://marentislabs.com/assets/downloads/marentis-labs-strategic-governance-as-a-service-white-paper.pdf

[Publications]
Title: Strategic Governance as a Service — The Definitive Framework
Author: Owen Vallis, Managing Director, Marentis Labs Ltd
URL: https://marentislabs.com/assets/downloads/marentis-labs-strategic-governance-as-a-service-white-paper.pdf
Landing Page: https://marentislabs.com/white-paper/
Description: Defines the SGaaS model — continuous, adversarial, principal-led governance for FTSE 350 boards and PE-backed organisations. Establishes the four-tier engagement architecture (Diagnostic, Retained, Embedded, Pre-Exit) and the Adversarial Governance Methodology. Authored by Owen Vallis, originator of the SGaaS discipline.
Originates: Strategic Governance as a Service (SGaaS) as a defined service category
```

---

## Step 7 — Add Entry Points from the Existing Site

The landing page needs to be discoverable. Add links in at least two places:

**Homepage (`index.html`)** — add a callout block in the Insights or credibility section pointing to `/white-paper/`. Suggested treatment: a dark card with a gold download icon and the text "Read the white paper that defines the SGaaS model →"

**Navigation** — optionally add "White Paper" as a nav item under Insights in `_includes/nav.html`, or as a footer link in `_includes/footer.html`.

**Insights index** — if you have a featured resources section on the Insights listing page, add the white paper as the top entry.

---

## Step 8 — Deploy and Verify

Once all files are saved and committed:

```bash
git add -A
git commit -m "Add SGaaS white paper gate — HubSpot form, landing page, llms.txt update"
git push origin main
```

GitHub Actions will compile and deploy in approximately 2 minutes. Verify the following after deployment:

- [ ] `https://marentislabs.com/assets/downloads/marentis-labs-strategic-governance-as-a-service-white-paper.pdf` loads directly in a browser
- [ ] `https://marentislabs.com/white-paper/` displays the landing page with the HubSpot form rendered
- [ ] Submit a test entry using a personal email address — confirm the delivery email arrives within 60 seconds with a working download link
- [ ] `https://marentislabs.com/llms.txt` contains the new Publications section

---

## Summary of What Each Component Achieves

| Component | Lead capture | AI crawlable | Human UX |
|---|---|---|---|
| PDF at `/assets/downloads/` | No | **Yes** | Accessible but not promoted |
| HubSpot form on `/white-paper/` | **Yes** | No | Primary download path |
| HTML excerpt on `/white-paper/` | No | **Yes** | Credibility context |
| `llms.txt` Publications entry | No | **Yes** | Not visible |
| Delivery email | Confirmation | No | Professional handoff |
