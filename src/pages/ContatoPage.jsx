import Contato from '../components/Contato';
import { ScrollProgress } from '../hooks/useAnimations';

const ContatoPage = () => {
  return (
    <div className="page">
      <ScrollProgress />
      <Contato />
    </div>
  );
};

export default ContatoPage;