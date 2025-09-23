import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, Heart, Star, Zap, Crown } from 'lucide-react'
import { getWhatsAppLink } from '../utils/constants'

const journeySteps = [
  {
    id: 1,
    phase: 'Despertar',
    title: 'Seu Chamado Foi Ouvido',
    description: 'O universo conspira para que você encontre o UCCAI. Este é o momento do reconhecimento de que há algo maior esperando por você.',
    icon: Sparkles,
    color: 'from-violet-500 to-purple-500',
    features: ['Primeiros sinais', 'Inquietação espiritual', 'Busca por respostas'],
    time: 'Agora'
  },
  {
    id: 2,
    phase: 'Conexão',
    title: 'Acesso aos Mentores Exclusivos',
    description: 'Através das canalizações de Gislaine e Alexandre, você se conecta diretamente com seus mentores pessoais entre os 500 seres de luz.',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
    features: ['Primeira sessão', 'Identificação dos mentores', 'Mensagens personalizadas'],
    time: '1º Mês'
  },
  {
    id: 3,
    phase: 'Aprendizado',
    title: 'Terapias e Técnicas Sagradas',
    description: 'Imersão nas terapias exclusivas do UCCAI. Reiki Han, Alta Frequência Tro Han, e técnicas que não existem em nenhum outro lugar.',
    icon: Star,
    color: 'from-golden-divine to-yellow-500',
    features: ['Sessões regulares', 'Práticas diárias', 'Transformação iniciada'],
    time: '2-3 Meses'
  },
  {
    id: 4,
    phase: 'Transformação',
    title: 'Expansão da Consciência',
    description: 'Mudanças profundas começam a se manifestar. Cura de traumas, liberação kármica, ativação de dons espirituais adormecidos.',
    icon: Zap,
    color: 'from-indigo-500 to-blue-500',
    features: ['Libertação completa', 'Novos dons ativados', 'Clareza de propósito'],
    time: '4-6 Meses'
  },
  {
    id: 5,
    phase: 'Maestria',
    title: 'Torne-se um Canal de Luz',
    description: 'Formação completa nas terapias UCCAI. Você se torna um multiplicador da luz, podendo ajudar outros em suas jornadas.',
    icon: Crown,
    color: 'from-purple-500 to-violet-500',
    features: ['Certificação oficial', 'Capacidade de ensinar', 'Missão ativada'],
    time: '6+ Meses'
  }
]

export const JourneyTimeline = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent" />
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
            <span className="text-white font-bold">Sua Jornada de Expansão</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Do despertar à maestria espiritual, cada fase é guiada pelos mestres ascensionados
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-violet-600 via-golden-divine to-violet-600 hidden md:block" />

          {/* Journey Steps */}
          {journeySteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col md:gap-8`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glassmorphism-dark p-6 rounded-2xl relative overflow-hidden group"
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 group-hover:opacity-10 transition-opacity`}
                  />

                  <div className="relative z-10">
                    {/* Phase Label */}
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${step.color} text-white mb-3`}>
                      {step.phase}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">{step.description}</p>

                    {/* Features */}
                    <ul className={`space-y-1 mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {step.features.map((feature, idx) => (
                        <li key={idx} className={`flex items-center gap-2 text-sm text-gray-400 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          <Sparkles className="w-3 h-3 text-violet-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Time Frame */}
                    <div className={`text-golden-divine font-semibold ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      {step.time}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Center Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 order-first md:order-none mb-4 md:mb-0"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} p-4 shadow-lg`}>
                  <step.icon className="w-full h-full text-white" />
                </div>
                {/* Connection dots */}
                {index < journeySteps.length - 1 && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 mb-4 md:hidden">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-violet-600 to-transparent" />
                  </div>
                )}
              </motion.div>

              {/* Empty space for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="glassmorphism-dark p-8 rounded-3xl max-w-2xl mx-auto">
            <Sparkles className="w-12 h-12 text-golden-divine mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Comece Sua Jornada Hoje
            </h3>
            <p className="text-gray-300 mb-8">
              Não adie mais sua transformação. Os mestres estão prontos para guiá-lo
              em cada passo desta jornada sagrada de expansão da consciência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href={getWhatsAppLink('Olá! Quero começar minha jornada de expansão espiritual no UCCAI.')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-block"
              >
                Iniciar Minha Jornada
              </motion.a>
              <motion.a
                href={getWhatsAppLink('Olá! Gostaria de saber mais sobre as fases da jornada espiritual no UCCAI.')}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-block"
              >
                Saber Mais
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}