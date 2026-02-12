# Guia de Deploy - Nossa Casa

## 🚀 Como fazer deploy do site

Este site é uma Single Page Application (SPA) construída com React e Vite. Pode ser hospedado em qualquer serviço de hospedagem estática.

### Pré-requisitos

1. Node.js instalado (versão 18 ou superior)
2. Yarn instalado (`npm install -g yarn`)

### Passo a passo para deploy

#### 1. Preparar o build de produção

```bash
# Instalar dependências
yarn install

# Criar build de produção
yarn build
```

Isso criará uma pasta `dist/` com todos os arquivos prontos para deploy.

#### 2. Deploy em diferentes plataformas

##### Netlify

**Opção A: Deploy via interface web**
1. Acesse [netlify.com](https://netlify.com)
2. Faça login e clique em "Add new site" → "Deploy manually"
3. Arraste a pasta `dist/` para a área de upload
4. Configure o domínio personalizado: `www.nossacasaarteseterapias.com.br`

**Opção B: Deploy via CLI**
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

**Configuração de domínio personalizado no Netlify:**
1. No painel do Netlify, vá em "Domain settings"
2. Clique em "Add custom domain"
3. Digite: `www.nossacasaarteseterapias.com.br`
4. Configure os DNS conforme instruções do Netlify

##### Vercel

**Deploy via CLI:**
```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

**Configuração de domínio personalizado no Vercel:**
1. No painel do Vercel, vá em "Settings" → "Domains"
2. Adicione: `www.nossacasaarteseterapias.com.br`
3. Configure os DNS conforme instruções do Vercel

##### GitHub Pages

```bash
# Instalar gh-pages
yarn add -D gh-pages

# Adicionar scripts no package.json:
# "predeploy": "yarn build"
# "deploy": "gh-pages -d dist"

# Deploy
yarn deploy
```

**Nota:** Para GitHub Pages, você precisa adicionar `base: '/nome-do-repositorio/'` no `vite.config.js` se o site não estiver no domínio raiz.

##### Hospedagem própria (cPanel, FTP, etc.)

1. Faça o build: `yarn build`
2. Copie todo o conteúdo da pasta `dist/` para o diretório raiz do seu servidor web (geralmente `public_html/` ou `www/`)
3. Configure o servidor para redirecionar todas as rotas para `index.html` (veja configuração do servidor abaixo)

#### 3. Configuração do servidor (para hospedagem própria)

##### Apache (.htaccess)

Crie um arquivo `.htaccess` na pasta raiz do site:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

##### Nginx

Adicione na configuração do server block:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### 📋 Checklist de Deploy

Antes de fazer o deploy, verifique:

- [ ] Build executado com sucesso (`yarn build`)
- [ ] Pasta `dist/` foi gerada
- [ ] Imagens estão presentes em `dist/images/` e `dist/assets/`
- [ ] Arquivo `index.html` está na raiz da pasta `dist/`
- [ ] Domínio configurado no provedor de hospedagem
- [ ] DNS configurado corretamente (pode levar até 48h para propagar)
- [ ] Certificado SSL configurado (HTTPS)

### 🔍 Solução de problemas comuns

#### Site não carrega / Erro 404
- Verifique se o servidor está configurado para redirecionar todas as rotas para `index.html`
- Confirme que o arquivo `_redirects` (Netlify) ou `vercel.json` (Vercel) está presente

#### Imagens não aparecem
- Verifique se a pasta `dist/images/` existe e contém as imagens
- Confirme que as imagens foram copiadas corretamente da pasta `public/`

#### Página em branco
- Abra o console do navegador (F12) para ver erros
- Verifique se todos os arquivos JS e CSS foram carregados corretamente
- Confirme que o path base está configurado corretamente no `vite.config.js`

#### Domínio não resolve
- Verifique as configurações de DNS no seu provedor de domínio
- Aguarde a propagação do DNS (pode levar até 48 horas)
- Use ferramentas como [DNS Checker](https://dnschecker.org) para verificar

### 📞 Suporte

Se precisar de ajuda com o deploy, consulte a documentação dos provedores:
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages](https://pages.github.com)
