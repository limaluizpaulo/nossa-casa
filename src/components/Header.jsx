import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';
import '../styles/accessibility.css';
import logoImage from '../assets/file.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    {
      label: 'Início',
      path: '/',
      single: true
    },
    {
      label: 'Sobre',
      path: '/sobre',
      single: true
    },
    {
      label: 'Atividades',
      dropdown: 'atividades',
      items: [
        { label: 'Agenda de Eventos', path: '/agenda', cta: true },
        { label: 'Oficinas & Vivências', path: '/oficinas' },
        { label: 'Facilitar Oficina', path: '/facilitar' }
      ]
    },
    {
      label: 'Espaços',
      dropdown: 'espacos',
      items: [
        { label: 'Aluguel de Espaço', path: '/aluguel' },
        { label: 'Loja Solidária', path: '/loja' }
      ]
    },
    {
      label: 'Participe',
      dropdown: 'participe',
      items: [
        { label: 'Doe', path: '/doe' },
        { label: 'Voluntariado', path: '/voluntariado' }
      ]
    },
    {
      label: 'Mais',
      dropdown: 'mais',
      items: [
        { label: 'Blog', path: '/blog' },
        { label: 'Transparência', path: '/transparencia' },
        { label: 'Contato', path: '/contato' }
      ]
    }
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>
      <header className="site">
        <div className="wrap site__bar">
          <Link className="brand" to="/" aria-label="Nossa Casa Artes e Terapias — página inicial">
            <img 
              src={logoImage} 
              alt="Nossa Casa Artes e Terapias" 
              className="brand__logo-image"
            />
            <span className="brand__text">
              <strong>Nossa Casa</strong>
              <small>Artes e Terapias</small>
            </span>
          </Link>
          
          <button 
            className="menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            aria-label="Abrir menu de navegação"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav 
            id="main-navigation" 
            className={`nav ${isMenuOpen ? 'nav--open' : ''}`}
            aria-label="Navegação principal"
          >
            <ul className="nav__list">
              {menuItems.map((item, index) => (
                <li key={index} className="nav__item">
                  {item.single ? (
                    <Link 
                      to={item.path} 
                      onClick={closeMenu}
                      className={`nav__link ${isActiveRoute(item.path) ? 'nav__link--active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <div className="nav__dropdown">
                      <button 
                        className={`nav__dropdown-toggle ${activeDropdown === item.dropdown ? 'active' : ''}`}
                        onClick={() => handleDropdown(item.dropdown)}
                        aria-expanded={activeDropdown === item.dropdown}
                      >
                        {item.label}
                        <svg className="dropdown-arrow" width="12" height="8" viewBox="0 0 12 8">
                          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none"/>
                        </svg>
                      </button>
                      <ul className={`nav__dropdown-menu ${activeDropdown === item.dropdown ? 'show' : ''}`}>
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link 
                              to={subItem.path} 
                              onClick={closeMenu}
                              className={`nav__dropdown-link ${isActiveRoute(subItem.path) ? 'active' : ''} ${subItem.cta ? 'nav__link--cta' : ''}`}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;