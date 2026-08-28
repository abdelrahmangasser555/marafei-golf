# Marafei Golf SEO Playbook

This is the operating manual for ranking **golf.marafei.net** for commercial searches such as *golf simulators*, *gulf golf installer*, *golf partner*, *golf simulator installer GCC*, and *golf simulators Saudi Arabia*.

The website work in this repo is the on-page and technical foundation. Rankings will not move on code alone. Google still needs **proof** (projects, partners, reviews), **authority** (links from TrackMan, BenQ, marafei.net, local press), and **local presence** (Google Business Profile, NAP consistency, Arabic).

---

## SEO checklist — status at a glance

Use `[x]` = finished in this repo or live, `[ ]` = still to do (mostly off-site or content you must publish).

### 1. Technical SEO (website foundation)

| Status | Task | Description |
| --- | --- | --- |
| [x] | **Canonical URLs on golf.marafei.net** | Every page now points to `https://golf.marafei.net` instead of marafei.com, so Google treats this subdomain as the real site. |
| [x] | **XML sitemap** (`/sitemap.xml`) | Lists home, service pages, and all project URLs so crawlers find every money page. |
| [x] | **Robots.txt** (`/robots.txt`) | Allows indexing and points bots to the sitemap; AI crawlers (GPTBot, Perplexity, etc.) are allowed. |
| [x] | **Web app manifest** | PWA-style manifest for brand name, theme colour, and install metadata. |
| [x] | **Structured data (JSON-LD)** | Organization, LocalBusiness, WebSite, Service, FAQ, Breadcrumb, and project schema on relevant pages. |
| [x] | **llms.txt** | Plain-text summary for AI answer engines (ChatGPT, Perplexity) to cite Marafei Golf accurately. |
| [x] | **Image optimisation** | Next.js AVIF/WebP enabled (was `unoptimized: true` before); helps LCP and Core Web Vitals. |
| [x] | **Security headers** | `X-Content-Type-Options`, `Referrer-Policy`, and DNS prefetch on all routes. |
| [x] | **404 page** | Custom not-found page with links back to home and the installer page. |
| [x] | **Performance tuning** | Hero image priority, lighter particle animation (desktop only, respects reduced motion). |
| [x] | **Vercel Analytics + Speed Insights** | Real-user Core Web Vitals and traffic after deploy. |
| [ ] | **Google Search Console** | Add property for `golf.marafei.net`, verify domain, submit sitemap. |
| [ ] | **Google site verification env** | Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel from Search Console. |
| [ ] | **Bing Webmaster Tools** | Secondary search engine; submit sitemap for extra crawl coverage. |
| [ ] | **GA4 conversion tracking** | Mark contact form submissions and WhatsApp clicks as conversions. |
| [ ] | **Production deploy** | Push latest build to Vercel so live site matches this checklist. |

### 2. On-page SEO (content & pages on golf.marafei.net)

| Status | Task | Description |
| --- | --- | --- |
| [x] | **Homepage H1 & copy** | H1 targets “golf simulators & installation across the GCC”; intro mentions installer, TrackMan, BenQ. |
| [x] | **Unique service landing pages** | Six dedicated URLs with unique H1, body copy, and FAQs — no duplicate homepages. |
| [x] | **Golf simulator installer page** | `/golf-simulator-installer` — targets *gulf golf installer*, *golf partner*, *GCC installer*. |
| [x] | **Saudi Arabia page** | `/golf-simulators-saudi-arabia` — geo page for Riyadh, Jeddah, KSA nationwide. |
| [x] | **Indoor golf page** | `/indoor-golf-simulator` — room design, space, and residential/academy installs. |
| [x] | **Golf technology page** | `/golf-technology-middle-east` — B2B / academies / multi-system integration. |
| [x] | **TrackMan dealer page** | `/authorized-trackman-dealer` — trust page explaining verification and TrackMan installs. |
| [x] | **BenQ partner page** | `/benq-golf-simulator-partner` — projection partner page for BenQ golf projectors. |
| [x] | **Project detail pages** | `/projects/[slug]` — indexable pages with long copy, tech tags, and related projects. |
| [x] | **Project cards link to URLs** | Homepage project grid links to project pages (modals removed — modals are invisible to Google). |
| [x] | **FAQ section + schema** | Homepage and service pages have FAQ blocks with FAQPage JSON-LD for People Also Ask. |
| [x] | **Why Marafei trust section** | Homepage block covering TrackMan dealer, BenQ, Gulf installer, and named projects. |
| [x] | **Footer internal links** | Footer links to every service page plus marafei.net parent site. |
| [x] | **Image alt text** | Project and solution images use descriptive, keyword-aware alt text. |
| [ ] | **About / team page** | Named people, roles, and photos — strong E-E-A-T signal Google expects for installers. |
| [ ] | **Installation process page** | Survey → design → install → calibration → training; captures “how it works” searches. |
| [ ] | **Room-size / requirements guide** | “How much space for a TrackMan bay in a Riyadh villa” — informational traffic → installer page. |
| [ ] | **Arabic pages** (`/ar/...`) | Largest missing traffic source in KSA; needs native translation + `hreflang`. |
| [ ] | **Pricing / budget guide** | Even a “from SAR X” range reduces bounce from commercial queries. |
| [ ] | **Blog / comparison content** | e.g. TrackMan vs Garmin for a home bay — only if you will maintain it. |
| [ ] | **Replace AI hero images** | Swap stock/AI-looking heroes for real bay photos where available. |
| [ ] | **More project case studies** | Every new install = new indexable page with 5+ photos and city in the title. |
| [ ] | **Install walkthrough video** | YouTube + `VideoObject` schema on a project page. |

### 3. Partners & trust badges

| Status | Task | Description |
| --- | --- | --- |
| [x] | **TrackMan authorized dealer badge** | Official white-logo snippet in nav, hero, partners, footer; links to `trackman.com/authorized-dealer?domain=marafei.com`. |
| [x] | **BenQ logo in top nav** | Visible on desktop and mobile menu; links to BenQ Middle East golf projector page. |
| [x] | **BenQ in partners grid** | Partner card with logo, link, and short description. |
| [x] | **Partners grid (all brands)** | TrackMan, BenQ, SportsBox AI, Smart2Move with descriptive alt text and outbound links. |
| [x] | **Local TrackMan badge assets** | Copies in `public/partners/trackman/` as fallback if Storyblok CDN is blocked. |
| [ ] | **TrackMan public dealer listing** | Ask TrackMan to list **golf.marafei.net** on their dealer directory (verification stays on marafei.com). |
| [ ] | **BenQ Golf Solution Dealer status** | Apply or confirm via BenQ Asia Pacific / BenQ Middle East dealer programme. |
| [ ] | **BenQ “where to buy” backlink** | Get listed on benq.com as a GCC golf installer — logo on your site is not a backlink. |
| [ ] | **SportsBox AI partner listing** | Request installer/partner page citing RGC VIP Academy integration. |
| [ ] | **Smart2Move partner listing** | Same as SportsBox — academy proof is your differentiator. |
| [ ] | **Golf Saudi / RGC mention + link** | Ask for a news item or partners page linking to Marafei Golf. |
| [ ] | **Massarah Resort partner mention** | Hospitality backlink from resort or case study. |

### 4. Domain & cross-site architecture

| Status | Task | Description |
| --- | --- | --- |
| [x] | **Central SEO config** | `config/seo.ts` — single source for URLs, NAP, keywords, partner links. |
| [x] | **Schema links to parent** | `sameAs` and `parentOrganization` point at marafei.net / marafei.com from golf site. |
| [x] | **TrackMan domain unchanged** | Badge still uses `domain=marafei.com` per TrackMan’s verification programme. |
| [ ] | **marafei.net → golf link** | Persistent nav/footer “Golf” link to `https://golf.marafei.net/` on parent site. |
| [ ] | **Dedicated Golf page on marafei.net** | 300–600 words, project photos, dofollow link to golf subdomain. |
| [ ] | **Parent site schema `sameAs`** | marafei.net should list `https://golf.marafei.net` in its Organization JSON-LD. |
| [ ] | **marafei.com 301 redirects** | If old golf pages exist on marafei.com, 301 them to matching golf.marafei.net URLs. |
| [ ] | **NAP consistency everywhere** | Same name, phone, and city on golf site, marafei.net, GBP, LinkedIn, WhatsApp. |
| [ ] | **Street address in schema** | Add real office address to `config/seo.ts` when available — improves Maps eligibility. |

### 5. Local SEO & reviews

| Status | Task | Description |
| --- | --- | --- |
| [x] | **NAP on website** | Phone, email, WhatsApp, Riyadh city, and GCC service areas in footer and schema. |
| [x] | **City tags on site** | Riyadh, Jeddah, Dubai, Doha, etc. shown in footer service areas. |
| [ ] | **Google Business Profile** | Claim/create “Marafei Golf” in Riyadh with correct category, photos, and website URL. |
| [ ] | **GBP weekly posts** | Project photos, tips, partner news — keeps the profile active. |
| [ ] | **Google reviews** | Ask every completed install for a review mentioning city + “TrackMan” or “golf simulator”. |
| [ ] | **Review replies** | Reply to every GBP review as Marafei Golf. |
| [ ] | **Bing Places / Apple Business Connect** | Secondary local listings with same NAP. |
| [ ] | **Arabic GBP description** | Match Arabic site content when Arabic pages go live. |

### 6. Off-page authority & citations

| Status | Task | Description |
| --- | --- | --- |
| [ ] | **LinkedIn company page** | Consistent branding, link to golf.marafei.net, project posts. |
| [ ] | **Chamber / industry directories** | List in relevant KSA/GCC business directories (real ones only, not link farms). |
| [ ] | **Digital PR** | Press coverage in golf, hospitality, or AV trade media in the region. |
| [ ] | **Client permission for logos** | Golf Saudi, Massarah, etc. — logo + quote on site and in outreach. |
| [ ] | **Avoid paid link schemes** | No Fiverr guest posts, PBNs, or reciprocal link exchanges. |

### 7. Measurement & hosting

| Status | Task | Description |
| --- | --- | --- |
| [x] | **Stay on Vercel** | Correct host for Next.js 16; native image optimisation and Speed Insights. |
| [x] | **`.env.example` for verification** | Template for Google Search Console verification token. |
| [ ] | **Search Console query monitoring** | Track rankings for installer, KSA, TrackMan, BenQ terms monthly. |
| [ ] | **Core Web Vitals review** | After deploy, check Speed Insights; fix any route with poor LCP or INP. |
| [ ] | **Optional: Cloudflare DNS** | Can improve Gulf TTFB in front of Vercel — measure before migrating app host. |

### Summary counts

| Area | Done | Remaining |
| --- | --- | --- |
| Technical SEO (website) | 11 | 5 |
| On-page content | 14 | 10 |
| Partners & trust | 5 | 6 |
| Domain & cross-site | 3 | 5 |
| Local SEO & reviews | 2 | 6 |
| Off-page authority | 0 | 5 |
| Measurement & hosting | 2 | 3 |
| **Total** | **37** | **40** |

> **Bottom line:** The on-site and technical work is largely complete. Rankings now depend on the **40 remaining items** — especially Google Business Profile, parent-site links, Arabic pages, partner backlinks, and reviews.

---

## 1. How search engines actually rank this business

Treat SEO as five stacked systems. Weakness in one caps the others.

| System | What Google is asking | What moves the needle for Marafei Golf |
| --- | --- | --- |
| **Relevance** | Does this page answer the query? | Unique pages for installer / KSA / indoor / TrackMan / BenQ, with the query in H1, intro, and body |
| **Experience (E-E-A-T)** | Have you actually installed these rooms? | Named projects (Golf Saudi, RGC, Massarah), original photos, authorized dealer badge |
| **Technical health** | Can we crawl, index, and load this fast? | Correct canonicals on golf.marafei.net, sitemap, image optimisation, Core Web Vitals |
| **Authority** | Do trusted sites confirm you? | TrackMan dealer page, BenQ, marafei.net, Golf Saudi mentions, local directories |
| **Local / Maps** | Are you the nearby installer? | Google Business Profile, NAP, city pages, reviews in Riyadh and other GCC cities |

Hosting brand (Vercel vs Cloudflare vs AWS) is **not** a ranking factor by itself. Speed, HTTPS, uptime, and Core Web Vitals are. Vercel is a good place to stay for this Next.js app. See section 12.

---

## 2. Target demand (what to rank for)

Do not chase one vanity keyword. Build a **cluster**.

### Primary commercial terms
- golf simulators
- golf simulator installer
- gulf golf installer
- golf partner / golf partner GCC
- indoor golf simulator
- golf simulator Saudi Arabia
- golf simulator Riyadh / Jeddah / Dubai
- TrackMan dealer Saudi Arabia / GCC
- golf technology Middle East

### Secondary / supporting terms
- TrackMan IO / TrackMan 4 installation
- BenQ golf projector / AK700ST
- home golf simulator villa
- golf academy simulator
- commercial golf simulator lounge
- golf simulator cost Saudi Arabia (later: a pricing guide, not a fake price)

### Intent map
| Query type | Intent | Page that should win |
| --- | --- | --- |
| golf simulators | Mixed: product + installer | Home + Indoor Golf Simulator |
| gulf golf installer / golf partner | Hire an installer | `/golf-simulator-installer` |
| golf simulators Saudi Arabia | Geo-commercial | `/golf-simulators-saudi-arabia` |
| indoor golf simulator | Product / room | `/indoor-golf-simulator` |
| TrackMan authorized dealer | Trust / vendor check | `/authorized-trackman-dealer` + TrackMan.org listing |
| BenQ golf projector partner | Trust / vendor check | `/benq-golf-simulator-partner` |
| [project name] | Brand / proof | `/projects/[slug]` |

**Do not** create more thin copies of the homepage for extra keywords. That is doorway spam and Google has penalised it for years. Each URL must have unique H1, unique copy, and a reason to exist.

---

## 3. Domain architecture: golf.marafei.net vs marafei.net vs marafei.com

This is the most important strategic point.

- **golf.marafei.net** is a **subdomain**. Google largely treats subdomains as separate sites from the root.
- **marafei.net** is the group site (authority, brand, other divisions).
- **marafei.com** is the domain TrackMan verified (`domain=marafei.com`). Keep that exact URL on the badge. Do not change it to golf.marafei.net or verification can break.

### What this means
Rankings earned on marafei.net do **not** automatically flow to golf.marafei.net. You must **weld the three hostnames together** with links, consistent NAP, and Organization schema.

### Required cross-links (do this on marafei.net / marafei.com, not only here)
1. Persistent nav or footer link: **Golf** → `https://golf.marafei.net/`
2. A dedicated page on the parent site: “Marafei Golf — golf simulators & installation” with 300–600 words, project photos, and a dofollow link to golf.marafei.net
3. Same company name, phone, and Riyadh address on all three
4. `sameAs` already lists parent URLs in schema on this site; the parent should list `https://golf.marafei.net` in its schema too
5. If marafei.com still has old golf pages, **301 redirect** them to the matching golf.marafei.net URL (installer, KSA, indoor, etc.). Two live copies of the same golf content will compete and neither will win.

### Alternative (only if you can do a migration later)
Moving golf to `https://marafei.net/golf/` (a subdirectory) can concentrate authority on one hostname. That is a migration with redirect risk. Do not do it casually. For now, make the subdomain excellent and glue it to the parent with links.

---

## 4. What was already implemented on this website

Use this as the “done” checklist so you do not re-do it.

### Technical
- Canonicals and `metadataBase` now use **https://golf.marafei.net** (they previously pointed at marafei.com, which told Google this site was a duplicate)
- XML sitemap at `/sitemap.xml`
- Robots at `/robots.txt` allowing Google and major AI crawlers
- Web app manifest
- Organization, LocalBusiness, WebSite, Service, FAQ, Breadcrumb, and project JSON-LD
- `llms.txt` for AI-answer engines
- Next.js image optimisation enabled (AVIF/WebP) — previously `unoptimized: true`, which hurt LCP
- Security headers (nosniff, referrer policy)
- Vercel Analytics + Speed Insights for real-user Core Web Vitals
- 404 page that links back into money pages
- Particle animation limited (desktop only, reduced motion respected) so it does not burn INP

### On-page
- Homepage H1 is now about **golf simulators and GCC installation**, not a brand slogan only
- Unique landing pages (no more three identical clones of home):
  - `/golf-simulator-installer`
  - `/golf-simulators-saudi-arabia`
  - `/indoor-golf-simulator`
  - `/golf-technology-middle-east`
  - `/authorized-trackman-dealer`
  - `/benq-golf-simulator-partner`
- Project cards now **link to indexable project URLs** (modals are invisible to Google)
- Project copy, image alts, and technology lists match the real job (RGC / Massarah / residence)
- FAQ block with schema (People Also Ask)
- Internal links from footer to every money page
- Why Marafei trust section (dealer + BenQ + Gulf installer + projects)

### Partners / trust badges
- Official **TrackMan authorized dealer** snippet (white logo for this dark UI), linking to  
  `https://www.trackman.com/authorized-dealer?domain=marafei.com`
- **BenQ** logo in the **top nav**, partners grid, hero, and footer, linking to BenQ Middle East golf projection
- TrackMan, BenQ, SportsBox AI, Smart2Move in the partners grid with descriptive alt text

Local copies of the TrackMan badges also live in `public/partners/trackman/` if the Storyblok CDN is ever blocked. The live snippet still uses Trackman’s official URLs, as they requested.

---

## 5. Every SEO variable that matters (the full list)

### 5.1 Crawl and index
- **robots.txt** — allow `/`, point to sitemap, do not block `/_next` CSS/JS
- **XML sitemap** — only canonical, 200, indexable URLs
- **Canonical tags** — one URL per page; never point golf pages at marafei.com
- **Status codes** — 200 for real pages, 301 for moved, 404/410 for dead, never 200 for missing
- **HTTPS** — already on Vercel
- **Redirect chains** — www vs non-www, http vs https, trailing slash: pick one and stick to it (`https://golf.marafei.net` with no trailing slash)
- **Search Console** property for **golf.marafei.net** (URL-prefix) *and* a Domain property covering marafei.net if you control DNS
- **Indexing API / sitemap ping** — submit sitemap once; then wait. Do not spam recrawl.

### 5.2 Information architecture
- Shallow clicks: Home → service page → project → contact
- Descriptive URLs (`/golf-simulator-installer` not `/page-id=3`)
- One primary topic per URL
- Internal links with descriptive anchors (“golf simulator installer in the GCC”, not “click here”)
- Breadcrumbs (visible + schema)

### 5.3 On-page relevance
- **Title tag** ~50–60 characters, keyword near the front, brand at the end
- **Meta description** ~140–160 characters, benefit + proof + CTA (it does not rank directly; it affects CTR)
- **H1** unique, matches intent, includes the phrase a human would type
- **H2/H3** cover sub-intents (room size, cities, brands, process)
- **First 100 words** state who, where, what (installer, GCC, TrackMan/BenQ)
- **Keyword in alt text** only when it describes the photo
- **Meta keywords** are ignored by Google; we keep a short list for other tools only
- **Thin content** loses. Unique 400–800 words on service pages is enough if it is specific. 2,000 words of fluff is worse.

### 5.4 Content quality / E-E-A-T
- First-hand photos of **your** rooms, not stock or AI hero images as the only proof
- Named clients where allowed (Golf Saudi, Massarah, RGC)
- Authorised dealer verification (TrackMan page is a trust and link asset)
- About / team page with real names and roles (still to add — see section 8)
- Consistent claims: do not say “certified” if TrackMan’s language is “authorized dealer”

### 5.5 Page experience / Core Web Vitals
Google uses field data from Chrome users, not just Lighthouse.

| Metric | Good | Why it matters here |
| --- | --- | --- |
| **LCP** | < 2.5s | Hero image is the LCP element; Next/Image + priority is doing this |
| **INP** | < 200ms | Heavy canvas/particles and huge client JS hurt this |
| **CLS** | < 0.1 | Always set width/height on images and badges |
| **TTFB** | as low as possible | Vercel edge + static pages help |

Also: mobile-first (almost all GCC searches are mobile), readable font sizes, tap targets, no intrusive popups.

### 5.6 Structured data
Already on site: Organization, LocalBusiness, Service, FAQPage, BreadcrumbList, CreativeWork for projects.

Add later when you have them:
- `Review` / `AggregateRating` **only** from real reviews you can show
- `VideoObject` if you publish install time-lapses
- `Person` for a named director of golf technology
- Arabic pages: `inLanguage: ar`

Validate every change in [Google Rich Results Test](https://search.google.com/test/rich-results).

### 5.7 Images
- Descriptive file names (`riyadh-golf-club-trackman-bay.jpg` not `IMG_4033.jpg`)
- Unique alts per image
- Real EXIF/location is optional; do not fake GPS
- Compress before upload; Next.js will still convert to AVIF/WebP
- Do not use the same photo with three different alts on three pages
- Hero images should be the **actual room** when possible. AI-looking heroes weaken trust and can be classified as low-quality

### 5.8 Links
- **Internal** — footer + in-body links between installer, KSA, TrackMan, BenQ, projects
- **External inbound** — the ones that matter (section 9)
- **Outbound** — TrackMan verification and BenQ product pages are good; they are citations, not “link juice leaks”
- Never buy PBN / guest-post packages

### 5.9 Local SEO variables
- Google Business Profile (GBP)
- NAP consistency (Name, Address, Phone) everywhere
- Categories, services, coverage areas
- Photos, posts, Q&A, reviews, review replies
- City + service in page copy (Riyadh, Jeddah, Dubai…) **in sentences**, not a dump of 40 cities
- Embedded map only if you have a visitable office

### 5.10 Brand and entity
Google wants to know **Marafei Golf** is an organisation that installs golf simulators in the GCC.
Help it with: Wikipedia only if notable (do not spam), Wikidata, LinkedIn company page, Crunchbase, consistent Knowledge Panel sources, same logo, same phone.

### 5.11 AI / GEO (answer engines)
ChatGPT, Perplexity, Google AI Overviews pull from:
- Clear factual sentences (“Marafei Golf is an authorized TrackMan dealer based in Riyadh…”)
- `llms.txt` and schema
- Third-party pages that repeat the same facts (TrackMan dealer list, press, parent site)
Keep claims identical across the web.

### 5.12 Behavioural (indirect)
CTR from SERP, dwell time, pogo-sticking. Improve titles, load speed, and put contact above the fold on mobile.

---

## 6. Google Business Profile (do this this week)

For “golf simulator installer” in Riyadh, Maps often outranks the blue links.

1. Create/claim **Marafei Golf** (or the legal entity name you will never change)
2. Primary category: something as close as **Sports Equipment Supplier** / **Golf Course** is wrong. Prefer **Contractor** or **Sports equipment store** plus custom services: Golf simulator installation, TrackMan, Indoor golf
3. Service areas: Riyadh first, then Jeddah, Dammam, and GCC cities you actually serve. Do not tick the whole planet
4. Phone: `+966 53 023 0544` (same as the site)
5. Website: `https://golf.marafei.net/`
6. UTM the website button if you use GA4
7. 20+ real photos: bays, TrackMan units, BenQ mounts, team on site, Golf Saudi if permitted
8. Weekly Google Post: a project, a tip, a partner announcement
9. Ask every completed install for a **Google review** with the city in the text (“installed our TrackMan room in Riyadh”)
10. Reply to every review as Marafei Golf

If you have no public office, use a legitimate service-area business. Do not drop a pin on a fake shop.

---

## 7. Citations and NAP

Put the **same** name/phone/city on:
- golf.marafei.net
- marafei.net / marafei.com
- GBP
- LinkedIn
- WhatsApp business
- TrackMan dealer profile
- Chamber / local directories

Saudi / GCC directories worth a real listing (not spam farms):
- Google Business Profile
- Bing Places
- Apple Business Connect
- LinkedIn Company
- Gulf / KSA chambers if you are a member
- Hotel and golf-club partner pages (Massarah, RGC) — ask for a “technology partner” mention with a link
- Golf Saudi / supplier lists if they have a public directory

NAP mismatches (old numbers, “Marafei” vs “Marafei Golf” vs “Marafei Technology”) split the entity.

---

## 8. Content still worth adding on this site

Priority order:

1. **About / team** — who designs, who installs, years in AV/golf, photos. E-E-A-T.
2. **Process page** — survey → design → procurement → install → calibration → training.
3. **Room-size / requirements guide** — “how much space for a TrackMan bay in a Riyadh villa.” This captures informational queries and links to the installer page.
4. **Arabic versions** of Home, Installer, and KSA pages (`/ar/...` or `ar.golf.marafei.net`). Gulf users search in Arabic. This is likely the single largest missing traffic source.
5. **More project pages** — every install with 5+ photos, brands used, city, and a short story. Projects are your differentiator vs Cero Golf and other UAE sellers.
6. **Video** — 60–90s walkthrough of RGC or a residence, uploaded to YouTube with a transcript on the project page (`VideoObject`).
7. **Pricing ranges** (even “from SAR X for a residential bay, academy on request”) reduce bounce from commercial queries. You do not need a public SKU list.
8. **Blog only if you will maintain it.** One excellent “TrackMan vs Garmin for a home bay in the GCC” article beats twelve AI posts.

---

## 9. Off-page: partner and manufacturer SEO (highest ROI)

Logos on *your* site help **users**. Rankings jump when **they** link to **you**.

### TrackMan (already in motion)
- Badge is live and must keep the official href with `domain=marafei.com`
- Confirm marafei.com **and** golf.marafei.net are both mentioned in your TrackMan partner record if they allow a second URL
- Ask TrackMan if the public dealer directory can list **golf.marafei.net** as the golf sales site
- That dealer-locator link is one of the strongest backlinks you will ever get (relevant, high authority, not paid)

### BenQ
- You now show the logo in nav and partners. That is branding + a relevance hint, not a backlink
- Apply / confirm **BenQ Golf Solution Dealer** status via BenQ Asia Pacific / BenQ Middle East (Dubai office)
- Ask to be listed on BenQ “where to buy” / dealer pages for the GCC
- Offer a case study (your room + AK700ST + TrackMan). BenQ already publishes ME case studies; being the installer named on benq.com is gold

### SportsBox AI and Smart2Move
- Request partner/installer listings and co-branded case studies of the RGC academy (TrackMan + SportsBox + Smart2Move in one sentence is unique in the region)

### Golf Saudi / RGC / Massarah
- Ask for a news item or “our partners” page with a link
- Permission to use logos **and** a quote
- These are topical, local, and unfakeable

### Parent brand
- marafei.net homepage module: “Golf simulators — Marafei Golf”
- Shared press kit

### Digital PR
- Coverage in Arab News, Golf Saudi media, hospitality magazines, AV/integrator press
- LinkedIn thought leadership from a named person (not a ghost brand)

### What not to do
- Fiverr guest posts
- Reciprocal “link exchange” with unrelated sites
- Exact-match anchor spam (“gulf golf installer” on 50 directories)

---

## 10. Competitors (what they do that you must beat)

UAE players such as **Cero Golf** rank because they publish **many unique articles** targeting “buy indoor golf simulators in Dubai”, venue types, and product comparisons, plus they say “official TrackMan reseller” in public.

Beat them in **KSA** (your home turf) with:
- Federation/club proof (Golf Saudi, RGC) they may not have
- Authorized TrackMan verification badge
- Arabic pages
- Faster, cleaner technical SEO (you now have this)
- Google reviews from Riyadh clients

Do not copy their blog volume blindly. Copy their **specificity**.

---

## 11. Measurement stack

1. **Google Search Console** (golf.marafei.net) — queries, indexing, CWV, sitemap
2. **GA4** — traffic, cities, conversions (form submit already exists)
3. **Vercel Speed Insights** — already installed; watch LCP/INP per route
4. **Bing Webmaster Tools** — cheap extra crawler
5. Optional: Call tracking / WhatsApp click as conversions

Set the form thank-you as a conversion. Rankings without leads are vanity.

Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel env from Search Console.

---

## 12. Hosting: stay on Vercel, tune it

### Does Vercel help SEO?
Indirectly: HTTPS, global CDN, Next.js image optimisation, instant static pages, and Speed Insights. Google does not give a “hosted on Vercel” bonus.

### Is something better?
| Option | SEO-relevant strength | Cost / risk for this app |
| --- | --- | --- |
| **Vercel (current)** | Native Next.js 16, images, ISR, CWV dashboard | Best default. Stay. |
| **Cloudflare** (OpenNext) | Often lower TTFB in ME/Asia, cheap bandwidth | Extra adapter, not all Next features are 1:1 |
| **AWS / Docker** | Control | You become the SRE; easy to make CWV worse |
| **cPanel PHP host** | None | Do not move a Next app there |

**Recommendation:** keep Vercel. Put **DNS on Cloudflare** (orange-cloud optional; many teams proxy to Vercel) for WAF and a POP closer to Gulf users if TTFB from Riyadh is weak. Measure in Search Console’s Core Web Vitals, do not migrate on theory.

Vercel settings to confirm:
- Production domain `golf.marafei.net` (and `www` 301 if you use it)
- Image optimisation on (now that `unoptimized` is removed)
- Speed Insights + Analytics (installed)
- No password protection on production
- Preview URLs `noindex` (Vercel default)

---

## 13. Arabic and Gulf search

A large share of “golf simulator” adjacent demand in KSA is Arabic (محاكي جولف، غرفة جولف داخلية، تركيب سيموليتر جولف).

Plan:
- `hreflang` `en` ↔ `ar`
- Native translator, not raw Google Translate
- Arabic GBP description
- Arabic reviews

Until Arabic exists, you will concede that demand.

---

## 14. 90-day action plan

### Week 1
- Deploy this repo
- Search Console + sitemap submit
- GBP claim/complete
- Parent site link from marafei.net
- Confirm TrackMan public listing
- Ask 5 past clients for Google reviews

### Weeks 2–4
- About + process pages
- Compress/replace AI-looking heroes with real bay photos where you have them
- YouTube video on RGC or a residence
- Email BenQ ME and SportsBox for partner directory listing
- WhatsApp click-to-chat as a conversion

### Days 30–90
- Arabic landing pages
- Two more documented projects
- One comparison article (TrackMan indoor vs portable)
- Hospitality/club partner links
- Review velocity: 2–4 new GBP reviews per month

---

## 15. What we will not do (because it hurts)

- Duplicate homepages on extra URLs
- Keyword stuffing city names in hidden text
- Fake reviews or fake “#1 in the GCC” claims
- Showing Foresight / Full Swing / AboutGolf logos unless they are real current partners
- Changing the TrackMan snippet domain away from marafei.com
- Buying links
- Blocking CSS/JS from robots
- Indexing Vercel preview deployments

---

## 16. Page inventory (canonicals)

| URL | Role |
| --- | --- |
| https://golf.marafei.net/ | Brand + all services |
| https://golf.marafei.net/golf-simulator-installer | Gulf / GCC installer + “golf partner” |
| https://golf.marafei.net/golf-simulators-saudi-arabia | KSA geo |
| https://golf.marafei.net/indoor-golf-simulator | Product / room |
| https://golf.marafei.net/golf-technology-middle-east | B2B / academies |
| https://golf.marafei.net/authorized-trackman-dealer | Trust / TrackMan |
| https://golf.marafei.net/benq-golf-simulator-partner | Trust / BenQ |
| https://golf.marafei.net/projects/* | Proof / photos |
| https://www.trackman.com/authorized-dealer?domain=marafei.com | External verification (do not change) |

---

## 17. Contact consistency (copy this everywhere)

- **Brand:** Marafei Golf (parent: Marafei)
- **Site:** https://golf.marafei.net
- **Parent:** https://marafei.net
- **Email:** golf@marafei.com
- **Phone / WhatsApp:** +966 53 023 0544
- **City:** Riyadh, Saudi Arabia
- **Service area:** Saudi Arabia and the GCC

When you have a street address, add it to `config/seo.ts` (`NAP.streetAddress`) so LocalBusiness schema becomes complete. Incomplete addresses limit Maps.

---

*This playbook is the off-site and operating half. The repository now contains the on-site half. Rankings follow from doing both, for months, with real projects and real reviews.*
