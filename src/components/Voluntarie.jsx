import { useState } from 'react';
import Button from './Button';
import { TheaterIcon, SparklesIcon, HeartIcon, PaletteIcon, SmartphoneIcon, BarChartIcon, WrenchIcon, SeedlingIcon, HandshakeIcon, BookOpenIcon, MuscleIcon, TargetIcon, ClockIcon, ClipboardIcon, GraduationCapIcon } from './Icons';

const Voluntarie = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    idade: '',
    profissao: '',
    areaInteresse: '',
    disponibilidade: '',
    experiencia: '',
    motivacao: '',
    habilidades: ''
  });

  const areasVoluntariado = [
    {
      titulo: "Apoio em Oficinas",
      descricao: "Auxiliar facilitadores durante as atividades, organizar materiais e acolher participantes",
      icone: <PaletteIcon size={24} />
    },
    {
      titulo: "Comunicação",
      descricao: "Redes sociais, design gráfico, fotografia, produção de conteúdo",
      icone: <SmartphoneIcon size={24} />
    },
    {
      titulo: "Gestão e Administração",
      descricao: "Organização financeira, captação de recursos, planejamento estratégico",
      icone: <BarChartIcon size={24} />
    },
    {
      titulo: "Eventos e Produção",
      descricao: "Organização de saraus, festivais, feiras e encontros comunitários",
      icone: <TheaterIcon size={24} />
    },
    {
      titulo: "Cuidado e Acolhimento",
      descricao: "Recepção, escuta qualificada, apoio emocional aos participantes",
      icone: <HeartIcon size={24} />
    },
    {
      titulo: "Manutenção do Espaço",
      descricao: "Limpeza, organização, pequenos reparos, jardinagem",
      icone: <WrenchIcon size={24} />
    }
  ];

  const depoimentos = [
    {
      nome: "Marina Santos",
      area: "Comunicação",
      depoimento: "Ser voluntária na Nossa Casa transformou minha visão sobre comunidade. Aqui encontrei propósito e família.",
      tempo: "2 anos"
    },
    {
      nome: "João Pedro",
      area: "Oficinas",
      depoimento: "Ajudar nas oficinas me ensinou tanto quanto ensino. A troca é sempre horizontal e linda.",
      tempo: "1 ano"
    },
    {
      nome: "Luana Oliveira",
      area: "Eventos",
      depoimento: "Produzir eventos na Nossa Casa é ver sonhos virarem realidade. Cada festa é resistência.",
      tempo: "3 anos"
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
    console.log('Dados do voluntário:', formData);
    alert('Inscrição enviada! Em breve entraremos em contato. Bem-vinde à família Nossa Casa!');
  };

  return (
    <section id="voluntarie" className="section voluntarie-section" aria-labelledby="voluntarie-title">
      <div className="wrap">
        <div className="kicker">
          <span className="rule" aria-hidden="true"></span>
          Voluntarie-se
        </div>
        <h2 id="voluntarie-title" className="section__title">
          Junte-se à Nossa Casa!
        </h2>
        
        <p className="lead">
          É com enorme entusiasmo que convidamos você a fazer parte de um movimento que tem impactado positivamente nossa cidade. 
          Ao se associar à Nossa Casa, você se torna parte de uma construção coletiva de igualdade, solidariedade e crescimento.
        </p>

        {/* Áreas de voluntariado */}
        <div className="areas-voluntariado mt-32">
          <h3>Onde você pode atuar</h3>
          <div className="areas-grid">
            {areasVoluntariado.map((area, index) => (
              <div key={index} className="area-card">
                <div className="area-icone">{area.icone}</div>
                <h4>{area.titulo}</h4>
                <p>{area.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios de ser voluntário */}
        <div className="beneficios-voluntario mt-48">
          <h3>O que você ganha sendo voluntárie</h3>
          <div className="beneficios-grid">
            <div className="beneficio-item">
              <span className="beneficio-icone"><SeedlingIcon size={24} /></span>
              <div>
                <h4>Crescimento pessoal</h4>
                <p>Desenvolva novas habilidades e descubra talentos que você nem sabia que tinha</p>
              </div>
            </div>
            <div className="beneficio-item">
              <span className="beneficio-icone"><HandshakeIcon size={24} /></span>
              <div>
                <h4>Rede de conexões</h4>
                <p>Conheça pessoas incríveis e construa relacionamentos verdadeiros</p>
              </div>
            </div>
            <div className="beneficio-item">
              <span className="beneficio-icone"><BookOpenIcon size={24} /></span>
              <div>
                <h4>Aprendizado constante</h4>
                <p>Acesso gratuito a todas as nossas oficinas e eventos</p>
              </div>
            </div>
            <div className="beneficio-item">
              <span className="beneficio-icone"><MuscleIcon size={24} /></span>
              <div>
                <h4>Impacto social</h4>
                <p>Faça parte da transformação real da sua comunidade</p>
              </div>
            </div>
            <div className="beneficio-item">
              <span className="beneficio-icone"><TargetIcon size={24} /></span>
              <div>
                <h4>Propósito</h4>
                <p>Encontre significado no que faz e contribua para um mundo mais justo</p>
              </div>
            </div>
            <div className="beneficio-item">
              <span className="beneficio-icone"><SparklesIcon size={24} /></span>
              <div>
                <h4>Reconhecimento</h4>
                <p>Certificados de voluntariado e referências para seu currículo</p>
              </div>
            </div>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="depoimentos-voluntarios mt-48">
          <h3>Quem já faz parte conta</h3>
          <div className="depoimentos-grid">
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="depoimento-card">
                <blockquote>"{depoimento.depoimento}"</blockquote>
                <div className="depoimento-autor">
                  <strong>{depoimento.nome}</strong>
                  <span>{depoimento.area} • {depoimento.tempo} de voluntariado</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formulário de inscrição */}
        <div className="voluntario-form mt-48">
          <h3>Inscreva-se para ser voluntárie</h3>
          <form onSubmit={handleSubmit} className="form-voluntario">
            <div className="form-section">
              <h4>Seus dados</h4>
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
                  <label htmlFor="idade">Idade</label>
                  <input
                    type="number"
                    id="idade"
                    name="idade"
                    value={formData.idade}
                    onChange={handleInputChange}
                    min="16"
                    max="100"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="profissao">Profissão/Ocupação</label>
                <input
                  type="text"
                  id="profissao"
                  name="profissao"
                  value={formData.profissao}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-section">
              <h4>Seu interesse</h4>
              <div className="form-field">
                <label htmlFor="areaInteresse">Área de interesse *</label>
                <select
                  id="areaInteresse"
                  name="areaInteresse"
                  value={formData.areaInteresse}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione uma área</option>
                  <option value="oficinas">Apoio em Oficinas</option>
                  <option value="comunicacao">Comunicação</option>
                  <option value="gestao">Gestão e Administração</option>
                  <option value="eventos">Eventos e Produção</option>
                  <option value="cuidado">Cuidado e Acolhimento</option>
                  <option value="manutencao">Manutenção do Espaço</option>
                  <option value="multiplas">Múltiplas áreas</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="disponibilidade">Disponibilidade *</label>
                <select
                  id="disponibilidade"
                  name="disponibilidade"
                  value={formData.disponibilidade}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione sua disponibilidade</option>
                  <option value="manha">Manhã</option>
                  <option value="tarde">Tarde</option>
                  <option value="noite">Noite</option>
                  <option value="fds">Fins de semana</option>
                  <option value="flexivel">Horário flexível</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="habilidades">Habilidades especiais</label>
                <textarea
                  id="habilidades"
                  name="habilidades"
                  value={formData.habilidades}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Conte sobre suas habilidades, talentos ou conhecimentos específicos"
                ></textarea>
              </div>
            </div>

            <div className="form-section">
              <h4>Sua motivação</h4>
              <div className="form-field">
                <label htmlFor="experiencia">Experiência anterior com voluntariado</label>
                <textarea
                  id="experiencia"
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Conte sobre suas experiências anteriores (se houver)"
                ></textarea>
              </div>

              <div className="form-field">
                <label htmlFor="motivacao">Por que quer ser voluntárie na Nossa Casa? *</label>
                <textarea
                  id="motivacao"
                  name="motivacao"
                  value={formData.motivacao}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Compartilhe sua motivação conosco"
                  required
                ></textarea>
              </div>
            </div>

            <div className="form-actions">
              <Button type="submit" variant="fill" className="submit-btn">
                Quero ser voluntárie!
              </Button>
              <p className="form-note">
                * Entraremos em contato em até 48h para agendar uma conversa inicial
              </p>
            </div>
          </form>
        </div>

        {/* Informações importantes */}
        <div className="info-voluntario mt-32">
          <h3>Informações importantes</h3>
          <div className="info-cards">
            <div className="info-card">
              <h4><ClockIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Compromisso</h4>
              <p>Pedimos um compromisso mínimo de 3 meses para garantir continuidade nos projetos.</p>
            </div>
            <div className="info-card">
              <h4><ClipboardIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Processo</h4>
              <p>Após a inscrição, fazemos uma conversa para alinhar expectativas e definir atividades.</p>
            </div>
            <div className="info-card">
              <h4><GraduationCapIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Capacitação</h4>
              <p>Oferecemos orientação inicial e capacitações específicas para cada área.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Voluntarie;