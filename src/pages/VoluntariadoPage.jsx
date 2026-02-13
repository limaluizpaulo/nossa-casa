import Voluntarie from '../components/Voluntarie';
import { ScrollProgress } from '../hooks/useAnimations';

const VoluntariadoPage = () => {
  return (
    <div className="page-container">
      <ScrollProgress />
      <Voluntarie />
    </div>
  );
};

export default VoluntariadoPage;