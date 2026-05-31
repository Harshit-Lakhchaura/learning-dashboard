'use client'
import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'

export function HeroTile({ streak = 7 }: { streak?: number }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        width: '100%',
        borderRadius: '16px',
        background: 'linear-gradient(135deg, rgba(76,29,149,0.6) 0%, rgba(109,40,217,0.3) 50%, rgba(22,78,99,0.3) 100%)',
        border: '1px solid rgba(139,92,246,0.2)',
        padding: '32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow effects */}
      <div style={{
        position: 'absolute', top: '-40px', right: '-40px',
        width: '160px', height: '160px',
        backgroundColor: 'rgba(139,92,246,0.2)',
        borderRadius: '50%', filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-40px', left: '-40px',
        width: '160px', height: '160px',
        backgroundColor: 'rgba(6,182,212,0.1)',
        borderRadius: '50%', filter: 'blur(40px)',
      }} />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <h1 style={{ fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>
          Welcome back, <span style={{ color: '#a78bfa' }}>Learner</span> 👋
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>
          Continue your learning journey today.
        </p>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          backgroundColor: 'rgba(255,255,255,0.05)',
          padding: '8px 16px', borderRadius: '999px',
          border: '1px solid rgba(255,255,255,0.1)',
        }}>
          <Flame color="#fb923c" size={20} />
          <span style={{ color: 'white', fontWeight: 600 }}>{streak} Day Streak</span>
        </div>
      </div>
    </motion.section>
  )
}