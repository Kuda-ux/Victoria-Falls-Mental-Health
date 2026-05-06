# Victoria Falls Mental Health & Wellness Services

Premium multi-page website for Victoria Falls Mental Health & Wellness Services, built by **Kuwex Studios**.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom palette: deep forest green, warm gold, terracotta, mist)
- Framer Motion (page transitions, scroll & hero reveals)
- Embla Carousel (testimonials)
- yet-another-react-lightbox (gallery)
- React Hook Form + Zod (booking enquiry)
- Lucide React icons
- Google Fonts via `next/font`: Cormorant Garamond, DM Sans, Playfair Display

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Pages

- `/` — Home (hero, about, mission/vision/values, services teaser, testimonials carousel, CTA)
- `/services` — 9-service expandable accordion + WhatsApp enquiry
- `/retreats` — Retreat cards, "What to Expect" journey, FAQ, testimonials
- `/gallery` — Filterable masonry grid with lightbox
- `/reviews` — Masonry reviews + booking form (submits via WhatsApp pre-filled)

## Contact integrations

- WhatsApp: <https://wa.me/263772111421>
- Email: info@vicfallsmentalhealth.co.zw

The booking form opens WhatsApp with all enquiry details pre-filled. To switch to email/EmailJS,
update the `onSubmit` handler in `components/reviews/BookingForm.tsx`.

## Customising

- Colours: `tailwind.config.ts` and `app/globals.css` (`:root` variables)
- Services list: `lib/data.ts`
- Testimonials: `lib/data.ts`
- Gallery images: `lib/data.ts`
- Contact details: `lib/utils.ts`

## Local images

Drop client-supplied images (logo, promo video, photos) into `public/images/` and reference
them as `/images/your-file.jpg` from any component. Unsplash remote images are pre-allowed
in `next.config.js`.

## Deployment

Deploy to Vercel, Netlify or any Node host:

```bash
npm run build
npm start
```

---

© 2025 Victoria Falls Mental Health and Wellness Services. Website by Kuwex Studios.
