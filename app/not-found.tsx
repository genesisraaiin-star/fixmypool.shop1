import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-3 text-slate-300">That link doesn’t exist.</p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-400">
        Back to store
      </Link>
    </div>
  );
}
