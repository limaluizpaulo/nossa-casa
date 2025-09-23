import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Aguarda o próximo frame para garantir que o DOM da nova rota esteja montado
    const id = requestAnimationFrame(() => {
      // Se houver hash (#ancora), tenta rolar até o elemento correspondente
      if (hash) {
        const target = document.querySelector(hash);
        if (target && typeof target.scrollIntoView === 'function') {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }

      // Caso padrão: rola para o topo do container principal e da janela
      const main = document.getElementById('main-content');
      if (main && typeof main.scrollTo === 'function') {
        try {
          main.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        } catch {
          // fallback para navegadores sem suporte a options
          main.scrollTop = 0;
          main.scrollLeft = 0;
        }
      }

      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } catch {
        window.scrollTo(0, 0);
      }

      // Acessibilidade: move o foco para o conteúdo principal quando a rota muda
      if (main && typeof main.focus === 'function') {
        main.setAttribute('tabindex', '-1');
        main.focus({ preventScroll: true });
      }
    });

    return () => cancelAnimationFrame(id);
  }, [pathname, hash]);

  return null; // Este componente não renderiza nada visível
};

export default ScrollToTop;