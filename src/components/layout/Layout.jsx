import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import Navbar from './Navbar'
import Sidebar from './Sidebar'

/**
 * Application shell: fixed sidebar on desktop, off-canvas drawer on mobile,
 * sticky navbar, and the routed page content.
 */
export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  // Close the mobile drawer with the Escape key.
  useEffect(() => {
    if (!sidebarOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSidebarOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [sidebarOpen])

  // Prevent background scrolling while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [sidebarOpen])

  return (
    <div className="min-h-screen bg-slate-50">
      <a
        href="#page-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-slate-900 focus:shadow-lg focus-ring"
      >
        Skip to main content
      </a>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex min-h-screen flex-col lg:pl-64">
        <Navbar
          onMenuClick={() => setSidebarOpen((isOpen) => !isOpen)}
          sidebarOpen={sidebarOpen}
        />

        <main id="page-content" className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
