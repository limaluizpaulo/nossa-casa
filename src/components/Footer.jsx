import '../styles/footer.css';

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
                  📷 @nossacasa_at
                </a>
                <a href="https://facebook.com/nossacasaarteseterapias" aria-label="Facebook da Nossa Casa" target="_blank" rel="noopener noreferrer">
                  📘 /nossacasaarteseterapias
                </a>
                <a href="https://wa.me/5511999999999" aria-label="WhatsApp da Nossa Casa" target="_blank" rel="noopener noreferrer">
                  💬 WhatsApp
                </a>
              </div>
            </div>
            
            <div className="footer__nav">
              <div className="nav-column">
                <h4>Navegação</h4>
                <ul>
                  <li><a href="#home">Início</a></li>
                  <li><a href="#quem-somos">Quem Somos</a></li>
                  <li><a href="#agenda">Agenda</a></li>
                  <li><a href="#oficinas">Oficinas & Vivências</a></li>
                </ul>
              </div>
              
              <div className="nav-column">
                <h4>Participe</h4>
                <ul>
                  <li><a href="#doe">Doe</a></li>
                  <li><a href="#voluntarie">Voluntarie-se</a></li>
                  <li><a href="#facilite">Facilite uma Oficina</a></li>
                  <li><a href="#aluguel">Aluguel do Espaço</a></li>
                </ul>
              </div>
              
              <div className="nav-column">
                <h4>Informações</h4>
                <ul>
                  <li><a href="#transparencia">Transparência</a></li>
                  <li><a href="#noticias">Notícias</a></li>
                  <li><a href="#contato">Contato</a></li>
                  <li><a href="#loja">Loja</a></li>
                </ul>
              </div>
            </div>
            
            <div className="footer__contact">
              <h4>Contato & Localização</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <strong>📍 Endereço:</strong>
                  <span>Av. Avelino Alves Machado, 367<br/>Jardim Pinhal<br/>Guarulhos - SP</span>
                </div>
                <div className="contact-item">
                  <strong>📧 Email:</strong>
                  <a href="mailto:nossacasaat@gmail.com">nossacasaat@gmail.com</a>
                </div>
                <div className="contact-item">
                  <strong>📱 Telefone:</strong>
                  <a href="tel:+5511999999999">(11) 99999-9999</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="newsletter-section">
            <h4>📬 Receba nossas novidades</h4>
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
              💜 Feito com amor e resistência pela nossa comunidade<br/>
              <small>Site desenvolvido de forma colaborativa e código aberto</small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;