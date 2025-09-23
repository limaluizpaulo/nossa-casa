import Voluntarie from '../components/Voluntarie';
import { ScrollProgress } from '../hooks/useAnimations';
import PageHero from '../components/PageHero';

const VoluntariadoPage = () => {
  return (
    <div className="page-container">
      <ScrollProgress />
      <PageHero
        eyebrow="Participe"
        title={<>
          Seja <span className="highlight">voluntárie</span>
        </>}
        description="Doe seu tempo e talento para fortalecer nossa rede de cuidado e cultura."
  imageSrc="/images/heros/voluntariado.svg"
        imageAlt="Grupo de voluntáries diversos sorrindo após ação comunitária"
        caption="Juntes fazemos mais"
      />
      <Voluntarie />
    </div>
  );
};

export default VoluntariadoPage;