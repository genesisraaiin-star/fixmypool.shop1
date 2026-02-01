# Blue Smile Merch (Mock Store)

A clean merch storefront built from your uploaded logo. Includes mock products and images generated locally.

## Quickstart

```bash
npm install
npm run dev
```

## Deploy to Vercel

1. Push this folder to a new GitHub repo.
2. In Vercel: **New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected)
4. Build command: `next build` (default)
5. Output: handled by Next.js automatically.

## Customize

- Update company name + copy in `app/layout.tsx` and `app/page.tsx`
- Edit products in `lib/products.ts`
- Replace logo in `public/logo.png`
- Swap product images in `public/products/`
