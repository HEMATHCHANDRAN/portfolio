import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { UserProvider, useUser } from '@/context/UserContext'
import LandingView from '@/views/LandingView'
import RoadView from '@/views/RoadView'
import HubView from '@/views/HubView'
import PersonalView from '@/views/PersonalView'
import ExperienceView from '@/views/ExperienceView'
import ProjectsView from '@/views/ProjectsView'

type View = 'landing' | 'road' | 'hub' | 'personal' | 'experience' | 'projects'
type RoadDest = 'hub' | 'personal' | 'experience' | 'projects'
type RoadDir = 'left' | 'straight' | 'right'

function AppInner() {
  const [view, setView] = useState<View>('landing')
  const [roadTo, setRoadTo] = useState<RoadDest>('hub')
  const [roadDir, setRoadDir] = useState<RoadDir>('straight')
  const { setUser } = useUser()

  const goToRoad = useCallback((to: RoadDest, dir: RoadDir) => {
    setRoadTo(to)
    setRoadDir(dir)
    setView('road')
  }, [])

  const onRoadArrive = useCallback(() => {
    setView(roadTo)
  }, [roadTo])

  const onLandingSubmit = useCallback(
    (name: string, email: string) => {
      setUser(name, email)
      setTimeout(() => goToRoad('hub', 'straight'), 800)
    },
    [setUser, goToRoad]
  )

  const onHubChoose = useCallback(
    (dest: 'personal' | 'experience' | 'projects', direction: RoadDir) => {
      goToRoad(dest, direction)
    },
    [goToRoad]
  )

  const onContentNavigate = useCallback(
    (to: 'hub' | 'personal' | 'experience' | 'projects') => {
      if (to === 'hub') goToRoad('hub', 'straight')
      else if (to === 'personal') goToRoad('personal', 'straight')
      else if (to === 'experience') goToRoad('experience', 'straight')
      else goToRoad('projects', 'straight')
    },
    [goToRoad]
  )

  return (
    <div className="min-h-screen bg-surface-900">
      <AnimatePresence mode="wait">
        {view === 'landing' && (
          <LandingView key="landing" onSubmit={onLandingSubmit} />
        )}
        {view === 'road' && (
          <RoadView
            key="road"
            to={roadTo}
            direction={roadDir}
            onArrive={onRoadArrive}
          />
        )}
        {view === 'hub' && (
          <HubView key="hub" onChoose={onHubChoose} />
        )}
        {view === 'personal' && (
          <PersonalView key="personal" onNavigate={onContentNavigate} />
        )}
        {view === 'experience' && (
          <ExperienceView key="experience" onNavigate={onContentNavigate} />
        )}
        {view === 'projects' && (
          <ProjectsView key="projects" onNavigate={onContentNavigate} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default function App() {
  return (
    <UserProvider>
      <AppInner />
    </UserProvider>
  )
}
