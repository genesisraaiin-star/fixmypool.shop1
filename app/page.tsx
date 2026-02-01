import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Page() {
  return (
    <>
      <section className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-brand-500/15 to-white/5 p-8 md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(50,102,240,0.35),transparent_55%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.10),transparent_45%)]" />
        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200">
              <span className="h-2 w-2 rounded-full bg-brand-400" />
              Fresh drop (mock)
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Merch that smiles back.
            </h1>
            <p className="mt-4 max-w-prose text-slate-200">
              A clean, modern storefront built from your logo — with mock products you can swap for
              real SKUs anytime.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#products"
                className="rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-brand-400"
              >
                Shop products
              </a>
              <a
                href="#faq"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10"
              >
                How it works
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
                <div className="text-slate-100 font-semibold">Fast</div>
                Vercel-ready Next.js
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
                <div className="text-slate-100 font-semibold">Simple</div>
                Edit products in one file
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-3">
                <div className="text-slate-100 font-semibold">Polished</div>
                Tailwind UI styling
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 rounded-[2rem] bg-brand-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 p-6">
              <Image src="/logo.png" alt="Logo" width={520} height={520} className="mx-auto" priority />
              <div className="mt-6 text-center">
                <div className="text-sm text-slate-300">Featuring the</div>
                <div className="text-xl font-semibold tracking-tight">Blue Smile</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mt-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Products</h2>
            <p className="mt-2 text-slate-300">Mock items you can sell (or replace with real inventory).</p>
          </div>
          <div className="hidden text-sm text-slate-300 md:block">
            Click an item for details
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section id="faq" className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
        <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
            <div className="font-semibold">Is checkout real?</div>
            <p className="mt-2 text-sm text-slate-300">
              Not in this starter. It’s a clean catalog that you can connect to Shopify,
              Stripe, Printful, or any backend later.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
            <div className="font-semibold">How do I change the brand name?</div>
            <p className="mt-2 text-sm text-slate-300">
              Update the text in <code className="text-slate-100">app/layout.tsx</code> and
              <code className="text-slate-100"> app/page.tsx</code>.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
            <div className="font-semibold">Where are products defined?</div>
            <p className="mt-2 text-sm text-slate-300">
              All product data lives in <code className="text-slate-100">lib/products.ts</code>.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
            <div className="font-semibold">Will this deploy on Vercel?</div>
            <p className="mt-2 text-sm text-slate-300">
              Yep — it’s a standard Next.js project. Import the GitHub repo in Vercel and deploy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
