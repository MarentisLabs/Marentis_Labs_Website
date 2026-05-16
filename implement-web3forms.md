# Task: Implement Web3Forms Contact Form

## What to do

Make two changes to `contact.html`. Nothing else needs to be touched.

---

### Change 1 — Replace the access key placeholder

Find this line:

```html
<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY">
```

Replace with:

```html
<input type="hidden" name="access_key" value="aa5011de-b672-438e-a7fe-ea12c4f693ec">
```

---

### Change 2 — Fix the redirect URL

The redirect currently points to `localhost`, which only works on the local machine. It must point to the live domain so submissions from the real site redirect correctly after the form is submitted.

Find this line:

```html
<input type="hidden" name="redirect" value="http://localhost:4000/contact/thank-you/">
```

Replace with:

```html
<input type="hidden" name="redirect" value="https://marentislabs.com/contact/thank-you/">
```

---

## After making both changes

Verify the two hidden inputs in `contact.html` now read:

```html
<input type="hidden" name="access_key" value="aa5011de-b672-438e-a7fe-ea12c4f693ec">
<input type="hidden" name="redirect" value="https://marentislabs.com/contact/thank-you/">
```

No other changes are needed. The form action (`https://api.web3forms.com/submit`), subject line, from_name, honeypot field, and all form fields are already correct.

---

## How to verify locally

Start the local preview server if not already running:

```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000/contact/` and submit a test form with real values. Web3Forms will:
1. Send an email to the address registered with the `aa5011de-b672-438e-a7fe-ea12c4f693ec` key (info@marentislabs.com)
2. Redirect the user to `https://marentislabs.com/contact/thank-you/` — note this will only work correctly on the live site, not locally, because the redirect goes to the production domain

If the test email arrives, the form is working.

---

## Publish

```bash
git add contact.html
git commit -m "Add Web3Forms access key and fix redirect URL"
git push origin main
```

---

## Also update CLAUDE.md

In `CLAUDE.md`, find the "What Has Not Been Built Yet" section and mark the Web3Forms item as done:

Change:
```
- Web3Forms access key — placeholder `YOUR_WEB3FORMS_ACCESS_KEY` in `contact.html` still needs replacing
```

To:
```
- ~~Web3Forms access key~~ — implemented, key `aa5011de-b672-438e-a7fe-ea12c4f693ec` active
```
