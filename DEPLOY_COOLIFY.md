# 🚀 DEPLOY NO COOLIFY - INSTRUÇÕES PASSO A PASSO

## ✅ STATUS: PRONTO PARA DEPLOY!

O projeto já está no GitHub: https://github.com/rafaelregisw/uccai-site

## 📋 PASSO A PASSO NO COOLIFY

### 1️⃣ CRIAR NOVA APLICAÇÃO
1. Acesse seu painel do Coolify
2. Clique em "New Application"
3. Escolha "Public Repository"

### 2️⃣ CONFIGURAÇÃO DO REPOSITÓRIO
```
Repository URL: https://github.com/rafaelregisw/uccai-site
Branch: main
Build Pack: Dockerfile
```

### 3️⃣ CONFIGURAÇÕES DE BUILD
```
Dockerfile Path: /Dockerfile
Build Context: /
Port: 80
```

### 4️⃣ CONFIGURAÇÕES DE DOMÍNIO
```
Domain: uccai.com.br (ou seu domínio)
WWW Redirect: Ativar (se desejar)
Force HTTPS: Ativar
```

### 5️⃣ VARIÁVEIS DE AMBIENTE
**Não precisa de variáveis de ambiente!**
Tudo já está configurado no código.

### 6️⃣ CONFIGURAÇÕES AVANÇADAS
```yaml
Health Check Path: /
Health Check Interval: 30s
Restart Policy: Unless Stopped
Resources:
  - CPU: 0.5
  - Memory: 512MB
```

### 7️⃣ SSL/HTTPS
- Ativar "Let's Encrypt SSL"
- Email para notificações SSL

### 8️⃣ AUTO DEPLOY
- Ativar "Auto Deploy on Push"
- Isso criará um webhook no GitHub automaticamente

## 🎯 APÓS O DEPLOY

### Verificar se está funcionando:
1. Acesse: https://uccai.com.br
2. Teste o botão do WhatsApp
3. Verifique se as animações estão suaves
4. Teste em mobile

### Monitoramento:
- Health Check configurado no Dockerfile
- Logs disponíveis no painel do Coolify
- Nginx otimizado para performance

## 🔧 TROUBLESHOOTING

### Se der erro de build:
```bash
# Verifique se o Dockerfile está correto
# Porto deve ser 80
# nginx.conf está incluído no repo
```

### Se o site não carregar:
```bash
# Verifique o health check
# Confirme que o porto é 80
# Check os logs no Coolify
```

## 📊 ESPECIFICAÇÕES TÉCNICAS

- **Imagem Base:** nginx:alpine (super leve)
- **Tamanho da Imagem:** ~25MB
- **Build Time:** < 2 minutos
- **Memória Necessária:** 256-512MB
- **CPU:** 0.25-0.5 core

## ✨ FEATURES DO DEPLOY

✅ Multi-stage build otimizado
✅ Nginx com cache e gzip
✅ Health check automático
✅ SSL/HTTPS com Let's Encrypt
✅ Auto deploy no push
✅ Zero downtime deploy
✅ Rollback automático se falhar

## 🎉 PRONTO!

Seu site UCCAI estará no ar em menos de 5 minutos!

URL Final: https://uccai.com.br

---

**Suporte WhatsApp:** +55 62 99647-6174
**Instagram:** @expansaoinfinita