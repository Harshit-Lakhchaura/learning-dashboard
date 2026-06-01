'use client'
import { useEffect, useState } from 'react'
import { HeroTile } from './HeroTile'
import { CourseCard } from './CourseCard'
import { ActivityTile } from './ActivityTile'
import { Course } from '@/types'

interface BentoGridProps {
  courses: Course[]
}

export function BentoGrid({ courses }: BentoGridProps) {
  const [columns, setColumns] = useState(3)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setColumns(1)
        setIsMobile(true)
      } else if (width < 1024) {
        setColumns(2)
        setIsMobile(false)
      } else {
        setColumns(3)
        setIsMobile(false)
      }
    }
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  return (
    <main style={{
      width: '100%',
      paddingBottom: isMobile ? '80px' : '0', // Space for bottom nav on mobile
    }}>
      {/* Hero Tile */}
      <div style={{ marginBottom: '16px' }}>
        <HeroTile streak={7} />
      </div>

      {/* Responsive Bento Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '16px',
        alignItems: 'start',
      }}>
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
        <ActivityTile />
      </div>
    </main>
  )
}