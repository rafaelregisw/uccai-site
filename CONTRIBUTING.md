# Contribuindo para o Site UCCAI

Obrigado por seu interesse em contribuir para o site da UCCAI! Este documento fornece diretrizes para contribuições.

## Como Contribuir

### 1. Fork e Clone
```bash
# Fork o repositório no GitHub
# Clone seu fork
git clone https://github.com/seu-usuario/uccai-website.git
cd uccai-website
```

### 2. Configuração do Ambiente
```bash
# Instale as dependências
pnpm install

# Execute o projeto
pnpm run dev
```

### 3. Criando uma Branch
```bash
# Crie uma branch para sua feature/correção
git checkout -b feature/nome-da-feature
# ou
git checkout -b fix/nome-da-correcao
```

### 4. Fazendo Mudanças

#### Estrutura de Commits
Use mensagens de commit claras e descritivas:
```bash
git commit -m "feat: adiciona nova seção de depoimentos"
git commit -m "fix: corrige responsividade do menu mobile"
git commit -m "docs: atualiza README com novas instruções"
```

#### Padrões de Código
- Use componentes funcionais React
- Siga as convenções do Tailwind CSS
- Mantenha componentes pequenos e reutilizáveis
- Adicione comentários quando necessário

### 5. Testando
```bash
# Verifique se o build funciona
pnpm run build

# Execute o linting
pnpm run lint
```

### 6. Enviando Pull Request
1. Push sua branch para seu fork
2. Abra um Pull Request no repositório original
3. Descreva suas mudanças claramente
4. Aguarde a revisão

## Tipos de Contribuições

### 🐛 Correções de Bugs
- Relate bugs através de issues
- Inclua passos para reproduzir
- Forneça screenshots se aplicável

### ✨ Novas Features
- Discuta grandes mudanças em issues primeiro
- Mantenha features focadas e pequenas
- Adicione documentação quando necessário

### 📚 Documentação
- Melhore README, comentários no código
- Adicione exemplos de uso
- Corrija erros de digitação

### 🎨 Melhorias de Design
- Mantenha consistência com o design system
- Teste em diferentes dispositivos
- Considere acessibilidade

## Diretrizes de Código

### Estrutura de Componentes
```jsx
// Imports
import { useState } from 'react'
import { Button } from '@/components/ui/button'

// Componente
const MeuComponente = () => {
  // Estados e hooks
  const [estado, setEstado] = useState(false)
  
  // Funções
  const handleClick = () => {
    setEstado(!estado)
  }
  
  // Render
  return (
    <div className="container mx-auto">
      <Button onClick={handleClick}>
        Clique aqui
      </Button>
    </div>
  )
}

export default MeuComponente
```

### Convenções CSS
- Use classes do Tailwind CSS
- Prefira utility classes a CSS customizado
- Use responsive design (mobile-first)
- Mantenha consistência nas cores e espaçamentos

### Acessibilidade
- Use elementos semânticos HTML
- Adicione alt text em imagens
- Garanta contraste adequado
- Teste navegação por teclado

## Processo de Revisão

### O que Verificamos
- ✅ Código funciona corretamente
- ✅ Segue padrões estabelecidos
- ✅ Não quebra funcionalidades existentes
- ✅ É responsivo e acessível
- ✅ Tem boa performance

### Tempo de Resposta
- Issues: 1-3 dias úteis
- Pull Requests: 2-5 dias úteis
- Revisões: 1-2 dias úteis

## Recursos Úteis

### Documentação
- [React](https://reactjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite](https://vitejs.dev/guide)
- [Shadcn/UI](https://ui.shadcn.com)

### Ferramentas
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

## Código de Conduta

### Nossos Valores
- 🤝 Respeito mútuo
- 🌟 Colaboração construtiva
- 📚 Aprendizado contínuo
- 🎯 Foco na qualidade

### Comportamento Esperado
- Seja respeitoso e inclusivo
- Forneça feedback construtivo
- Ajude outros contribuidores
- Mantenha discussões focadas no projeto

## Dúvidas?

Se tiver dúvidas sobre como contribuir:
1. Verifique a documentação existente
2. Procure em issues abertas
3. Abra uma nova issue com sua pergunta
4. Entre em contato com os mantenedores

---

**Obrigado por contribuir para o crescimento espiritual através da tecnologia! 🌟**
