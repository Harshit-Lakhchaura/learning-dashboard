import { createClient } from '@/lib/supabase/server'
import { BentoGrid } from '@/components/dashboard/BentoGrid'
import { Course } from '@/types'

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-lg font-semibold">Failed to load courses</p>
          <p className="text-white/40 text-sm mt-2">{error.message}</p>
        </div>
      </main>
    )
  }

  return <BentoGrid courses={courses as Course[]} />
}