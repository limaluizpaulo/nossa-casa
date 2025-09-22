import { useState } from 'react';
import Button from './Button';

const Blog = () => {
  const [filtroCategoria, setFiltroCategoria] = useState('todas');

  const categorias = [
    'todas',
    'eventos',
    'oficinas', 
    'comunidade',
    'arte',
    'educacao',
    'sustentabilidade'
  ];

  const posts = [
    {
      id: 1,
      titulo: "Festival de Arte Urbana foi um sucesso!",
      categoria: "eventos",
      data: "2024-01-15",
      autor: "Equipe Nossa Casa",
      imagem: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=600&h=300&fit=crop",
      resumo: "Mais de 500 pessoas participaram do nosso primeiro Festival de Arte Urbana, que transformou os muros do bairro em verdadeiras galerias a céu aberto.",
      conteudo: "O Festival reuniu 15 artistas locais, 8 oficinas gratuitas de grafite e muita música. Foi um fim de semana de pura arte e resistência!"
    },
    {
      id: 2,
      titulo: "Nova turma de Cerâmica inicia em fevereiro",
      categoria: "oficinas",
      data: "2024-01-12",
      autor: "Marina Ceramista",
      imagem: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop",
      resumo: "Com foco na sustentabilidade, a oficina ensina técnicas ancestrais de cerâmica usando argila local e queima em fornos ecológicos.",
      conteudo: "As aulas acontecem às segundas e quartas, das 19h às 21h. Vagas limitadas para 12 pessoas. Inscrições abertas!"
    },
    {
      id: 3,
      titulo: "Como a Nossa Casa transformou o bairro",
      categoria: "comunidade",
      data: "2024-01-10",
      autor: "João Morador",
      imagem: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=300&fit=crop",
      resumo: "Moradores relatam as mudanças positivas que o centro cultural trouxe para a região nos últimos dois anos.",
      conteudo: "Redução da violência, mais jovens engajados em atividades culturais e fortalecimento dos laços comunitários são alguns dos impactos observados."
    },
    {
      id: 4,
      titulo: "Sarau da Resistência: poesia que transforma",
      categoria: "arte",
      data: "2024-01-08",
      autor: "Coletivo de Poetas",
      imagem: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      resumo: "Todo último sábado do mês, o Sarau da Resistência reúne poetas, músicos e artistas para compartilhar arte que fala sobre justiça social.",
      conteudo: "O próximo sarau será dia 27/01 às 19h. Microfone aberto para quem quiser compartilhar sua arte. Entrada gratuita!"
    },
    {
      id: 5,
      titulo: "Horta comunitária: colhendo o que plantamos",
      categoria: "sustentabilidade",
      data: "2024-01-05",
      autor: "Grupo da Horta",
      imagem: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=300&fit=crop",
      resumo: "A horta comunitária da Nossa Casa já produz alimentos orgânicos que abastecem a cozinha do espaço e famílias da comunidade.",
      conteudo: "Todo sábado das 8h às 11h, voluntários se reúnem para cuidar da horta. Venha aprender sobre agricultura urbana!"
    },
    {
      id: 6,
      titulo: "Educação popular: formando cidadãos críticos",
      categoria: "educacao",
      data: "2024-01-03",
      autor: "Educadores Populares",
      imagem: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=300&fit=crop",
      resumo: "Os círculos de educação popular da Nossa Casa combinam alfabetização com formação política e consciência crítica.",
      conteudo: "As turmas atendem jovens e adultos que não tiveram acesso à educação formal. Metodologia Paulo Freire em ação!"
    },
    {
      id: 7,
      titulo: "Festa Junina Quilombola aqueceu o inverno",
      categoria: "eventos",
      data: "2023-12-28",
      autor: "Equipe Nossa Casa",
      imagem: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&h=300&fit=crop",
      resumo: "Com música, dança e comidas típicas, celebramos nossas raízes afro-brasileiras em uma festa que reuniu mais de 300 pessoas.",
      conteudo: "Quadrilha, bumba-meu-boi, capoeira e muito axé fizeram a alegria de crianças e adultos numa noite inesquecível!"
    },
    {
      id: 8,
      titulo: "Teatro infantil: imaginação sem limites",
      categoria: "arte",
      data: "2023-12-25",
      autor: "Cia Teatral Pequenos Grandes",
      imagem: "https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=600&h=300&fit=crop",
      resumo: "As crianças da comunidade criaram e apresentaram suas próprias peças teatrais, trabalhando temas como amizade e respeito.",
      conteudo: "O projeto de teatro infantil desenvolve criatividade, autoestima e habilidades de comunicação. Próxima temporada em março!"
    }
  ];

  const postsFiltrados = filtroCategoria === 'todas' 
    ? posts 
    : posts.filter(post => post.categoria === filtroCategoria);

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getCategoriaLabel = (categoria) => {
    const labels = {
      'eventos': 'Eventos',
      'oficinas': 'Oficinas',
      'comunidade': 'Comunidade', 
      'arte': 'Arte & Cultura',
      'educacao': 'Educação',
      'sustentabilidade': 'Sustentabilidade'
    };
    return labels[categoria] || categoria;
  };

  return (
    <section id="blog" className="section blog-section" aria-labelledby="blog-title">
      <div className="wrap">
        <div className="kicker">
          <span className="rule" aria-hidden="true"></span>
          Blog
        </div>
        <h2 id="blog-title" className="section__title">
          Notícias da Comunidade
        </h2>
        
        <p className="lead">
          Acompanhe as últimas novidades, eventos, oficinas e histórias da nossa comunidade. 
          Aqui você encontra relatos de transformação, agenda cultural e tudo que acontece na Nossa Casa.
        </p>

        {/* Filtros de categoria */}
        <div className="blog-filtros mt-32">
          <h3>Filtrar por categoria</h3>
          <div className="filtros-container">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                className={`filtro-btn ${filtroCategoria === categoria ? 'ativo' : ''}`}
                onClick={() => setFiltroCategoria(categoria)}
              >
                {categoria === 'todas' ? 'Todas' : getCategoriaLabel(categoria)}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de posts */}
        <div className="blog-posts mt-32">
          <div className="posts-grid">
            {postsFiltrados.map((post) => (
              <article key={post.id} className="post-card">
                <div className="post-imagem">
                  <img src={post.imagem} alt={post.titulo} />
                  <div className="post-categoria">
                    {getCategoriaLabel(post.categoria)}
                  </div>
                </div>
                
                <div className="post-conteudo">
                  <div className="post-meta">
                    <time dateTime={post.data}>
                      {formatarData(post.data)}
                    </time>
                    <span className="post-autor">por {post.autor}</span>
                  </div>
                  
                  <h3 className="post-titulo">{post.titulo}</h3>
                  <p className="post-resumo">{post.resumo}</p>
                  
                  <div className="post-actions">
                    <Button variant="outline" size="small">
                      Ler mais
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Seção de destaque */}
        <div className="blog-destaque mt-48">
          <div className="destaque-container">
            <div className="destaque-conteudo">
              <h3>📰 Quer receber nossas novidades?</h3>
              <p>
                Cadastre-se em nossa newsletter e seja o primeiro a saber sobre 
                novos eventos, oficinas e histórias inspiradoras da nossa comunidade.
              </p>
              
              <form className="newsletter-form">
                <div className="form-row">
                  <input 
                    type="email" 
                    placeholder="Seu email" 
                    className="newsletter-input"
                    required
                  />
                  <Button type="submit" variant="fill">
                    Inscrever-se
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="destaque-stats">
              <div className="stat-item">
                <span className="stat-numero">200+</span>
                <span className="stat-label">Pessoas impactadas</span>
              </div>
              <div className="stat-item">
                <span className="stat-numero">15</span>
                <span className="stat-label">Oficinas ativas</span>
              </div>
              <div className="stat-item">
                <span className="stat-numero">50</span>
                <span className="stat-label">Eventos realizados</span>
              </div>
            </div>
          </div>
        </div>

        {/* Arquivo do blog */}
        <div className="blog-arquivo mt-48">
          <h3>Arquivo do Blog</h3>
          <div className="arquivo-lista">
            <div className="arquivo-item">
              <h4>Janeiro 2024</h4>
              <ul>
                <li><a href="#post1">Festival de Arte Urbana foi um sucesso!</a></li>
                <li><a href="#post2">Nova turma de Cerâmica inicia em fevereiro</a></li>
                <li><a href="#post3">Como a Nossa Casa transformou o bairro</a></li>
              </ul>
            </div>
            
            <div className="arquivo-item">
              <h4>Dezembro 2023</h4>
              <ul>
                <li><a href="#post7">Festa Junina Quilombola aqueceu o inverno</a></li>
                <li><a href="#post8">Teatro infantil: imaginação sem limites</a></li>
                <li><a href="#post9">Balanço de 2023: um ano de conquistas</a></li>
              </ul>
            </div>
            
            <div className="arquivo-item">
              <h4>Novembro 2023</h4>
              <ul>
                <li><a href="#post10">Novembro Negro: celebrando nossa ancestralidade</a></li>
                <li><a href="#post11">Mutirão de limpeza mobiliza 100 voluntários</a></li>
                <li><a href="#post12">Feira de economia solidária bate recorde</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tags populares */}
        <div className="blog-tags mt-32">
          <h3>Tags populares</h3>
          <div className="tags-container">
            <span className="tag">#resistencia</span>
            <span className="tag">#arte</span>
            <span className="tag">#comunidade</span>
            <span className="tag">#educacao</span>
            <span className="tag">#sustentabilidade</span>
            <span className="tag">#cultura</span>
            <span className="tag">#juventude</span>
            <span className="tag">#transformacao</span>
            <span className="tag">#solidariedade</span>
            <span className="tag">#periferiaresiste</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="blog-cta mt-48">
          <div className="cta-content">
            <h3>Tem uma história para contar?</h3>
            <p>
              Sua experiência na Nossa Casa pode inspirar outras pessoas! 
              Compartilhe sua história conosco e ajude a fortalecer nossa rede de transformação.
            </p>
            <div className="cta-actions">
              <Button variant="fill">
                Compartilhar história
              </Button>
              <Button variant="outline">
                Seguir no Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;