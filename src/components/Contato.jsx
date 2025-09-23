import { useState } from 'react';
import Button from './Button';
import { AnimateOnScroll } from '../hooks/useAnimations';
import { PhoneIcon, MailIcon, FileTextIcon, SmartphoneIcon, MapPinIcon, ClockIcon, CheckIcon, HeartIcon, GlobeIcon, BusIcon, CarIcon, AccessibilityIcon, CameraIcon, VideoIcon, MusicIcon, BookOpenIcon } from './Icons';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const [formularioEnviado, setFormularioEnviado] = useState(false);

  const contatos = [
    {
      tipo: "Endereço",
      icone: "📍",
      info: "Rua das Artes, 123 - Planaltina, DF",
      complemento: "CEP: 73000-000",
      acao: "Como chegar"
    },
    {
      tipo: "Telefone",
      icone: "📞",
      info: "(61) 3333-4444",
      complemento: "Atendimento: Segunda a sexta, 8h às 18h",
      acao: "Ligar agora"
    },
    {
      tipo: "WhatsApp",
      icone: "📱",
      info: "(61) 99999-9999",
      complemento: "Resposta em até 2 horas",
      acao: "Enviar mensagem"
    },
    {
      tipo: "Email geral",
      icone: "📧",
      info: "nossacasaat@gmail.com",
      complemento: "Para informações gerais",
      acao: "Enviar email"
    }
  ];

  const contatosEspecificos = [
    {
      area: "Parceria e colaboração",
      email: "parcerias@nossacasaat.org.br",
      responsavel: "Ana Silva"
    },
    {
      area: "Oficinas e cursos",
      email: "oficinas@nossacasaat.org.br", 
      responsavel: "Carlos Santos"
    },
    {
      area: "Eventos e produção",
      email: "eventos@nossacasaat.org.br",
      responsavel: "Marina Oliveira"
    },
    {
      area: "Voluntariado",
      email: "voluntarios@nossacasaat.org.br",
      responsavel: "João Pedro"
    },
    {
      area: "Transparência e denúncias",
      email: "transparencia@nossacasaat.org.br",
      responsavel: "Conselho Fiscal"
    },
    {
      area: "Imprensa",
      email: "imprensa@nossacasaat.org.br",
      responsavel: "Luana Costa"
    }
  ];

  const redesSociais = [
    {
      rede: "Instagram",
      usuario: "@nossacasa_at",
      url: "https://instagram.com/nossacasa_at",
      icone: <CameraIcon size={20} />,
      seguidores: "2.5k"
    },
    {
      rede: "Facebook",
      usuario: "Nossa Casa ",
      url: "https://facebook.com/nossacasaplanaltina",
      icone: <BookOpenIcon size={20} />,
      seguidores: "1.8k"
    },
    {
      rede: "YouTube",
      usuario: "Nossa Casa Cultural",
      url: "https://youtube.com/nossacasacultural",
      icone: <VideoIcon size={20} />,
      seguidores: "850"
    },
    {
      rede: "TikTok",
      usuario: "@nossacasa_df",
      url: "https://tiktok.com/@nossacasa_df",
      icone: <MusicIcon size={20} />,
      seguidores: "1.2k"
    }
  ];

  const horariosFuncionamento = [
    { dia: "Segunda-feira", horario: "8h às 18h", atividades: "Administração e oficinas" },
    { dia: "Terça-feira", horario: "8h às 22h", atividades: "Oficinas e eventos" },
    { dia: "Quarta-feira", horario: "8h às 18h", atividades: "Oficinas e atendimento" },
    { dia: "Quinta-feira", horario: "8h às 22h", atividades: "Oficinas e saraus" },
    { dia: "Sexta-feira", horario: "8h às 18h", atividades: "Oficinas e reuniões" },
    { dia: "Sábado", horario: "9h às 17h", atividades: "Eventos e atividades especiais" },
    { dia: "Domingo", horario: "Fechado", atividades: "Exceto eventos especiais" }
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
    console.log('Formulário de contato:', formData);
    setFormularioEnviado(true);
    
    // Reset form após 3 segundos
    setTimeout(() => {
      setFormularioEnviado(false);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
      });
    }, 3000);
  };

  return (
    <section id="contato" className="section contato-section" aria-labelledby="contato-title">
      <div className="wrap">
        <AnimateOnScroll animation="fade-up" delay={0}>
          <div className="kicker">
            <span className="rule" aria-hidden="true"></span>
            Contato
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <h2 id="contato-title" className="section__title">
            Fale Conosco
          </h2>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fade-up" delay={400}>
          <p className="lead">
            Estamos aqui para ouvir você! Entre em contato conosco para tirar dúvidas, 
            fazer sugestões, propor parcerias ou simplesmente bater um papo sobre arte, cultura e transformação social.
          </p>
        </AnimateOnScroll>

        {/* Informações principais de contato */}
        <AnimateOnScroll animation="fade-up" delay={600}>
          <div className="contatos-principais mt-32">
            <div className="contatos-grid">
              {contatos.map((contato, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={800 + (index * 100)}>
                  <div className="contato-card">
                    <h3>
                      {contato.icone === "📞" && <PhoneIcon size={24} style={{display: 'inline', marginRight: '8px'}} />}
                      {contato.icone === "📱" && <SmartphoneIcon size={24} style={{display: 'inline', marginRight: '8px'}} />}
                      {contato.icone === "📧" && <MailIcon size={24} style={{display: 'inline', marginRight: '8px'}} />}
                      {contato.icone === "📍" && <MapPinIcon size={24} style={{display: 'inline', marginRight: '8px'}} />}
                      {contato.tipo}
                    </h3>
                    <p className="contato-info">{contato.info}</p>
                    <p className="contato-complemento">{contato.complemento}</p>
                    <Button variant="outline" size="small">
                      {contato.acao}
                    </Button>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Horário de funcionamento */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="horario-funcionamento mt-48">
            <h3><ClockIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Horário de funcionamento</h3>
            <div className="horarios-container">
              <div className="horarios-lista">
                {horariosFuncionamento.map((horario, index) => (
                  <AnimateOnScroll key={index} animation="fade-up" delay={600 + (index * 50)}>
                    <div className="horario-item">
                      <div className="horario-dia">{horario.dia}</div>
                      <div className="horario-horas">{horario.horario}</div>
                      <div className="horario-atividades">{horario.atividades}</div>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
              <AnimateOnScroll animation="fade-up" delay={800}>
                <div className="horarios-observacoes">
                  <h4><FileTextIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Observações importantes</h4>
                  <ul>
                    <li>Feriados: funcionamento especial (consulte agenda)</li>
                    <li>Férias coletivas: geralmente na última semana de dezembro</li>
                    <li>Eventos especiais podem alterar horários</li>
                    <li>Atendimento preferencial com agendamento</li>
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Formulário de contato */}
        <AnimateOnScroll animation="fade-up" delay={600}>
          <div className="formulario-contato mt-48">
            <h3><FileTextIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Envie sua mensagem</h3>
            <div className="form-container">
              {formularioEnviado ? (
                <div className="mensagem-sucesso">
                  <h4><CheckIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Mensagem enviada com sucesso!</h4>
                  <p>Obrigado pelo contato! Responderemos em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="form-contato">
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
                      <label htmlFor="telefone">Telefone/WhatsApp</label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="assunto">Assunto *</label>
                      <select
                        id="assunto"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Selecione um assunto</option>
                        <option value="informacoes">Informações gerais</option>
                        <option value="oficinas">Oficinas e cursos</option>
                        <option value="eventos">Eventos</option>
                        <option value="voluntariado">Voluntariado</option>
                        <option value="parcerias">Parcerias</option>
                        <option value="doacao">Doações</option>
                        <option value="aluguel">Aluguel de espaço</option>
                        <option value="imprensa">Imprensa</option>
                        <option value="sugestao">Sugestões</option>
                        <option value="reclamacao">Reclamação</option>
                        <option value="outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="mensagem">Mensagem *</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      rows="6"
                      placeholder="Escreva sua mensagem aqui..."
                      required
                    ></textarea>
                  </div>

                  <div className="form-actions">
                    <Button type="submit" variant="fill">
                      Enviar mensagem
                    </Button>
                    <p className="form-note">
                      * Respondemos em até 48h úteis
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Contatos específicos por área */}
        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="contatos-especificos mt-48">
            <h3><MailIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Contatos por área</h3>
            <div className="especificos-grid">
              {contatosEspecificos.map((contato, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={600 + (index * 100)}>
                  <div className="especifico-card">
                    <h4>{contato.area}</h4>
                    <p className="especifico-email">{contato.email}</p>
                    <p className="especifico-responsavel">
                      Responsável: {contato.responsavel}
                    </p>
                    <Button variant="outline" size="small">
                      Enviar email
                    </Button>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Redes sociais */}
        <AnimateOnScroll animation="fade-up" delay={600}>
          <div className="redes-sociais mt-48">
            <h3><GlobeIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Siga-nos nas redes sociais</h3>
            <div className="redes-grid">
              {redesSociais.map((rede, index) => (
                <AnimateOnScroll key={index} animation="fade-up" delay={800 + (index * 100)}>
                  <div className="rede-card">
                    <div className="rede-icone">{rede.icone}</div>
                    <h4>{rede.rede}</h4>
                    <p className="rede-usuario">{rede.usuario}</p>
                    <p className="rede-seguidores">{rede.seguidores} seguidores</p>
                    <Button 
                      variant="outline" 
                      size="small"
                      onClick={() => window.open(rede.url, '_blank')}
                    >
                      Seguir
                    </Button>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Mapa e localização */}
        <AnimateOnScroll animation="fade-up" delay={800}>
          <div className="mapa-localizacao mt-48">
            <h3><MapPinIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Como chegar</h3>
            <div className="mapa-container">
              <AnimateOnScroll animation="fade-up" delay={1000}>
                <div className="mapa-placeholder">
                  {/* Aqui seria integrado um mapa real (Google Maps, OpenStreetMap, etc.) */}
                  <div className="mapa-info">
                    <h4>Nossa Casa - Centro Cultural</h4>
                    <p>Rua das Artes, 123 - Guarulhos, SP</p>
                    <p>CEP: 73000-000</p>
                    <Button variant="fill">
                      Abrir no Google Maps
                    </Button>
                  </div>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fade-up" delay={1200}>
                <div className="transporte-info">
                  <h4><BusIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Transporte público</h4>
                  <ul>
                    <li><strong>Ônibus:</strong> Linhas 123, 456, 789</li>
                    <li><strong>Ponto mais próximo:</strong> Praça Central (200m)</li>
                    <li><strong>Metrô:</strong> Estação Planaltina (2km)</li>
                  </ul>

                  <h4><CarIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> De carro</h4>
                  <ul>
                    <li>Estacionamento gratuito na rua</li>
                    <li>Estacionamento do shopping (pago, 500m)</li>
                    <li>Vaga para pessoas com deficiência disponível</li>
                  </ul>

                  <h4><AccessibilityIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Acessibilidade</h4>
                  <ul>
                    <li>Entrada principal com rampa</li>
                    <li>Banheiro adaptado</li>
                    <li>Elevador para o segundo andar</li>
                    <li>Vagas preferenciais</li>
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Call to action final */}
        <AnimateOnScroll animation="fade-up" delay={1000}>
          <div className="contato-cta mt-48">
            <div className="cta-content">
              <h3><HeartIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Venha nos conhecer!</h3>
              <p>
                A melhor forma de conhecer a Nossa Casa é visitando nosso espaço. 
                Que tal agendar uma visita ou participar de uma de nossas atividades?
              </p>
              <div className="cta-actions">
                <Button variant="fill">
                  Agendar visita
                </Button>
                <Button variant="outline">
                  Ver agenda de eventos
                </Button>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Contato;