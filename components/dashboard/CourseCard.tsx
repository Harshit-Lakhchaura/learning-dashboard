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
      whileHover={{
        scale: 1.02,
        boxShadow: '0 0 20px rgba(139, 92, 246, 0.25)',
        borderColor: 'rgba(139, 92, 246, 0.5)',
      }}
      style={{
        backgroundColor: '#1a1a24',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '16px',
        padding: '22px',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '165px',
        backgroundImage: `
          radial-gradient(ellipse at top left, rgba(139,92,246,0.08) 0%, transparent 60%),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")
        `,
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