import { Button } from '@/components/ui/button'
import { Sparkles, Phone, MessageCircle, Calendar } from 'lucide-react'
import { openWhatsApp } from '@/lib/whatsapp'

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-indigo-600 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-white/5 rounded-full blur-xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <Sparkles className="w-10 h-10 text-white" />
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto para Sua
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Transformação?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Dê o primeiro passo em direção ao seu despertar espiritual e 
            descoberta do seu verdadeiro propósito de vida
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => openWhatsApp('Olá! Gostaria de agendar uma consulta no UCCAI.')}
            >
              <Calendar className="w-5 h-5 mr-2" />
              Agende sua Consulta
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={() => openWhatsApp('Olá! Gostaria de falar com alguém do UCCAI.')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale Conosco
            </Button>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Atendimento Direto
              </h3>
              <p className="text-white/80 text-sm">
                Fale diretamente com nossos especialistas
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                WhatsApp Business
              </h3>
              <p className="text-white/80 text-sm">
                Tire suas dúvidas pelo WhatsApp
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Assistência Gratuita
              </h3>
              <p className="text-white/80 text-sm">
                Participe das atividades gratuitas
              </p>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="mt-16 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-white/90 text-lg">
              <span className="font-semibold">7 anos</span> transformando vidas em Goiânia • 
              <span className="font-semibold"> 1000+</span> clientes atendidos • 
              <span className="font-semibold"> 98%</span> de satisfação
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-1/4 animate-float">
        <Sparkles className="w-6 h-6 text-white/30" />
      </div>
      <div className="absolute bottom-32 right-1/4 animate-float-delayed">
        <Sparkles className="w-8 h-8 text-white/20" />
      </div>
    </section>
  )
}

export default CTASection
