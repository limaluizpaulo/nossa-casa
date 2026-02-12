# 🚨 LEIA PRIMEIRO - Como fazer o site voltar ao ar

## O que aconteceu?

Investiguei o problema e descobri que:

✅ **O código está perfeito** - O site funciona 100% quando testado localmente  
✅ **As imagens estão todas lá** - Hero image e todas as outras imagens funcionam  
✅ **O build está correto** - Todos os arquivos são gerados corretamente  

❌ **O site não está deployado** - O domínio não está acessível porque o site não está em nenhum servidor

## Solução rápida (5 minutos)

### Passo 1: Fazer o build
```bash
yarn install
yarn build
```

Isso vai criar uma pasta chamada `dist/` com todos os arquivos prontos.

### Passo 2: Fazer o deploy

**Opção mais fácil - Netlify (GRÁTIS):**

1. Acesse https://netlify.com
2. Faça login (pode usar conta do GitHub)
3. Clique em "Add new site" → "Deploy manually"
4. **Arraste a pasta `dist/` inteira** para a área de upload
5. Pronto! Seu site estará no ar em alguns segundos
6. Depois configure o domínio personalizado:
   - Vá em "Domain settings"
   - Clique em "Add custom domain"
   - Digite: `www.nossacasaarteseterapias.com.br`
   - Siga as instruções para configurar o DNS

**Tem hospedagem própria (cPanel)?**

1. Acesse seu cPanel
2. Abra o Gerenciador de Arquivos
3. Vá até a pasta `public_html/`
4. **Delete tudo** que tem lá dentro (faça backup antes!)
5. Faça upload de **TUDO** que está dentro da pasta `dist/`
6. Pronto!

## Precisa de mais detalhes?

Consulte o arquivo **[DEPLOY.md](./DEPLOY.md)** para instruções completas.

## Ainda não funcionou?

Verifique:
- [ ] A pasta `dist/` foi criada com sucesso?
- [ ] Você fez upload de **tudo** que está dentro de `dist/`?
- [ ] O DNS do domínio está apontando para o servidor correto?
- [ ] Já passaram algumas horas desde que você configurou o DNS? (pode levar até 48h)

---

**Qualquer dúvida, abra uma issue no GitHub que eu ajudo!** 🚀
