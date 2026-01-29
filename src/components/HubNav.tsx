type Page = 'personal' | 'experience' | 'projects'

type Props = {
  current: Page
  onNavigate: (to: 'hub' | 'personal' | 'experience' | 'projects') => void
}

import { motion } from 'framer-motion'

export default function HubNav({ current, onNavigate }: Props) {
  return (
    <motion.nav
      className="mt-12 border-t border-surface-700 pt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <p className="mb-6 text-center text-sm text-slate-400">
        Want to see something else? Return to the junction or jump to another section.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <motion.button
          type="button"
          onClick={() => onNavigate('hub')}
          className="group flex items-center gap-2 rounded-xl border-2 border-accent-cyan/50 bg-accent-cyan/10 px-6 py-3 font-semibold text-accent-cyan transition-all hover:bg-accent-cyan/20 hover:shadow-lg hover:shadow-accent-cyan/30"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>←</span> Return to Hub
        </motion.button>
        {current !== 'experience' && (
          <motion.button
            type="button"
            onClick={() => onNavigate('experience')}
            className="rounded-xl border-2 border-surface-600 bg-surface-800/50 px-6 py-3 font-semibold text-slate-300 transition-all hover:border-accent-teal hover:bg-accent-teal/10 hover:text-accent-teal hover:shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience
          </motion.button>
        )}
        {current !== 'projects' && (
          <motion.button
            type="button"
            onClick={() => onNavigate('projects')}
            className="rounded-xl border-2 border-surface-600 bg-surface-800/50 px-6 py-3 font-semibold text-slate-300 transition-all hover:border-accent-teal hover:bg-accent-teal/10 hover:text-accent-teal hover:shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.button>
        )}
        {current !== 'personal' && (
          <motion.button
            type="button"
            onClick={() => onNavigate('personal')}
            className="rounded-xl border-2 border-surface-600 bg-surface-800/50 px-6 py-3 font-semibold text-slate-300 transition-all hover:border-accent-teal hover:bg-accent-teal/10 hover:text-accent-teal hover:shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Personal
          </motion.button>
        )}
      </div>
    </motion.nav>
  )
}
