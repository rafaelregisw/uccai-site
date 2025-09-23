# 🌟 UCCAI - Universo Consciência Cristal Arco-Íris

Portal oficial dos 500 Mestres Ascensionados - Único acesso autorizado no planeta Terra para a sabedoria da Linha Branca dos Seres Ascensionados.

## ✨ Features

- 🎨 Design ultra-moderno com glassmorphism e gradientes animados
- 🌠 Sistema de partículas douradas flutuantes
- 🔄 Animações suaves com Framer Motion
- 💎 Cards 3D interativos
- 📱 100% responsivo (mobile-first)
- ⚡ Performance otimizada
- 🎯 CTAs estratégicos para conversão

## 🛠️ Tecnologias

- **Vite** - Build tool ultra-rápida
- **React 18** - Framework principal
- **TypeScript** - Tipagem forte
- **Tailwind CSS** - Estilização utility-first
- **Framer Motion** - Animações avançadas
- **Lucide React** - Ícones modernos
- **Docker** - Containerização
- **Nginx** - Servidor web otimizado

## 🚀 Como Rodar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/uccai-site.git
cd uccai-site
```

2. Instale as dependências:
```bash
npm install
```

3. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra no navegador:
```
http://localhost:5173
```

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

## 🎨 Personalização

### Cores
Edite as cores customizadas no arquivo `tailwind.config.js`:
- Violet Mystic: `#7C4DFF`
- Golden Divine: `#FFD700`
- White Crystal: `#FAFAFA`

### Fontes
As fontes são carregadas via Google Fonts no `index.css`:
- Headlines: Playfair Display
- Body: Inter
- Accent: Cinzel

## 📱 Seções do Site

1. **Hero Section** - Portal dimensional animado
2. **Credibilidade** - Contadores e estatísticas animadas
3. **500 Mentores** - Grid interativo com filtros
4. **Terapias Exclusivas** - Cards 3D com flip animation
5. **CTA Final** - Call-to-action de conversão
6. **Footer** - Links e informações de contato

## 🌐 Deploy

### 🐳 Deploy no Coolify (Recomendado)

#### Configuração Automática via GitHub:

1. **No Coolify:**
   - Adicione nova aplicação
   - Escolha "GitHub Repository"
   - URL: `https://github.com/rafaelregisw/uccai-site`
   - Branch: `main`
   - Build Pack: `Docker`
   - Porto: `80`

2. **Configurações:**
   - Domínio: `uccai.com.br`
   - SSL: Ativar Let's Encrypt
   - Auto Deploy: Ativar para CI/CD

### 🚀 Deploy com Docker

```bash
# Build e run com Docker Compose
docker-compose up -d

# Ou build manual
docker build -t uccai-site .
docker run -p 80:80 uccai-site
```

### Deploy na Vercel
```bash
npx vercel
```

### Deploy na Netlify
```bash
npx netlify deploy
```

## 📄 Licença

© 2025 UCCAI - Todos os direitos reservados

---

Desenvolvido com 💜 e consciência elevada ✨
