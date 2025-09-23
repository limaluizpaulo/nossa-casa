import OficinasVivencias from '../components/OficinasVivencias';
import { ScrollProgress } from '../hooks/useAnimations';

const OficinasPage = () => {
  return (
    <div className="page-container oficinas-page">
      <ScrollProgress />
      <OficinasVivencias />
    </div>
  );
};

export default OficinasPage;