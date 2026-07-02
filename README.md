# The Flip Zone Website

Modern, mobile-first gymnastics business website for The Flip Zone — serving Plainfield, Indiana and Bradenton, Florida.

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Framer Motion**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Deploy to [Vercel](https://vercel.com):

```bash
npm run build
```

## Project Structure

```
src/
  app/           # Pages and routes
  components/    # UI components
  data/          # Static content (locations, programs, FAQs, etc.)
```

## iClassPro Integration

Phase 1 uses direct links to iClassPro portals:

- Indiana: `https://portal.iclasspro.com/flipzone`
- Florida: `https://portal.iclasspro.com/flipzoneswfl`

## Content

Edit static content in `src/data/`:

- `locations.ts` — contact info, facility details
- `programs.ts` — program descriptions and metadata
- `faqs.ts` — FAQ content
- `staff.ts` — staff profiles
- `gallery.ts` — facility images
- `iclassproLinks.ts` — enrollment portal URLs

## Environment Variables (Future API Integration)

```env
ICLASSPRO_API_KEY=
ICLASSPRO_ORG_ID_INDIANA=
ICLASSPRO_ORG_ID_FLORIDA=
NEXT_PUBLIC_INDIANA_PORTAL_URL=https://portal.iclasspro.com/flipzone
NEXT_PUBLIC_FLORIDA_PORTAL_URL=https://portal.iclasspro.com/flipzoneswfl
```
