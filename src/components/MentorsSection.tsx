import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Sparkles, Star, Heart, Sun, Moon } from 'lucide-react'
import { getWhatsAppLink } from '../utils/constants'

const mentorCategories = [
  { id: 'all', name: 'Todos', icon: Sparkles, color: 'from-violet-500 to-purple-500' },
  { id: 'ascended', name: 'Mestres Ascensos', icon: Star, color: 'from-golden-divine to-yellow-500' },
  { id: 'archangels', name: 'Arcanjos', icon: Sun, color: 'from-blue-500 to-cyan-500' },
  { id: 'orixas', name: 'Orixás', icon: Heart, color: 'from-green-500 to-emerald-500' },
  { id: 'stellar', name: 'Seres Estelares', icon: Moon, color: 'from-indigo-500 to-purple-500' },
]

const mentors = [
  { id: 1, name: 'Saint Germain', category: 'ascended', specialty: 'Chama Violeta', image: '🔮' },
  { id: 2, name: 'Mãe Maria Benedita', category: 'ascended', specialty: 'Amor Incondicional', image: '💖' },
  { id: 3, name: 'Jesus (Sananda)', category: 'ascended', specialty: 'Cristificação', image: '✨' },
  { id: 4, name: 'Mestre El Morya', category: 'ascended', specialty: 'Vontade Divina', image: '⚡' },
  { id: 5, name: 'Arcanjo Miguel', category: 'archangels', specialty: 'Proteção', image: '🛡️' },
  { id: 6, name: 'Arcanjo Gabriel', category: 'archangels', specialty: 'Anunciação', image: '📯' },
  { id: 7, name: 'Arcanjo Rafael', category: 'archangels', specialty: 'Cura', image: '🌿' },
  { id: 8, name: 'Oxalá', category: 'orixas', specialty: 'Paz e Criação', image: '☮️' },
  { id: 9, name: 'Iemanjá', category: 'orixas', specialty: 'Águas e Maternidade', image: '🌊' },
  { id: 10, name: 'Oxum', category: 'orixas', specialty: 'Amor e Prosperidade', image: '💛' },
  { id: 11, name: 'Ashtar Sheran', category: 'stellar', specialty: 'Comando Estelar', image: '🚀' },
  { id: 12, name: 'Kuthumi', category: 'ascended', specialty: 'Sabedoria', image: '📚' },
]

export const MentorsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredMentor, setHoveredMentor] = useState<number | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const filteredMentors = selectedCategory === 'all'
    ? mentors
    : mentors.filter(m => m.category === selectedCategory)

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(60deg, #7C4DFF 0, #7C4DFF 1px, transparent 1px, transparent 40px),
                           repeating-linear-gradient(-60deg, #FFD700 0, #FFD700 1px, transparent 1px, transparent 40px)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-6">
            <span className="text-white font-bold">Os 500 Mentores Sagrados</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conecte-se com mestres ascensos, arcanjos, orixás e seres estelares através do
            único portal autorizado no planeta Terra
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {mentorCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r ' + category.color + ' text-white'
                  : 'glassmorphism hover:bg-white/10'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Mentors Grid - Hexagonal Style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMentors.map((mentor, index) => (
              <motion.div
                key={mentor.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                onHoverStart={() => setHoveredMentor(mentor.id)}
                onHoverEnd={() => setHoveredMentor(null)}
                className="relative group"
              >
                {/* Hexagon Card */}
                <div className="hexagon glassmorphism-dark p-8 flex flex-col items-center justify-center text-center h-48 relative overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredMentor === mentor.id ? 0.2 : 0 }}
                    className={`absolute inset-0 bg-gradient-to-br ${
                      mentorCategories.find(c => c.id === mentor.category)?.color
                    }`}
                  />

                  {/* Mentor Icon/Emoji */}
                  <motion.div
                    animate={{
                      rotate: hoveredMentor === mentor.id ? 360 : 0,
                      scale: hoveredMentor === mentor.id ? 1.2 : 1
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl mb-3 relative z-10"
                  >
                    {mentor.image}
                  </motion.div>

                  {/* Mentor Name */}
                  <h3 className="font-semibold text-white mb-1 relative z-10">
                    {mentor.name}
                  </h3>

                  {/* Specialty */}
                  <p className="text-xs text-gray-400 relative z-10">
                    {mentor.specialty}
                  </p>

                  {/* Hover Glow Effect Only */}
                  <AnimatePresence>
                    {hoveredMentor === mentor.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 glassmorphism-dark rounded-full"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href={getWhatsAppLink('Olá! Gostaria de conhecer mais sobre os 500 Mentores Sagrados e como me conectar com eles.')}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block"
          >
            Conhecer Todos os 500 Mentores
          </motion.a>
        </motion.div>

        {/* Special Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <div className="glassmorphism-dark p-8 rounded-2xl">
            <Sparkles className="w-12 h-12 text-golden-divine mx-auto mb-4" />
            <p className="text-lg text-gray-300">
              Cada mentor traz ensinamentos únicos e ferramentas sagradas específicas.
              Através das canalizações de Gislaine e Alexandre Wahbe, você terá acesso
              direto a mensagens personalizadas para sua jornada espiritual.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}