import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/sidebar/Sidebar'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Learning Dashboard',
  description: 'Next-Gen Student Learning Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={geist.className} style={{
        backgroundColor: '#0f0f13',
        color: 'white',
        margin: 0,
        padding: 0,
        height: '100vh',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex',
          height: '100vh',
        }}>
          <Sidebar />
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            backgroundColor: '#0f0f13',
          }}>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}