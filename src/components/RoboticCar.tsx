import { motion } from 'framer-motion'

type Dir = 'left' | 'straight' | 'right'

const ROTATE: Record<Dir, number> = { left: -90, straight: 0, right: 90 }

type Props = {
  direction?: Dir
  moving?: boolean
  className?: string
}

export default function RoboticCar({ direction = 'straight', moving, className = '' }: Props) {
  return (
    <motion.div
      className={`inline-flex origin-center ${className}`}
      initial={false}
      animate={{
        rotate: ROTATE[direction],
        x: moving ? (direction === 'left' ? -120 : direction === 'right' ? 120 : 0) : 0,
        y: moving ? [0, -2, 0] : 0,
      }}
      transition={{
        rotate: { type: 'spring', stiffness: 200, damping: 25 },
        x: { type: 'spring', stiffness: 100, damping: 20 },
        y: {
          duration: 0.6,
          repeat: moving ? Infinity : 0,
          ease: 'easeInOut',
        },
      }}
    >
      {/* Realistic embedded robotic car: chassis, wheels, sensor dome, antenna, PCB detail */}
      <svg
        viewBox="0 0 120 72"
        className="h-20 w-auto sm:h-24 md:h-28"
        aria-hidden
      >
        <defs>
          <linearGradient id="car-chassis" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="50%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="car-accent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <linearGradient id="car-wheel" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="car-tread" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>
          <filter id="car-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>
        <g filter="url(#car-shadow)">
          {/* Main chassis */}
          <rect x="12" y="20" width="96" height="32" rx="6" fill="url(#car-chassis)" stroke="#475569" strokeWidth="1.5" />
          {/* Front sensor dome (ultrasonic) */}
          <ellipse cx="108" cy="36" rx="8" ry="6" fill="#0f172a" stroke="#06b6d4" strokeWidth="1" />
          <circle cx="108" cy="36" r="2" fill="#06b6d4" opacity="0.8" />
          {/* Rear antenna */}
          <line x1="60" y1="20" x2="60" y2="8" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="60" cy="6" r="2.5" fill="#06b6d4" />
          {/* PCB-style top detail */}
          <rect x="24" y="26" width="48" height="20" rx="3" fill="#0f172a" opacity="0.9" stroke="#334155" strokeWidth="1" />
          <line x1="28" y1="32" x2="44" y2="32" stroke="#06b6d4" strokeWidth="0.8" opacity="0.7" />
          <line x1="28" y1="38" x2="52" y2="38" stroke="#06b6d4" strokeWidth="0.8" opacity="0.5" />
          <line x1="28" y1="44" x2="40" y2="44" stroke="#06b6d4" strokeWidth="0.8" opacity="0.5" />
          <circle cx="76" cy="36" r="3" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.6" />
          <circle cx="88" cy="36" r="2" fill="#22c55e" opacity="0.8" />
          {/* Accent stripe */}
          <rect x="12" y="48" width="96" height="4" rx="2" fill="url(#car-accent)" opacity="0.9" />
          {/* Wheels with rotation animation */}
          <motion.g
            fill="url(#car-wheel)"
            stroke="#334155"
            strokeWidth="1"
            animate={moving ? { rotate: 360 } : {}}
            transition={{ duration: 0.5, repeat: moving ? Infinity : 0, ease: 'linear' }}
            style={{ transformOrigin: '60px 36px' }}
          >
            <ellipse cx="28" cy="58" rx="10" ry="6" />
            <ellipse cx="92" cy="58" rx="10" ry="6" />
            <ellipse cx="28" cy="14" rx="10" ry="6" />
            <ellipse cx="92" cy="14" rx="10" ry="6" />
          </motion.g>
          <motion.g
            fill="url(#car-tread)"
            animate={moving ? { rotate: 360 } : {}}
            transition={{ duration: 0.5, repeat: moving ? Infinity : 0, ease: 'linear' }}
            style={{ transformOrigin: '60px 36px' }}
          >
            <ellipse cx="28" cy="58" rx="6" ry="4" />
            <ellipse cx="92" cy="58" rx="6" ry="4" />
            <ellipse cx="28" cy="14" rx="6" ry="4" />
            <ellipse cx="92" cy="14" rx="6" ry="4" />
          </motion.g>
        </g>
      </svg>
    </motion.div>
  )
}
