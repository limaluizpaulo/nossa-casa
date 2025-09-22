const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      alt: "Mural coletivo"
    },
    {
      src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
      alt: "Oficina em andamento"
    },
    {
      src: "https://images.unsplash.com/photo-1542039375-28138150cc31?q=80&w=1600&auto=format&fit=crop",
      alt: "Apresentação musical"
    },
    {
      src: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1600&auto=format&fit=crop",
      alt: "Leitura coletiva"
    },
    {
      src: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1600&auto=format&fit=crop",
      alt: "Encontro no pátio"
    },
    {
      src: "https://images.unsplash.com/photo-1578926375605-eaf7559b145b?q=80&w=1600&auto=format&fit=crop",
      alt: "Feira local"
    }
  ];

  return (
    <section id="galeria" className="section">
      <div className="wrap">
        <div className="kicker">
          <span className="rule"></span>
          Galeria
        </div>
        <h2 className="section__title">Cenas da Nossa Casa</h2>
        <div className="gallery mt-24">
          {images.map((image, index) => (
            <img 
              key={index}
              src={image.src} 
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;