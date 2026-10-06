import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import Progress from './pages/Progress'
import Projects from './pages/Projects'
import Settings from './pages/Settings'
import Tasks from './pages/Tasks'
import Team from './pages/Team'

export default function App() {
  return (
    <Routes>
      {/* Root renders the app shell pointed at the default page. */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Application shell: sidebar + navbar + outlet. */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  )
}
