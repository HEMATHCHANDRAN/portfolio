import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useUser } from '@/context/UserContext'
import RoboticCar from '@/components/RoboticCar'
import McuRoadside from '@/components/McuRoadside'

type Dir = 'left' | 'straight' | 'right'
type Dest = 'hub' | 'personal' | 'experience' | 'projects'

type Props = {
  to: Dest
  direction: Dir
  onArrive: () => void
}

const DURATION_MS = 3800

const DEST_LABEL: Record<Dest, string> = {
  hub: 'the junction',
  personal: 'my personal page',
  experience: 'my experience',
  projects: 'my projects',
}

const ROAD_MESSAGES = [
  'Passing the Raspberry Pi section…',
  'Arduino on your left — used in training & sensors.',
  'ESP32 ahead… swarm robotics, CleanTide, Coal Mine Monitoring.',
  'STM32 — Wheel-Dynamo EV, Innovate Engineering.',
  "You're almost there.",
  'Hover the boards by the road to see where I use them.',
]

export default function RoadView({ to, direction, onArrive }: Props) {
  const { user } = useUser()
  const name = user?.name || 'there'
  const [msgIndex, setMsgIndex] = useState(0)

  useEffect(() => {
    const t = setTimeout(onArrive, DURATION_MS)
    return () => clearTimeout(t)
  }, [onArrive])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) return
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % ROAD_MESSAGES.length)
    }, 1400)
    return () => clearInterval(interval)
  }, [])

  const destLabel = DEST_LABEL[to]

  return (
    <section className="flex min-h-screen flex-col justify-center overflow-hidden bg-surface-900 px-4 py-8">
      <div className="mx-auto w-full max-w-3xl">
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.p
            className="text-lg text-slate-300 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            On the road — heading to <span className="text-accent-cyan font-bold">{destLabel}</span>, {name}.
          </motion.p>
          <AnimatePresence mode="wait">
            <motion.p
              key={msgIndex}
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.4, type: 'spring', stiffness: 200 }}
              className="mt-3 text-base font-semibold text-accent-cyan flex items-center justify-center gap-2"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="text-xl"
              >
                ⚡
              </motion.span>
              {ROAD_MESSAGES[msgIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <McuRoadside />

        <div className="relative mx-auto w-full max-w-xl py-6">
          <div className="road-asphalt rounded-xl px-3 pt-3 pb-4">
            <div className="road-center-line mx-auto w-full" />
            
            {/* Road markings for depth */}
            <div className="absolute left-1/4 top-1/2 h-0.5 w-12 -translate-y-1/2 bg-yellow-400/30 blur-sm" />
            <div className="absolute right-1/4 top-1/2 h-0.5 w-12 -translate-y-1/2 bg-yellow-400/30 blur-sm" />
            
            <motion.div
              className="flex justify-center pt-6"
              initial={{ x: -100, opacity: 0.5 }}
              animate={{ x: 100, opacity: 1 }}
              transition={{ 
                duration: DURATION_MS / 1000 - 0.6, 
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <RoboticCar direction={direction} moving={true} />
            </motion.div>
            
            {/* Speed lines effect */}
            <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-0.5 w-16 bg-accent-cyan/20"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: '45%',
                  }}
                  animate={{
                    x: [0, 200],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'linear',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <McuRoadside />
      </div>
    </section>
  )
}
