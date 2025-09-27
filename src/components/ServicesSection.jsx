import { Button } from '@/components/ui/button'
import { Compass, TrendingUp, Mountain, GraduationCap, ArrowRight } from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: <Compass className="w-10 h-10" />,
      title: "Mapa Ascensional",
      subtitle: "Diagnóstico da Alma",
      description: "Processo exclusivo de mentoria e coaching espiritual que mapeia sua jornada de autodescoberta e alinhamento com seu propósito superior.",
      features: ["Diagnóstico quântico personalizado", "Coaching espiritual profundo", "Mapeamento do caminho da alma"],
      gradient: "from-purple-600 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Mapa Matrix",
      subtitle: "Prosperidade Universal",
      description: "A mais poderosa ferramenta de autoconhecimento do planeta, avaliando códigos como grau de fé, gratidão e vivência do perdão.",
      features: ["Assessment de prosperidade", "Códigos de materialização", "Mentoria de abundância"],
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50"
    },
    {
      icon: <Mountain className="w-10 h-10" />,
      title: "Jornadas Xamânicas",
      subtitle: "Estelar Universal",
      description: "Experiências transformacionais exclusivas que empoderam as pessoas para melhores posições de vida através da conexão estelar.",
      features: ["Conexão com guias espirituais", "Cura ancestral", "Empoderamento pessoal"],
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Formação Terapêutica",
      subtitle: "Certificação Própria",
      description: "Cursos de formação com certificação 100% legalizada, capacitando novos terapeutas com nossas metodologias exclusivas.",
      features: ["Certificação legalizada", "Metodologias exclusivas", "Suporte completo"],
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Nossos Serviços Exclusivos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossas metodologias proprietárias desenvolvidas ao longo de 7 anos 
            de experiência em transformação espiritual e desenvolvimento humano
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-white/50`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {service.icon}
              </div>

              {/* Title */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {service.title}
                </h3>
                <p className={`text-lg font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white rounded-xl py-3 font-semibold transition-all duration-300 transform group-hover:scale-105`}
              >
                Saiba Mais
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>

              {/* Decorative Elements */}
              <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-r ${service.gradient} opacity-10 rounded-full blur-xl`}></div>
              <div className={`absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r ${service.gradient} opacity-5 rounded-full blur-lg`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-gray-600 mb-6">
              Oferecemos também uma ampla gama de terapias holísticas tradicionais como 
              Reiki, ThetaHealing, Acupuntura, Reflexologia e muito mais.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold">
              Ver Todos os Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
