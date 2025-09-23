import Transparencia from '../components/Transparencia';
import { ScrollProgress } from '../hooks/useAnimations';
import PageHero from '../components/PageHero';

const TransparenciaPage = () => {
  return (
    <div className="page">
      <ScrollProgress />
      <PageHero
        eyebrow="Prestação de contas"
        title={<>
          Nossa <span className="highlight">transparência</span>
        </>}
        description="Relatórios, prestações de contas e informações institucionais."
        imageSrc="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1600&auto=format&fit=crop"
        imageAlt="Documentos e planilhas organizadas sobre uma mesa"
        caption="Gestão responsável e aberta"
      />
      <Transparencia />
    </div>
  );
};

export default TransparenciaPage;