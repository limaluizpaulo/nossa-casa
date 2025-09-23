import FaciliteOficina from '../components/FaciliteOficina';
import { ScrollProgress } from '../hooks/useAnimations';

const FacilitarPage = () => {
  return (
    <div className="page-container facilitar-page">
      <ScrollProgress />
      <FaciliteOficina />
    </div>
  );
};

export default FacilitarPage;