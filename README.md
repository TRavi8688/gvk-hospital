# Dr. G. Vijaya Kumar Memorial Hospital — Website

A premium, mobile-first Next.js website for a trusted, affordable
multispeciality hospital in Nellore, Andhra Pradesh.

## ⚠️ Before you launch this

This build ships with **clearly labelled placeholders**, not stock photos,
for every "real" asset the brief asked for:

- Hospital building photo (hero section)
- Operation theatre photo
- Doctor photos (6 sample doctor cards)
- GVK Trust logo
- NTR Aarogyasri logo/signage photo

Every placeholder uses the same **AuthFrame** component
(`components/AuthFrame.js`) — a dashed-border box with a small
"📷 Awaiting real photo" tag. The moment you pass a real image URL into the
`src` prop, the tag automatically flips to a green "✓ Verified" badge — no
other code changes needed.

### How to add real photos

1. Drop your image files into `public/images/` (e.g. `building.jpg`,
   `ot-room.jpg`, `dr-vijaya-kumar.jpg`, `aarogyasri-logo.png`).
2. Update the relevant file:
   - `components/Hero.js` → `<AuthFrame src={null} ...>` → `src="/images/building.jpg"`
   - `components/OperationTheatre.js` → same pattern for the OT photo
   - `components/Aarogyasri.js` → same pattern for the Aarogyasri logo
   - `data/doctors.js` → set each doctor's `photo: "/images/dr-name.jpg"`
3. Update `data/doctors.js`, `data/departments.js`, `data/content.js` with
   real names, qualifications, timings, testimonials (with patient consent),
   and real statistics.
4. Update phone numbers: search the project for `+911234567890` and
   `tel:`/`wa.me` links, and replace with the real hospital number.
5. Update the address and Google Map: in `components/MapAndBooking.js`,
   replace the map query string with your exact address, or better, embed
   the hospital's actual Google Maps "Share → Embed" link.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the dev server needs internet access the first
time to fetch the Poppins and Inter fonts from Google Fonts.

## Building for production

```bash
npm run build
npm start
```

## Deploying

This is a standard Next.js 14 app — it deploys as-is to Vercel, Netlify, or
any Node host. For Vercel: push to GitHub, import the repo at vercel.com,
and it deploys automatically with zero config.

## What's inside

- `app/` — Next.js App Router pages, layout, global styles
- `components/` — one file per homepage section (Hero, Doctors, Departments,
  AI Assistant, etc.)
- `data/` — all editable content (doctors, departments, testimonials, stats,
  FAQ, health tips, admission steps) — **all placeholder, edit freely**

## AI features included

All AI-labelled features work out of the box with no API key, using
lightweight rule-based logic in `components/AIAssistant.js`:

- **Ask GVK AI** — FAQ chatbot (keyword-matches your question against
  `data/content.js` → `faqData`)
- **Symptom Checker** — keyword-matches symptoms to a likely department
- **Find a Doctor** — matches a specialty query to a doctor from
  `data/doctors.js`
- **Aarogyasri Eligibility Check** — a 3-question rule-based eligibility
  estimate
- **Voice Search** — uses the browser's built-in Web Speech API (English or
  Telugu), no external service needed

### Upgrading to a real LLM (optional)

If you want genuinely conversational answers instead of keyword matching,
you can wire the "Ask GVK AI" tab to the Anthropic API. Create a small
backend route (e.g. `app/api/chat/route.js`) that calls
`https://api.anthropic.com/v1/messages` with your own API key (never expose
a key in client-side code), and swap the `answerFaq()` call in
`AIAssistant.js` for a `fetch("/api/chat", ...)` call. Happy to build this
out with you once you have a key.

## Design notes

- Colors: Trust Blue `#0B4F8C`, Sky `#2E86C1`, Aarogyasri Green `#1E8F5E`,
  warm accent `#F5A623` — tuned to read as trustworthy + community-run,
  not corporate-clinical.
- Type: Poppins (headings) + Inter (body), as requested.
- Mobile-first: sticky bottom action bar (Call / WhatsApp / Book) on small
  screens, large touch targets throughout, horizontal-scroll doctor cards on
  mobile that become a grid on desktop.
- Bilingual: English-primary with Telugu sprinkled through headings, nav,
  and key labels (~80/20 split as requested). Full Telugu translation can be
  added later using a proper i18n library (e.g. `next-intl`) if you want a
  complete second-language version.
