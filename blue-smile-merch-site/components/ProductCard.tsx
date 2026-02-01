import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
    >
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40">
        <Image
          src={product.image}
          alt={product.name}
          width={1400}
          height={1400}
          className="h-auto w-full transition duration-300 group-hover:scale-[1.02]"
          priority={false}
        />
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <div className="text-lg font-semibold tracking-tight">{product.name}</div>
          <div className="mt-1 text-sm text-slate-300">{product.tagline}</div>
        </div>
        <div className="shrink-0 rounded-full bg-brand-500/15 px-3 py-1 text-sm text-brand-200">
          ${product.price}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {product.colors.slice(0, 3).map((c) => (
          <span
            key={c}
            className="rounded-full border border-white/10 bg-slate-950/30 px-2.5 py-1 text-xs text-slate-200"
          >
            {c}
          </span>
        ))}
      </div>
    </Link>
  );
}
