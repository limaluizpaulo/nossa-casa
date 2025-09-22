import { useState } from 'react';
import Button from './Button';

const Doe = () => {
  const [selectedValue, setSelectedValue] = useState(50);
  
  const donationValues = [20, 50, 100, 200];
  const progressPercentage = 65; // Exemplo: 65% da meta atingida
  const currentAmount = 3250;
  const targetAmount = 5000;

  return (
    <section id="doe" className="section donation-section" aria-labelledby="doe-title">
      <div className="wrap">
        <div className="kicker">
          <span className="rule" aria-hidden="true"></span>
          Doe e Apoie a Nossa Casa Artes e Terapias
        </div>
        <h2 id="doe-title" className="section__title">
          Cada contribuição fortalece a arte, a cultura e a saúde em Guarulhos
        </h2>
        
        <div className="donation-content">
          <div className="donation-story">
            <p className="lead">
              A Nossa Casa é um espaço independente, gerido por mulheres, pessoas negras, periféricas e LGBTQIAPN+. 
              Há 6 anos promovemos oficinas, saraus, festivais, terapias integrativas e rodas de conversa que impactam diretamente nossa comunidade.
            </p>
            
            <p>
              <strong>Não contamos com financiamentos fixos de governo ou grandes empresas.</strong> 
              Nosso trabalho só é possível porque pessoas como você acreditam que arte, saúde e diversidade transformam vidas.
            </p>

            <div className="donation-impact mt-32">
              <h3>Com a sua doação, mantemos:</h3>
              <ul className="impact-list">
                <li>✨ Oficinas culturais e de bem-estar gratuitas</li>
                <li>💜 Atendimentos em saúde mental acessíveis</li>
                <li>🎭 Festivais que valorizam artistas independentes</li>
                <li>💰 Ações de economia criativa que geram renda para a periferia</li>
                <li>🏠 Um espaço seguro de acolhimento e resistência</li>
              </ul>
            </div>

            <div className="donation-cta-text mt-32">
              <h3>✨ Sua ajuda mantém viva a Nossa Casa.</h3>
              <p><strong>Doe e faça parte dessa transformação coletiva!</strong></p>
            </div>
          </div>
          
          <div className="donation-widget">
            <div className="progress-section">
              <h3>🎯 Meta do mês: Manter oficinas gratuitas</h3>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${progressPercentage}%` }}
                  aria-valuenow={progressPercentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  role="progressbar"
                  aria-label={`${progressPercentage}% da meta atingida`}
                ></div>
              </div>
              <div className="progress-info">
                <span className="current">💚 R$ {currentAmount.toLocaleString()}</span>
                <span className="target">Meta: R$ {targetAmount.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="donation-form">
              <h4>Escolha o valor da sua doação</h4>
              <div className="value-buttons">
                {donationValues.map(value => (
                  <button
                    key={value}
                    className={`value-btn ${selectedValue === value ? 'active' : ''}`}
                    onClick={() => setSelectedValue(value)}
                    aria-pressed={selectedValue === value}
                  >
                    R$ {value}
                  </button>
                ))}
              </div>
              
              <div className="custom-value mt-16">
                <label htmlFor="custom-amount">Ou digite outro valor:</label>
                <input
                  type="number"
                  id="custom-amount"
                  placeholder="R$ 0,00"
                  min="1"
                  onChange={(e) => setSelectedValue(Number(e.target.value))}
                />
              </div>
              
              <div className="recurring-option mt-24">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                  Quero doar mensalmente (cancele quando quiser)
                </label>
              </div>
              
              <Button variant="fill" className="donate-btn mt-24">
                Doar R$ {selectedValue} via Pix
              </Button>
              
              <div className="pix-info mt-24">
                <h5>Chave Pix oficial:</h5>
                <div className="pix-options">
                  <div className="pix-key">
                    <strong>📧 nossacasaat@gmail.com</strong>
                    <small>Nossa Casa Artes e Terapias</small>
                  </div>
                  <div className="qr-code">
                    <img 
                      src="https://via.placeholder.com/120x120/6B46C1/FFFFFF?text=QR+PIX" 
                      alt="QR Code para doação via Pix"
                      loading="lazy"
                    />
                    <span>Escaneie o QR Code</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="supporters-section mt-48">
          <h3>Quem já apoia nossa luta</h3>
          <p>Pessoas e organizações que acreditam na transformação através da arte e do cuidado</p>
          <div className="supporters-grid">
            <div className="supporter">💜 Ana Silva - Doadora mensal</div>
            <div className="supporter">💜 Coletivo Flores Periféricas</div>
            <div className="supporter">💜 Maria Santos - Apoiadora fiel</div>
            <div className="supporter">💜 Instituto Diversidade</div>
            <div className="supporter">💜 Júlia Oliveira - Voluntária</div>
            <div className="supporter">💜 E muitas outras pessoas incríveis!</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doe;