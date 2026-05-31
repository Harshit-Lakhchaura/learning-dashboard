'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '#' },
  { label: 'Courses', icon: BookOpen, href: '#' },
  { label: 'Achievements', icon: Trophy, href: '#' },
  { label: 'Settings', icon: Settings, href: '#' },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('Dashboard')

  return (
    <motion.nav
      animate={{ width: collapsed ? 64 : 220 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="h-screen bg-[#0f0f13] border-r border-white/10 flex flex-col py-6 relative shrink-0"
    >
      {/* Logo */}
      <div className="px-4 mb-8 overflow-hidden">
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-white font-bold text-lg whitespace-nowrap"
            >
              🎓 LearnHub
            </motion.span>
          )}
        </AnimatePresence>
        {collapsed && <span className="text-white font-bold text-lg">🎓</span>}
      </div>

      {/* Nav Items */}
      <ul className="flex flex-col gap-1 px-2 flex-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.label

          return (
            <li key={item.label}>
              <button
                onClick={() => setActiveItem(item.label)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl relative"
              >
                {/* Active background */}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-violet-500/20 rounded-xl border border-violet-500/30"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                <Icon
                  size={20}
                  className={`relative z-10 shrink-0 ${
                    isActive ? 'text-violet-400' : 'text-white/40'
                  }`}
                />

                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className={`relative z-10 text-sm font-medium whitespace-nowrap ${
                        isActive ? 'text-white' : 'text-white/40'
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </li>
          )
        })}
      </ul>

      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mx-auto mt-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
      >
        {collapsed ? (
          <ChevronRight size={16} className="text-white/40" />
        ) : (
          <ChevronLeft size={16} className="text-white/40" />
        )}
      </button>
    </motion.nav>
  )
}