import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Marina Santos',
    role: 'Terapeuta Holística',
    image: '👩‍🦰',
    rating: 5,
    text: 'Após 20 anos buscando em diversas linhas espirituais, finalmente encontrei no UCCAI a profundidade e autenticidade que procurava. A conexão com os mestres através de Gislaine é real, palpável, transformadora.',
    highlight: 'Conexão real e transformadora',
    therapy: 'Reiki Han',
    location: 'São Paulo, SP',
    gradient: 'from-violet-600 to-purple-600'
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    role: 'Empresário',
    image: '👨‍💼',
    rating: 5,
    text: 'As sessões de Amopândrema Universal mudaram completamente minha vida. Fui liberto de correntes que me prendiam há vidas. Hoje sou um novo homem, com propósito e clareza.',
    highlight: 'Libertação completa',
    therapy: 'Amopândrema Universal',
    location: 'Goiânia, GO',
    gradient: 'from-rose-600 to-pink-600'
  },
  {
    id: 3,
    name: 'Ana Paula',
    role: 'Professora de Yoga',
    image: '🧘‍♀️',
    rating: 5,
    text: 'O Reiki Han é incomparável. A energia é diferente, mais potente, mais pura. Meus clientes sentem a diferença imediatamente. Gratidão eterna aos mestres e a Gislaine.',
    highlight: 'Energia incomparável',
    therapy: 'Formação em Reiki Han',
    location: 'Rio de Janeiro, RJ',
    gradient: 'from-indigo-600 to-blue-600'
  },
  {
    id: 4,
    name: 'Roberto Lima',
    role: 'Psicólogo',
    image: '👨‍⚕️',
    rating: 5,
    text: 'O Tear de Luz foi meu renascimento. A medicina da Ayahuasca com Mestra Gi me mostrou quem eu realmente sou. Atravessei portais que nem sabia que existiam em mim.',
    highlight: 'Renascimento espiritual',
    therapy: 'Tear de Luz - Ritual com Ayahuasca',
    location: 'Brasília, DF',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    id: 5,
    name: 'Fernanda Rodrigues',
    role: 'Empresária',
    image: '👩‍💻',
    rating: 5,
    text: 'Os 30 Portais Xamânicos me reconectaram com minha missão. Hoje vivo alinhada com Gaia e meu propósito está claro. Cada portal foi uma iniciação profunda.',
    highlight: 'Missão de vida revelada',
    therapy: 'Jornada dos 30 Portais',
    location: 'Belo Horizonte, MG',
    gradient: 'from-green-600 to-emerald-600'
  },
  {
    id: 6,
    name: 'Dr. Eduardo Silva',
    role: 'Médico Integrativo',
    image: '👨‍⚕️',
    rating: 5,
    text: 'A Radiestesia Akáshica revelou contratos de alma que explicaram todos os meus bloqueios. A precisão das leituras de Gislaine é impressionante. Recomendo a todos meus pacientes.',
    highlight: 'Precisão impressionante',
    therapy: 'Radiestesia Akáshica',
    location: 'Porto Alegre, RS',
    gradient: 'from-indigo-600 to-cyan-600'
  }
]

export const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })


  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
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
            <span className="text-white font-bold">Vidas Transformadas, Almas Libertas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Histórias reais de transformação através das terapias quânticas exclusivas do UCCAI
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="glassmorphism-dark rounded-3xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <Quote className="absolute top-4 left-4 w-12 h-12 text-violet-mystic/20" />
            <Quote className="absolute bottom-4 right-4 w-12 h-12 text-violet-mystic/20 rotate-180" />

            {/* Testimonial Content */}
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-golden-divine fill-golden-divine" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-gray-300 italic mb-8 text-center">
                "{testimonials[activeTestimonial].text}"
              </p>

              {/* Highlight */}
              <div className="text-center mb-8">
                <span className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${testimonials[activeTestimonial].gradient} text-white text-sm font-medium`}>
                  {testimonials[activeTestimonial].highlight}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-4">{testimonials[activeTestimonial].image}</div>
                <h4 className="text-xl font-bold text-white">{testimonials[activeTestimonial].name}</h4>
                <p className="text-gray-400">{testimonials[activeTestimonial].role}</p>
                <p className="text-sm text-gray-500">{testimonials[activeTestimonial].location}</p>
                <p className="text-sm text-violet-400 mt-2">Terapia: {testimonials[activeTestimonial].therapy}</p>
              </div>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeTestimonial
                      ? 'w-8 bg-gradient-to-r from-violet-mystic to-golden-divine'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid of Mini Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ scale: 1.03 }}
              className="glassmorphism-dark p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <h5 className="font-semibold text-white">{testimonial.name}</h5>
                  <p className="text-xs text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-golden-divine fill-golden-divine" />
                ))}
              </div>

              <p className="text-sm text-gray-300 italic line-clamp-3">
                "{testimonial.text}"
              </p>

              <p className="text-xs text-violet-400 mt-3">{testimonial.therapy}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}