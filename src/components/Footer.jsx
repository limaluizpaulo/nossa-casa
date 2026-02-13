import '../styles/footer.css';
import { Link } from 'react-router-dom';
import { MailIcon, HeartIcon, CameraIcon, BookOpenIcon, SmartphoneIcon, MapPinIcon, InboxIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__brand">
              <div className="brand">
                <span className="brand__logo"></span>
                <span className="brand__text">
                  <strong>Nossa Casa</strong>
                  <small>Artes e Terapias</small>
                </span>
              </div>
              <p className="footer__mission">
                Há 6 anos fortalecendo vínculos, celebrando a diversidade e incentivando
                a arte, a saúde integrativa e os direitos humanos em Guarulhos.
              </p>
              
              <div className="social-links">
                <a href="https://instagram.com/nossacasa_at" aria-label="Instagram da Nossa Casa" target="_blank" rel="noopener noreferrer">
                  <CameraIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> @nossacasa_at
                </a>
                <a href="https://facebook.com/nossacasaarteseterapias" aria-label="Facebook da Nossa Casa" target="_blank" rel="noopener noreferrer">
                  <BookOpenIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> /nossacasaarteseterapias
                </a>
                <a href="https://wa.me/5511999999999" aria-label="WhatsApp da Nossa Casa" target="_blank" rel="noopener noreferrer">
                  <SmartphoneIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> WhatsApp
                </a>
              </div>
            </div>
            
            <div className="footer__nav">
              <div className="nav-column">
                <h4>Navegação</h4>
                <ul>
                  <li><Link to="/">Início</Link></li>
                  <li><Link to="/sobre">Quem Somos</Link></li>
                  <li><Link to="/agenda">Agenda</Link></li>
                  <li><Link to="/oficinas">Oficinas & Vivências</Link></li>
                </ul>
              </div>
              
              <div className="nav-column">
                <h4>Participe</h4>
                <ul>
                  <li><Link to="/doe">Doe</Link></li>
                  <li><Link to="/voluntariado">Voluntarie-se</Link></li>
                  <li><Link to="/facilitar">Facilite uma Oficina</Link></li>
                  <li><Link to="/aluguel">Aluguel do Espaço</Link></li>
                </ul>
              </div>
              
              <div className="nav-column">
                <h4>Informações</h4>
                <ul>
                  <li><Link to="/transparencia">Transparência</Link></li>
                  <li><Link to="/blog">Notícias</Link></li>
                  <li><Link to="/contato">Contato</Link></li>
                  <li><Link to="/loja">Loja</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="footer__contact">
              <h4>Contato & Localização</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <strong><MapPinIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Endereço:</strong>
                  <span>Av. Avelino Alves Machado, 367<br/>Jardim Pinhal<br/>Guarulhos - SP</span>
                </div>
                <div className="contact-item">
                  <strong><MailIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Email:</strong>
                  <a href="mailto:nossacasaat@gmail.com">nossacasaat@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="newsletter-section">
            <h4><InboxIcon size={20} style={{display: 'inline', marginRight: '8px'}} /> Receba nossas novidades</h4>
            <p>Fique por dentro da nossa programação, novos projetos e chamadas para voluntariado</p>
            <form className="newsletter-form" aria-label="Formulário de inscrição na newsletter">
              <input 
                type="email" 
                placeholder="Seu melhor email" 
                required 
                aria-label="Digite seu email para receber nossa newsletter"
              />
              <button type="submit" className="btn btn--accent">
                Quero receber!
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer__bottom">
          <div className="footer__legal">
            <p>&copy; 2024 Nossa Casa Artes e Terapias. Todos os direitos reservados.</p>
            <div className="legal-links">
              <a href="#privacidade">Política de Privacidade</a>
              <a href="#termos">Termos de Uso</a>
            </div>
          </div>
          
          <div className="footer__credits">
            <p>
              <HeartIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Feito com amor e resistência pela nossa comunidade<br/>
              <small>Site desenvolvido de forma colaborativa e código aberto</small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;