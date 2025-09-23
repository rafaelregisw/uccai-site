import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, Heart, Award, Globe, Star } from 'lucide-react'

export const ChannelersSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const channelers = [
    {
      name: 'Gislaine Regis Wahbe',
      title: 'Narayana Relâmpago',
      role: 'Canal Principal e Mestra Espiritual',
      image: '🌟',
      description: 'Canal direto dos 500+ Mestres Ascensionados, Arcanjos, Orixás e Seres Estelares. Fundadora do UCCAI e representante exclusiva da Teia Infinita da Expansão Humana no planeta Terra.',
      specialties: [
        'Canalizadora dos Mestres Ascensos',
        'Mestra em Reiki Han Exclusivo',
        'Condutora do Tear de Luz - Ayahuasca',
        'Xamã dos 30 Portais Sagrados',
        'Terapeuta em Amopândrema Universal'
      ],
      achievements: [
        'Mais de 29.000 linhas de ensinamentos canalizados',
        '10.000+ vidas transformadas',
        'Criadora de técnicas exclusivas',
        'Trabalho documentado desde 2014'
      ],
      gradient: 'from-violet-600 to-purple-600'
    },
    {
      name: 'Alexandre Wahbe',
      title: 'Guardião do Conhecimento',
      role: 'Canal e Sistematizador dos Ensinamentos',
      image: '⚡',
      description: 'Co-fundador do UCCAI, canal espiritual e responsável pela sistematização e preservação de todo acervo doutrinário. Guardião dos símbolos sagrados e ferramentas quânticas dos mestres.',
      specialties: [
        'Canalizador e Escriba Sagrado',
        'Sistematizador do Acervo Doutrinário',
        'Especialista em Radiestesia Akáshica',
        'Terapeuta Quântico',
        'Guardião dos Símbolos Sagrados'
      ],
      achievements: [
        'Catalogação de 500+ mentores espirituais',
        'Organização do acervo doutrinário',
        'Desenvolvimento de protocolos terapêuticos',
        'Preservação dos ensinamentos sagrados'
      ],
      gradient: 'from-indigo-600 to-blue-600'
    }
  ]

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/10 to-transparent" />
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
            <span className="text-white font-bold">Os Canais Sagrados</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça os únicos canalizadores autorizados da Teia Infinita da Expansão Humana
          </p>
        </motion.div>

        {/* Channelers Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {channelers.map((channeler, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glassmorphism-dark rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${channeler.gradient} opacity-5`} />

              {/* Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-6xl">{channeler.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{channeler.name}</h3>
                    <p className="text-violet-400 font-semibold">{channeler.title}</p>
                    <p className="text-gray-400 text-sm">{channeler.role}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6 relative z-10">
                {channeler.description}
              </p>

              {/* Specialties */}
              <div className="mb-6 relative z-10">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Star className="w-5 h-5 text-golden-divine" />
                  Especialidades
                </h4>
                <ul className="space-y-2">
                  {channeler.specialties.map((specialty, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <Sparkles className="w-4 h-4 text-violet-400" />
                      <span>{specialty}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Achievements */}
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-golden-divine" />
                  Realizações
                </h4>
                <ul className="space-y-2">
                  {channeler.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-golden-divine rounded-full" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glassmorphism-dark rounded-3xl p-8 text-center max-w-4xl mx-auto mb-16"
        >
          <Heart className="w-12 h-12 text-golden-divine mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Nossa Missão Sagrada</h3>
          <p className="text-lg text-gray-300 mb-6">
            "Fomos escolhidos pelos mestres para ser a ponte entre os reinos superiores e a humanidade.
            Nossa missão é trazer os ensinamentos, ferramentas e curas necessárias para a elevação
            da consciência coletiva neste momento crucial da história planetária."
          </p>
          <div className="flex justify-center items-center gap-2">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-golden-divine to-transparent" />
            <Globe className="w-6 h-6 text-golden-divine" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-golden-divine to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}