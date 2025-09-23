import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Play, Sparkles, Volume2 } from 'lucide-react'

export const VideoSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-golden-divine" />
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white">
              Mensagem Especial dos Mestres
            </h2>
            <Sparkles className="w-8 h-8 text-golden-divine" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Assista a esta canalização exclusiva com orientações diretas
            da Teia Infinita da Expansão Humana
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden glassmorphism-dark p-2">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-golden-divine rounded-2xl blur-xl opacity-20" />

            {/* Video Wrapper */}
            <div className="relative aspect-[9/16] md:aspect-video bg-gradient-to-br from-violet-900/30 to-purple-900/30 rounded-xl overflow-hidden group">
              {/* Preview Background */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mb-4"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-violet-600 to-golden-divine rounded-full flex items-center justify-center">
                    <Play className="w-12 h-12 text-white ml-2" />
                  </div>
                </motion.div>
                <p className="text-white text-lg font-semibold mb-2">Canalização Exclusiva</p>
                <p className="text-gray-400 text-sm">Clique para assistir no Instagram</p>
              </div>

              {/* Clickable Overlay */}
              <a
                href="https://www.instagram.com/reel/DHG1zpKJf7Z/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 cursor-pointer"
                aria-label="Assistir vídeo no Instagram"
              >
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Instagram Logo */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Video Info */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 text-center"
            >
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-violet-400">
                  <Play className="w-5 h-5" />
                  <span className="text-sm">Canalização ao Vivo</span>
                </div>
                <div className="w-px h-4 bg-white/20" />
                <div className="flex items-center gap-2 text-golden-divine">
                  <Volume2 className="w-5 h-5" />
                  <span className="text-sm">Mensagem Importante</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                Esta mensagem contém códigos de ativação e frequências específicas
                para sua jornada de expansão. Assista com o coração aberto.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Receba mais mensagens e orientações diretamente dos mestres
          </p>
          <motion.a
            href="https://www.instagram.com/expansaoinfinita"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary inline-block"
          >
            Seguir @expansaoinfinita
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}