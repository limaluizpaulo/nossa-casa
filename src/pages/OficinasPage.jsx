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
        imageSrc="https://images.unsplash.com/photo-1529336953121-ad3a7f1e96d7?w=1600&auto=format&fit=crop"
        imageAlt="Oficina de artes com pessoas pintando e criando juntas"
        caption="Criar é um ato coletivo"
      />
      <OficinasVivencias />
    </div>
  );
};

export default OficinasPage;