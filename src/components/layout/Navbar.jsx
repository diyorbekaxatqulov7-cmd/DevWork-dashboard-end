import { useLocation } from 'react-router-dom'
import { Bell, ChevronDown, Menu, Search, X } from 'lucide-react'

import { getPageMeta } from './navigation'

/**
 * Sticky top navbar for the content area.
 * Shows the current page title, the mobile menu button, and visual-only
 * search / notification / profile actions.
 */
export default function Navbar({ onMenuClick, sidebarOpen }) {
  const { pathname } = useLocation()
  const { title, description } = getPageMeta(pathname)

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
      {/* Mobile menu toggle */}
      <button
        type="button"
        onClick={onMenuClick}
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-slate-600 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200 focus-ring lg:hidden"
        aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
        aria-controls="app-sidebar"
        aria-expanded={sidebarOpen}
      >
        {sidebarOpen ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      {/* Page title */}
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
          {title}
        </h1>
        <p className="hidden truncate text-xs text-slate-500 sm:block">
          {description}
        </p>
      </div>

      {/* Actions (visual UI only) */}
      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        <button
          type="button"
          className="hidden h-9 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 text-sm text-slate-500 transition-colors duration-150 hover:border-slate-300 hover:bg-white hover:text-slate-700 focus-ring md:flex lg:w-60"
        >
          <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="flex-1 text-left">Search</span>
          <kbd className="hidden rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-slate-500 lg:block">
            Ctrl K
          </kbd>
        </button>

        <button
          type="button"
          className="relative grid h-9 w-9 place-items-center rounded-lg text-slate-500 transition duration-150 hover:bg-slate-100 hover:text-slate-700 active:scale-95 focus-ring"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" aria-hidden="true" />
          <span
            className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white"
            aria-hidden="true"
          />
        </button>

        <span
          className="hidden h-6 w-px bg-slate-200 sm:block"
          aria-hidden="true"
        />

        <button
          type="button"
          className="flex h-9 items-center gap-1.5 rounded-lg px-1.5 transition duration-150 hover:bg-slate-100 active:scale-95 focus-ring"
          aria-label="Open profile menu"
        >
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-indigo-100 text-[11px] font-semibold text-indigo-700">
            JL
          </span>
          <span className="hidden text-sm font-medium text-slate-700 lg:block">
            Jordan Lee
          </span>
          <ChevronDown
            className="hidden h-4 w-4 text-slate-500 sm:block"
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  )
}
