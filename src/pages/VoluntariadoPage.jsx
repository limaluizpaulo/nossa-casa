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
        imageSrc="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&auto=format&fit=crop"
        imageAlt="Grupo de voluntários sorrindo após ação comunitária"
        caption="Juntes fazemos mais"
      />
      <Voluntarie />
    </div>
  );
};

export default VoluntariadoPage;