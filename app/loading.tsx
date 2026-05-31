import { SkeletonCard } from '@/components/ui/SkeletonCard'

export default function Loading() {
  return (
    <main className="flex-1 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Hero Skeleton */}
        <div className="col-span-full rounded-2xl bg-[#1a1a24] border border-white/10 p-8 animate-pulse">
          <div className="h-8 w-64 rounded bg-white/10 mb-3" />
          <div className="h-4 w-48 rounded bg-white/10 mb-6" />
          <div className="h-8 w-32 rounded-full bg-white/10" />
        </div>

        {/* Course Skeletons */}
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  )
}