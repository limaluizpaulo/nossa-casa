import QuemSomos from '../components/QuemSomos';
import { ScrollProgress } from '../hooks/useAnimations';
import PageHero from '../components/PageHero';

const Sobre = () => {
  return (
    <div className="page-container sobre-page">
      <ScrollProgress />
      <PageHero
        eyebrow="Sobre a Nossa Casa"
        title={<>
          Quem somos e nossa <span className="highlight">história</span>
        </>}
        description="Um centro cultural independente em Guarulhos-SP dedicado à arte, educação e transformação social comunitária."
  imageSrc="/images/heros/sobre.svg"
        imageAlt="Encontro comunitário em espaço cultural com pessoas diversas"
        caption="Comunidade em encontro na Nossa Casa"
      />
      <QuemSomos />
    </div>
  );
};

export default Sobre;