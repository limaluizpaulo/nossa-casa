import Loja from '../components/Loja';
import { ScrollProgress } from '../hooks/useAnimations';

const LojaPage = () => {
  return (
    <div className="page-container">
      <ScrollProgress />
      <Loja />
    </div>
  );
};

export default LojaPage;