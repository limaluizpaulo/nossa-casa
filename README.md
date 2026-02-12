# Nossa Casa - Centro Cultural

Site institucional do centro cultural Nossa Casa, desenvolvido em React com React Router para navegação multi-página.

## 🏛️ Sobre o Projeto

A Nossa Casa é um centro cultural independente localizado em Guarulhos-SP, dedicado à arte, educação e transformação social comunitária. Este é o site institucional que apresenta todas as atividades, eventos e formas de participação.

## 🎨 Design e Acessibilidade

### Layout
- **Arejado e modular**: Seções bem separadas por espaço em branco generoso
- **Hierarquia clara**: Títulos grandes, subtítulos bem definidos, corpo confortável
- **Sem poluição visual**: Foco no conteúdo, sem molduras pesadas

### Estilo
- **Calor humano + institucional**: Editorial, confiável mas acolhedor
- **Fotos grandes e autênticas**: Imagens representativas das atividades
- **Ícones simples**: Elementos visuais limpos e funcionais

### Acessibilidade
- **Contraste AA/AAA** em CTAs e navegação
- **Foco visível** em todos os elementos interativos
- **Skip-link** para navegação por teclado
- **Textos alternativos descritivos** em todas as imagens
- **Estrutura semântica** com ARIA labels apropriados
- **Redução de movimento** para usuários sensíveis

## 🚀 Como executar

```bash
# Instalar dependências
yarn install

# Executar em modo de desenvolvimento
yarn dev

# Build para produção
yarn build

# Preview da build de produção
yarn preview
```

## 📦 Deploy

Para fazer deploy do site em produção, consulte o arquivo [DEPLOY.md](./DEPLOY.md) que contém instruções detalhadas para:
- Netlify
- Vercel
- GitHub Pages
- Hospedagem própria (cPanel, FTP, Apache, Nginx)

**Importante:** O projeto já inclui arquivos de configuração para diferentes plataformas:
- `public/_redirects` - Para Netlify
- `vercel.json` - Para Vercel
- `public/.htaccess` - Para servidores Apache

## 📁 Estrutura do projeto

```
src/
├── components/              # Componentes React reutilizáveis
│   ├── Header.jsx          # Navegação principal
│   ├── Footer.jsx          # Rodapé do site
│   ├── Button.jsx          # Componente de botão
│   ├── Card.jsx            # Componente de card
│   ├── Hero.jsx            # Seção hero
│   ├── HeroNew.jsx         # Nova versão do hero
│   ├── About.jsx           # Seção sobre
│   ├── QuemSomos.jsx       # Seção quem somos
│   ├── Programs.jsx        # Grade de programas
│   ├── OficinasVivencias.jsx # Oficinas e vivências
│   ├── Agenda.jsx          # Componente de agenda
│   ├── AluguelEspaco.jsx   # Aluguel de espaços
│   ├── Loja.jsx            # Loja solidária
│   ├── Doe.jsx             # Doações
│   ├── Voluntarie.jsx      # Voluntariado
│   ├── FaciliteOficina.jsx # Facilitar oficinas
│   ├── Blog.jsx            # Blog/notícias
│   ├── Transparencia.jsx   # Transparência
│   ├── Gallery.jsx         # Galeria de imagens
│   ├── CreateSection.jsx   # Como participar
│   ├── FAQ.jsx             # Perguntas frequentes
│   ├── Contact.jsx         # Contato
│   └── Contato.jsx         # Formulário de contato
├── pages/                  # Páginas da aplicação
│   ├── Home.jsx           # Página inicial
│   ├── Sobre.jsx          # Página sobre
│   ├── AgendaPage.jsx     # Página da agenda
│   ├── OficinasPage.jsx   # Página de oficinas
│   ├── AluguelPage.jsx    # Página de aluguel
│   ├── LojaPage.jsx       # Página da loja
│   ├── DoePage.jsx        # Página de doações
│   ├── VoluntariadoPage.jsx # Página de voluntariado
│   ├── FacilitarPage.jsx  # Página para facilitadores
│   ├── BlogPage.jsx       # Página do blog
│   ├── TransparenciaPage.jsx # Página de transparência
│   └── ContatoPage.jsx    # Página de contato
├── styles/                # Arquivos CSS organizados
│   ├── components.css     # Estilos base dos componentes
│   ├── header.css         # Estilos do header
│   ├── hero.css           # Estilos da seção hero
│   ├── sections.css       # Estilos das seções
│   ├── enhanced-sections.css # Seções aprimoradas
│   ├── new-sections.css   # Novas seções
│   ├── pages.css          # Estilos das páginas
│   ├── footer.css         # Estilos do footer
│   └── accessibility.css # Melhorias de acessibilidade
├── assets/                # Recursos estáticos
├── App.jsx               # Componente principal com roteamento
├── main.jsx             # Entrada da aplicação
└── index.css            # Estilos globais
```

## � Páginas do Site

- **Home** (`/`) - Página inicial com visão geral
- **Sobre** (`/sobre`) - História e missão da Nossa Casa
- **Agenda** (`/agenda`) - Eventos e atividades
- **Oficinas** (`/oficinas`) - Oficinas culturais oferecidas
- **Aluguel** (`/aluguel`) - Espaços disponíveis para locação
- **Loja** (`/loja`) - Produtos da economia criativa
- **Doações** (`/doe`) - Como apoiar financeiramente
- **Voluntariado** (`/voluntariado`) - Como se voluntariar
- **Facilitar** (`/facilitar`) - Para facilitadores de oficinas
- **Blog** (`/blog`) - Notícias e atualizações
- **Transparência** (`/transparencia`) - Prestação de contas
- **Contato** (`/contato`) - Formulário de contato

## �🎯 Funcionalidades

- ✅ Site multi-página com React Router
- ✅ Design responsivo e acessível
- ✅ Navegação entre páginas
- ✅ Componentes reutilizáveis
- ✅ Estrutura modular organizada
- ✅ Skip-links para navegação por teclado
- ✅ Estrutura semântica apropriada
- ✅ Contraste adequado (AA/AAA)
- ✅ Textos alternativos descritivos

## 🛠️ Tecnologias

- **React 19.1.1** - Biblioteca JavaScript para UI
- **React Router DOM 7.9.1** - Roteamento para aplicações React
- **Vite 7.1.6** - Build tool e dev server
- **CSS3** - Estilização com CSS Variables
- **ESLint** - Linting de código

## 🎨 Principais Seções

### Home Page
- Hero section com call-to-action
- Apresentação das atividades principais
- Estatísticas de impacto (1200+ pessoas, 48 oficinas, 3 anos)
- Cards de ação para doação e voluntariado
- Últimas notícias do blog

### Funcionalidades por Página
- **Oficinas**: Apresentação das atividades culturais
- **Agenda**: Calendário de eventos
- **Aluguel**: Espaços disponíveis para locação
- **Loja**: Produtos da economia criativa
- **Transparência**: Prestação de contas da organização

## 📝 Próximos passos

- [ ] Integração com CMS para conteúdo dinâmico
- [ ] Formulários funcionais de contato
- [ ] Sistema de calendário para eventos
- [ ] Performance e SEO otimizados
- [ ] Testes automatizados
- [ ] Sistema de gerenciamento de blog
- [ ] Integração com gateway de pagamento
- [ ] Sistema de reservas online

---

Desenvolvido com ❤️ para o centro cultural Nossa Casa
