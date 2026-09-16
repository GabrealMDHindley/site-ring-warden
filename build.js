// Assembles the deployable site into dist/.
// Files present in the repo are copied as-is; anything missing (for example a
// bootstrap deployment that carries only this script) is downloaded from the public
// GitHub repo, so every build is self-contained. Serverless functions stay in api/.
const fs = require('fs');
const path = require('path');
const RAW = 'https://raw.githubusercontent.com/GabrealMDHindley/site-ring-warden/main/';
const FILES = [
  "images/apple-touch-icon.png",
  "images/favicon-32.png",
  "images/favicon-512.png",
  "images/follower-growth-01.png",
  "images/follower-growth-02.png",
  "images/follower-growth-03.png",
  "images/follower-growth-04.png",
  "images/follower-growth-05.png",
  "images/follower-growth-06.png",
  "images/follower-growth-07.png",
  "images/follower-growth-08.png",
  "images/follower-growth-09.png",
  "images/follower-growth-10.png",
  "images/follower-growth-11.png",
  "images/follower-growth-12.png",
  "images/follower-growth-13.png",
  "images/follower-growth-14.png",
  "images/follower-growth-15.png",
  "images/follower-growth-16.png",
  "images/follower-growth-17.png",
  "images/follower-growth-18.png",
  "images/follower-growth-19.png",
  "images/follower-growth-20.png",
  "images/follower-growth-21.png",
  "images/follower-growth-22.png",
  "images/follower-growth-23.png",
  "images/follower-growth-24.png",
  "images/follower-growth-25.png",
  "images/follower-growth-26.png",
  "images/follower-growth-27.png",
  "images/follower-growth-28.png",
  "images/follower-growth-29.png",
  "images/havana-1957-results.jpg",
  "images/loader-poster.jpg",
  "images/logo.png",
  "images/og-image.jpg",
  "images/oh-mexico-results.jpg",
  "images/organic-leads-proof-01.jpg",
  "images/organic-leads-proof-02.jpg",
  "images/organic-leads-proof-03.jpg",
  "images/organic-leads-proof-04.jpg",
  "images/organic-leads-proof-05.jpg",
  "images/organic-leads-proof-06.jpg",
  "images/organic-leads-proof-07.jpg",
  "images/organic-leads-proof-08.jpg",
  "images/organic-leads-proof-09.jpg",
  "images/organic-leads-proof-10.jpg",
  "images/restaurant-client-wall.jpg",
  "images/restaurant-proof-more.jpg",
  "images/restaurant-reservations-stat.jpg",
  "index.html",
  "videos/dental-office-walkthrough.mp4",
  "videos/golf-course-aerial-flyover.mp4",
  "videos/hollywood-hills-aerial-flyover.mp4",
  "videos/hollywood-hills-walkthrough.mp4",
  "videos/loader.mp4",
  "videos/mountain-view-estate-aerial-flyover.mp4",
  "videos/mountain-view-estate-walkthrough.mp4",
  "videos/ocean-front-estate-aerial-flyover.mp4",
  "videos/ocean-front-estate-walkthrough.mp4",
  "videos/vehicle-walkthrough.mp4"
];
(async () => {
  let fetched = 0;
  for (const f of FILES) {
    const dest = path.join('dist', f);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    if (fs.existsSync(f)) { fs.copyFileSync(f, dest); continue; }
    const res = await fetch(RAW + f);
    if (!res.ok) throw new Error(`fetch ${f}: HTTP ${res.status}`);
    fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    fetched++;
  }
  console.log(`dist/ ready: ${FILES.length} files (${fetched} fetched from GitHub)`);
})().catch(e => { console.error(e); process.exit(1); });
