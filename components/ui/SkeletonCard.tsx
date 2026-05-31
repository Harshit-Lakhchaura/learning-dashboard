export function SkeletonCard() {
  return (
    <div className="rounded-2xl bg-[#1a1a24] border border-white/10 p-5 animate-pulse">
      <div className="h-8 w-8 rounded-lg bg-white/10 mb-4" />
      <div className="h-4 w-3/4 rounded bg-white/10 mb-2" />
      <div className="h-3 w-1/2 rounded bg-white/10 mb-4" />
      <div className="h-1.5 w-full rounded bg-white/10" />
    </div>
  )
}