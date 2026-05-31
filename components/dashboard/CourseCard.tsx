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
      className="rounded-2xl bg-[#1a1a24] border border-white/10 p-6 cursor-pointer relative overflow-hidden group h-fit"
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

      <div className="relative z-10 flex flex-col gap-4">
        <div className="bg-violet-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
          <Icon className="text-violet-400" size={24} />
        </div>
        <div>
          <h3 className="text-white font-semibold text-base mb-1">{course.title}</h3>
          <p className="text-white/40 text-sm">{course.progress}% complete</p>
        </div>
        <ProgressBar value={course.progress} />
      </div>
    </motion.article>
  )
}