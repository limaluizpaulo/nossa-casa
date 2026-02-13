import Agenda from '../components/Agenda';
import { ScrollProgress } from '../hooks/useAnimations';

const AgendaPage = () => {
  return (
    <div className="page-container agenda-page">
      <ScrollProgress />
      <Agenda />
    </div>
  );
};

export default AgendaPage;