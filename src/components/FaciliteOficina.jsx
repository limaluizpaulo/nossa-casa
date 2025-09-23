import { useState } from 'react';
import Button from './Button';
import { TargetIcon, BookOpenIcon, AccessibilityIcon, BuildingIcon, SeedlingIcon, LightbulbIcon, StarIcon, HandshakeIcon, TrendingUpIcon, HeartIcon, HomeIcon, CalendarIcon, DollarSignIcon } from './Icons';

const FaciliteOficina = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    profissao: '',
    formacao: '',
    tituloOficina: '',
    tipoOficina: '',
    duracao: '',
    publicoAlvo: '',
    descricao: '',
    objetivos: '',
    metodologia: '',
    materiais: '',
    experiencia: '',
    portfolio: '',
    motivacao: '',
    disponibilidade: '',
    investimento: ''
  });

  const tiposOficina = [
    "Artes Plásticas e Visuais",
    "Música e Sonoridades", 
    "Dança e Movimento",
    "Teatro e Performance",
    "Literatura e Escrita",
    "Artesanato e Manualidades",
    "Tecnologia e Inovação",
    "Bem-estar e Autocuidado",
    "Gastronomia",
    "Jardinagem e Sustentabilidade",
    "Empreendedorismo",
    "Educação Popular",
    "Terapias Integrativas",
    "Outro"
  ];

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Proposta de oficina:', formData);
    alert('Proposta enviada com sucesso! Análisaremos sua proposta e entraremos em contato em breve. Obrigado por querer fazer parte da Nossa Casa!');
  };

  return (
    <section id="facilite-oficina" className="section facilite-section" aria-labelledby="facilite-title">
      <div className="wrap">
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

        {/* Porque facilitar na Nossa Casa */}
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

        {/* Critérios de seleção */}
        <div className="criterios-selecao mt-48">
          <h3>O que buscamos nas propostas</h3>
          <div className="criterios-grid">
            {criteriosSelecao.map((criterio, index) => (
              <div key={index} className="criterio-card">
                <div className="criterio-icone">{criterio.icone}</div>
                <h4>{criterio.titulo}</h4>
                <p>{criterio.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Processo de seleção */}
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

        {/* Formulário de proposta */}
        <div className="proposta-form mt-48">
          <h3>Envie sua proposta de oficina</h3>
          <form onSubmit={handleSubmit} className="form-proposta">
            <div className="form-section">
              <h4>Sobre você</h4>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="nome">Nome completo *</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="telefone">Telefone/WhatsApp *</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="profissao">Profissão/Área de atuação</label>
                  <input
                    type="text"
                    id="profissao"
                    name="profissao"
                    value={formData.profissao}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="formacao">Formação e qualificações</label>
                <textarea
                  id="formacao"
                  name="formacao"
                  value={formData.formacao}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Conte sobre sua formação acadêmica, cursos, certificações..."
                ></textarea>
              </div>
            </div>

            <div className="form-section">
              <h4>Sobre a oficina</h4>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="tituloOficina">Título da oficina *</label>
                  <input
                    type="text"
                    id="tituloOficina"
                    name="tituloOficina"
                    value={formData.tituloOficina}
                    onChange={handleInputChange}
                    required
                    placeholder="Ex: Introdução à Cerâmica Artística"
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="tipoOficina">Categoria *</label>
                  <select
                    id="tipoOficina"
                    name="tipoOficina"
                    value={formData.tipoOficina}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecione uma categoria</option>
                    {tiposOficina.map((tipo, index) => (
                      <option key={index} value={tipo}>{tipo}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="duracao">Duração *</label>
                  <select
                    id="duracao"
                    name="duracao"
                    value={formData.duracao}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Selecione a duração</option>
                    <option value="pontual">Oficina pontual (1 encontro)</option>
                    <option value="curta">Curso curto (2-4 encontros)</option>
                    <option value="media">Curso médio (1-2 meses)</option>
                    <option value="longa">Curso longo (3+ meses)</option>
                    <option value="flexivel">Flexível</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="publicoAlvo">Público-alvo *</label>
                  <input
                    type="text"
                    id="publicoAlvo"
                    name="publicoAlvo"
                    value={formData.publicoAlvo}
                    onChange={handleInputChange}
                    required
                    placeholder="Ex: Jovens de 16-25 anos, Iniciantes, Livre para todos..."
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="descricao">Descrição da oficina *</label>
                <textarea
                  id="descricao"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Descreva o que será ensinado, o formato das aulas e o que os participantes podem esperar"
                  required
                ></textarea>
              </div>

              <div className="form-field">
                <label htmlFor="objetivos">Objetivos de aprendizagem *</label>
                <textarea
                  id="objetivos"
                  name="objetivos"
                  value={formData.objetivos}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Quais conhecimentos e habilidades os participantes irão desenvolver?"
                  required
                ></textarea>
              </div>

              <div className="form-field">
                <label htmlFor="metodologia">Metodologia *</label>
                <textarea
                  id="metodologia"
                  name="metodologia"
                  value={formData.metodologia}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Como será a dinâmica das aulas? Que métodos pedagógicos você utilizará?"
                  required
                ></textarea>
              </div>

              <div className="form-field">
                <label htmlFor="materiais">Materiais necessários</label>
                <textarea
                  id="materiais"
                  name="materiais"
                  value={formData.materiais}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Liste os materiais que serão necessários e quem ficará responsável por providenciar"
                ></textarea>
              </div>
            </div>

            <div className="form-section">
              <h4>Sua experiência</h4>
              <div className="form-field">
                <label htmlFor="experiencia">Experiência como facilitador/educador *</label>
                <textarea
                  id="experiencia"
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Conte sobre sua experiência dando aulas, oficinas ou cursos"
                  required
                ></textarea>
              </div>

              <div className="form-field">
                <label htmlFor="portfolio">Portfolio ou referências</label>
                <textarea
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Links para seu trabalho, site, redes sociais ou referências de pessoas que podem falar sobre você"
                ></textarea>
              </div>
            </div>

            <div className="form-section">
              <h4>Logística</h4>
              <div className="form-field">
                <label htmlFor="disponibilidade">Disponibilidade *</label>
                <textarea
                  id="disponibilidade"
                  name="disponibilidade"
                  value={formData.disponibilidade}
                  onChange={handleInputChange}
                  rows="2"
                  placeholder="Que dias da semana e horários você tem disponível?"
                  required
                ></textarea>
              </div>

              <div className="form-field">
                <label htmlFor="investimento">Proposta de investimento</label>
                <textarea
                  id="investimento"
                  name="investimento"
                  value={formData.investimento}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Qual sua proposta de remuneração? Lembre-se que valorizamos a acessibilidade"
                ></textarea>
              </div>

              <div className="form-field">
                <label htmlFor="motivacao">Por que quer facilitar na Nossa Casa? *</label>
                <textarea
                  id="motivacao"
                  name="motivacao"
                  value={formData.motivacao}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Conte sobre sua motivação e como sua oficina se alinha com nossos valores"
                  required
                ></textarea>
              </div>
            </div>

            <div className="form-actions">
              <Button type="submit" variant="fill" className="submit-btn">
                Enviar proposta
              </Button>
              <p className="form-note">
                * Analisaremos sua proposta e entraremos em contato em até 7 dias úteis
              </p>
            </div>
          </form>
        </div>

        {/* Informações adicionais */}
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
      </div>
    </section>
  );
};

export default FaciliteOficina;