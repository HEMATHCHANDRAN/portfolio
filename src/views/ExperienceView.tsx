import { motion } from 'framer-motion'
import { experience } from '@/data'
import { useUser } from '@/context/UserContext'
import HubNav from '@/components/HubNav'

type Props = {
  onNavigate: (to: 'hub' | 'personal' | 'experience' | 'projects') => void
}

export default function ExperienceView({ onNavigate }: Props) {
  const { user } = useUser()
  const name = user?.name || 'there'

  return (
    <section className="min-h-screen bg-surface-900 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Here&apos;s where I&apos;ve been building, {name}
          </h1>
          <p className="mt-2 text-accent-cyan font-medium">
            Hemathchandran — experience.
          </p>
          <p className="mt-1 text-slate-400">
            Roles, companies, and what I did there. Curious about my projects or how to reach me? Use the links below.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experience.map((e, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
              className="group relative rounded-2xl border border-surface-700 bg-gradient-to-br from-surface-800/80 to-surface-900/80 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-accent-teal/10 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/0 via-accent-teal/5 to-accent-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row">
                <motion.div
                  className="relative h-48 w-full overflow-hidden sm:h-auto sm:w-64 lg:w-80"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {e.imageUrl ? (
                    <>
                      <img
                        src={e.imageUrl}
                        alt={`${e.company} workplace`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-900/60 via-transparent to-transparent" />
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-800 to-surface-900 text-slate-500">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🏢</div>
                        <div className="text-sm">Workplace Image</div>
                      </div>
                    </div>
                  )}
                  {/* Company badge overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-accent-teal/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-surface-900 shadow-lg">
                      {e.company}
                    </span>
                  </div>
                </motion.div>
                
                <div className="flex-1 p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <h2 className="text-xl font-bold text-white group-hover:text-accent-teal transition-colors">
                      {e.role}
                    </h2>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {e.location && (
                      <span className="flex items-center gap-1 text-sm text-slate-400">
                        <span>📍</span> {e.location}
                      </span>
                    )}
                    <span className="text-slate-600">·</span>
                    <span className="text-sm font-semibold text-accent-teal">
                      {e.start} {e.end && `→ ${e.end}`}
                    </span>
                  </div>
                  
                  <ul className="space-y-3">
                    {e.bullets.map((b, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + j * 0.05 }}
                        className="flex items-start gap-3 text-slate-300 leading-relaxed"
                      >
                        <span className="text-accent-teal mt-1.5 flex-shrink-0">▸</span>
                        <span>{b}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <HubNav current="experience" onNavigate={onNavigate} />
      </div>
    </section>
  )
}
