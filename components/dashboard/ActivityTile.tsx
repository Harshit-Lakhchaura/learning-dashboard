'use client'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

const levelColors = [
  'bg-white/5',
  'bg-violet-500/30',
  'bg-violet-500/60',
  'bg-violet-500',
]

// Fixed data — Math.random() nahi use karenge
const activityData = [
  2,1,3,0,2,1,3,
  1,3,2,1,0,2,3,
  0,2,1,3,2,1,0,
  3,1,2,0,3,1,2,
  1,0,3,2,1,3,2,
].map((level, id) => ({ id, level }))

export function ActivityTile() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
      className="rounded-2xl bg-[#1a1a24] border border-white/10 p-5"
    >
      <h2 className="text-white font-semibold mb-1">Activity</h2>
      <p className="text-white/40 text-xs mb-4">Last 5 weeks</p>

      <div className="grid grid-cols-7 gap-1">
        {activityData.map((day) => (
          <motion.div
            key={day.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: day.id * 0.01 }}
            className={`h-6 w-full rounded-sm ${levelColors[day.level]}`}
          />
        ))}
      </div>

      <div className="flex items-center gap-2 mt-3">
        <span className="text-white/30 text-xs">Less</span>
        {levelColors.map((color, i) => (
          <div key={i} className={`h-3 w-3 rounded-sm ${color}`} />
        ))}
        <span className="text-white/30 text-xs">More</span>
      </div>
    </motion.section>
  )
}