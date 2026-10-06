import { NavLink } from 'react-router-dom'
import { Droplet, X } from 'lucide-react'

import { NAV_ITEMS } from './navigation'

/**
 * Left application sidebar.
 *
 * Desktop (>= lg): fixed in place, the main content is offset with `lg:pl-64`.
 * Mobile (< lg):   an off-canvas drawer that slides in over an overlay.
 * When closed on mobile the drawer is `visibility: hidden` so its links are
 * removed from the tab order; `lg:visible` restores it on desktop.
 */
export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Overlay — only used while the mobile drawer is open. */}
      <div
        onClick={onClose}
        className={[
          'fixed inset-0 z-40 bg-slate-900/40 transition-opacity duration-200 lg:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        aria-hidden="true"
      />

      <aside
        id="app-sidebar"
        className={[
          'fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white',
          'transition-[transform,visibility,box-shadow] duration-200 ease-out lg:translate-x-0 lg:visible',
          open ? 'translate-x-0 shadow-xl' : '-translate-x-full invisible',
        ].join(' ')}
      >
        {/* Brand */}
        <div className="flex h-16 shrink-0 items-center border-b border-slate-200 px-5">
          <NavLink
            to="/dashboard"
            onClick={onClose}
            className="flex items-center gap-2.5 rounded-lg focus-ring"
            aria-label="DewWork — go to Dashboard"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <Droplet className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-[17px] font-semibold tracking-tight text-slate-900">
              Dew<span className="text-indigo-600">Work</span>
            </span>
          </NavLink>

          {/* Close button — only reachable on mobile, where the navbar
              toggle is covered by the open drawer. */}
          <button
            type="button"
            onClick={onClose}
            className="ml-auto grid h-9 w-9 place-items-center rounded-lg text-slate-500 transition-colors duration-150 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200 focus-ring lg:hidden"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Primary navigation */}
        <nav
          aria-label="Main navigation"
          className="scrollbar-subtle min-h-0 flex-1 overflow-y-auto px-3 py-4"
        >
          <ul className="space-y-1">
            {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    [
                      'flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium',
                      'transition-colors duration-150 focus-ring',
                      isActive
                        ? 'bg-indigo-50 text-indigo-700'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                    ].join(' ')
                  }
                >
                  <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span className="truncate">{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Profile (visual placeholder only) */}
        <div className="shrink-0 border-t border-slate-200 p-3">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors duration-150 hover:bg-slate-100 focus-ring"
            aria-label="Open profile menu"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-indigo-100 text-xs font-semibold text-indigo-700">
              JL
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium text-slate-900">
                Jordan Lee
              </span>
              <span className="block truncate text-xs text-slate-500">
                Workspace member
              </span>
            </span>
          </button>
        </div>
      </aside>
    </>
  )
}
