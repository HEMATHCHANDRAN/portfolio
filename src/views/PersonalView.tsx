import { motion } from 'framer-motion'
import { profile, education, societal, skillGroups, nptelCertifications, workshops, achievements, eventParticipation, eventCoordination } from '@/data'
import { useUser } from '@/context/UserContext'
import HubNav from '@/components/HubNav'

type Props = {
  onNavigate: (to: 'hub' | 'personal' | 'experience' | 'projects') => void
}

export default function PersonalView({ onNavigate }: Props) {
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
            Good to have you here, {name}
          </h1>
          <p className="mt-2 font-medium text-accent-cyan">
            I&apos;m Hemathchandran — personal info & contact.
          </p>
          <p className="mt-1 text-slate-400">
            Reach out anytime via email or WhatsApp. Want to see my experience or projects? Use the links below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <motion.div
            className="rounded-2xl border border-surface-700 bg-gradient-to-br from-surface-800/90 to-surface-900/90 p-8 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -2 }}
          >
            <div className="flex flex-col items-center text-center">
              {profile.imageUrl ? (
                <motion.img
                  src={profile.imageUrl}
                  alt={profile.name}
                  className="mb-6 h-40 w-40 rounded-full object-cover border-4 border-accent-cyan/50 shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              ) : (
                <motion.div
                  className="mb-6 flex h-40 w-40 items-center justify-center rounded-full border-4 border-dashed border-accent-cyan/50 bg-gradient-to-br from-surface-700 to-surface-800 text-slate-400 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">👤</div>
                    <div className="text-xs">Photo</div>
                  </div>
                </motion.div>
              )}
              <h2 className="text-2xl font-bold text-white mb-2">{profile.name}</h2>
              <p className="text-xl font-semibold text-accent-cyan mb-4">{profile.title}</p>
              <p className="text-slate-300 leading-relaxed max-w-2xl">{profile.summary}</p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <motion.a
                  href={`mailto:${profile.contact.email}`}
                  className="group flex items-center gap-2 rounded-xl bg-accent-cyan/20 px-5 py-3 text-sm font-semibold text-accent-cyan transition-all hover:bg-accent-cyan/30 hover:shadow-lg hover:shadow-accent-cyan/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>📧</span> Email
                </motion.a>
                <motion.a
                  href={profile.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl bg-green-500/20 px-5 py-3 text-sm font-semibold text-green-400 transition-all hover:bg-green-500/30 hover:shadow-lg hover:shadow-green-500/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>💬</span> WhatsApp
                </motion.a>
                <motion.a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl bg-blue-500/20 px-5 py-3 text-sm font-semibold text-blue-400 transition-all hover:bg-blue-500/30 hover:shadow-lg hover:shadow-blue-500/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>💼</span> LinkedIn
                </motion.a>
                <motion.a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl bg-slate-500/20 px-5 py-3 text-sm font-semibold text-slate-300 transition-all hover:bg-slate-500/30 hover:shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>🔗</span> GitHub
                </motion.a>
                {profile.contact.resumeUrl && profile.contact.resumeUrl !== '#' && (
                  <motion.a
                    href={profile.contact.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-xl bg-accent-teal/20 px-5 py-3 text-sm font-semibold text-accent-teal transition-all hover:bg-accent-teal/30 hover:shadow-lg hover:shadow-accent-teal/30"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>📄</span> Resume
                  </motion.a>
                )}
              </div>
              
              <div className="mt-6 space-y-2 text-sm text-slate-400">
                <p className="flex items-center justify-center gap-2">
                  <span>📍</span> {profile.contact.address}
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>📞</span> {profile.contact.phone}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-surface-700 bg-gradient-to-br from-surface-800/90 to-surface-900/90 p-6 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-2xl">⚙️</span> Technical Skills
            </h3>
            <div className="space-y-5">
              {skillGroups.map((g, idx) => (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="border-l-4 border-accent-cyan pl-4"
                >
                  <p className="text-base font-bold text-accent-cyan mb-2">{g.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-surface-700/50 px-3 py-1 text-sm text-slate-300 border border-surface-600 hover:border-accent-cyan/50 hover:bg-surface-700 transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="rounded-2xl border border-surface-700 bg-surface-800/50 p-6">
            <h3 className="text-lg font-semibold text-white">Education</h3>
            <ul className="mt-4 space-y-4">
              {education.map((e, i) => (
                <li key={i}>
                  <p className="font-medium text-slate-200">{e.degree}</p>
                  <p className="text-accent-teal">{e.institution}</p>
                  {e.location && <p className="text-sm text-slate-400">{e.location}</p>}
                  {e.details && <p className="text-sm text-slate-400">{e.details}</p>}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-surface-700 bg-surface-800/50 p-6">
            <h3 className="text-lg font-semibold text-white">Societal</h3>
            <ul className="mt-4 space-y-2">
              {societal.map((s, i) => (
                <li key={i} className="text-sm text-slate-400">
                  <span className="text-slate-200">{s.role}</span> · {s.where}
                  {s.period && ` · ${s.period}`}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-surface-700 bg-surface-800/50 p-6">
            <h3 className="text-lg font-semibold text-white">NPTEL & workshops</h3>
            <p className="mt-2 text-sm text-slate-400">
              {nptelCertifications.map((c) => c.name).join(' · ')}
            </p>
            <ul className="mt-4 space-y-2">
              {workshops.map((w, i) => (
                <li key={i} className="text-sm text-slate-400">
                  {w.name} — {w.where} ({w.year})
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-surface-700 bg-surface-800/50 p-6">
            <h3 className="text-lg font-semibold text-white">Achievements</h3>
            <ul className="mt-4 space-y-3">
              {achievements.map((a, i) => (
                <li key={i} className="text-sm text-slate-400">
                  <span className="text-slate-200">{a.title}</span>
                  {a.detail && ` — ${a.detail}`}
                  {a.period && ` · ${a.period}`}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-surface-700 bg-surface-800/50 p-6">
            <h3 className="text-lg font-semibold text-white">Event participation</h3>
            <ul className="mt-4 space-y-2">
              {eventParticipation.map((e, i) => (
                <li key={i} className="text-sm text-slate-400">
                  {e.title} — {e.where} ({e.year})
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-lg font-semibold text-white">Coordination & volunteering</h3>
            <ul className="mt-4 space-y-2">
              {eventCoordination.map((e, i) => (
                <li key={i} className="text-sm text-slate-400">
                  {e.title} — {e.where}
                  {e.period && ` · ${e.period}`}
                  {e.year && ` (${e.year})`}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <HubNav current="personal" onNavigate={onNavigate} />
      </div>
    </section>
  )
}
