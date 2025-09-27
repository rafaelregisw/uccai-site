import { Button } from '@/components/ui/button'
import { Play, Sparkles, Users, Heart, Zap } from 'lucide-react'

const TeiaInfinitaSection = () => {
  return (
    <section id="teia-infinita" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              A Teia Infinita da Expansão Humana
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra a história e função da egrégora do UCCAI, uma força espiritual 
            que conecta e potencializa a transformação de todos os envolvidos
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Video Section */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-purple-100 mb-12">
            <div className="aspect-video bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl relative overflow-hidden group cursor-pointer">
              {/* YouTube Video Embed */}
              <iframe
                className="w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/p8muyVFhuq4"
                title="História e Função da Teia Infinita da Expansão Humana (egrégora do UCCAI)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              
              {/* Overlay for styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                História e Função da Teia Infinita da Expansão Humana
              </h3>
              <p className="text-gray-600 mb-4">
                Compreenda a egrégora do UCCAI e como ela atua na transformação espiritual
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <Play className="w-4 h-4 mr-1" />
                  Vídeo Explicativo
                </span>
                <span>•</span>
                <span>Canal Força Maior</span>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - About Teia Infinita */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-indigo-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  O que é a Teia Infinita?
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                A Teia Infinita da Expansão Humana representa a egrégora do UCCAI, 
                uma força espiritual coletiva formada pela união de consciências 
                dedicadas ao crescimento e transformação humana. Esta energia 
                conecta todos os participantes do universo UCCAI, potencializando 
                os resultados das terapias e processos de desenvolvimento.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                  Conexão espiritual coletiva
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                  Potencialização dos resultados terapêuticos
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-3"></div>
                  Suporte energético contínuo
                </div>
              </div>
            </div>

            {/* Right Column - How it Works */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-purple-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Como Funciona?
                </h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Através da participação nas atividades do UCCAI, cada pessoa 
                contribui para o fortalecimento desta egrégora e, simultaneamente, 
                recebe seu apoio energético. É um sistema de retroalimentação 
                espiritual que beneficia toda a comunidade envolvida.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  Participação ativa fortalece a egrégora
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  Benefícios mútuos para toda comunidade
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                  Crescimento espiritual acelerado
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  Benefícios da Conexão com a Teia Infinita
                </h3>
                <p className="text-white/90 max-w-2xl mx-auto">
                  Ao se conectar com a Teia Infinita, você se torna parte de uma 
                  rede de apoio espiritual que potencializa sua jornada de transformação
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Cura Acelerada</h4>
                  <p className="text-white/80 text-sm">
                    Processos de cura e transformação potencializados pela energia coletiva
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Energia Elevada</h4>
                  <p className="text-white/80 text-sm">
                    Manutenção de frequências vibracionais elevadas através da conexão
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Comunidade Espiritual</h4>
                  <p className="text-white/80 text-sm">
                    Pertencimento a uma comunidade dedicada ao crescimento mútuo
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full font-semibold"
                >
                  Conecte-se à Teia Infinita
                </Button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 max-w-2xl mx-auto">
              <p className="text-gray-600 mb-4">
                Quer saber mais sobre como a Teia Infinita pode apoiar sua jornada de transformação?
              </p>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold">
                Entre em Contato Conosco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeiaInfinitaSection
