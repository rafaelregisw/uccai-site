import { Sparkles, MapPin, Phone, Mail, Facebook, Youtube, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    "Mapa Ascensional",
    "Mapa Matrix da Prosperidade",
    "Jornadas Xamânicas",
    "Formação Terapêutica",
    "Reiki",
    "ThetaHealing"
  ]

  const quickLinks = [
    { label: "Sobre Nós", href: "#about" },
    { label: "Nossos Serviços", href: "#services" },
    { label: "Fundadores", href: "#founders" },
    { label: "Cursos", href: "#courses" },
    { label: "Contato", href: "#contact" },
    { label: "Blog", href: "#blog" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  UCCAI
                </span>
                <span className="text-xs text-gray-400">
                  Universo Consciência Cristal Arco-Íris
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Espaço Universalista dedicado ao equilíbrio e expansão da pessoa humana 
              através de terapias holísticas e diagnósticos quânticos exclusivos.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">Goiânia, GO</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">(62) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-gray-300">contato@uccai.com.br</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Nossos Serviços
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Conecte-se Conosco
            </h3>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter */}
            <div>
              <p className="text-gray-300 mb-4">
                Receba conteúdos exclusivos sobre espiritualidade e bem-estar
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-purple-500 text-white"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-r-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-200">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} UCCAI - Universo Consciência Cristal Arco-Íris. Todos os direitos reservados.
            </div>
            
            <div className="text-gray-400 text-sm">
              <span className="font-medium">CNPJ:</span> 27.545.818/0001-46
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
