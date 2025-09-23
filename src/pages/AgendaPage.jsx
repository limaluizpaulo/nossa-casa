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
        imageSrc="https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1600&auto=format&fit=crop"
        imageAlt="Palco com iluminação e público em evento cultural"
        caption="Eventos que movimentam a comunidade"
      />
      <Agenda />
    </div>
  );
};

export default AgendaPage;