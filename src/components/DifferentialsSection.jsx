import { Sparkles, Crown, Users } from 'lucide-react'

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Metodologias Proprietárias",
      description: "Diagnósticos quânticos exclusivos desenvolvidos pelos nossos pilares, como o Mapa Ascensional e o Mapa Matrix da Prosperidade Universal.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Autoridade Espiritual",
      description: "Direcionados pela Teia Universal/Linha Branca dos Seres Ascensionados, oferecendo uma conexão espiritual autêntica e guiada.",
      gradient: "from-pink-500 to-indigo-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Ecossistema Completo",
      description: "Do conteúdo gratuito à formação profissional certificada, criando um caminho de desenvolvimento contínuo para nossos clientes.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Por que Escolher a UCCAI?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra os diferenciais únicos que fazem da UCCAI o espaço ideal 
            para sua jornada de transformação e expansão espiritual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {item.description}
              </p>

              {/* Decorative Element */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full px-6 py-3 border border-purple-200">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-medium">
              Pronto para experimentar a diferença UCCAI?
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DifferentialsSection
