import Card from './Card';
import Button from './Button';

const About = () => {
  return (
    <section id="sobre" className="section" aria-labelledby="about-title">
      <div className="wrap">
        <div className="kicker">
          <span className="rule" aria-hidden="true"></span>
          Sobre a Nossa Casa
        </div>
        <h2 id="about-title" className="section__title">Encontro entre cultura, terapias e cidadania.</h2>
        <div className="cols-2 mt-24">
          <Card>
            <figure>
              <img 
                src="https://images.unsplash.com/photo-1541264161754-445bbdd7de1e?q=80&w=1600&auto=format&fit=crop" 
                alt="Pessoas participando de oficina artística com tintas coloridas e pincéis, criando obras colaborativas"
              />
            </figure>
            <div>
              <h3>Arte & Oficinas</h3>
              <p>Programas contínuos de artes visuais, música e escrita. Mostras, residências e uma galeria viva para o bairro.</p>
              <Button className="mt-24" href="#programas" aria-label="Explorar programas de arte e oficinas">Explorar</Button>
            </div>
          </Card>
          <Card>
            <figure>
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop" 
                alt="Grupo de pessoas em círculo participando de sessão terapêutica, demonstrando cuidado e apoio mútuo"
              />
            </figure>
            <div>
              <h3>Terapias & Cuidado</h3>
              <p>Rede de terapeutas e práticas integrativas com foco em bem‑estar, saúde mental e prevenção.</p>
              <Button className="mt-24" href="#programas" aria-label="Conhecer programas de terapias e cuidado">Conhecer</Button>
            </div>
          </Card>
        </div>

        <aside className="support mt-40" role="complementary" aria-labelledby="support-title">
          <div>
            <strong id="support-title">Participe como apoiador(a)</strong>
            <div className="note">Ajude a manter bolsas e materiais para oficinas gratuitas.</div>
          </div>
          <Button variant="brand" href="#contato" aria-label="Quero apoiar financeiramente o projeto">Quero apoiar</Button>
        </aside>
      </div>
    </section>
  );
};

export default About;