import { useState } from 'react';
import Button from './Button';

const OficinasVivencias = () => {
  const [activeTab, setActiveTab] = useState('atuais');
  const [selectedOficina, setSelectedOficina] = useState(null);

  const oficinasAtuais = [
    {
      id: 1,
      titulo: "Compostagem Doméstica",
      facilitadora: "Natasha Itai Miyamoto",
      categoria: "Sustentabilidade",
      descricao: "Aprenda a transformar resíduos orgânicos em vida! Uma oficina prática sobre sustentabilidade urbana e cuidado com o planeta.",
      detalhes: "Nesta oficina, você vai aprender técnicas simples de compostagem que podem ser aplicadas em casa, apartamento ou comunidade. Vamos abordar tipos de composteiras, materiais necessários e como manter um ciclo sustentável.",
      duracao: "3 horas",
      valor: "Gratuito",
      materiais: "Fornecidos pela facilitadora",
      proximasDatasets: ["15/10/2024", "22/10/2024", "29/10/2024"],
      imagem: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: 2,
      titulo: "Artes Acessíveis",
      facilitadora: "Ricardo (Cadeirarte)",
      categoria: "Arte Inclusiva",
      descricao: "Pintura artística acessível e cheia de imaginação. Arte para todes os corpos, adaptada para diferentes necessidades.",
      detalhes: "Uma oficina que celebra a diversidade através da arte. Utilizamos técnicas adaptadas para pessoas com deficiência, mostrando que a criatividade não tem limites. Venha descobrir novas formas de se expressar!",
      duracao: "2 horas",
      valor: "R$ 20 (bolsas disponíveis)",
      materiais: "Inclusos",
      proximasDatasets: ["18/10/2024", "25/10/2024"],
      imagem: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: 3,
      titulo: "Valorize Suas Feridas",
      facilitadora: "Dono Julian",
      categoria: "Cura e Arte",
      descricao: "Oficina criativa para refletir sobre marcas e vivências. Um espaço de cura através da arte e da expressão pessoal.",
      detalhes: "Usando arte como ferramenta terapêutica, vamos transformar dores em potência criativa. Um espaço seguro para elaborar traumas e celebrar nossa resistência através da criação artística.",
      duracao: "3 horas",
      valor: "R$ 30 (bolsas disponíveis)",
      materiais: "Fornecidos",
      proximasDatasets: ["20/10/2024", "03/11/2024"],
      imagem: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1600&auto=format&fit=crop"
    },
    {
      id: 4,
      titulo: "Escrita Criativa Periférica",
      facilitadora: "Coletivo Palavra Viva",
      categoria: "Literatura",
      descricao: "Desenvolva sua voz autoral através da escrita. Um espaço para contar nossas histórias da periferia com potência e poesia.",
      detalhes: "Oficina de escrita criativa focada em narrativas periféricas. Vamos explorar diferentes gêneros literários, técnicas de escrita e criar um espaço de compartilhamento de textos autorais.",
      duracao: "2h30",
      valor: "R$ 25",
      materiais: "Caderno e caneta (pode ser fornecido)",
      proximasDatasets: ["23/10/2024", "30/10/2024", "06/11/2024"],
      imagem: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1600&auto=format&fit=crop"
    }
  ];

  const terapiasIntegrativas = [
    {
      id: 5,
      titulo: "Roda de Conversa: Saúde Mental",
      facilitadora: "Camila Bitencourt",
      categoria: "Terapia Comunitária",
      descricao: "Espaço de escuta qualificada e troca sobre cuidado em saúde mental para pessoas periféricas e LGBTQIAPN+.",
      duracao: "2 horas",
      valor: "Gratuito",
      tipo: "Grupo aberto"
    },
    {
      id: 6,
      titulo: "Yoga Ancestral",
      facilitadora: "Mestra Yara",
      categoria: "Movimento e Cura",
      descricao: "Prática de yoga que honra saberes ancestrais africanos e indígenas, conectando corpo, mente e espiritualidade.",
      duracao: "1h30",
      valor: "R$ 15",
      tipo: "Prática regular"
    },
    {
      id: 7,
      titulo: "Reiki Comunitário",
      facilitadora: "Terapeuta Luana",
      categoria: "Energia e Cura",
      descricao: "Sessões de reiki em grupo, promovendo equilíbrio energético e bem-estar coletivo.",
      duracao: "1 hora",
      valor: "Contribuição consciente",
      tipo: "Atendimento grupal"
    }
  ];

  const handleInscricao = (oficina) => {
    // Aqui seria implementada a lógica de inscrição
    alert(`Inscrição na oficina "${oficina.titulo}" será processada. Em breve você receberá mais informações!`);
  };

  return (
    <section id="oficinas" className="section oficinas-section" aria-labelledby="oficinas-title">
      <div className="wrap">
        <div className="kicker">
          <span className="rule" aria-hidden="true"></span>
          Oficinas & Vivências
        </div>
        <h2 id="oficinas-title" className="section__title">
          Oficinas culturais, terapias integrativas e práticas de autocuidado
        </h2>
        
        <p className="lead">
          Nossos encontros são acessíveis e abertos à comunidade. Aqui você encontra espaços de arte, aprendizado, cura e fortalecimento coletivo.
        </p>

        {/* Navegação por abas */}
        <div className="oficinas-tabs mt-32">
          <button 
            className={`tab-btn ${activeTab === 'atuais' ? 'active' : ''}`}
            onClick={() => setActiveTab('atuais')}
          >
            🎨 Oficinas Culturais
          </button>
          <button 
            className={`tab-btn ${activeTab === 'terapias' ? 'active' : ''}`}
            onClick={() => setActiveTab('terapias')}
          >
            💜 Terapias Integrativas
          </button>
        </div>

        {/* Oficinas Culturais */}
        {activeTab === 'atuais' && (
          <div className="oficinas-grid mt-32">
            {oficinasAtuais.map(oficina => (
              <article key={oficina.id} className="oficina-card">
                <figure className="oficina-image">
                  <img src={oficina.imagem} alt={oficina.titulo} loading="lazy" />
                  <div className="oficina-categoria">{oficina.categoria}</div>
                </figure>
                
                <div className="oficina-content">
                  <h3>{oficina.titulo}</h3>
                  <p className="oficina-facilitadora">com {oficina.facilitadora}</p>
                  <p className="oficina-descricao">{oficina.descricao}</p>
                  
                  <div className="oficina-detalhes">
                    <div className="detalhe-item">
                      <strong>⏰ Duração:</strong> {oficina.duracao}
                    </div>
                    <div className="detalhe-item">
                      <strong>💰 Valor:</strong> {oficina.valor}
                    </div>
                    <div className="detalhe-item">
                      <strong>🎒 Materiais:</strong> {oficina.materiais}
                    </div>
                  </div>

                  {oficina.proximasDatasets && (
                    <div className="proximas-datas">
                      <strong>📅 Próximas datas:</strong>
                      <div className="datas-lista">
                        {oficina.proximasDatasets.map((data, index) => (
                          <span key={index} className="data-chip">{data}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="oficina-actions">
                    <Button 
                      variant="fill" 
                      onClick={() => handleInscricao(oficina)}
                    >
                      Inscreva-se
                    </Button>
                    <button 
                      className="btn-detalhes"
                      onClick={() => setSelectedOficina(selectedOficina === oficina.id ? null : oficina.id)}
                      aria-expanded={selectedOficina === oficina.id}
                    >
                      {selectedOficina === oficina.id ? 'Ocultar' : 'Ver mais'} detalhes
                    </button>
                  </div>

                  {selectedOficina === oficina.id && (
                    <div className="oficina-detalhes-expandido">
                      <h4>Sobre a oficina</h4>
                      <p>{oficina.detalhes}</p>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Terapias Integrativas */}
        {activeTab === 'terapias' && (
          <div className="terapias-grid mt-32">
            {terapiasIntegrativas.map(terapia => (
              <article key={terapia.id} className="terapia-card">
                <div className="terapia-header">
                  <div className="terapia-categoria">{terapia.categoria}</div>
                  <div className="terapia-tipo">{terapia.tipo}</div>
                </div>
                
                <h3>{terapia.titulo}</h3>
                <p className="terapia-facilitadora">com {terapia.facilitadora}</p>
                <p className="terapia-descricao">{terapia.descricao}</p>
                
                <div className="terapia-info">
                  <div className="info-item">
                    <strong>⏰ Duração:</strong> {terapia.duracao}
                  </div>
                  <div className="info-item">
                    <strong>💰 Valor:</strong> {terapia.valor}
                  </div>
                </div>
                
                <Button variant="accent" onClick={() => handleInscricao(terapia)}>
                  Participar
                </Button>
              </article>
            ))}
          </div>
        )}

        {/* Formulário de interesse */}
        <div className="interesse-form mt-48">
          <h3>Lista de interesse para oficinas futuras</h3>
          <p>Deixe seu contato e preferências. Te avisaremos sobre novas oficinas que podem te interessar!</p>
          
          <form className="form-interesse">
            <div className="form-row">
              <input type="text" placeholder="Seu nome" required />
              <input type="email" placeholder="Seu email" required />
            </div>
            <div className="form-row">
              <select required>
                <option value="">Áreas de interesse</option>
                <option value="arte">Artes Visuais</option>
                <option value="musica">Música</option>
                <option value="literatura">Literatura</option>
                <option value="teatro">Teatro</option>
                <option value="sustentabilidade">Sustentabilidade</option>
                <option value="terapia">Terapias</option>
                <option value="tecnologia">Tecnologia</option>
                <option value="empreendedorismo">Empreendedorismo</option>
              </select>
              <select>
                <option value="">Disponibilidade</option>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
                <option value="fds">Fins de semana</option>
              </select>
            </div>
            <Button type="submit" variant="secondary">
              Cadastrar interesse
            </Button>
          </form>
        </div>

        {/* Informações importantes */}
        <div className="oficinas-info mt-32">
          <div className="info-cards">
            <div className="info-card">
              <h4>💜 Bolsas sociais</h4>
              <p>Temos bolsas disponíveis para pessoas em vulnerabilidade social. Entre em contato conosco!</p>
            </div>
            <div className="info-card">
              <h4>♿ Acessibilidade</h4>
              <p>Nosso espaço é acessível e nossas oficinas são adaptadas para todes os corpos.</p>
            </div>
            <div className="info-card">
              <h4>🌱 Cuidado coletivo</h4>
              <p>Priorizamos um ambiente seguro, acolhedor e livre de qualquer tipo de violência.</p>
            </div>
          </div>
        </div>

        {/* CTA para facilitadores */}
        <div className="facilitadores-cta mt-48">
          <h3>Quer facilitar uma oficina na Nossa Casa?</h3>
          <p>Se você tem saberes para compartilhar, venha fazer parte da nossa programação!</p>
          <Button variant="accent" href="#facilite" className="mt-24">
            Facilite uma oficina
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OficinasVivencias;