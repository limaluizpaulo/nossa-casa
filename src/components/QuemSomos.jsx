import Button from './Button';
import { Link } from 'react-router-dom';
import { AnimateOnScroll } from '../hooks/useAnimations';

const QuemSomos = () => {
  const equipe = [
    {
      nome: "Camila Bitencourt",
      papel: "Psicóloga e Idealizadora",
      descricao: "Atua como produtora executiva, lidera com gestão horizontal, com foco em pessoas negras, periféricas e LGBTQIAPN+. Realiza atendimentos clínicos com enfoque em raça, gênero e questões sociais.",
      imagem: "https://images.unsplsh.com/photo-1594736797933-d0cc3b5c5c62?q=80&w=400&auto=format&fit=crop"
    },
    {
      nome: "Val Araújo",
      papel: "Cantora e Produtora Cultural",
      descricao: "Coordena a gestão contábil e a produção de eventos. Idealizadora do Projeto Espiral, já atuou em produções como TEDx Guarulhos e SESC Guarulhos.",
      imagem: "https://images.unsplah.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
    },
    {
      nome: "Dico de Brito (A Dico)",
      papel: "Arte-educadora e Produtora Cultural",
      descricao: "Pessoa trans não binária, idealizou projetos como Queermessy e Trans.Lados, e coorganizou o I Festival LGBTQIAPN+ de Guarulhos.",
      imagem: "https://images..com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
    },
    {
      nome: "Taty Sayllon",
      papel: "Apresentadora e Ativista Cultural",
      descricao: "Hostess e ativista cultural. Rainha Gay Plus Size SP 2024 e apresentadora oficial da Parada do Orgulho LGBTQIAPN+ de Guarulhos.",
      imagem: "https://images.unsplah.com/photo-1494790108755-2616b612b77c?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section id="quem-somos" className="section quem-somos-section" aria-labelledby="quem-somos-title">
      <div className="wrap">
        <AnimateOnScroll animation="fade-up" delay={100}>
          <div className="kicker">
            <span className="rule" aria-hidden="true"></span>
            Quem Somos
          </div>
          <h2 id="quem-somos-title" className="section__title">
            Nossa História de Resistência e Transformação
          </h2>
        </AnimateOnScroll>
        
        <div className="cols-2 mt-32">
          <AnimateOnScroll animation="fade-right" delay={200}>
            <div className="story">
              <h3>Nossa Origem</h3>
              <p className="lead">
                A Nossa Casa nasceu em <strong>2018</strong> com o propósito de tornar acessíveis serviços, produtos e atividades nas áreas de saúde mental, terapias integrativas, cultura, arte e empreendedorismo para todes.
              </p>
              <p>
                Acreditamos que isso é um direito e também um passo crucial para empoderar cada indivíduo e garantir oportunidades de crescimento e realização.
              </p>
              <p>
                <strong>Valorizamos e acolhemos pessoas minorizadas:</strong> mulheres, comunidade LGBTQIAPN+, pessoas negras, pardas e periféricas. A Nossa Casa é um espaço de construção e pertencimento, onde cada voz é ouvida e cada história é valorizada.
              </p>
              
              <h3 className="mt-32">Nossos Valores</h3>
              <ul className="values-list">
                <li><strong>Acessibilidade:</strong> Direito de todes aos serviços de saúde mental e cultura</li>
                <li><strong>Diversidade:</strong> Acolhimento às pessoas minorizadas e suas vivências</li>
                <li><strong>Empoderamento:</strong> Crescimento individual e coletivo através da arte</li>
                <li><strong>Pertencimento:</strong> Construção de um espaço onde cada voz importa</li>
                <li><strong>Transformação:</strong> Arte e terapia como ferramentas de mudança social</li>
              </ul>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-left" delay={400}>
            <div className="mission-card shimmer">
              <h3>Nossa Missão</h3>
              <blockquote>
                "Fortalecer vínculos, celebrar a diversidade e incentivar a arte, a saúde integrativa, a economia solidária e os direitos humanos através de um coletivo independente gerido por mulheres, pessoas negras, periféricas e LGBTQIAPN+."
              </blockquote>
              
              <div className="stats-mini mt-24">
                <div className="stat">
                  <strong>2018</strong>
                  <span>Ano de fundação</span>
                </div>
                <div className="stat">
                  <strong>6+</strong>
                  <span>Anos de atuação</span>
                </div>
                <div className="stat">
                  <strong>Guarulhos</strong>
                  <span>Nossa base</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="team-section mt-56">
            <h3 className="section__subtitle">Nossa Equipe</h3>
            <p className="team-intro">
              Mulheres que sonharam, criaram e sustentam este espaço de transformação
            </p>
          </div>
        </AnimateOnScroll>
        
        <div className="team-grid mt-32">
          {equipe.map((pessoa, index) => (
            <AnimateOnScroll key={index} animation="fade-up" delay={300 + (index * 150)}>
              <div className="team-member shimmer">
                <figure className="member__photo">
                  <img 
                    src={pessoa.imagem} 
                    alt={`${pessoa.nome}, ${pessoa.papel}`}
                    loading="lazy"
                  />
                </figure>
                <div className="member__info">
                  <h4>{pessoa.nome}</h4>
                  <p className="member__role">{pessoa.papel}</p>
                  <p className="member__bio">{pessoa.descricao}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={600}>
          <div className="cta-section mt-48 glow-effect">
            <h3>Faça parte dessa história</h3>
            <p>Junte-se a nós na construção de um futuro mais acolhedor e diverso</p>
            <div className="cta-buttons mt-24">
              <Button variant="fill" as={Link} to="/voluntariado">Quero ser voluntárie</Button>
              <Button variant="accent" as={Link} to="/doe">Apoiar nossa luta</Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default QuemSomos;