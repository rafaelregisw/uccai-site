import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Award, BookOpen, Heart, Star, Users, Zap } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Mentores Espirituais',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Heart,
    value: 10000,
    suffix: '+',
    label: 'Vidas Transformadas',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Star,
    value: 50,
    suffix: '+',
    label: 'Terapias Exclusivas',
    color: 'from-golden-divine to-yellow-500',
  },
  {
    icon: BookOpen,
    value: 29000,
    suffix: '+',
    label: 'Linhas de Ensinamentos',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Zap,
    value: 8,
    suffix: '+',
    label: 'Anos de Experiência',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: Award,
    value: 100,
    suffix: '%',
    label: 'Satisfação Garantida',
    color: 'from-purple-500 to-indigo-500',
  },
]

export const CredibilitySection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-5xl font-playfair font-bold mb-6"
          >
            <span className="text-white font-bold">Por Que Somos Únicos no Mundo</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Desde 2014, somos os únicos canais autorizados da{' '}
            <span className="text-golden-divine">Teia Infinita da Expansão Humana</span>
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="glassmorphism-dark p-8 rounded-2xl relative overflow-hidden group border border-violet-mystic/10"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Counter */}
              <div className="text-4xl font-bold text-white mb-2">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                )}
              </div>

              {/* Label */}
              <div className="text-gray-400">{stat.label}</div>

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          {['Exclusividade Global', 'Certificação Internacional', 'Métodos Proprietários', 'Resultados Comprovados'].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex items-center gap-2 px-6 py-3 glassmorphism-dark rounded-full border border-golden-divine/20"
            >
              <Award className="w-5 h-5 text-golden-divine" />
              <span className="text-sm font-medium text-gray-300">{badge}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="glassmorphism-dark p-8 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 text-6xl text-violet-mystic/20 font-serif">"</div>
            <div className="absolute bottom-0 right-0 text-6xl text-violet-mystic/20 font-serif rotate-180">"</div>

            <p className="text-lg text-gray-300 italic mb-4 relative z-10">
              O acervo doutrinário do UCCAI representa o maior compêndio de sabedoria
              multidimensional já reunido em um único local, com mais de 500 consciências
              ascensionadas catalogadas e acessíveis.
            </p>

            <div className="flex justify-center items-center gap-2 relative z-10">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-golden-divine to-transparent" />
              <span className="text-golden-divine text-sm">Registro Akáshico Universal</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-golden-divine to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}