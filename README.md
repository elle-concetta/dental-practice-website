# Dental Practice Website Template

A luxury dental practice marketing website with a built-in AI chat assistant. Built with React + Vite + Tailwind. Designed to be handed off to any dental practice — fill in the placeholder text, swap the images, connect the chat API, and launch.

**Live preview path:** `/dental/`

---

## Quick-start checklist

Before going live, work through these in order:

- [ ] Replace all `[YOUR PRACTICE NAME]` placeholders
- [ ] Replace all `[DOCTOR NAME]` placeholders
- [ ] Replace all `[City, State]` placeholders
- [ ] Replace all `[PHONE]` placeholders
- [ ] Swap in your logo (`public/logo.svg`)
- [ ] Replace the 7 stock photos in `public/`
- [ ] Fill in the SEO title and description on every page
- [ ] Connect the AI chat to a real API endpoint
- [ ] Update financing/membership plan details
- [ ] Confirm your real insurance list on the For Patients page

---

## Getting started

### Prerequisites

- Node.js 18+
- pnpm

### Install & run

```bash
pnpm install
pnpm --filter @workspace/dental run dev
```

The site runs at `http://localhost:<PORT>/dental/`.

---

## Replacing placeholder text

Search the project for the bracketed placeholders below and replace them with your real content.

| Placeholder | Replace with |
|---|---|
| `[YOUR PRACTICE NAME]` | e.g. `Bright Smiles Family Dentistry` |
| `[DOCTOR NAME]` | e.g. `Dr. Sarah Chen, DDS` |
| `[City, State]` | e.g. `Austin, TX` |
| `[PHONE]` | e.g. `(512) 555-0123` |
| `[Practice Name]` | Same as above — used inside SEO fields |

The fastest way to find them all:

```bash
grep -r "\[YOUR" src/
grep -r "\[DOCTOR" src/
grep -r "\[City" src/
grep -r "\[PHONE" src/
grep -r "\[Practice" src/
```

---

## Replacing the logo

1. Export your logo as an SVG or PNG.
2. Save it as `public/logo.svg` (overwrite the placeholder).
3. If you use a PNG instead, update the `src` in `src/components/layout/Navbar.tsx`:

```tsx
<img
  src={`${import.meta.env.BASE_URL}logo.png`}
  alt="Your Practice Name"
  className="h-10 w-auto"
/>
```

> The `BASE_URL` prefix is required — the site runs under `/dental/` so root-relative paths will 404.

---

## Replacing the photos

All photos live in `public/`. Drop in your own files with the same filenames and the site picks them up automatically.

| File | Used on |
|---|---|
| `hero-office.png` | Home hero, Services header background |
| `office-exterior.png` | Home gallery |
| `team-photo.png` | Home gallery, Technology service page |
| `doctor-portrait.png` | Home gallery, service detail pages |
| `service-cosmetic.png` | Home gallery, Cosmetic/Clear Aligners services |
| `service-pediatric.png` | Home gallery |
| `opengraph.jpg` | Social media share preview (1200×630px) |

Recommended image sizes: **1200–1800px wide**, exported at 80% quality JPEG or compressed PNG.

---

## Setting up the AI chat

The floating chat widget (`src/components/ui/AiChat.tsx`) streams responses from `/api/dental/chat`.

The API expects this request body:

```json
{
  "messages": [
    { "role": "user", "content": "What are your hours?" }
  ]
}
```

And streams back newline-delimited Server-Sent Events:

```
data: {"content": "We're open Monday"}
data: {"content": " through Friday"}
data: {"done": true}
```

### Quick-start prompts

The chat opens with four suggested questions:

- Book appointment
- New patient info
- Insurance accepted
- Office hours

Edit or add to these in `AiChat.tsx` (search for `"Book appointment"`).

### Customising the welcome message

In `AiChat.tsx`, find the `WELCOME` constant at the top:

```ts
const WELCOME = "Hello! I'm the virtual assistant for [YOUR PRACTICE NAME]...";
```

Replace `[YOUR PRACTICE NAME]` with your practice name, and update the message to match your real services.

### Error fallback

If the API is unreachable, the chat shows:

> *"I'm sorry, I'm having trouble connecting right now. Please call our office at [PHONE] for immediate assistance."*

Update `[PHONE]` in this fallback message inside `AiChat.tsx`.

---

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/Home.tsx` | Hero, gallery, testimonials, financing, membership tiers, contact form |
| `/services` | `src/pages/Services.tsx` | 12-service grid with image cards |
| `/services/:slug` | `src/pages/ServiceDetail.tsx` | Individual service page with bullet list |
| `/our-story` | `src/pages/OurStory.tsx` | Practice history and doctor bio |
| `/for-patients` | `src/pages/ForPatients.tsx` | New patient info, insurance, forms |
| `/contact` | `src/pages/Contact.tsx` | Contact form and map embed |
| `/financials` | `src/pages/Financials.tsx` | Financing options and membership plan detail |

---

## Services

The 12 services are defined in two places that must stay in sync:

- **`src/pages/Services.tsx`** — the services grid (title, slug, short description, card image)
- **`src/pages/ServiceDetail.tsx`** — the full detail page for each service (subtitle, long description, bullet list, SEO fields)

Current services and their URL slugs:

| Service | URL slug |
|---|---|
| General Dentistry | `general-dentistry` |
| Preventive Dentistry | `preventive-dentistry` |
| Endodontics Treatment | `endodontics-treatment` |
| Cosmetic Dentistry | `cosmetic-dentistry` |
| Clear Aligners | `clear-aligners` |
| Crowns and Bridges | `crowns-and-bridges` |
| Dentures | `dentures` |
| Restorative Dentistry | `restorative-dentistry` |
| Implants | `implants` |
| Oral Surgery | `oral-surgery` |
| Emergency Dentistry | `emergency-dentistry` |
| Technology | `technology` |

### Adding a new service

1. Add an entry to the `services` array in `Services.tsx`.
2. Add a matching entry to `servicesData` in `ServiceDetail.tsx` — key must exactly match the slug.
3. The nav dropdown in `Navbar.tsx` lists services manually; add your new service there too.

### Removing a service

Remove the entry from `Services.tsx`, `ServiceDetail.tsx`, and `Navbar.tsx`.

---

## SEO

Every page uses the `<Seo>` component from `src/components/Seo.tsx` to set the browser tab title, Google description, and social share tags.

```tsx
<Seo
  title="Dental Implants | Bright Smiles Family Dentistry — Austin, TX"
  description="Permanent tooth replacement with same-day implants in Austin, TX. Board-certified implant dentist with 15+ years experience. Call (512) 555-0123."
/>
```

**Writing good SEO copy:**

| Field | Guidance |
|---|---|
| `title` | `[Service] \| [Practice Name] — [City, State]` · keep under 60 characters |
| `description` | 1–2 sentences · include your city + the key service · 120–155 characters |
| `ogImage` (optional) | Path to a 1200×630px image for social sharing — defaults to `opengraph.jpg` |

All the per-service SEO fields are in `ServiceDetail.tsx`. Search for `seoTitle` and `seoDesc` to find them.

Also edit `index.html` — it holds the site-wide fallback meta tags used before React hydrates:

- `<title>` tag
- `<meta name="description">`
- `<meta property="og:title">` and `<meta property="og:description">`

---

## Customising the design

### Colors

Colors are CSS variables in `src/index.css`.

| Variable | Default | Used for |
|---|---|---|
| `--primary` | deep navy `hsl(220 80% 25%)` | header, hero background, buttons |
| `--secondary` | warm gold `hsl(38 85% 52%)` | accent buttons, icons, highlights |
| `--background` | off-white | page background |
| `--foreground` | near-black | body text |

### Fonts

- **Playfair Display** — serif, used for all headings
- **Inter** — sans-serif, used for body text and UI

Both are loaded from Google Fonts in `src/index.css`. To swap fonts, change the `@import url(...)` line at the top of that file and update the `font-family` references.

---

## Home page sections

| Section | What to customise |
|---|---|
| Hero | Headline, subheading, CTA button label |
| Photo gallery | 5 images in `galleryImages` array at top of `Home.tsx` |
| Services preview | Auto-generated from the services list — no edits needed |
| Testimonials | `testimonials` array — swap in real patient quotes (with permission) |
| Before & After Gallery | `BeforeAfterGallery.tsx` — swap in your own before/after photo pairs |
| Financing | `financingOptions` array — edit provider names and descriptions |
| Membership tiers | `membershipTiers` array — update plan names, prices, and included features |
| Contact form | Inline in `Home.tsx` — wire the `handleSubmit` function to your form backend |

---

## Project structure

```
dental/
├── public/
│   ├── logo.svg                ← replace with your logo
│   ├── hero-office.png         ← replace with your office interior
│   ├── office-exterior.png     ← replace with your exterior photo
│   ├── team-photo.png          ← replace with your team photo
│   ├── doctor-portrait.png     ← replace with your doctor headshot
│   ├── service-cosmetic.png    ← replace with a cosmetic treatment photo
│   ├── service-pediatric.png   ← replace with a kids/family photo
│   └── opengraph.jpg           ← 1200×630px social sharing image
├── src/
│   ├── components/
│   │   ├── BeforeAfterGallery.tsx   ← before/after photo slideshow
│   │   ├── Seo.tsx                  ← per-page SEO (title, description, og:image)
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           ← sticky nav with 12-service dropdown
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   └── ui/
│   │       ├── AiChat.tsx           ← floating AI chat widget
│   │       └── ...                  ← shadcn/ui component library
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── ServiceDetail.tsx
│   │   ├── OurStory.tsx
│   │   ├── ForPatients.tsx
│   │   ├── Contact.tsx
│   │   └── Financials.tsx
│   └── index.css                ← theme variables, Google Fonts import
└── index.html                   ← site-wide fallback SEO meta tags
```

---

## Tech stack

| Tool | Purpose |
|---|---|
| React 18 + TypeScript | UI |
| Vite | Dev server & build |
| Tailwind CSS | Styling |
| shadcn/ui + Radix UI | Accessible component primitives |
| Wouter | Client-side routing |
| Framer Motion | Page animations |
| Lucide React | Icons |
| Playfair Display + Inter | Google Fonts |
