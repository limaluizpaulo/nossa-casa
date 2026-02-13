import Button from './Button';
import { AnimateOnScroll } from '../hooks/useAnimations';
import { TargetIcon, BookOpenIcon, AccessibilityIcon, BuildingIcon, SeedlingIcon, LightbulbIcon, StarIcon, HandshakeIcon, TrendingUpIcon, HeartIcon, HomeIcon, CalendarIcon, DollarSignIcon } from './Icons';

const FaciliteOficina = () => {

  const criteriosSelecao = [
    {
      titulo: "Alinhamento com nossa missão",
      descricao: "Oficinas que promovam inclusão, diversidade e transformação social",
      icone: <TargetIcon size={24} />
    },
    {
      titulo: "Qualidade pedagógica",
      descricao: "Metodologia clara, objetivos bem definidos e experiência do facilitador",
      icone: <BookOpenIcon size={24} />
    },
    {
      titulo: "Acessibilidade",
      descricao: "Atividades que sejam acessíveis financeiramente e fisicamente",
      icone: <AccessibilityIcon size={24} />
    },
    {
      titulo: "Relevância comunitária",
      descricao: "Conteúdos que respondam às necessidades e interesses da comunidade",
      icone: <BuildingIcon size={24} />
    },
    {
      titulo: "Sustentabilidade",
      descricao: "Projetos que possam se manter ao longo do tempo",
      icone: <SeedlingIcon size={24} />
    },
    {
      titulo: "Inovação",
      descricao: "Propostas criativas que tragam novas perspectivas",
      icone: <LightbulbIcon size={24} />
    }
  ];

  const processoProposta = [
    {
      etapa: "1. Envie sua proposta",
      descricao: "Preencha o formulário com todos os detalhes da sua oficina",
      prazo: "Sempre aberto"
    },
    {
      etapa: "2. Análise inicial",
      descricao: "Nossa equipe avalia a proposta e alinhamento com nossos valores",
      prazo: "7 dias úteis"
    },
    {
      etapa: "3. Conversa presencial",
      descricao: "Agendamos um encontro para conhecer você e detalhar a proposta",
      prazo: "15 dias"
    },
    {
      etapa: "4. Definição de parceria",
      descricao: "Alinhamos logística, cronograma e condições da oficina",
      prazo: "30 dias"
    }
  ];

  return (
    <section id="facilite-oficina" className="section facilite-section" aria-labelledby="facilite-title">
      <div className="wrap">
        <AnimateOnScroll animation="fade-up" delay={100}>
          <div className="kicker">
            <span className="rule" aria-hidden="true"></span>
            Facilite uma Oficina
          </div>
          <h2 id="facilite-title" className="section__title">
            Compartilhe seu conhecimento!
          </h2>
          
          <p className="lead">
            Você tem um conhecimento, uma paixão ou uma habilidade que gostaria de compartilhar? 
            A Nossa Casa é o espaço ideal para você facilitar oficinas e contribuir para a formação 
            de uma comunidade mais criativa e conectada.
          </p>
        </AnimateOnScroll>

        {/* Porque facilitar na Nossa Casa */}
        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="porque-facilitar mt-32">
            <h3>Por que facilitar na Nossa Casa?</h3>
            <div className="beneficios-facilitador">
              <div className="beneficio-item">
                <span className="beneficio-icone"><StarIcon size={24} /></span>
                <div>
                  <h4>Impacto social real</h4>
                  <p>Suas oficinas chegam a quem mais precisa, transformando vidas através do conhecimento</p>
                </div>
              </div>
              <div className="beneficio-item">
                <span className="beneficio-icone"><HandshakeIcon size={24} /></span>
                <div>
                  <h4>Rede de apoio</h4>
                  <p>Conte com nossa estrutura e equipe para o sucesso da sua oficina</p>
                </div>
              </div>
              <div className="beneficio-item">
                <span className="beneficio-icone"><TrendingUpIcon size={24} /></span>
                <div>
                  <h4>Crescimento profissional</h4>
                  <p>Desenvolva suas habilidades pedagógicas e amplie seu portfólio</p>
                </div>
              </div>
              <div className="beneficio-item">
                <span className="beneficio-icone"><HeartIcon size={24} /></span>
                <div>
                  <h4>Comunidade acolhedora</h4>
                  <p>Faça parte de um espaço que valoriza a diversidade e a inclusão</p>
                </div>
              </div>
              <div className="beneficio-item">
                <span className="beneficio-icone"><TargetIcon size={24} /></span>
                <div>
                  <h4>Público engajado</h4>
                  <p>Trabalhe com pessoas genuinamente interessadas em aprender e crescer</p>
                </div>
              </div>
              <div className="beneficio-item">
                <span className="beneficio-icone"><HomeIcon size={24} /></span>
                <div>
                  <h4>Espaço equipado</h4>
                  <p>Utilize nossa infraestrutura completa para suas atividades</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Critérios de seleção */}
        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="criterios-selecao mt-48">
            <h3>O que buscamos nas propostas</h3>
            <div className="criterios-grid">
              {criteriosSelecao.map((criterio, index) => (
                <div key={index} className="criterio-card shimmer">
                  <div className="criterio-icone">{criterio.icone}</div>
                  <h4>{criterio.titulo}</h4>
                  <p>{criterio.descricao}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Processo de seleção */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="processo-selecao mt-48">
            <h3>Como funciona o processo</h3>
            <div className="processo-timeline">
              {processoProposta.map((etapa, index) => (
                <div key={index} className="processo-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h4>{etapa.etapa}</h4>
                    <p>{etapa.descricao}</p>
                    <span className="step-prazo">{etapa.prazo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Formulário de proposta */}
        <AnimateOnScroll animation="fade-up" delay={500}>
          <div className="proposta-form mt-48">
            <h3>Envie sua proposta de oficina</h3>
            <div className="google-form-container">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSet6B1jAfzxlviFRHGhJn7AlPKI1srPkYGkBWgHNpFIjN_ZUw/viewform?embedded=true" 
                width="100%" 
                height="1800" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                title="Formulário de proposta de oficina"
              >
                Carregando…
              </iframe>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Informações adicionais */}
        <AnimateOnScroll animation="fade-up" delay={600}>
          <div className="info-facilitador mt-32">
            <h3>Informações importantes</h3>
            <div className="info-cards">
              <div className="info-card">
                <h4><DollarSignIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Investimento</h4>
                <p>Buscamos equilibrar remuneração justa para facilitadores com acessibilidade para participantes.</p>
              </div>
              <div className="info-card">
                <h4><CalendarIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Agendamento</h4>
                <p>As oficinas são agendadas conforme disponibilidade do espaço e demanda da comunidade.</p>
              </div>
              <div className="info-card">
                <h4><HandshakeIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Parceria</h4>
                <p>Apoiamos na divulgação, gestão de inscrições e oferecemos suporte durante toda a oficina.</p>
              </div>
              <div className="info-card">
                <h4><TargetIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Inclusão</h4>
                <p>Incentivamos propostas que promovam acessibilidade e incluam pessoas em situação de vulnerabilidade.</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default FaciliteOficina;