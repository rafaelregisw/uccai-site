import { motion } from 'framer-motion'

export const SacredGeometry = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[3] overflow-hidden">
      {/* Flower of Life Pattern */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96"
        initial={{ rotate: 0, opacity: 0 }}
        animate={{
          rotate: 360,
          opacity: [0.02, 0.05, 0.02]
        }}
        transition={{
          rotate: { duration: 120, repeat: Infinity, ease: "linear" },
          opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="flowerGradient">
              <stop offset="0%" stopColor="rgba(255, 215, 0, 0.2)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.1)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
            </radialGradient>
          </defs>
          {[...Array(7)].map((_, i) => {
            const angle = (i * 360) / 6
            const x = 100 + 30 * Math.cos(angle * Math.PI / 180)
            const y = 100 + 30 * Math.sin(angle * Math.PI / 180)
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="30"
                fill="none"
                stroke="url(#flowerGradient)"
                strokeWidth="0.5"
                opacity="0.8"
              />
            )
          })}
          <circle
            cx="100"
            cy="100"
            r="30"
            fill="none"
            stroke="url(#flowerGradient)"
            strokeWidth="0.5"
            opacity="0.8"
          />
        </svg>
      </motion.div>

      {/* Metatron's Cube */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80"
        initial={{ rotate: 0, opacity: 0 }}
        animate={{
          rotate: -360,
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{
          rotate: { duration: 150, repeat: Infinity, ease: "linear" },
          opacity: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="metatronGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(236, 72, 153, 0.15)" />
              <stop offset="50%" stopColor="rgba(255, 215, 0, 0.15)" />
              <stop offset="100%" stopColor="rgba(34, 197, 94, 0.15)" />
            </linearGradient>
          </defs>
          <polygon
            points="100,30 170,70 170,130 100,170 30,130 30,70"
            fill="none"
            stroke="url(#metatronGradient)"
            strokeWidth="0.5"
            opacity="0.6"
          />
          <polygon
            points="100,50 150,80 150,120 100,150 50,120 50,80"
            fill="none"
            stroke="url(#metatronGradient)"
            strokeWidth="0.5"
            opacity="0.4"
          />
        </svg>
      </motion.div>

      {/* Sri Yantra */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
        initial={{ scale: 1, opacity: 0 }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.01, 0.03, 0.01]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="sriGradient">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.25)" />
              <stop offset="30%" stopColor="rgba(255, 215, 0, 0.15)" />
              <stop offset="60%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.05)" />
            </radialGradient>
          </defs>
          {/* Central triangles */}
          <polygon
            points="100,40 140,120 60,120"
            fill="none"
            stroke="url(#sriGradient)"
            strokeWidth="0.3"
            opacity="0.8"
          />
          <polygon
            points="100,160 60,80 140,80"
            fill="none"
            stroke="url(#sriGradient)"
            strokeWidth="0.3"
            opacity="0.8"
          />
          {/* Outer circles */}
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="url(#sriGradient)"
            strokeWidth="0.3"
            opacity="0.5"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="url(#sriGradient)"
            strokeWidth="0.3"
            opacity="0.4"
          />
        </svg>
      </motion.div>

      {/* Golden Ratio Spiral */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64"
        initial={{ rotate: 0, opacity: 0 }}
        animate={{
          rotate: 360,
          opacity: [0.02, 0.04, 0.02]
        }}
        transition={{
          rotate: { duration: 100, repeat: Infinity, ease: "linear" },
          opacity: { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <linearGradient id="spiralGradient">
              <stop offset="0%" stopColor="rgba(255, 215, 0, 0.2)" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
            </linearGradient>
          </defs>
          <path
            d="M100,100 Q120,100 120,120 T100,140 Q80,140 80,120 T100,100"
            fill="none"
            stroke="url(#spiralGradient)"
            strokeWidth="0.5"
            opacity="0.7"
          />
          <path
            d="M100,100 Q140,100 140,140 T100,180 Q60,180 60,140 T100,100"
            fill="none"
            stroke="url(#spiralGradient)"
            strokeWidth="0.3"
            opacity="0.5"
          />
        </svg>
      </motion.div>

      {/* Seed of Life */}
      <motion.div
        className="absolute bottom-10 left-10 w-72 h-72"
        initial={{ rotate: 0, opacity: 0 }}
        animate={{
          rotate: -360,
          opacity: [0.02, 0.05, 0.02]
        }}
        transition={{
          rotate: { duration: 90, repeat: Infinity, ease: "linear" },
          opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <radialGradient id="seedGradient">
              <stop offset="0%" stopColor="rgba(34, 197, 94, 0.2)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.15)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.1)" />
            </radialGradient>
          </defs>
          {[...Array(6)].map((_, i) => {
            const angle = (i * 360) / 6
            const x = 100 + 20 * Math.cos(angle * Math.PI / 180)
            const y = 100 + 20 * Math.sin(angle * Math.PI / 180)
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="20"
                fill="none"
                stroke="url(#seedGradient)"
                strokeWidth="0.5"
                opacity="0.6"
              />
            )
          })}
          <circle
            cx="100"
            cy="100"
            r="20"
            fill="none"
            stroke="url(#seedGradient)"
            strokeWidth="0.5"
            opacity="0.8"
          />
        </svg>
      </motion.div>
    </div>
  )
}