import Doe from '../components/Doe';
import { ScrollProgress } from '../hooks/useAnimations';

const DoePage = () => {
  return (
    <div className="page-container">
      <ScrollProgress />
      <Doe />
    </div>
  );
};

export default DoePage;