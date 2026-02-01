import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="mx-auto max-w-2xl py-16">
        <h1 className="text-2xl font-semibold">Product not found</h1>
        <p className="mt-3 text-slate-300">Try heading back to the catalog.</p>
        <Link className="mt-6 inline-block rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-400" href="/">
          Back to store
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10">
      <Link href="/" className="text-sm text-slate-300 hover:text-slate-100">
        ← Back
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/40">
          <Image src={product.image} alt={product.name} width={1400} height={1400} className="h-auto w-full" priority />
        </div>

        <div>
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{product.name}</h1>
          <p className="mt-3 text-slate-300">{product.tagline}</p>

          <div className="mt-5 inline-flex rounded-full bg-brand-500/15 px-4 py-2 text-brand-200">
            ${product.price}
          </div>

          <div className="mt-8 space-y-3">
            {product.description.map((line) => (
              <div key={line} className="rounded-2xl border border-white/10 bg-slate-950/30 p-4 text-sm text-slate-200">
                {line}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="text-sm font-semibold text-slate-100">Colors</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {product.sizes ? (
            <div className="mt-6">
              <div className="text-sm font-semibold text-slate-100">Sizes</div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-5">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Logo" width={36} height={36} />
              <div>
                <div className="text-sm font-semibold">Mock checkout</div>
                <div className="text-xs text-slate-300">Connect Shopify/Stripe later.</div>
              </div>
            </div>
            <button
              className="mt-4 w-full rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-400"
              onClick={() => alert("This starter is a catalog only. Hook up payments later!")}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
