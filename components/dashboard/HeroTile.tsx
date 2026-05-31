'use client'
import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export function HeroTile({ streak = 7 }: { streak?: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="col-span-full rounded-2xl bg-gradient-to-br from-violet-900/50 via-purple-900/30 to-cyan-900/30 border border-violet-500/20 p-8 relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome back, <span className="text-violet-400">Learner</span> 👋
        </h1>
        <p className="text-white/50 mb-6">Continue your learning journey today.</p>
        
        <div className="flex items-center gap-2 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10">
          <Flame className="text-orange-400" size={20} />
          <span className="text-white font-semibold">{streak} Day Streak</span>
        </div>
      </div>
    </motion.section>
  )
}