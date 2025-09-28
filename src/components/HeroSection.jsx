import { Button } from '@/components/ui/button'
import { Sparkles, Star, Heart, Zap } from 'lucide-react'
import { openWhatsApp } from '@/lib/whatsapp'

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <Sparkles className="w-8 h-8 text-purple-300 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Star className="w-6 h-6 text-pink-300 opacity-60" />
        </div>
        <div className="absolute bottom-40 left-20 animate-float">
          <Heart className="w-7 h-7 text-indigo-300 opacity-60" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <Zap className="w-8 h-8 text-purple-300 opacity-60" />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 blur-3xl animate-pulse-delayed"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-purple-200">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">7 anos transformando vidas</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent">
              Universo Consciência
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Cristal Arco-Íris
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Espaço Universalista para o <span className="font-semibold text-purple-600">Equilíbrio</span> e 
            <span className="font-semibold text-pink-500"> Expansão</span> da Pessoa Humana
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Transforme sua vida através de terapias holísticas exclusivas e diagnósticos quânticos 
            direcionados pela Teia Universal dos Seres Ascensionados
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => openWhatsApp('Olá! Gostaria de descobrir meu Mapa Ascensional com o UCCAI.')}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Descubra Seu Mapa Ascensional
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => openWhatsApp('Olá! Gostaria de conhecer os serviços do UCCAI.')}
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">7+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">1000+</div>
              <div className="text-gray-600">Vidas Transformadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">3</div>
              <div className="text-gray-600">Pilares Fundadores</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
