import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar você em sua jornada de transformação. 
            Entre em contato conosco e descubra como podemos apoiar seu crescimento espiritual.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Envie sua Mensagem
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="(62) 99999-9999"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Serviço de Interesse
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200">
                  <option value="">Selecione um serviço</option>
                  <option value="mapa-ascensional">Mapa Ascensional</option>
                  <option value="mapa-matrix">Mapa Matrix da Prosperidade</option>
                  <option value="jornadas-xamanicas">Jornadas Xamânicas</option>
                  <option value="formacao">Formação Terapêutica</option>
                  <option value="terapias">Terapias Holísticas</option>
                  <option value="outros">Outros</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Conte-nos um pouco sobre suas necessidades e como podemos ajudar..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Localização</h4>
                    <p className="text-gray-600">Goiânia, Goiás</p>
                    <p className="text-sm text-gray-500">Atendimento presencial e online</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                    <p className="text-gray-600">(62) 99999-9999</p>
                    <p className="text-sm text-gray-500">WhatsApp disponível</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">E-mail</h4>
                    <p className="text-gray-600">contato@uccai.com.br</p>
                    <p className="text-sm text-gray-500">Resposta em até 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-600">Sábado: 9h às 14h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Assistência Gratuita */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Assistência Espiritual Gratuita
              </h3>
              <p className="mb-6 opacity-90">
                Participe das nossas atividades gratuitas de assistência espiritual. 
                Uma oportunidade de conhecer nosso trabalho e receber orientação inicial.
              </p>
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-purple-600 rounded-xl font-semibold"
              >
                Saiba Mais sobre Assistência Gratuita
              </Button>
            </div>

            {/* CNPJ Info */}
            <div className="bg-gray-100 rounded-2xl p-6 text-center">
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">CNPJ:</span> 27.545.818/0001-46
              </p>
              <p className="text-gray-600 text-sm mt-1">
                UNIVERSO INFINITO DE EXPANSAO HUMANA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
