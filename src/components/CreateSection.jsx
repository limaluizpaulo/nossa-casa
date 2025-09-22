import Button from './Button';
import Card from './Card';

const CreateSection = () => {
  const steps = [
    {
      number: "1",
      title: "Descreva",
      description: "Conte a ideia, público, duração e materiais."
    },
    {
      number: "2", 
      title: "Anexe referências",
      description: "Imagens, link do portfólio ou vídeo curto."
    },
    {
      number: "3",
      title: "Envie", 
      description: "Nossa curadoria responde em até 72h."
    }
  ];

  return (
    <section id="crie" className="section">
      <div className="wrap">
        <div className="kicker">
          <span className="rule"></span>
          Faça parte
        </div>
        <h2 className="section__title">Crie seu próprio encontro na Nossa Casa</h2>
        <div className="cols-2 mt-24">
          <div>
            <p>Quer promover uma vivência, oficina ou roda? Envie sua proposta. Nós te ajudamos com agenda, espaço e divulgação.</p>
            <div className="steps mt-24">
              {steps.map((step, index) => (
                <div key={index} className="step">
                  <div className="num">{step.number}</div>
                  <div>
                    <strong>{step.title}</strong>
                    <div className="note">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="brand" className="mt-32" href="#contato">
              Enviar proposta
            </Button>
          </div>
          <Card className="center">
            <img 
              src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1600&auto=format&fit=crop" 
              alt="Arranjo floral artístico sobre mesa clara"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CreateSection;