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
        imageSrc="https://images.unsplash.com/photo-1515165562835-c3b8c6ae5f81?w=1600&auto=format&fit=crop"
        imageAlt="Mãos se unindo em gesto de apoio e solidariedade"
        caption="Toda ajuda faz a diferença"
      />
      <Doe />
    </div>
  );
};

export default DoePage;