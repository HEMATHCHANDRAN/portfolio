import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useUser } from '@/context/UserContext'
import RoboticCar from '@/components/RoboticCar'
import TrafficSignal from '@/components/TrafficSignal'

type Dir = 'left' | 'straight' | 'right'
type Dest = 'personal' | 'experience' | 'projects'

const OPTIONS: { direction: Dir; dest: Dest; label: string }[] = [
  { direction: 'left', dest: 'personal', label: 'Left — Personal info & contact' },
  { direction: 'straight', dest: 'experience', label: 'Straight — Experience' },
  { direction: 'right', dest: 'projects', label: 'Right — Projects' },
]

type Props = {
  onChoose: (dest: Dest, direction: Dir) => void
}

export default function HubView({ onChoose }: Props) {
  const { user } = useUser()
  const [picked, setPicked] = useState<Dest | null>(null)
  const [moving, setMoving] = useState(false)

  const handleChoose = (dest: Dest, direction: Dir) => {
    if (picked) return
    setPicked(dest)
    setMoving(true)
    // Let car move briefly, then navigate
    setTimeout(() => onChoose(dest, direction), 1400)
  }

  const name = user?.name || 'there'

  return (
    <section className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-surface-900 px-4 py-20">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-2"
        >
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Hey, {name} — welcome to the junction
          </h1>
          <p className="text-accent-cyan font-medium">
            I&apos;m Hemathchandran. Pick a direction and we&apos;ll go.
          </p>
          <p className="text-slate-400">
            {!picked
              ? 'Waiting for your direction — and for the signal. Once you choose, it turns green and we move.'
              : "Signal green — we're moving…"}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-8 sm:flex-row sm:gap-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 150 }}
        >
          <TrafficSignal go={!!picked} />
          <motion.div
            animate={moving ? { 
              x: picked === 'left' ? [-50, 0] : picked === 'right' ? [50, 0] : [0, 0],
            } : {}}
            transition={{ duration: 0.5 }}
          >
            <RoboticCar
              direction={picked ? (OPTIONS.find((o) => o.dest === picked)?.direction ?? 'straight') : 'straight'}
              moving={moving}
            />
          </motion.div>
        </motion.div>

        <div className="grid w-full gap-4 sm:grid-cols-3">
          <AnimatePresence mode="wait">
            {OPTIONS.map(({ direction, dest, label }, idx) => {
              const disabled = !!picked
              const isSelected = picked === dest
              return (
                <motion.button
                  key={dest}
                  type="button"
                  disabled={disabled}
                  onClick={() => handleChoose(dest, direction)}
                  className={`group relative flex flex-col items-center gap-4 rounded-2xl border-2 px-6 py-8 text-left transition-all duration-300 overflow-hidden ${
                    disabled && !isSelected
                      ? 'border-surface-600 bg-surface-800/40 opacity-50 cursor-not-allowed'
                      : isSelected
                      ? 'border-accent-cyan bg-gradient-to-br from-accent-cyan/20 to-accent-teal/20 shadow-lg shadow-accent-cyan/30'
                      : 'border-surface-600 bg-gradient-to-br from-surface-800/80 to-surface-900/80 hover:border-accent-cyan/80 hover:bg-surface-800 hover:shadow-xl hover:shadow-accent-cyan/20'
                  }`}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: isSelected ? 1.05 : 1,
                  }}
                  transition={{ delay: idx * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={!disabled ? { scale: 1.05, y: -4 } : {}}
                  whileTap={!disabled ? { scale: 0.98 } : {}}
                >
                  {/* Animated background gradient */}
                  {!disabled && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent-cyan/0 via-accent-cyan/10 to-accent-teal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  )}
                  
                  <motion.span
                    className="text-5xl relative z-10"
                    animate={isSelected ? { 
                      scale: [1, 1.2, 1],
                      rotate: direction === 'left' ? [-5, 5, -5] : direction === 'right' ? [5, -5, 5] : [0, 0, 0]
                    } : {}}
                    transition={{ duration: 0.6, repeat: isSelected ? Infinity : 0 }}
                  >
                    {direction === 'left' ? '⬅' : direction === 'right' ? '➡' : '⬆'}
                  </motion.span>
                  
                  <span className={`text-sm font-bold relative z-10 text-center ${
                    isSelected ? 'text-white' : 'text-slate-200 group-hover:text-accent-cyan'
                  } sm:text-base transition-colors`}>
                    {label}
                  </span>
                  
                  {/* Glow effect when selected */}
                  {isSelected && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        boxShadow: 'inset 0 0 30px rgba(6, 182, 212, 0.3)',
                      }}
                      animate={{
                        boxShadow: [
                          'inset 0 0 30px rgba(6, 182, 212, 0.3)',
                          'inset 0 0 40px rgba(6, 182, 212, 0.5)',
                          'inset 0 0 30px rgba(6, 182, 212, 0.3)',
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              )
            })}
          </AnimatePresence>
        </div>
        <p className="mt-4 max-w-md text-center text-sm text-slate-500">
          Each direction takes you somewhere different — you can explore all three anytime using the links on each page.
        </p>
      </div>
    </section>
  )
}
