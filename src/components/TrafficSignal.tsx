import { motion } from 'framer-motion'

type Props = { go: boolean; className?: string }

export default function TrafficSignal({ go, className = '' }: Props) {
  return (
    <div
      className={`flex flex-col items-center gap-1 rounded-lg border-2 border-surface-600 bg-surface-900 px-3 py-2 ${className}`}
      role="img"
      aria-label={go ? 'Signal green — go' : 'Signal red — wait'}
    >
      <motion.div
        className="h-4 w-4 rounded-full sm:h-5 sm:w-5"
        animate={{ backgroundColor: go ? '#22c55e' : '#ef4444', boxShadow: go ? '0 0 12px #22c55e' : '0 0 8px #ef4444' }}
        transition={{ duration: 0.3 }}
      />
      <span className="text-[10px] font-medium text-slate-400 sm:text-xs">
        {go ? 'GO' : 'WAIT'}
      </span>
    </div>
  )
}
