import FaciliteOficina from '../components/FaciliteOficina';
import { ScrollProgress } from '../hooks/useAnimations';
import PageHero from '../components/PageHero';

const FacilitarPage = () => {
  return (
    <div className="page-container facilitar-page">
      <ScrollProgress />
      <PageHero
        eyebrow="Facilitadores"
        title={<>
          Facilite uma <span className="highlight">oficina</span>
        </>}
        description="Quer compartilhar seu conhecimento? Envie sua proposta e construa com a gente."
        imageSrc="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&auto=format&fit=crop"
        imageAlt="Pessoa facilitando oficina em espaço criativo"
        caption="Conhecimento que circula"
      />
      <FaciliteOficina />
    </div>
  );
};

export default FacilitarPage;