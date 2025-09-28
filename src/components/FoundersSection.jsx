import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Sparkles, ArrowRight } from 'lucide-react'
import { openWhatsApp } from '@/lib/whatsapp'

const FoundersSection = () => {
  const founders = [
    {
      name: "Gislaine Regis Wahbe",
      role: "Pilar Fundador",
      specialties: ["Terapias Energéticas", "Coaching Espiritual", "Cura Quântica"],
      description: "Especialista em terapias holísticas com profunda conexão espiritual, dedicada ao equilíbrio e expansão da consciência humana.",
      gradient: "from-purple-500 to-pink-500",
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: "Alexandre Wahbe",
      role: "Pilar Fundador & Autor",
      specialties: ["Radiestesia Akáshica", "Alta Frequência Tro Han", "Xamanismo"],
      description: "Autor de três livros sobre medicina vibracional e espiritualidade, criador de metodologias exclusivas de cura e transformação.",
      gradient: "from-indigo-500 to-purple-500",
      icon: <BookOpen className="w-6 h-6" />,
      books: [
        "Alta Frequência Tro Han: Medicina Vibracional + Espiritualidade",
        "A ciência do Rapé Sagrado: Instruções quânticas e avançadas",
        "Radiestesia Akáshica: Chave do Infinito - Poder e Intuição"
      ]
    },
    {
      name: "Noé Eugênio",
      role: "Pilar Fundador",
      specialties: ["Jornadas Xamânicas", "Conexão Estelar", "Mentoria Espiritual"],
      description: "Especialista em jornadas xamânicas e conexões estelares, guiando pessoas em processos profundos de autoconhecimento e empoderamento.",
      gradient: "from-emerald-500 to-teal-500",
      icon: <Sparkles className="w-6 h-6" />
    }
  ]

  return (
    <section id="founders" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Nossos Pilares
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os três fundadores que sustentam a UCCAI, cada um trazendo 
            sua expertise única para criar um ecossistema completo de transformação
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${founder.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Avatar Placeholder */}
              <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${founder.gradient} flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {founder.name.split(' ').map(n => n[0]).join('')}
              </div>

              {/* Name and Role */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {founder.name}
                </h3>
                <div className="flex items-center justify-center space-x-2">
                  <div className={`p-2 rounded-full bg-gradient-to-r ${founder.gradient} text-white`}>
                    {founder.icon}
                  </div>
                  <p className={`text-lg font-medium bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent`}>
                    {founder.role}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {founder.description}
              </p>

              {/* Specialties */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3 text-center">Especialidades</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {founder.specialties.map((specialty, specIndex) => (
                    <span 
                      key={specIndex}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${founder.gradient} text-white`}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Books (for Alexandre) */}
              {founder.books && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 text-center">Livros Publicados</h4>
                  <ul className="space-y-2">
                    {founder.books.map((book, bookIndex) => (
                      <li key={bookIndex} className="text-xs text-gray-600 text-center">
                        • {book}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Decorative Element */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${founder.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 max-w-4xl mx-auto border border-purple-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Corpo de Operadores
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Além dos três pilares fundadores, a UCCAI conta com um corpo especializado de 
              operadores (terapeutas canalizados) que compartilham da mesma missão e 
              compromisso com a transformação espiritual de nossos clientes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <span className="px-4 py-2 bg-white rounded-full text-purple-700 font-medium shadow-sm">
                Terapeutas Canalizados
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-purple-700 font-medium shadow-sm">
                Sintonia Espiritual
              </span>
              <span className="px-4 py-2 bg-white rounded-full text-purple-700 font-medium shadow-sm">
                Missão Compartilhada
              </span>
            </div>
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold"
              onClick={() => openWhatsApp('Olá! Gostaria de conhecer mais sobre a história do UCCAI.')}
            >
              Conheça Nossa História Completa
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoundersSection
