import Agenda from '../components/Agenda';
import { ScrollProgress } from '../hooks/useAnimations';
import PageHero from '../components/PageHero';

const AgendaPage = () => {
  return (
    <div className="page-container agenda-page">
      <ScrollProgress />
      <PageHero
        eyebrow="Programação"
        title={<>
          Nossa <span className="highlight">agenda</span> de eventos
        </>}
        description="Confira os próximos encontros, oficinas, rodas de conversa e apresentações."
  imageSrc="/images/heros/agenda.jpeg"
        imageAlt="Palco com iluminação e público diverso em evento cultural"
        caption="Eventos que movimentam a comunidade"
      />
      <Agenda />
    </div>
  );
};

export default AgendaPage;