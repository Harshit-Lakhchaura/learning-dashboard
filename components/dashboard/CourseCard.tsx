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
      className="rounded-2xl bg-[#1a1a24] border border-white/10 p-5 cursor-pointer relative overflow-hidden group"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Hover border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-violet-500/0 group-hover:border-violet-500/30 transition-all duration-300"
      />

      <div className="relative z-10">
        <div className="bg-violet-500/10 w-10 h-10 rounded-lg flex items-center justify-center mb-4">
          <Icon className="text-violet-400" size={22} />
        </div>
        <h3 className="text-white font-semibold mb-1 text-sm">{course.title}</h3>
        <p className="text-white/40 text-xs mb-4">{course.progress}% complete</p>
        <ProgressBar value={course.progress} />
      </div>
    </motion.article>
  )
}