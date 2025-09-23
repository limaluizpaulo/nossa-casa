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
  imageSrc="/images/heros/transparencia.svg"
        imageAlt="Documentos e planilhas organizadas sobre mesa de trabalho comunitário"
        caption="Gestão responsável e aberta"
      />
      <Transparencia />
    </div>
  );
};

export default TransparenciaPage;