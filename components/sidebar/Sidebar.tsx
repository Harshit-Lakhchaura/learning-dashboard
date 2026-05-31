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
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Courses', icon: BookOpen },
  { label: 'Achievements', icon: Trophy },
  { label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('Dashboard')

  return (
    <motion.nav
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{
        height: '100vh',
        backgroundColor: '#0f0f13',
        borderRight: '1px solid rgba(255,255,255,0.08)',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: '24px',
        paddingBottom: '24px',
        flexShrink: 0,
        overflow: 'hidden',
      }}
    >
      {/* Logo */}
      <div style={{ padding: '0 16px', marginBottom: '32px', overflow: 'hidden' }}>
        <AnimatePresence mode="wait">
          {!collapsed ? (
            <motion.span
              key="full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                color: 'white',
                fontWeight: 700,
                fontSize: '18px',
                whiteSpace: 'nowrap',
                display: 'block',
              }}
            >
              🎓 LearnHub
            </motion.span>
          ) : (
            <motion.span
              key="icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ fontSize: '18px', display: 'block' }}
            >
              🎓
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav Items */}
      <ul style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        padding: '0 8px',
        flex: 1,
        listStyle: 'none',
        margin: 0,
      }}>
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeItem === item.label

          return (
            <li key={item.label}>
              <button
                onClick={() => setActiveItem(item.label)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '10px 12px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  backgroundColor: isActive ? 'rgba(139,92,246,0.15)' : 'transparent',
                  outline: 'none',
                }}
              >
                {/* Active border */}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '12px',
                      border: '1px solid rgba(139,92,246,0.3)',
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                <Icon
                  size={20}
                  color={isActive ? '#a78bfa' : 'rgba(255,255,255,0.4)'}
                  style={{ flexShrink: 0, position: 'relative', zIndex: 10 }}
                />

                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        color: isActive ? 'white' : 'rgba(255,255,255,0.4)',
                        fontSize: '14px',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                        position: 'relative',
                        zIndex: 10,
                      }}
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
        style={{
          margin: '16px auto 0',
          padding: '8px',
          borderRadius: '8px',
          backgroundColor: 'rgba(255,255,255,0.05)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {collapsed
          ? <ChevronRight size={16} color="rgba(255,255,255,0.4)" />
          : <ChevronLeft size={16} color="rgba(255,255,255,0.4)" />
        }
      </button>
    </motion.nav>
  )
}