import {
  FolderKanban,
  LayoutDashboard,
  ListChecks,
  Settings,
  TrendingUp,
  Users,
} from 'lucide-react'

/**
 * Single source of truth for the application navigation.
 * Used by the Sidebar (links + active state) and the Navbar (page title).
 * These are navigation entries only — they do not implement any features.
 */
export const NAV_ITEMS = [
  {
    to: '/dashboard',
    label: 'Dashboard',
    description: 'Your workspace at a glance',
    icon: LayoutDashboard,
  },
  {
    to: '/tasks',
    label: 'Tasks',
    description: 'Plan and track your work',
    icon: ListChecks,
  },
  {
    to: '/projects',
    label: 'Projects',
    description: 'All your projects in one place',
    icon: FolderKanban,
  },
  {
    to: '/team',
    label: 'Team',
    description: 'Your team and collaborators',
    icon: Users,
  },
  {
    to: '/progress',
    label: 'Progress',
    description: 'How your work is moving forward',
    icon: TrendingUp,
  },
  {
    to: '/settings',
    label: 'Settings',
    description: 'Workspace and account preferences',
    icon: Settings,
  },
]

/** Returns title/description for the current pathname, with a safe fallback. */
export function getPageMeta(pathname) {
  const page = NAV_ITEMS.find((item) => item.to === pathname)

  if (page) {
    return { title: page.label, description: page.description }
  }

  return { title: 'DewWork', description: 'Your workspace at a glance' }
}
