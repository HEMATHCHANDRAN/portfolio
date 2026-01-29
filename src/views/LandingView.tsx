import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RoboticCar from '@/components/RoboticCar'

type Props = {
  onSubmit: (name: string, email: string) => void
}

export default function LandingView({ onSubmit }: Props) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})

  const validate = () => {
    const e: { name?: string; email?: string } = {}
    if (!name.trim()) e.name = 'Please enter your name.'
    if (!email.trim()) e.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Please enter a valid email.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleStart = () => setOpen(true)

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    onSubmit(name, email)
    setOpen(false)
    setName('')
    setEmail('')
    setErrors({})
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-surface-900 px-4">
      <div className="pointer-events-none absolute inset-0 hero-bg" aria-hidden />
      <div className="circuit-glow pointer-events-none absolute inset-0" aria-hidden />
      
      {/* Floating particles effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-accent-cyan/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-accent-cyan to-white bg-clip-text text-transparent">
            HEMATHCHANDRAN
          </h1>
          <motion.div
            className="mt-2 h-1 w-24 bg-gradient-to-r from-transparent via-accent-cyan to-transparent mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>
        
        <motion.p
          className="text-accent-cyan text-xl font-semibold sm:text-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Embedded Systems Engineer
        </motion.p>
        
        <motion.p
          className="max-w-lg text-slate-300 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Welcome! I&apos;m Hemathchandran, an Embedded Systems Engineer passionate about IoT, robotics, and innovative solutions. 
          <span className="block mt-2 text-accent-cyan">Hop into the robotic car and let&apos;s explore my work together.</span>
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6, type: 'spring', stiffness: 200 }}
        >
          <RoboticCar direction="straight" />
        </motion.div>
        
        <motion.button
          type="button"
          onClick={handleStart}
          className="group relative rounded-xl bg-gradient-to-r from-accent-cyan to-accent-teal px-10 py-4 text-lg font-bold text-surface-900 shadow-2xl shadow-accent-cyan/30 transition-all duration-300 hover:shadow-accent-cyan/50 focus:outline-none focus:ring-4 focus:ring-accent-cyan/50 focus:ring-offset-2 focus:ring-offset-surface-900 overflow-hidden"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            Let&apos;s Start
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent-teal to-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
        </motion.button>

        {/* Social links preview */}
        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/hemathchandran-g-m-962762278"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>
          <motion.a
            href="https://github.com/HEMATHCHANDRAN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">GitHub</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.form
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onSubmit={handleSubmit}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-2xl border border-surface-600 bg-gradient-to-br from-surface-900 to-surface-800 p-8 shadow-2xl"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-teal to-accent-cyan" />
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-white to-accent-cyan bg-clip-text text-transparent">
                  Welcome! I&apos;m Hemathchandran
                </h2>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  Before we hit the road, tell me your name and email so I can personalize your journey through my portfolio.
                </p>
              </motion.div>
              
              <div className="mt-6 space-y-5">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="landing-name" className="block text-sm font-semibold text-slate-200 mb-2">
                    Your Name
                  </label>
                  <input
                    id="landing-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border-2 border-surface-600 bg-surface-900/50 px-4 py-3 text-slate-200 placeholder-slate-500 transition-all duration-200 focus:border-accent-cyan focus:bg-surface-900 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50"
                    autoFocus
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-400 flex items-center gap-1"
                    >
                      <span>⚠</span> {errors.name}
                    </motion.p>
                  )}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="landing-email" className="block text-sm font-semibold text-slate-200 mb-2">
                    Your Email
                  </label>
                  <input
                    id="landing-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border-2 border-surface-600 bg-surface-900/50 px-4 py-3 text-slate-200 placeholder-slate-500 transition-all duration-200 focus:border-accent-cyan focus:bg-surface-900 focus:outline-none focus:ring-2 focus:ring-accent-cyan/50"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-sm text-red-400 flex items-center gap-1"
                    >
                      <span>⚠</span> {errors.email}
                    </motion.p>
                  )}
                </motion.div>
              </div>
              
              <div className="mt-8 flex gap-3">
                <motion.button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-xl border-2 border-surface-600 bg-surface-800/50 py-3 font-semibold text-slate-300 transition-all duration-200 hover:bg-surface-700 hover:border-surface-500"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  className="flex-1 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-teal py-3 font-bold text-surface-900 shadow-lg shadow-accent-cyan/30 transition-all duration-200 hover:shadow-accent-cyan/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let&apos;s Go →
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
