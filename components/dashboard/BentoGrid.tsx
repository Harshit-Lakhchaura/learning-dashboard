'use client'
import { HeroTile } from './HeroTile'
import { CourseCard } from './CourseCard'
import { ActivityTile } from './ActivityTile'
import { Course } from '@/types'

interface BentoGridProps {
  courses: Course[]
}

export function BentoGrid({ courses }: BentoGridProps) {
  return (
    <main className="flex-1 w-full">
      {/* Hero Tile - Full Width */}
      <div className="mb-4">
        <HeroTile streak={7} />
      </div>

      {/* Course Cards + Activity Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
        <ActivityTile />
      </div>
    </main>
  )
}