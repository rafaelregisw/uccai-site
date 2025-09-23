import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getWhatsAppLink } from '../utils/constants'

export const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0)
  const texts = [
    'O Portal dos 500 Mestres Ascensionados Está Aberto',
    'Sua Jornada de Expansão Começa Agora',
    'Conecte-se com Saint Germain e Mãe Maria',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 -z-9">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-transparent to-indigo-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-mystic/5 via-transparent to-transparent" />
      </div>

      {/* Portal Effect Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-golden-divine/10 rounded-full blur-3xl animate-morph" />
          <div className="absolute inset-[10%] bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-full blur-2xl animate-morph animation-delay-200" />
          <div className="absolute inset-[20%] bg-gradient-to-r from-violet-600/5 to-violet-600/5 rounded-full blur-xl animate-morph animation-delay-400" />
        </motion.div>
      </div>

      {/* Sacred Geometry Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="sacred-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill="rgba(255,215,0,0.5)" />
            <path d="M10 0 L20 10 L10 20 L0 10 Z" stroke="rgba(124,77,255,0.3)" strokeWidth="0.1" fill="none" />
          </pattern>
          <rect width="100" height="100" fill="url(#sacred-pattern)" />
        </svg>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {/* Logo UCCAI */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-4 bg-gradient-to-r from-golden-divine/30 to-violet-mystic/30 rounded-lg blur-xl"
            />
            <div className="relative px-8 py-4 bg-gradient-to-br from-violet-900/50 to-purple-900/50 backdrop-blur-xl rounded-lg border border-golden-divine/30">
              <h1 className="text-5xl font-cinzel font-bold">
                <span className="bg-gradient-to-r from-golden-divine to-violet-mystic bg-clip-text text-transparent">UCCAI</span>
              </h1>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Headline */}
        <motion.h1
          key={textIndex}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6"
        >
          <span className="text-white">
            {texts[textIndex]}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Único acesso autorizado no planeta Terra para a sabedoria da{' '}
          <span className="text-golden-divine">Linha Branca dos Seres Ascensionados</span>
        </motion.p>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Gislaine e Alexandre Wahbe • Canais Exclusivos da Teia Infinita da Expansão Humana
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href={getWhatsAppLink('Olá! Vim pelo portal UCCAI e quero atravessar o portal agora! Gostaria de agendar minha primeira sessão.')}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary group inline-block"
          >
            <span className="relative z-10">Atravesse o Portal Agora</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-golden-divine to-violet-mystic rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity"
              initial={false}
            />
          </motion.a>

          <motion.a
            href={getWhatsAppLink('Olá! Gostaria de conhecer mais sobre os 500 Mentores Sagrados do UCCAI.')}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-block"
          >
            Conheça os 500 Mentores
          </motion.a>
        </motion.div>

        {/* Features Row */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          {[
            { number: '500+', label: 'Mestres Ascensionados' },
            { number: '10.000+', label: 'Vidas Transformadas' },
            { number: '30', label: 'Portais Xamânicos' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glassmorphism-dark p-6 rounded-2xl relative overflow-hidden group border border-violet-mystic/10"
            >
              <div className="relative z-10">
                <div className="text-3xl font-bold text-golden-divine mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-violet-mystic/50" />
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-golden-divine rounded-full glow-golden"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}