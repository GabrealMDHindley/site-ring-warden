# Ring Warden — website

AI systems, websites & growth infrastructure for businesses across 29 industries.

Static single-page site (`index.html`) with two Vercel serverless functions in `api/`
for GoHighLevel calendar booking. `build.js` (run by `npm run build`) assembles the
deployable tree into `dist/` — it copies the repo's files and fetches any that are
missing from this public repo, so the Vercel project's settings are Build Command
`node build.js`, Output Directory `dist`. Live: https://site-ring-warden.vercel.app Cloned from the studio's SHAI
template and rebranded (hot-pink/near-black palette, Outfit / DM Sans / Fira Code,
custom logo, intro loader video, "warden ring" in the Three.js hero).

- Business details: `CONFIG` at the top of the script in `index.html`
  (phone / email / address / legal name are `[CONFIRM]` placeholders until the client
  supplies them — the footer hides empty ones).
- Booking calendar needs `GHL_API_KEY`, `GHL_LOCATION_ID`, `GHL_CALENDAR_ID` set as
  Vercel environment variables (the client's own GoHighLevel account). Without them
  the calendar and contact form degrade gracefully.
- Contact form → `CONFIG.ghlWebhookUrl` (GoHighLevel inbound webhook) when set.
- Clean confirmation URL: `/ringwardenconsultationconfirmed` (see `vercel.json`).
- Built and maintained via the Universal Business Studio
  (`clients/ring-warden/` in the studio repo).
