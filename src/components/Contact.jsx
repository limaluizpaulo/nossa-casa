import Button from './Button';

const Contact = () => {
  return (
    <section className="section" id="contato">
      <div className="wrap center" style={{textAlign: 'center'}}>
        <p className="eyebrow">Convite</p>
        <h2 className="section__title" style={{marginBottom: '12px'}}>
          Crie e compartilhe seu trabalho na Nossa Casa
        </h2>
        <p className="lead" style={{marginInline: 'auto', maxWidth: '60ch'}}>
          Agenda aberta para 2025. Se você é artista, terapeuta, educador(a) ou coletivo, vamos construir essa programação juntos.
        </p>
        <div className="hero__cta">
          <Button variant="fill" href="#">Inscrever‑se na newsletter</Button>
          <Button variant="brand" href="#">Falar no WhatsApp</Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;