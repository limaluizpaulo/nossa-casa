import { useState } from 'react';
import Button from './Button';
import { RainbowIcon, PaletteIcon, HeartIcon, PartyIcon, BookOpenIcon, ShoppingBagIcon, CalendarIcon, ClipboardIcon, ClockIcon, UsersIcon, ShareIcon } from './Icons';

const Agenda = () => {
  const [viewMode, setViewMode] = useState('month');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const atividades = [
    {
      id: 1,
      titulo: "Oficina de Compostagem",
      facilitador: "Natasha Itai Miyamoto",
      data: "2024-10-15",
      horario: "14:00 - 17:00",
      categoria: "oficinas",
      descricao: "Aprenda a transformar resíduos orgânicos em vida! Uma oficina prática sobre sustentabilidade.",
      vagas: 15,
      valor: "Gratuito"
    },
    {
      id: 2,
      titulo: "Artes com Cadeirarte",
      facilitador: "Ricardo (Cadeirarte)",
      data: "2024-10-18",
      horario: "10:00 - 12:00",
      categoria: "oficinas",
      descricao: "Pintura artística acessível e cheia de imaginação. Arte para todes os corpos.",
      vagas: 10,
      valor: "R$ 20"
    },
    {
      id: 3,
      titulo: "Valorize Suas Feridas",
      facilitador: "Dono Julian",
      data: "2024-10-20",
      horario: "15:00 - 18:00",
      categoria: "terapias",
      descricao: "Oficina criativa para refletir sobre marcas e vivências. Um espaço de cura e arte.",
      vagas: 8,
      valor: "R$ 30"
    },
    {
      id: 4,
      titulo: "Sarau Periférico",
      facilitador: "Coletivo Nossa Casa",
      data: "2024-10-25",
      horario: "19:00 - 22:00",
      categoria: "saraus",
      descricao: "Noite de poesia, música e resistência. Venha compartilhar sua arte conosco.",
      vagas: 50,
      valor: "Contribuição voluntária"
    },
    {
      id: 5,
      titulo: "Festival LGBTQIAPN+ Guarulhos",
      facilitador: "Equipe Nossa Casa",
      data: "2024-11-02",
      horario: "14:00 - 20:00",
      categoria: "festivais",
      descricao: "Celebração da diversidade com shows, oficinas e feira de economia criativa.",
      vagas: 200,
      valor: "Gratuito"
    },
    {
      id: 6,
      titulo: "Roda de Conversa: Saúde Mental na Periferia",
      facilitador: "Camila Bitencourt",
      data: "2024-11-08",
      horario: "16:00 - 18:00",
      categoria: "terapias",
      descricao: "Espaço de escuta e troca sobre cuidado em saúde mental para pessoas periféricas.",
      vagas: 12,
      valor: "Gratuito"
    }
  ];

  const categorias = [
    { key: 'all', label: 'Todas', icon: <RainbowIcon size={20} /> },
    { key: 'oficinas', label: 'Oficinas', icon: <PaletteIcon size={20} /> },
    { key: 'terapias', label: 'Terapias', icon: <HeartIcon size={20} /> },
    { key: 'festivais', label: 'Festivais', icon: <PartyIcon size={20} /> },
    { key: 'saraus', label: 'Saraus', icon: <BookOpenIcon size={20} /> },
    { key: 'feiras', label: 'Feiras', icon: <ShoppingBagIcon size={20} /> }
  ];

  const atividadesFiltradas = selectedFilter === 'all' 
    ? atividades 
    : atividades.filter(atividade => atividade.categoria === selectedFilter);

  const formatarData = (data) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="agenda" className="section agenda-section" aria-labelledby="agenda-title">
      <div className="wrap">
        <div className="kicker">
          <span className="rule" aria-hidden="true"></span>
          Agenda de Atividades
        </div>
        <h2 id="agenda-title" className="section__title">
          Confira nossa programação de arte, autocuidado e resistência
        </h2>
        
        <p className="lead">
          Nossa agenda é viva e diversa, feita para todes. Participe de oficinas, vivências, saraus, festivais e rodas de conversa que transformam nossa comunidade.
        </p>

        {/* Filtros por categoria */}
        <div className="agenda-filters mt-32">
          <h3>Filtrar por categoria:</h3>
          <div className="filter-buttons">
            {categorias.map(categoria => (
              <button
                key={categoria.key}
                className={`filter-btn ${selectedFilter === categoria.key ? 'active' : ''}`}
                onClick={() => setSelectedFilter(categoria.key)}
                aria-pressed={selectedFilter === categoria.key}
              >
                <span className="filter-icon">{categoria.icon}</span>
                {categoria.label}
              </button>
            ))}
          </div>
        </div>

        {/* Visualização da agenda */}
        <div className="agenda-view mt-32">
          <div className="view-controls">
            <button 
              className={`view-btn ${viewMode === 'month' ? 'active' : ''}`}
              onClick={() => setViewMode('month')}
            >
              <CalendarIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Mês
            </button>
            <button 
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              <ClipboardIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Lista
            </button>
          </div>

          {viewMode === 'list' && (
            <div className="atividades-grid mt-24">
              {atividadesFiltradas.map(atividade => (
                <article key={atividade.id} className="atividade-card">
                  <div className="atividade-header">
                    <div className="atividade-categoria">
                      {categorias.find(cat => cat.key === atividade.categoria)?.icon}
                      <span>{categorias.find(cat => cat.key === atividade.categoria)?.label}</span>
                    </div>
                    <div className="atividade-valor">{atividade.valor}</div>
                  </div>
                  
                  <h3 className="atividade-titulo">{atividade.titulo}</h3>
                  <p className="atividade-facilitador">com {atividade.facilitador}</p>
                  
                  <div className="atividade-info">
                    <div className="info-item">
                      <strong><CalendarIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Data:</strong> {formatarData(atividade.data)}
                    </div>
                    <div className="info-item">
                      <strong><ClockIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Horário:</strong> {atividade.horario}
                    </div>
                    <div className="info-item">
                      <strong><UsersIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Vagas:</strong> {atividade.vagas} pessoas
                    </div>
                  </div>
                  
                  <p className="atividade-descricao">{atividade.descricao}</p>
                  
                  <div className="atividade-actions">
                    <Button variant="fill" href={`#inscricao-${atividade.id}`}>
                      Inscreva-se
                    </Button>
                    <button className="btn-share" aria-label="Compartilhar atividade">
                      <ShareIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Compartilhar
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}

          {viewMode === 'month' && (
            <div className="calendar-view mt-24">
              <div className="calendar-placeholder">
                <div className="calendar-header">
                  <h3>Outubro 2024</h3>
                  <div className="calendar-nav">
                    <button>← Anterior</button>
                    <button>Próximo →</button>
                  </div>
                </div>
                <div className="calendar-grid">
                  <div className="calendar-weekdays">
                    <span>Dom</span><span>Seg</span><span>Ter</span><span>Qua</span><span>Qui</span><span>Sex</span><span>Sáb</span>
                  </div>
                  <div className="calendar-days">
                    {/* Aqui seria implementado um calendário real */}
                    <div className="calendar-note">
                      <CalendarIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Calendário interativo em desenvolvimento<br/>
                      <small>Por enquanto, use a visualização em lista para ver todas as atividades</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA final */}
        <div className="agenda-cta mt-48">
          <h3>Quer propor uma atividade?</h3>
          <p>Se você tem saberes para compartilhar, venha fazer parte da nossa programação!</p>
          <div className="cta-buttons mt-24">
            <Button variant="accent" href="/facilitar">Facilite uma oficina</Button>
            <Button href="#contato">Entre em contato</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;