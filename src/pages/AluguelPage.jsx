import AluguelEspaco from '../components/AluguelEspaco';
import { ScrollProgress } from '../hooks/useAnimations';

const AluguelPage = () => {
  return (
    <div className="page-container">
      <ScrollProgress />
      <AluguelEspaco />
    </div>
  );
};

export default AluguelPage;