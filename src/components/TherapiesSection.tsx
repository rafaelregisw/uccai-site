import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Heart, Star, Sparkles, TreePine, Moon, Sun, Wind, Clock, MapPin } from 'lucide-react'
import { getWhatsAppLink } from '../utils/constants'

const therapies = [
  {
    id: 1,
    title: 'Reiki Han & Alta Frequência Tro Han',
    icon: Zap,
    description: 'Técnica exclusiva canalizada pelos mestres da Linha Branca com símbolos sagrados únicos no mundo.',
    features: ['Limpeza Profunda', 'Ativação dos 13 Chakras', 'Expansão da Aura', 'Cura Multidimensional'],
    price: 'R$ 297',
    duration: '60-90 minutos',
    modality: 'Presencial ou Online',
    benefits: 'Alívio de dores físicas e emocionais, desbloqueio energético, elevação vibracional',
    highlight: true,
    gradient: 'from-violet-600 to-purple-600'
  },
  {
    id: 2,
    title: 'Jornada dos 30 Portais',
    icon: TreePine,
    description: 'Caminho sagrado de reconexão com sua verdade interior através dos portais xamânicos da alma.',
    features: ['30 Portais Iniciáticos', 'Conexão com Gaia', 'Sabedoria Ancestral', 'Missão de Vida'],
    price: 'R$ 497',
    duration: '3 meses de jornada',
    modality: 'Online + Presencial',
    benefits: 'Cura ancestral, ativação da missão de alma, reconexão com elementos da natureza',
    highlight: false,
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    id: 3,
    title: 'Tear de Luz - Ayahuasca',
    icon: Moon,
    description: 'Ritual espiritual uccalino conduzido por Mestra Gi com a medicina sagrada da floresta.',
    features: ['6-12 Horas de Ritual', 'Canalizações ao Vivo', 'Rapé Sagrado', 'Integração Completa'],
    price: 'R$ 200',
    duration: 'Ritual noturno completo',
    modality: 'Exclusivamente presencial',
    benefits: 'Transformação profunda, limpeza de traumas, expansão de consciência',
    highlight: true,
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 4,
    title: 'Radiestesia Akáshica',
    icon: Star,
    description: 'Leitura dos registros akáshicos e mesa radiônica quântica para alinhamento multidimensional.',
    features: ['Registros Akáshicos', 'Mesa Radiônica', 'Vidas Passadas', 'Contratos de Alma'],
    price: 'R$ 397',
    duration: '90-120 minutos',
    modality: 'Presencial ou Online',
    benefits: 'Compreensão kármica, liberação de padrões, alinhamento com propósito',
    highlight: false,
    gradient: 'from-indigo-600 to-blue-600'
  },
  {
    id: 5,
    title: 'Amopândrema Universal',
    icon: Heart,
    description: 'Sistema exclusivo UCCAI de apometria avançada com tecnologia espiritual multidimensional.',
    features: ['Desobsessão Completa', 'Resgate de Fragmentos', 'Limpeza de Implantes', 'Cura do Umbral'],
    price: 'R$ 447',
    duration: '2-3 horas',
    modality: 'Presencial recomendado',
    benefits: 'Libertação de obsessores, fechamento de portais negativos, proteção permanente',
    highlight: false,
    gradient: 'from-rose-600 to-pink-600'
  },
  {
    id: 6,
    title: 'Formação em Terapias Quânticas',
    icon: Sun,
    description: 'Certificação internacional em Reiki Han e Alta Frequência Tro Han - técnicas exclusivas.',
    features: ['Certificação Oficial', 'Material Didático', 'Mentoria Vitalícia', 'Iniciações Sagradas'],
    price: 'R$ 2.997',
    duration: '6 meses de formação',
    modality: 'Híbrido (online + presencial)',
    benefits: 'Torne-se terapeuta certificado, atenda com técnicas exclusivas',
    highlight: false,
    gradient: 'from-yellow-600 to-orange-600'
  }
]

export const TherapiesSection = () => {
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
            <span className="text-white font-bold">Terapias Quânticas Exclusivas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Técnicas únicas no mundo, canalizadas diretamente dos mestres ascensionados
            para sua transformação completa
          </p>
        </motion.div>

        {/* Therapies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapies.map((therapy, index) => (
            <motion.div
              key={therapy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glassmorphism-dark rounded-2xl p-6 relative overflow-hidden group border border-violet-mystic/10
                ${therapy.highlight ? 'ring-1 ring-golden-divine/30 border-golden-divine/20' : ''} flex flex-col h-full`}
            >
              {/* Highlight Badge */}
              {therapy.highlight && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-golden-divine to-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                  DESTAQUE
                </div>
              )}

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${therapy.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${therapy.gradient} mb-4 self-start`}
              >
                <therapy.icon className="w-6 h-6 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2">{therapy.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">{therapy.description}</p>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                <div className="flex items-start gap-1">
                  <Clock className="w-3 h-3 text-violet-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-500">Duração</p>
                    <p className="text-white">{therapy.duration}</p>
                  </div>
                </div>
                <div className="flex items-start gap-1">
                  <MapPin className="w-3 h-3 text-violet-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-500">Modalidade</p>
                    <p className="text-white">{therapy.modality}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4 flex-grow">
                <p className="text-gray-500 text-xs mb-2">Inclui:</p>
                <ul className="space-y-1">
                  {therapy.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-1 text-xs text-gray-300">
                      <Sparkles className="w-3 h-3 text-golden-divine flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <p className="text-xs text-gray-400 italic mb-4 line-clamp-2">
                {therapy.benefits}
              </p>

              {/* CTA */}
              <div className="mt-auto">
                <motion.a
                  href={getWhatsAppLink(`Olá! Tenho interesse na terapia ${therapy.title}. Gostaria de mais informações.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary text-center text-sm py-3"
                >
                  Agendar pelo WhatsApp
                </motion.a>
              </div>

              {/* Shimmer Effect on Hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism-dark p-8 rounded-2xl max-w-2xl mx-auto">
            <Wind className="w-12 h-12 text-golden-divine mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Não sabe qual terapia escolher?
            </h3>
            <p className="text-gray-300 mb-6">
              Agende uma consulta de orientação gratuita e descubra qual caminho
              de cura é ideal para sua jornada espiritual
            </p>
            <motion.a
              href={getWhatsAppLink('Olá! Não sei qual terapia escolher. Gostaria de uma consulta de orientação gratuita.')}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-block"
            >
              Consulta de Orientação Gratuita
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}