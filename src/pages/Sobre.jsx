import QuemSomos from '../components/QuemSomos';
import { ScrollProgress } from '../hooks/useAnimations';

const Sobre = () => {
  return (
    <div className="page-container sobre-page">
      <ScrollProgress />
      <QuemSomos />
    </div>
  );
};

export default Sobre;