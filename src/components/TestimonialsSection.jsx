import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Maria Silva",
      location: "Goiânia, GO",
      service: "Mapa Ascensional",
      rating: 5,
      text: "O Mapa Ascensional transformou completamente minha visão sobre meu propósito de vida. A precisão do diagnóstico quântico me impressionou e o processo de mentoria me guiou para uma nova fase de crescimento espiritual.",
      avatar: "MS"
    },
    {
      name: "João Santos",
      location: "Brasília, DF",
      service: "Jornadas Xamânicas",
      rating: 5,
      text: "As Jornadas Xamânicas Estelar Universal me conectaram com uma força interior que eu nem sabia que existia. Saí empoderado e com uma clareza mental incrível sobre os próximos passos da minha vida.",
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      location: "Goiânia, GO",
      service: "Mapa Matrix da Prosperidade",
      rating: 5,
      text: "O Mapa Matrix da Prosperidade Universal revelou bloqueios que eu carregava há anos. O trabalho com os códigos de materialização mudou minha relação com a abundância de forma profunda e duradoura.",
      avatar: "AC"
    },
    {
      name: "Carlos Oliveira",
      location: "Anápolis, GO",
      service: "Formação Terapêutica",
      rating: 5,
      text: "A formação terapêutica da UCCAI superou todas as minhas expectativas. As metodologias exclusivas e a certificação legalizada me deram a confiança para iniciar minha própria prática como terapeuta.",
      avatar: "CO"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentData = testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Histórias de Transformação
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra como nossos clientes transformaram suas vidas através 
            dos nossos serviços exclusivos e metodologias proprietárias
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-100">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-6 right-6 flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border-purple-200 hover:bg-purple-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border-purple-200 hover:bg-purple-50"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="mt-8">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentData.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-medium">
                "{currentData.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                {/* Avatar */}
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {currentData.avatar}
                </div>
                
                {/* Details */}
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-800">
                    {currentData.name}
                  </h4>
                  <p className="text-gray-600">
                    {currentData.location}
                  </p>
                  <p className="text-sm text-purple-600 font-medium">
                    {currentData.service}
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 opacity-10 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-4 w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-10 rounded-full blur-lg"></div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Taxa de Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-500 mb-2">1000+</div>
              <div className="text-gray-600">Clientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">7</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
