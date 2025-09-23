import Loja from '../components/Loja';
import { ScrollProgress } from '../hooks/useAnimations';
import PageHero from '../components/PageHero';

const LojaPage = () => {
  return (
    <div className="page-container">
      <ScrollProgress />
      <PageHero
        eyebrow="Economia criativa"
        title={<>
          Nossa <span className="highlight">loja</span> solidária
        </>}
        description="Produtos feitos por artistas e empreendedores locais que fortalecem a comunidade."
  imageSrc="/images/heros/loja.svg"
        imageAlt="Produtos artesanais de artistas diversos expostos em feira cultural"
        caption="Consumo consciente que transforma"
      />
      <Loja />
    </div>
  );
};

export default LojaPage;