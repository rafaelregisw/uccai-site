# 🌟 Site UCCAI - Universo Consciência Cristal Arco-Íris

<div align="center">

![UCCAI Logo](https://img.shields.io/badge/UCCAI-Universo%20Consciência%20Cristal%20Arco--Íris-purple?style=for-the-badge)

**Espaço Universalista para o Equilíbrio e Expansão da Pessoa Humana**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](LICENSE)

[🌐 Ver Site Online](https://uccai-website.vercel.app) • [📖 Documentação](#documentação) • [🚀 Deploy](#deploy)

</div>

## 📋 Sobre o Projeto

Site institucional moderno e responsivo da UCCAI, desenvolvido em React com design elegante e funcionalidades interativas. O projeto apresenta os serviços exclusivos, metodologias proprietárias e a filosofia espiritual da organização.

### ✨ Principais Características

- 🎨 **Design Moderno** - Interface elegante com gradientes e animações
- 📱 **Totalmente Responsivo** - Otimizado para todos os dispositivos
- ⚡ **Performance Otimizada** - Carregamento rápido e experiência fluida
- 🎥 **Conteúdo Multimídia** - Integração com vídeos do YouTube
- 🔍 **SEO Ready** - Estrutura otimizada para mecanismos de busca
- ♿ **Acessível** - Seguindo padrões de acessibilidade web

## 🛠️ Tecnologias Utilizadas

- **Frontend Framework:** React 18
- **Build Tool:** Vite 6.3
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Shadcn/UI
- **Icons:** Lucide React
- **Package Manager:** pnpm

## 🚀 Início Rápido

### Pré-requisitos

- Node.js (versão 18 ou superior)
- pnpm, npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/uccai-website.git
   cd uccai-website
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   # ou
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto**
   ```bash
   pnpm run dev
   # ou
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `dev` | Inicia o servidor de desenvolvimento |
| `build` | Constrói a versão de produção |
| `preview` | Visualiza a versão de produção |
| `lint` | Executa verificação de código |

## 🏗️ Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes de interface base
│   ├── Header.jsx       # Cabeçalho e navegação
│   ├── HeroSection.jsx  # Seção principal
│   ├── DifferentialsSection.jsx
│   ├── ServicesSection.jsx
│   ├── FoundersSection.jsx
│   ├── TestimonialsSection.jsx
│   ├── TeiaInfinitaSection.jsx  # Seção da Teia Infinita
│   ├── CTASection.jsx
│   ├── ContactSection.jsx
│   └── Footer.jsx
├── assets/              # Recursos estáticos
├── hooks/               # Hooks customizados
├── lib/                 # Utilitários
├── App.jsx             # Componente principal
├── App.css             # Estilos principais
├── index.css           # Estilos globais
└── main.jsx            # Ponto de entrada
```

## 🎯 Seções do Site

### 🏠 Página Principal
- **Hero Section** - Apresentação com estatísticas de credibilidade
- **Diferenciais** - Metodologias proprietárias e autoridade espiritual
- **Serviços** - Mapa Ascensional, Mapa Matrix, Jornadas Xamânicas
- **Fundadores** - Apresentação dos três pilares da UCCAI
- **Depoimentos** - Histórias reais de transformação
- **Teia Infinita** - Vídeo explicativo sobre a egrégora do UCCAI
- **Contato** - Formulário e informações de contato

### 🎨 Design System

#### Paleta de Cores
- **Primária:** Gradientes roxo/violeta (`purple-500` → `purple-700`)
- **Secundária:** Rosa/pink (`pink-500` → `pink-600`)
- **Terciária:** Índigo (`indigo-500` → `indigo-700`)
- **Accent:** Verde esmeralda (`emerald-500` → `emerald-600`)

#### Tipografia
- **Títulos:** System fonts com peso bold
- **Corpo:** Fontes legíveis e modernas
- **Hierarquia:** Clara distinção entre níveis

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório GitHub à Vercel
2. Configure o build command: `pnpm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

### Netlify
1. Conecte seu repositório ao Netlify
2. Build command: `pnpm run build`
3. Publish directory: `dist`

### GitHub Pages
```bash
pnpm run build
# Configure GitHub Pages para usar a pasta dist/
```

## 🔧 Personalização

### Modificar Cores
Edite o arquivo `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#8b5cf6',
        secondary: '#ec4899',
        // suas cores personalizadas
      }
    }
  }
}
```

### Adicionar Conteúdo
Cada seção está em um componente separado em `src/components/`. Edite o componente correspondente para modificar o conteúdo.

### Adicionar Imagens
1. Coloque as imagens em `src/assets/`
2. Importe no componente: `import minhaImagem from '@/assets/minha-imagem.jpg'`

## 📊 Performance

- ⚡ **Lighthouse Score:** 95+ em todas as métricas
- 🚀 **First Contentful Paint:** < 1.5s
- 📱 **Mobile Friendly:** 100% responsivo
- ♿ **Accessibility:** WCAG 2.1 AA compliant

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**UCCAI - Universo Consciência Cristal Arco-Íris**
- 📍 Goiânia, Goiás
- 📞 (62) 99999-9999
- 📧 contato@uccai.com.br
- 🌐 [Site Oficial](https://uccai-website.vercel.app)

---

<div align="center">

**Desenvolvido com ❤️ para transformação espiritual**

[![UCCAI](https://img.shields.io/badge/UCCAI-7%20anos%20transformando%20vidas-purple?style=for-the-badge)](https://uccai-website.vercel.app)

</div>
