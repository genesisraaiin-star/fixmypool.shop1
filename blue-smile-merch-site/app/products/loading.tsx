export default function Loading() {
  return (
    <div className="py-12">
      <div className="h-6 w-24 animate-pulse rounded bg-white/10" />
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div className="aspect-square w-full animate-pulse rounded-[2rem] bg-white/10" />
        <div>
          <div className="h-10 w-2/3 animate-pulse rounded bg-white/10" />
          <div className="mt-4 h-5 w-4/5 animate-pulse rounded bg-white/10" />
          <div className="mt-8 space-y-3">
            <div className="h-16 animate-pulse rounded-2xl bg-white/10" />
            <div className="h-16 animate-pulse rounded-2xl bg-white/10" />
            <div className="h-16 animate-pulse rounded-2xl bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
