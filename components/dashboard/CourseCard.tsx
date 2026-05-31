'use client'
import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { Course } from '@/types'

interface CourseCardProps {
  course: Course
  index: number
}

export function CourseCard({ course, index }: CourseCardProps) {
  const Icon = (Icons as any)[course.icon_name] || Icons.BookOpen

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      whileHover={{ scale: 1.02 }}
      style={{
      backgroundColor: '#1a1a24',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '16px',
      padding: '22px',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '165px',
}}
    >
      {/* Icon */}
      <div style={{
        backgroundColor: 'rgba(139, 92, 246, 0.15)',
        width: '44px',
        height: '44px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon color="#a78bfa" size={22} />
      </div>

      {/* Title + Progress % */}
      <div>
        <h3 style={{
          color: 'white',
          fontWeight: 600,
          fontSize: '14px',
          marginBottom: '2px',
          lineHeight: '1.3',
        }}>
          {course.title}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
          {course.progress}% complete
        </p>
      </div>

      {/* Progress Bar */}
      <ProgressBar value={course.progress} />
    </motion.article>
  )
}