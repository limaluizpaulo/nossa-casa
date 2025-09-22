import { useState } from 'react';
import Button from './Button';

const AluguelEspaco = () => {
  const [selectedPackage, setSelectedPackage] = useState('basico');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    data: '',
    horario: '',
    tipoEvento: '',
    numeropessoas: '',
    observacoes: ''
  });

  const pacotes = [
    {
      id: 'basico',
      nome: 'Espaço Básico',
      preco: 'R$ 200',
      periodo: 'por 4 horas',
      inclusos: [
        'Uso do espaço principal',
        'Cadeiras para 50 pessoas',
        'Mesa de apoio',
        'Acesso à cozinha',
        'Limpeza incluída'
      ]
    },
    {
      id: 'completo',
      nome: 'Espaço + Som',
      preco: 'R$ 350',
      periodo: 'por 4 horas',
      inclusos: [
        'Tudo do pacote básico',
        'Sistema de som completo',
        'Microfones (2 unidades)',
        'Projetor e tela',
        'Suporte técnico'
      ]
    },
    {
      id: 'premium',
      nome: 'Espaço + Serviços',
      preco: 'R$ 500',
      periodo: 'por 4 horas',
      inclusos: [
        'Tudo do pacote completo',
        'Decoração básica',
        'Apoio na organização',
        'Registro fotográfico',
        'Coffee break simples'
      ]
    }
  ];

  const fotos = [
    {
      src: "https://images.unsplash.com/photo-1571909330392-adecb999da1a?q=80&w=1600&auto=format&fit=crop",
      alt: "Espaço principal da Nossa Casa com palco e cadeiras organizadas"
    },
    {
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1600&auto=format&fit=crop",
      alt: "Área de convivência acolhedora com plantas e decoração"
    },
    {
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop",
      alt: "Cozinha equipada disponível para eventos"
    },
    {
      src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
      alt: "Espaço configurado para oficinas e vivências"
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
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Dados do formulário:', formData);
    alert('Solicitação enviada! Entraremos em contato em breve.');
  };

  return (
    <section id="aluguel" className="section aluguel-section" aria-labelledby="aluguel-title">
      <div className="wrap">
        <div className="kicker">
          <span className="rule" aria-hidden="true"></span>
          Aluguel do Espaço
        </div>
        <h2 id="aluguel-title" className="section__title">
          Nosso espaço é território de afeto, cultura e ancestralidade
        </h2>
        
        <p className="lead">
          Aqui já aconteceram saraus, festivais, oficinas, terapias e encontros comunitários. 
          Agora você também pode realizar seu evento conosco e fazer parte dessa história de transformação.
        </p>

        {/* Galeria de fotos */}
        <div className="espaco-galeria mt-32">
          <h3>Conheça nosso espaço</h3>
          <div className="galeria-grid">
            {fotos.map((foto, index) => (
              <figure key={index} className="galeria-item">
                <img src={foto.src} alt={foto.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>

        {/* Estrutura disponível */}
        <div className="espaco-estrutura mt-48">
          <h3>Estrutura disponível</h3>
          <div className="estrutura-grid">
            <div className="estrutura-item">
              <span className="estrutura-icon">🎭</span>
              <h4>Palco</h4>
              <p>Espaço para apresentações e performances</p>
            </div>
            <div className="estrutura-item">
              <span className="estrutura-icon">🔊</span>
              <h4>Sistema de Som</h4>
              <p>Equipamento completo com microfones</p>
            </div>
            <div className="estrutura-item">
              <span className="estrutura-icon">🪑</span>
              <h4>Mobiliário</h4>
              <p>Cadeiras, mesas e espaços flexíveis</p>
            </div>
            <div className="estrutura-item">
              <span className="estrutura-icon">📽️</span>
              <h4>Projeção</h4>
              <p>Projetor e tela para apresentações</p>
            </div>
            <div className="estrutura-item">
              <span className="estrutura-icon">🍳</span>
              <h4>Cozinha</h4>
              <p>Espaço equipado para preparo de alimentos</p>
            </div>
            <div className="estrutura-item">
              <span className="estrutura-icon">🌿</span>
              <h4>Ambiente Acolhedor</h4>
              <p>Decoração que inspira criatividade e bem-estar</p>
            </div>
          </div>
        </div>

        {/* Pacotes e preços */}
        <div className="espaco-pacotes mt-48">
          <h3>Escolha seu pacote</h3>
          <div className="pacotes-grid">
            {pacotes.map(pacote => (
              <div 
                key={pacote.id} 
                className={`pacote-card ${selectedPackage === pacote.id ? 'selected' : ''}`}
                onClick={() => setSelectedPackage(pacote.id)}
              >
                <h4>{pacote.nome}</h4>
                <div className="pacote-preco">
                  <span className="preco">{pacote.preco}</span>
                  <span className="periodo">{pacote.periodo}</span>
                </div>
                <ul className="pacote-inclusos">
                  {pacote.inclusos.map((item, index) => (
                    <li key={index}>✓ {item}</li>
                  ))}
                </ul>
                <Button 
                  variant={selectedPackage === pacote.id ? "fill" : "default"}
                  className="w-full"
                >
                  {selectedPackage === pacote.id ? "Selecionado" : "Selecionar"}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Formulário de reserva */}
        <div className="reserva-form mt-48">
          <h3>Faça sua reserva</h3>
          <form onSubmit={handleSubmit} className="form-grid">
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
                <label htmlFor="tipoEvento">Tipo de evento *</label>
                <select
                  id="tipoEvento"
                  name="tipoEvento"
                  value={formData.tipoEvento}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Selecione...</option>
                  <option value="oficina">Oficina/Workshop</option>
                  <option value="sarau">Sarau/Apresentação</option>
                  <option value="festa">Festa/Celebração</option>
                  <option value="reuniao">Reunião/Encontro</option>
                  <option value="curso">Curso/Formação</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="data">Data preferencial *</label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  value={formData.data}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="horario">Horário *</label>
                <input
                  type="time"
                  id="horario"
                  name="horario"
                  value={formData.horario}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="numerosPessoas">Número aproximado de pessoas *</label>
              <input
                type="number"
                id="numerosPessoas"
                name="numerosPessoas"
                value={formData.numerosPessoas}
                onChange={handleInputChange}
                min="1"
                max="100"
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="observacoes">Observações adicionais</label>
              <textarea
                id="observacoes"
                name="observacoes"
                value={formData.observacoes}
                onChange={handleInputChange}
                rows="4"
                placeholder="Conte-nos mais sobre seu evento, necessidades especiais, etc."
              ></textarea>
            </div>

            <div className="form-actions">
              <Button type="submit" variant="fill" className="submit-btn">
                Solicitar Reserva
              </Button>
              <p className="form-note">
                * Entraremos em contato em até 24h para confirmar disponibilidade e detalhes de pagamento
              </p>
            </div>
          </form>
        </div>

        {/* Informações de pagamento */}
        <div className="pagamento-info mt-32">
          <h3>Formas de pagamento</h3>
          <div className="pagamento-opcoes">
            <div className="pagamento-opcao">
              <span className="pagamento-icon">💳</span>
              <div>
                <h4>Pix</h4>
                <p>Desconto de 5% para pagamento à vista</p>
              </div>
            </div>
            <div className="pagamento-opcao">
              <span className="pagamento-icon">💳</span>
              <div>
                <h4>Cartão de Crédito</h4>
                <p>Parcelamento em até 3x sem juros</p>
              </div>
            </div>
            <div className="pagamento-opcao">
              <span className="pagamento-icon">🤝</span>
              <div>
                <h4>Evento Colaborativo</h4>
                <p>Para eventos comunitários, podemos conversar sobre parcerias</p>
              </div>
            </div>
          </div>
        </div>

        {/* Impacto social */}
        <div className="impacto-social mt-32">
          <div className="impacto-card">
            <h3>💜 Ao alugar nosso espaço, você apoia a manutenção da Nossa Casa</h3>
            <p>
              Cada locação contribui para mantermos nossa programação de oficinas gratuitas, 
              atendimentos em saúde mental e eventos culturais para a comunidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AluguelEspaco;