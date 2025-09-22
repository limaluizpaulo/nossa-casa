const FAQ = () => {
  const faqData = [
    {
      question: "O que é a Nossa Casa?",
      answer: "Um espaço cultural e de cuidado com programação contínua, residências e rede de voluntariado.",
      isOpen: true
    },
    {
      question: "Como participar dos programas?",
      answer: "Veja a agenda, escolha uma atividade e inscreva‑se. Para bolsistas, há vagas sociais mensais.",
      isOpen: false
    },
    {
      question: "Como enviar uma proposta de oficina?",
      answer: "Use o botão Enviar proposta. Retornamos com datas, valores ou modelo colaborativo.",
      isOpen: false
    }
  ];

  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="wrap">
        <div className="kicker">
          <span className="rule" aria-hidden="true"></span>
          Perguntas frequentes
        </div>
        <h2 id="faq-title" className="section__title">Tudo o que você queria saber</h2>
        <div role="list">
          {faqData.map((item, index) => (
            <details key={index} className="faq" open={item.isOpen} role="listitem">
              <summary 
                aria-expanded={item.isOpen}
                role="button"
                tabIndex="0"
              >
                {item.question}
              </summary>
              <div className="note mt-24" role="region" aria-label={`Resposta para: ${item.question}`}>
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;