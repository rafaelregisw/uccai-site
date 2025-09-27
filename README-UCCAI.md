# Site UCCAI - Instruções de Instalação e Uso

## Sobre o Projeto

Este é o site completo da UCCAI (Universo Consciência Cristal Arco-Íris), desenvolvido em React com design moderno e responsivo. O site inclui todas as seções principais da organização, incluindo a nova seção sobre a Teia Infinita da Expansão Humana com vídeo integrado.

## Arquivos Disponíveis

### 1. `uccai-website-fonte.tar.gz` (2.9MB) - **RECOMENDADO**
Contém apenas os arquivos fonte do projeto, sem as dependências (node_modules). Este é o arquivo ideal para download e desenvolvimento.

### 2. `uccai-website-completo.tar.gz` (71MB)
Contém o projeto completo incluindo todas as dependências instaladas.

## Instalação e Configuração

### Pré-requisitos
- Node.js (versão 18 ou superior)
- pnpm, npm ou yarn

### Passos para Instalação

1. **Extrair o arquivo**
   ```bash
   tar -xzf uccai-website-fonte.tar.gz
   cd uccai-website
   ```

2. **Instalar dependências**
   ```bash
   # Usando pnpm (recomendado)
   pnpm install
   
   # Ou usando npm
   npm install
   
   # Ou usando yarn
   yarn install
   ```

3. **Executar em modo desenvolvimento**
   ```bash
   # Usando pnpm
   pnpm run dev
   
   # Ou usando npm
   npm run dev
   
   # Ou usando yarn
   yarn dev
   ```

4. **Acessar o site**
   Abra seu navegador em `http://localhost:5173`

### Comandos Disponíveis

- `pnpm run dev` - Inicia servidor de desenvolvimento
- `pnpm run build` - Constrói versão de produção
- `pnpm run preview` - Visualiza versão de produção localmente
- `pnpm run lint` - Executa verificação de código

## Estrutura do Projeto

```
uccai-website/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e recursos
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes de interface
│   │   ├── Header.jsx    # Cabeçalho e navegação
│   │   ├── HeroSection.jsx
│   │   ├── DifferentialsSection.jsx
│   │   ├── ServicesSection.jsx
│   │   ├── FoundersSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   ├── TeiaInfinitaSection.jsx  # NOVA SEÇÃO
│   │   ├── CTASection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── hooks/             # Hooks customizados
│   ├── lib/              # Utilitários
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos principais
│   ├── index.css         # Estilos globais
│   └── main.jsx          # Ponto de entrada
├── dist/                  # Versão construída (após build)
├── package.json          # Dependências e scripts
├── vite.config.js        # Configuração do Vite
└── tailwind.config.js    # Configuração do Tailwind
```

## Seções do Site

1. **Header** - Navegação principal com menu responsivo
2. **Hero Section** - Apresentação principal com estatísticas
3. **Diferenciais** - Por que escolher a UCCAI
4. **Serviços** - Metodologias proprietárias e serviços
5. **Fundadores** - Apresentação dos três pilares
6. **Depoimentos** - Histórias de transformação
7. **Teia Infinita** - Vídeo e explicação da egrégora (NOVA)
8. **CTA Principal** - Chamada para ação
9. **Contato** - Formulário e informações de contato
10. **Footer** - Informações finais e links

## Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool moderna
- **Tailwind CSS** - Framework CSS utilitário
- **Shadcn/UI** - Componentes de interface
- **Lucide React** - Biblioteca de ícones
- **PostCSS** - Processamento CSS

## Personalização

### Cores e Temas
As cores principais estão definidas no `tailwind.config.js` e podem ser facilmente modificadas:
- Roxo/Violeta: `purple-500` a `purple-700`
- Rosa/Pink: `pink-500` a `pink-600`
- Índigo: `indigo-500` a `indigo-700`

### Conteúdo
Todo o conteúdo está nos componentes individuais em `src/components/`. Cada seção pode ser editada independentemente.

### Imagens
Adicione imagens na pasta `src/assets/` e importe nos componentes conforme necessário.

## Deploy

### Build de Produção
```bash
pnpm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Hospedagem
O site pode ser hospedado em qualquer serviço de hospedagem estática:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Qualquer servidor web

## Suporte e Manutenção

### Atualizações de Dependências
```bash
pnpm update
```

### Verificação de Problemas
```bash
pnpm run lint
```

## Funcionalidades Especiais

### Vídeo da Teia Infinita
- Integração direta com YouTube
- Player responsivo
- Seção explicativa completa

### Design Responsivo
- Mobile-first approach
- Breakpoints otimizados
- Menu hamburger para mobile

### Animações
- Transições suaves
- Efeitos hover
- Gradientes animados

### SEO Ready
- Estrutura HTML semântica
- Meta tags preparadas
- Performance otimizada

## Contato para Suporte

Para dúvidas sobre o desenvolvimento ou personalização do site, consulte a documentação do React e Tailwind CSS, ou entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ para a UCCAI**
*Universo Consciência Cristal Arco-Íris*
