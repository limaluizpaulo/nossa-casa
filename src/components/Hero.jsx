import Button from './Button';
import '../styles/hero.css';
import { FlowerIcon } from './Icons';

const Hero = () => {
  return (
    <main id="main-content">
      <section id="home" className="hero" aria-labelledby="hero-title">
        <div className="wrap">
          <div className="hero__content">
            <p className="eyebrow">Arte • Terapias • Resistência</p>
            <h1 id="hero-title" className="display">
              Um espaço de arte, terapias e{' '}
              <span className="highlight">resistência</span>{' '}
              em Guarulhos
            </h1>
            <p className="lead">
import { FlowerIcon } from './Icons';

// ... resto do código ...

                            <FlowerIcon size={20} style={{display: 'inline', marginRight: '8px'}} /> <strong>Sejam bem-vindes à Nossa Casa</strong>, onde ancestralidade, diversidade e autocuidado se encontram para transformar vidas. Um coletivo independente que há 6 anos fortalece vínculos, celebra a diversidade e incentiva a arte, a saúde integrativa e os direitos humanos.
            </p>
            <div className="hero__cta">
              <Button variant="fill" href="#agenda" className="btn-cta">Confira nossa agenda</Button>
              <Button variant="outline" href="#quem-somos" className="btn-outline">Conheça nossa história</Button>
            </div>
            
            <div className="hero__meta" role="region" aria-label="Nosso impacto em números">
              <div className="metric">
                <div className="note">Horas de eventos na rua</div>
                <b aria-label="Mais de 300 horas">300+</b>
              </div>
              <div className="metric">
                <div className="note">Apresentações artísticas</div>
                <b aria-label="Mais de 120 apresentações">120+</b>
              </div>
              <div className="metric">
                <div className="note">Expositores LGBTQIAPN+</div>
                <b aria-label="Mais de 70 expositores">70+</b>
              </div>
              <div className="metric">
                <div className="note">Artistas independentes</div>
                <b aria-label="Mais de 80 artistas">80+</b>
              </div>
            </div>
            
            <div className="partners" aria-label="Nossos focos de atuação">
              <span className="chip chip--arte">Oficinas Culturais</span>
              <span className="chip chip--terapia">Terapias Integrativas</span>
              <span className="chip chip--comunidade">Economia Solidária</span>
              <span className="chip chip--ancestral">Direitos Humanos</span>
            </div>
          </div>
          
          <figure className="hero__media">
            <img 
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1600&auto=format&fit=crop" 
              alt="Mulheres negras e periféricas em roda de conversa, criando arte coletiva em espaço acolhedor e colorido"
              loading="eager"
            />
            <figcaption className="hero__caption">
              Nossa Casa: território de cura, arte e resistência
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
};

export default Hero;