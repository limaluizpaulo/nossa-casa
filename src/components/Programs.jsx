import Card from './Card';

const Programs = () => {
  const programsData = [
    {
      title: "Ateliê Comunitário",
      description: "Cursos de pintura, colagem, gravura e exposições mensais.",
      badge: "Arte",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1600&auto=format&fit=crop",
      alt: "Pessoas pintando juntas em ateliê comunitário com pincéis e telas coloridas"
    },
    {
      title: "Rede de Terapias",
      description: "Terapias integrativas, escuta qualificada e grupos de apoio.",
      badge: "Cuidado",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop",
      alt: "Grupo terapêutico em círculo, demonstrando cuidado e escuta ativa entre participantes"
    },
    {
      title: "Coletivo Jovem",
      description: "Produção musical, vídeo e introdução a tecnologia criativa.",
      badge: "Juventude",
      image: "https://images.unsplash.com/photo-1512426523407-1cb2b3c3b5d4?q=80&w=1600&auto=format&fit=crop",
      alt: "Jovens trabalhando com equipamentos de música e vídeo em oficina de tecnologia criativa"
    },
    {
      title: "Biblioteca Viva",
      description: "Acervo comunitário e clubes de leitura com mediação.",
      badge: "Leitura",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      alt: "Biblioteca comunitária com pessoas lendo e participando de clube de leitura"
    },
    {
      title: "Feira & Oficinas",
      description: "Troca solidária e formação em empreendedorismo criativo.",
      badge: "Economia",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop",
      alt: "Feira comunitária com produtos locais e pessoas participando de troca solidária"
    },
    {
      title: "Residências & Mostras",
      description: "Convocatórias trimestrais para artistas e coletivos.",
      badge: "Residência",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop",
      alt: "Artista em residência trabalhando em obra para mostra cultural comunitária"
    }
  ];

  return (
    <section id="programas" className="section" aria-labelledby="programs-title">
      <div className="wrap">
        <div className="kicker">
          <span className="rule" aria-hidden="true"></span>
          Programas
        </div>
        <h2 id="programs-title" className="section__title">O que acontece na Nossa Casa</h2>
        <div className="programs mt-24" role="list">
          {programsData.map((program, index) => (
            <Card key={index} className="program" role="listitem">
              <figure>
                <img src={program.image} alt={program.alt} loading="lazy" />
              </figure>
              <span className="badge" aria-label={`Categoria: ${program.badge}`}>{program.badge}</span>
              <div className="pbody">
                <h3>{program.title}</h3>
                <p className="note">{program.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;