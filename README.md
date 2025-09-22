# Nossa Casa - Projeto React

Site institucional do projeto Nossa Casa, desenvolvido em React com Vite.

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
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 📁 Estrutura do projeto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx      # Navegação principal com skip-link
│   ├── Hero.jsx        # Seção hero com métricas
│   ├── About.jsx       # Sobre o projeto
│   ├── Programs.jsx    # Grade de programas
│   ├── Gallery.jsx     # Galeria de imagens
│   ├── CreateSection.jsx # Como participar
│   ├── FAQ.jsx         # Perguntas frequentes
│   ├── Contact.jsx     # CTA final
│   ├── Footer.jsx      # Rodapé
│   ├── Button.jsx      # Componente de botão
│   └── Card.jsx        # Componente de card
├── styles/             # Arquivos CSS organizados
│   ├── components.css  # Estilos base dos componentes
│   ├── header.css      # Estilos do header
│   ├── hero.css        # Estilos da seção hero
│   ├── sections.css    # Estilos das seções
│   ├── footer.css      # Estilos do footer
│   └── accessibility.css # Melhorias de acessibilidade
├── App.jsx             # Componente principal
├── main.jsx           # Entrada da aplicação
└── index.css          # Estilos globais
```

## 🎯 Funcionalidades

- ✅ Design responsivo e acessível
- ✅ Navegação suave entre seções
- ✅ Componentes reutilizáveis
- ✅ Otimização de imagens
- ✅ Skip-links para navegação por teclado
- ✅ Estrutura semântica apropriada
- ✅ Contraste adequado (AA/AAA)
- ✅ Textos alternativos descritivos

## 🛠️ Tecnologias

- **React** - Biblioteca JavaScript para UI
- **Vite** - Build tool e dev server
- **CSS3** - Estilização com CSS Variables
- **Google Fonts** - Space Grotesk e Inter

## 📝 Próximos passos

- [ ] Integração com CMS para conteúdo dinâmico
- [ ] Formulários funcionais de contato
- [ ] Sistema de calendário para eventos
- [ ] Performance e SEO otimizados
- [ ] Testes automatizados

---

Desenvolvido com ❤️ para o projeto Nossa Casa+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
