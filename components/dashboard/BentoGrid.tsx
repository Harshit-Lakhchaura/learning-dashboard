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
    <main
    style={{
    width: '100%',
    maxWidth: '1600px',
    margin: '0 auto',
    }}
    >
      {/* Hero Tile */}
      <div style={{ marginBottom: '16px' }}>
        <HeroTile streak={7} />
      </div>

      {/* Bento Grid - 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 items-start">
        {/* Course Cards */}
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}

        {/* Activity Tile - always 1 column */}
        <ActivityTile />
      </div>
    </main>
  )
}