import Doe from '../components/Doe';
import { ScrollProgress } from '../hooks/useAnimations';
import PageHero from '../components/PageHero';

const DoePage = () => {
  return (
    <div className="page-container">
      <ScrollProgress />
      <PageHero
        eyebrow="Apoie a Nossa Casa"
        title={<>
          Faça uma <span className="highlight">doação</span>
        </>}
        description="Sua contribuição mantém nossas atividades gratuitas e acessíveis para quem mais precisa."
  imageSrc="/images/heros/doe.svg"
        imageAlt="Mãos diversas unidas em gesto de apoio e solidariedade"
        caption="Toda ajuda faz a diferença"
      />
      <Doe />
    </div>
  );
};

export default DoePage;