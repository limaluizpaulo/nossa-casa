import Contato from '../components/Contato';
import { ScrollProgress } from '../hooks/useAnimations';
import PageHero from '../components/PageHero';

const ContatoPage = () => {
  return (
    <div className="page">
      <ScrollProgress />
      <PageHero
        eyebrow="Fale com a gente"
        title={<>
          Entre em <span className="highlight">contato</span>
        </>}
        description="Dúvidas, parcerias, propostas e convites: estamos por aqui."
        imageSrc="https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=1600&auto=format&fit=crop"
        imageAlt="Pessoa digitando mensagem no celular em um ambiente de trabalho"
        caption="Vamos conversar?"
      />
      <Contato />
    </div>
  );
};

export default ContatoPage;