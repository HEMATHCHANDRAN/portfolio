import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MCUS = [
  {
    id: 'rpi',
    label: 'Raspberry Pi',
    color: '#c51a4b',
    hint: 'CleanTide, IoT dashboards, 1000+ students taught',
    imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=300&fit=crop&q=80',
    fallbackImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Raspberry_Pi_4_Model_B_-_Side.jpg/400px-Raspberry_Pi_4_Model_B_-_Side.jpg',
  },
  {
    id: 'arduino',
    label: 'Arduino',
    color: '#008184',
    hint: 'Training, sensors & actuators, real-time logic',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&q=80',
    fallbackImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Arduino_Logo.svg/400px-Arduino_Logo.svg.png',
  },
  {
    id: 'esp32',
    label: 'ESP32',
    color: '#e7352c',
    hint: 'Swarm robotics, Coal Mine Monitoring, Blynk, ThingSpeak',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&q=80',
    fallbackImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/ESP32-DevKitC-32E.jpg/400px-ESP32-DevKitC-32E.jpg',
  },
  {
    id: 'stm32',
    label: 'STM32',
    color: '#03234b',
    hint: 'Wheel-Dynamo EV, Innovate Engineering projects',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&q=80',
    fallbackImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/STM32F4-Discovery-Board.jpg/400px-STM32F4-Discovery-Board.jpg',
  },
]

function McuCard({ label, color, hint, imageUrl, fallbackImageUrl }: { 
  label: string
  color: string
  hint: string
  imageUrl: string
  fallbackImageUrl: string
}) {
  const [hover, setHover] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Realistic PCB-style board with real microcontroller image */}
      <motion.div
        className="relative flex flex-col items-center rounded-xl border-2 overflow-hidden bg-gradient-to-br from-surface-800 to-surface-900 p-2 sm:p-3 shadow-lg"
        style={{
          borderColor: color,
          minWidth: '8rem',
          minHeight: '10rem',
        }}
        whileHover={{ 
          scale: 1.08, 
          boxShadow: `0 12px 32px ${color}50`,
          borderColor: color,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Real microcontroller image */}
        <div className="relative w-full h-24 sm:h-28 mb-2 rounded-lg overflow-hidden bg-surface-900">
          {!imageError ? (
            <motion.img
              src={imageUrl}
              alt={label}
              className="w-full h-full object-cover"
              onError={() => {
                setImageError(true)
                setImageLoaded(false)
              }}
              onLoad={() => setImageLoaded(true)}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 1.1 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <motion.img
              src={fallbackImageUrl}
              alt={label}
              className="w-full h-full object-contain p-2"
              onLoad={() => setImageLoaded(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-surface-800">
              <motion.div
                className="h-8 w-8 rounded-full border-2 border-t-transparent"
                style={{ borderColor: color }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          )}
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
            }}
            animate={{ opacity: hover ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Pin strips - realistic */}
        <div className="absolute -left-1 top-1/2 flex -translate-y-1/2 flex-col gap-1" style={{ width: 8 }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              className="h-2 w-2 rounded-sm bg-gradient-to-b from-amber-400 to-amber-600 shadow-sm"
              whileHover={{ scale: 1.2, boxShadow: `0 0 8px ${color}` }}
            />
          ))}
        </div>
        <div className="absolute -right-1 top-1/2 flex -translate-y-1/2 flex-col gap-1" style={{ width: 8 }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              className="h-2 w-2 rounded-sm bg-gradient-to-b from-amber-400 to-amber-600 shadow-sm"
              whileHover={{ scale: 1.2, boxShadow: `0 0 8px ${color}` }}
            />
          ))}
        </div>

        {/* Label with glow */}
        <motion.span
          className="text-center font-mono text-xs font-bold px-2 py-1 rounded"
          style={{ 
            color,
            textShadow: hover ? `0 0 8px ${color}` : 'none',
          }}
          animate={{ scale: hover ? 1.05 : 1 }}
        >
          {label}
        </motion.span>

        {/* Circuit trace lines */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-surface-600 to-transparent opacity-50" />
      </motion.div>

      {/* Enhanced tooltip */}
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            className="absolute -bottom-2 left-1/2 z-20 w-56 -translate-x-1/2 translate-y-full rounded-xl border border-surface-600 bg-surface-900/95 backdrop-blur-sm px-4 py-3 text-center text-xs text-slate-200 shadow-2xl"
            style={{
              boxShadow: `0 8px 24px ${color}30`,
            }}
          >
            <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-surface-600 bg-surface-900" />
            <p className="font-medium">{hint}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function McuRoadside() {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-6 py-4 sm:gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
    >
      {MCUS.map((m) => (
        <McuCard
          key={m.id}
          label={m.label}
          color={m.color}
          hint={m.hint}
          imageUrl={m.imageUrl}
          fallbackImageUrl={m.fallbackImageUrl}
        />
      ))}
    </motion.div>
  )
}
