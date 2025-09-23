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
  imageSrc="/images/heros/aluguel.svg"
        imageAlt="Espaço interno acolhedor preparado para evento comunitário"
        caption="Seu evento com a energia da Nossa Casa"
      />
      <AluguelEspaco />
    </div>
  );
};

export default AluguelPage;