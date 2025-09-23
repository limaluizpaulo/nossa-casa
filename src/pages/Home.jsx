import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { PaletteIcon, CalendarIcon, HomeIcon, ShoppingBagIcon, HeartIcon, HandshakeIcon } from '../components/Icons';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-text">
                <h1 className="hero-title">
                  Nossa Casa é <span className="highlight">resistência</span>,
                  <br />
                  <span className="highlight">arte</span> e <span className="highlight">comunidade</span>
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
              <div className="hero-visual">
                <div className="hero-image">
                  <img 
                    src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop" 
                    alt="Atividade comunitária na Nossa Casa"
                  />
                </div>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">1200+</span>
                    <span className="stat-label">Pessoas impactadas</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">48</span>
                    <span className="stat-label">Oficinas oferecidas</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">3</span>
                    <span className="stat-label">Anos transformando vidas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="activities-section">
        <div className="wrap">
          <div className="section-header">
            <h2>O que fazemos na Nossa Casa</h2>
            <p>Conheça as principais atividades que movimentam nosso espaço</p>
          </div>
          
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon"><PaletteIcon size={32} /></div>
              <h3>Oficinas Culturais</h3>
              <p>Arte, música, dança, teatro e literatura para todas as idades</p>
              <Button variant="outline" size="small" as={Link} to="/oficinas">
                Ver oficinas
              </Button>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon"><CalendarIcon size={32} /></div>
              <h3>Eventos Comunitários</h3>
              <p>Saraus, festivais, feiras e encontros que fortalecem nossa rede</p>
              <Button variant="outline" size="small" as={Link} to="/agenda">
                Ver agenda
              </Button>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon"><HomeIcon size={32} /></div>
              <h3>Espaços para Alugar</h3>
              <p>Ambientes equipados para seus eventos, reuniões e celebrações</p>
              <Button variant="outline" size="small" as={Link} to="/aluguel">
                Conhecer espaços
              </Button>
            </div>
            
            <div className="activity-card">
              <div className="activity-icon"><ShoppingBagIcon size={32} /></div>
              <h3>Loja Solidária</h3>
              <p>Produtos da economia criativa feitos por artistas locais</p>
              <Button variant="outline" size="small" as={Link} to="/loja">
                Visitar loja
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada para ação */}
      <section className="cta-section">
        <div className="wrap">
          <div className="cta-grid">
            <div className="cta-card secondary">
              <h3><HeartIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Apoie nossa causa</h3>
              <p>Sua doação fortalece nossa comunidade e amplia nosso impacto social</p>
              <Button variant="fill" as={Link} to="/doe">
                Fazer doação
              </Button>
            </div>
            
            <div className="cta-card secondary">
              <h3><HandshakeIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Seja voluntário</h3>
              <p>Junte-se a nós e faça parte desta transformação</p>
              <Button variant="outline" as={Link} to="/voluntariado">
                Quero participar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Últimas notícias */}
      <section className="news-section">
        <div className="wrap">
          <div className="section-header">
            <h2>Últimas do blog</h2>
            <p>Acompanhe as novidades da nossa comunidade</p>
          </div>
          
          <div className="news-grid">
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
          </div>
          
          <div className="news-footer">
            <Button variant="outline" as={Link} to="/blog">
              Ver todas as notícias
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;