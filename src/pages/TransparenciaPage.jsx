import Transparencia from '../components/Transparencia';
import { ScrollProgress } from '../hooks/useAnimations';

const TransparenciaPage = () => {
  return (
    <div className="page">
      <ScrollProgress />
      <Transparencia />
    </div>
  );
};

export default TransparenciaPage;