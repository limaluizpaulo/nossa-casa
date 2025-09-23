import AluguelEspaco from '../components/AluguelEspaco';
import { ScrollProgress } from '../hooks/useAnimations';
import PageHero from '../components/PageHero';

const AluguelPage = () => {
  return (
    <div className="page-container">
      <ScrollProgress />
      <PageHero
        eyebrow="Espaços para eventos"
        title={<>
          Aluguel de <span className="highlight">espaços</span>
        </>}
        description="Ambientes equipados e acolhedores para encontros, oficinas, reuniões e celebrações."
        imageSrc="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1600&auto=format&fit=crop"
        imageAlt="Espaço interno iluminado preparado para evento comunitário"
        caption="Seu evento com a energia da Nossa Casa"
      />
      <AluguelEspaco />
    </div>
  );
};

export default AluguelPage;