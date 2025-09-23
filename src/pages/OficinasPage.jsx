import OficinasVivencias from '../components/OficinasVivencias';
import { ScrollProgress } from '../hooks/useAnimations';
import PageHero from '../components/PageHero';

const OficinasPage = () => {
  return (
    <div className="page-container oficinas-page">
      <ScrollProgress />
      <PageHero
        eyebrow="Atividades culturais"
        title={<>
          Oficinas e <span className="highlight">vivências</span>
        </>}
        description="Arte, terapias integrativas e processos criativos para todas as idades."
  imageSrc="/images/heros/oficinas.svg"
        imageAlt="Oficina de artes com pessoas diversas pintando e criando juntas"
        caption="Criar é um ato coletivo"
      />
      <OficinasVivencias />
    </div>
  );
};

export default OficinasPage;