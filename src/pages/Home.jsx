import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { PaletteIcon, CalendarIcon, HomeIcon, ShoppingBagIcon, HeartIcon, HandshakeIcon } from '../components/Icons';
import { AnimateOnScroll, ScrollProgress } from '../hooks/useAnimations';
import bgImage from '../assets/bg.png';
import ncImage from '../assets/nc.jpg';

const Home = () => {
  return (
    <div className="home-page">
      <ScrollProgress />
      
      {/* Hero Section */}
      <section className="hero-section" role="banner" aria-label="Hero: Nossa Casa apresentação">
        {/* Overlay image placed above the yellow background but behind content */}
        <div className="hero-overlay" aria-hidden="true">
          <img src={bgImage} alt="" />
        </div>
        <div className="hero-content">
          <div className="wrap">
            <div className="hero-grid">
              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="hero-text">
                  <h1 className="hero-title">
                    Nossa Casa é <span className="highlight">Resistência</span>,
                    <br />
                    <span className="highlight">Arte</span> e <span className="highlight">Comunidade</span>
                  </h1>
                  <p className="hero-description">
                    Um centro cultural independente no coração de Guarulhos, 
                    onde arte, educação e transformação social caminham juntas 
                    para fortalecer nossa comunidade.
                  </p>
                  <div className="hero-actions">
                    <Button variant="fill" size="large" as={Link} to="/agenda">
                      Ver agenda de eventos
                    </Button>
                    <Button variant="outline" size="large" as={Link} to="/sobre">
                      Conheça nossa história
                    </Button>
                  </div>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fade-left" delay={400}>
                <div className="hero-visual">
                  <div className="hero-image shimmer" aria-hidden={false}>
                    <img
                      src={ncImage}
                      alt="Atividade comunitária na Nossa Casa"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="hero-stats">
                    <div className="stat-item">
                      <span className="stat-number">+ 12.000</span>
                      <span className="stat-label">Pessoas impactadas</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">+200</span>
                      <span className="stat-label">Oficinas oferecidas</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">7 anos</span>
                      <span className="stat-label">Construindo novas possibilidades</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="activities-section">
        <div className="wrap">
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="section-header">
              <h2>O que fazemos na Nossa Casa</h2>
              <p>Conheça as principais atividades que movimentam nosso espaço</p>
            </div>
          </AnimateOnScroll>
          
          <div className="activities-grid">
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="activity-card shimmer">
                <div className="activity-icon"><PaletteIcon size={32} /></div>
                <h3>Oficinas Culturais</h3>
                <p>Arte, música, dança, teatro e literatura para todas as idades</p>
                <Button variant="outline" size="small" as={Link} to="/oficinas">
                  Ver oficinas
                </Button>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="activity-card shimmer">
                <div className="activity-icon"><CalendarIcon size={32} /></div>
                <h3>Eventos Comunitários</h3>
                <p>Saraus, festivais, feiras e encontros que fortalecem nossa rede</p>
                <Button variant="outline" size="small" as={Link} to="/agenda">
                  Ver agenda
                </Button>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-up" delay={400}>
              <div className="activity-card shimmer">
                <div className="activity-icon"><HomeIcon size={32} /></div>
                <h3>Espaços para Alugar</h3>
                <p>Ambientes equipados para seus eventos, reuniões e celebrações</p>
                <Button variant="outline" size="small" as={Link} to="/aluguel">
                  Conhecer espaços
                </Button>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-up" delay={500}>
              <div className="activity-card shimmer">
                <div className="activity-icon"><ShoppingBagIcon size={32} /></div>
                <h3>Loja Solidária</h3>
                <p>Produtos da economia criativa feitos por artistas locais</p>
                <Button variant="outline" size="small" as={Link} to="/loja">
                  Visitar loja
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Chamada para ação */}
      <section className="cta-section">
        <div className="wrap">
          <div className="cta-grid">
            <AnimateOnScroll animation="fade-right" delay={200}>
              <div className="cta-card secondary glow-effect">
                <h3><HeartIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Apoie nossa causa</h3>
                <p>Sua doação fortalece nossa comunidade e amplia nosso impacto social</p>
                <Button variant="fill" as={Link} to="/doe">
                  Fazer doação
                </Button>
              </div>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-left" delay={400}>
              <div className="cta-card secondary">
                <h3><HandshakeIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Seja voluntário</h3>
                <p>Junte-se a nós e faça parte desta transformação</p>
                <Button variant="outline" as={Link} to="/voluntariado">
                  Quero participar
                </Button>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Últimas notícias */}
      <section className="news-section">
        <div className="wrap">
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div className="section-header">
              <h2>Últimas do blog</h2>
              <p>Acompanhe as novidades da nossa comunidade</p>
            </div>
          </AnimateOnScroll>
          
          <div className="news-grid">
            <AnimateOnScroll animation="fade-up" delay={200}>
              <article className="news-card">
                <div className="news-image">
                  <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=250&fit=crop" alt="Festival de Arte" />
                </div>
                <div className="news-content">
                  <span className="news-category">Eventos</span>
                  <h4>Festival de Arte Urbana foi um sucesso!</h4>
                  <p>Mais de 500 pessoas participaram do nosso primeiro Festival...</p>
                  <Button variant="text" size="small" as={Link} to="/blog">
                    Ler mais
                  </Button>
                </div>
              </article>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-up" delay={400}>
              <article className="news-card">
                <div className="news-image">
                  <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop" alt="Oficina de Cerâmica" />
                </div>
                <div className="news-content">
                  <span className="news-category">Oficinas</span>
                  <h4>Nova turma de Cerâmica em fevereiro</h4>
                  <p>Com foco na sustentabilidade, a oficina ensina técnicas...</p>
                  <Button variant="text" size="small" as={Link} to="/blog">
                    Ler mais
                  </Button>
                </div>
              </article>
            </AnimateOnScroll>
          </div>
          
          <AnimateOnScroll animation="fade-up" delay={600}>
            <div className="news-footer">
              <Button variant="outline" as={Link} to="/blog">
                Ver todas as notícias
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default Home;