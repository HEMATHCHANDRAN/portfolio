import { motion } from 'framer-motion'
import { projects, githubUrl } from '@/data'
import { useUser } from '@/context/UserContext'
import HubNav from '@/components/HubNav'

type Props = {
  onNavigate: (to: 'hub' | 'personal' | 'experience' | 'projects') => void
}

export default function ProjectsView({ onNavigate }: Props) {
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
            Here&apos;s what I&apos;ve built, {name}
          </h1>
          <p className="mt-2 text-accent-cyan font-medium">
            Hemathchandran — projects.
          </p>
          <p className="mt-1 text-slate-400">
            Embedded systems & IoT — what I built and how. Want to see my experience or reach out? Use the links below.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
              className="group relative rounded-2xl border border-surface-700 bg-gradient-to-br from-surface-800/80 to-surface-900/80 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-accent-cyan/10 transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/0 via-accent-cyan/5 to-accent-teal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="flex flex-col sm:flex-row">
                <motion.div
                  className="relative h-48 w-full overflow-hidden sm:h-auto sm:w-64 lg:w-80"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {p.imageUrl ? (
                    <>
                      <img
                        src={p.imageUrl}
                        alt={p.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-900/60 via-transparent to-transparent" />
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-800 to-surface-900 text-slate-500">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📸</div>
                        <div className="text-sm">Project Image</div>
                      </div>
                    </div>
                  )}
                  {/* Type badge overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-accent-cyan/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-surface-900 shadow-lg">
                      {p.type}
                    </span>
                  </div>
                </motion.div>
                
                <div className="flex-1 p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-accent-cyan">{p.period}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors">
                    {p.title}
                  </h2>
                  
                  {p.brief && (
                    <p className="text-slate-300 leading-relaxed mb-5">{p.brief}</p>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t, idx) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + idx * 0.05 }}
                        className="rounded-lg border border-accent-cyan/40 bg-accent-cyan/10 px-3 py-1.5 text-xs font-medium text-accent-cyan backdrop-blur-sm hover:bg-accent-cyan/20 hover:border-accent-cyan transition-all cursor-default"
                        whileHover={{ scale: 1.1 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center"
        >
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-surface-600 bg-surface-800/50 px-6 py-3 font-medium text-slate-300 transition hover:border-accent-cyan hover:text-accent-cyan"
          >
            More on GitHub →
          </a>
        </motion.div>

        <HubNav current="projects" onNavigate={onNavigate} />
      </div>
    </section>
  )
}
