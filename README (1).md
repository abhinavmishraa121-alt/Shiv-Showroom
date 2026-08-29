# Shiv Showroom — Electric Scooty Website

Multi-page static website for **Shiv Showroom** (Proprietor: Satyam Singh), Gorakhpur.

## Pages
- `index.html` — Home
- `models.html` — Full model line-up with specs
- `compare.html` — Spec comparison table + FAQ
- `contact.html` — Contact info + enquiry form
- `styles.css` — Shared styles
- `script.js` — Shared behaviour (mobile menu, FAQ accordion, animations)

## How to put this live on GitHub Pages (free)

1. **Create a GitHub account** (if you don't have one) at github.com.
2. **Create a new repository** — click the `+` icon top-right → `New repository`.
   - Name it something like `shiv-showroom`.
   - Keep it **Public**.
   - Don't add a README (you already have one here).
3. **Upload the files**:
   - Open your new repo → click `Add file` → `Upload files`.
   - Drag in all files from this folder (`index.html`, `models.html`, `compare.html`, `contact.html`, `styles.css`, `script.js`, `README.md`).
   - Scroll down, click `Commit changes`.
4. **Turn on GitHub Pages**:
   - In your repo, go to `Settings` → `Pages` (left sidebar).
   - Under "Build and deployment" → Source, select `Deploy from a branch`.
   - Branch: select `main`, folder: `/ (root)` → click `Save`.
5. **Wait ~1 minute**, then refresh the same Pages settings page. You'll see a green box with your live link:
   `https://<your-github-username>.github.io/shiv-showroom/`

That's it — the site is live and free, and updates automatically every time you upload new files to the repo.

## Notes / things to personalize further
- The map box on `contact.html` is a placeholder — paste a real Google Maps embed `<iframe>` there once you have the exact showroom address pinned on Google Maps.
- The contact form doesn't send anywhere yet (no backend) — it just shows a "thanks" message. For real enquiries to reach you, connect it to a form service like Formspree or Google Forms, or ask to have it wired to WhatsApp/email.
- Model names, prices, and specs are placeholders — replace with your actual stock/models if different.
