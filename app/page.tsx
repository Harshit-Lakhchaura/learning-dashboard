import { Suspense } from 'react'
import { createClient } from '@/lib/supabase/server'
import { BentoGrid } from '@/components/dashboard/BentoGrid'
import { Course } from '@/types'
import { SkeletonCard } from '@/components/ui/SkeletonCard'

// Loading fallback component
function DashboardSkeleton() {
  return (
    <main style={{ width: '100%' }}>
      {/* Hero Skeleton */}
      <div style={{
        width: '100%',
        borderRadius: '16px',
        backgroundColor: '#1a1a24',
        padding: '32px',
        marginBottom: '16px',
        animation: 'pulse 2s infinite',
      }}>
        <div style={{ height: '28px', width: '280px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '8px', marginBottom: '12px' }} />
        <div style={{ height: '16px', width: '200px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '6px', marginBottom: '24px' }} />
        <div style={{ height: '36px', width: '140px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '999px' }} />
      </div>

      {/* Cards Skeleton */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        alignItems: 'start',
      }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  )
}

// Actual data fetching component
async function DashboardContent() {
  const supabase = await createClient()

  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#f87171', fontSize: '18px', fontWeight: 600 }}>
            Failed to load courses
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', marginTop: '8px' }}>
            {error.message}
          </p>
        </div>
      </main>
    )
  }

  return <BentoGrid courses={courses as Course[]} />
}

// Main page — Suspense wraps the data fetching
export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardContent />
    </Suspense>
  )
}