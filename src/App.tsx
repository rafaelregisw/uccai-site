import { motion } from 'framer-motion'
import { Particles } from './components/Particles'
import { SacredGeometry } from './components/SacredGeometry'
import { HeroSection } from './components/HeroSection'
import { CredibilitySection } from './components/CredibilitySection'
import { JourneyTimeline } from './components/JourneyTimeline'
import { MentorsSection } from './components/MentorsSection'
import { TherapiesSection } from './components/TherapiesSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { VideoSection } from './components/VideoSection'
import { ChannelersSection } from './components/ChannelersSection'
import { MessageSquare, Phone, Instagram, Mail, Heart, ChevronUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import { getWhatsAppLink } from './utils/constants'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen overscroll-contain relative">
      {/* Particles Background */}
      <Particles />

      {/* Sacred Geometry Patterns */}
      <SacredGeometry />

      {/* Subtle Light Overlay */}
      <div className="fixed inset-0 z-[4] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/3 to-transparent" />
      </div>

      {/* Main Content */}
      <main>
        <HeroSection />
        <CredibilitySection />
        <JourneyTimeline />
        <MentorsSection />
        <TherapiesSection />
        <TestimonialsSection />
        <VideoSection />
        <ChannelersSection />

        {/* Simplified CTA Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-violet-900/5 to-transparent" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="glassmorphism-dark p-8 rounded-3xl border border-violet-mystic/20"
            >
              <h2 className="text-2xl md:text-4xl font-playfair font-bold mb-4">
                <span className="text-white font-bold">Pronto para Transformar Sua Vida?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Dê o primeiro passo em direção à sua expansão espiritual.
                Os mestres aguardam por você.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href={getWhatsAppLink('Olá! Estou pronto para transformar minha vida. Gostaria de agendar minha primeira sessão.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-block"
                >
                  Agendar Primeira Sessão
                </motion.a>
                <motion.a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-block"
                >
                  Falar pelo WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/5 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold text-gradient mb-4">UCCAI</h3>
              <p className="text-sm text-gray-400">
                Universo Consciência Cristal Arco-Íris - O único portal autorizado
                dos 500 Mestres Ascensionados.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-violet-400 transition">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-violet-400 transition">Terapias</a></li>
                <li><a href="#" className="hover:text-violet-400 transition">Cursos</a></li>
                <li><a href="#" className="hover:text-violet-400 transition">Contato</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(62) 99647-6174</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contato@uccai.com.br</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.instagram.com/expansaoinfinita"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full glassmorphism-dark flex items-center justify-center hover:bg-violet-600/20 transition border border-violet-mystic/20"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full glassmorphism-dark flex items-center justify-center hover:bg-violet-600/20 transition border border-violet-mystic/20"
                >
                  <MessageSquare className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full glassmorphism-dark flex items-center justify-center hover:bg-violet-600/20 transition border border-violet-mystic/20"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-gray-400">
              © 2025 UCCAI - Universo Consciência Cristal Arco-Íris. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-500 mt-2 flex items-center justify-center gap-1">
              Desenvolvido com <Heart className="w-3 h-3 text-red-500" /> e consciência elevada
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/50 transition-shadow"
      >
        <MessageSquare className="w-7 h-7 text-white" />
      </motion.a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 glassmorphism rounded-full flex items-center justify-center hover:bg-violet-600/20 transition"
        >
          <ChevronUp className="w-6 h-6 text-violet-400" />
        </motion.button>
      )}
    </div>
  )
}

export default App
