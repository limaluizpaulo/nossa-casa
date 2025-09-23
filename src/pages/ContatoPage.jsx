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
  imageSrc="/images/heros/contato.svg"
        imageAlt="Pessoa enviando mensagem no celular em ambiente comunitário"
        caption="Vamos conversar?"
      />
      <Contato />
    </div>
  );
};

export default ContatoPage;