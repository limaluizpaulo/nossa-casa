import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Faz scroll para o topo da página sempre que a rota mudar
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Adiciona uma animação suave
    });
  }, [pathname]);

  return null; // Este componente não renderiza nada visível
};

export default ScrollToTop;