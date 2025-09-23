import { useState } from 'react';
import Button from './Button';
import { ShoppingBagIcon, PaletteIcon, BookOpenIcon, ShirtIcon, BagIcon, PlantIcon, LaptopIcon, HandshakeIcon, CreditCardIcon, TruckIcon } from './Icons';

const Loja = () => {
  const [categoria, setCategoria] = useState('todos');
  const [carrinho, setCarrinho] = useState([]);

  const produtos = [
    {
      id: 1,
      nome: "Camiseta Nossa Casa",
      categoria: "roupas",
      preco: 45,
      descricao: "Camiseta 100% algodão com estampa exclusiva da Nossa Casa. Produção local e consciente.",
      artista: "Design Coletivo NC",
      imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1600&auto=format&fit=crop",
      cores: ["Preto", "Branco", "Roxo"],
      tamanhos: ["P", "M", "G", "GG"]
    },
    {
      id: 2,
      nome: "Bolsa Ecológica Resistência",
      categoria: "acessorios",
      preco: 35,
      descricao: "Ecobag com estampa de arte periférica. Material sustentável e design autoral.",
      artista: "Coletivo Mulheres Criadoras",
      imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1600&auto=format&fit=crop",
      cores: ["Natural", "Verde"]
    },
    {
      id: 3,
      nome: "Zine Vozes da Periferia",
      categoria: "publicacoes",
      preco: 15,
      descricao: "Publicação independente com textos, poesias e artes de autores periféricos.",
      artista: "Diversos Autores",
      imagem: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1600&auto=format&fit=crop",
      paginas: 32
    },
    {
      id: 4,
      nome: "Oficina Online: Arte Terapia",
      categoria: "digitais",
      preco: 80,
      descricao: "Curso digital com 4 módulos sobre arte como ferramenta terapêutica.",
      artista: "Camila Bitencourt",
      imagem: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
      duracao: "6 horas",
      formato: "Vídeo + PDF"
    },
    {
      id: 5,
      nome: "Sabonete Artesanal Lavanda",
      categoria: "artesanato",
      preco: 12,
      descricao: "Sabonete artesanal produzido na comunidade com essências naturais.",
      artista: "Cooperativa Mãos Criativas",
      imagem: "https://images.unsplash.com/photo-1556228578-dd6f735c2ac8?q=80&w=1600&auto=format&fit=crop",
      peso: "90g",
      ingredientes: "Natural"
    },
    {
      id: 6,
      nome: "Pôster Arte Ancestral",
      categoria: "arte",
      preco: 25,
      descricao: "Reprodução em alta qualidade de arte afro-brasileira contemporânea.",
      artista: "Val Araújo",
      imagem: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1600&auto=format&fit=crop",
      tamanho: "A3",
      material: "Papel Couché"
    },
    {
      id: 7,
      nome: "E-book Cuidado e Resistência",
      categoria: "digitais",
      preco: 20,
      descricao: "Guia digital sobre práticas de autocuidado para pessoas LGBTQIAPN+.",
      artista: "Equipe Nossa Casa",
      imagem: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
      paginas: 45,
      formato: "PDF"
    },
    {
      id: 8,
      nome: "Vela Aromática Acolhimento",
      categoria: "artesanato",
      preco: 28,
      descricao: "Vela artesanal com aromas que promovem bem-estar e tranquilidade.",
      artista: "Ateliê Luz & Essência",
      imagem: "https://images.unsplash.com/photo-1602874801549-5ac4e6a2e0ba?q=80&w=1600&auto=format&fit=crop",
      duracao: "40 horas",
      aroma: "Eucalipto e Lavanda"
    }
  ];

  const categorias = [
    { key: 'todos', label: 'Todos os produtos', icon: <ShoppingBagIcon size={20} /> },
    { key: 'roupas', label: 'Roupas', icon: <ShirtIcon size={20} /> },
    { key: 'acessorios', label: 'Acessórios', icon: <BagIcon size={20} /> },
    { key: 'artesanato', label: 'Artesanato', icon: <PlantIcon size={20} /> },
    { key: 'arte', label: 'Arte', icon: <PaletteIcon size={20} /> },
    { key: 'publicacoes', label: 'Publicações', icon: <BookOpenIcon size={20} /> },
    { key: 'digitais', label: 'Produtos Digitais', icon: <LaptopIcon size={20} /> }
  ];

  const produtosFiltrados = categoria === 'todos' 
    ? produtos 
    : produtos.filter(produto => produto.categoria === categoria);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho(prev => [...prev, produto]);
    alert(`${produto.nome} adicionado ao carrinho!`);
  };

  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco);
  };

  return (
    <section id="loja" className="section loja-section" aria-labelledby="loja-title">
      <div className="wrap">
        <div className="kicker">
          <span className="rule" aria-hidden="true"></span>
          Loja da Nossa Casa
        </div>
        <h2 id="loja-title" className="section__title">
          Produtos que fortalecem a economia criativa e solidária da periferia
        </h2>
        
        <p className="lead">
          Ao comprar em nossa loja, você apoia artistas independentes e mantém viva a Nossa Casa. 
          Cada produto carrega história, resistência e a potência criativa da nossa comunidade.
        </p>

        {/* Filtros por categoria */}
        <div className="loja-filtros mt-32">
          <h3>Categorias:</h3>
          <div className="categoria-buttons">
            {categorias.map(cat => (
              <button
                key={cat.key}
                className={`categoria-btn ${categoria === cat.key ? 'active' : ''}`}
                onClick={() => setCategoria(cat.key)}
                aria-pressed={categoria === cat.key}
              >
                <span className="categoria-icon">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de produtos */}
        <div className="produtos-grid mt-32">
          {produtosFiltrados.map(produto => (
            <article key={produto.id} className="produto-card">
              <figure className="produto-imagem">
                <img src={produto.imagem} alt={produto.nome} loading="lazy" />
                <div className="produto-categoria-tag">
                  {categorias.find(cat => cat.key === produto.categoria)?.icon}
                </div>
              </figure>
              
              <div className="produto-info">
                <h3 className="produto-nome">{produto.nome}</h3>
                <p className="produto-artista">por {produto.artista}</p>
                <p className="produto-descricao">{produto.descricao}</p>
                
                {/* Detalhes específicos por tipo de produto */}
                <div className="produto-detalhes">
                  {produto.tamanhos && (
                    <div className="detalhe-item">
                      <strong>Tamanhos:</strong> {produto.tamanhos.join(', ')}
                    </div>
                  )}
                  {produto.cores && (
                    <div className="detalhe-item">
                      <strong>Cores:</strong> {produto.cores.join(', ')}
                    </div>
                  )}
                  {produto.duracao && (
                    <div className="detalhe-item">
                      <strong>Duração:</strong> {produto.duracao}
                    </div>
                  )}
                  {produto.paginas && (
                    <div className="detalhe-item">
                      <strong>Páginas:</strong> {produto.paginas}
                    </div>
                  )}
                  {produto.formato && (
                    <div className="detalhe-item">
                      <strong>Formato:</strong> {produto.formato}
                    </div>
                  )}
                </div>
                
                <div className="produto-footer">
                  <div className="produto-preco">
                    {formatarPreco(produto.preco)}
                  </div>
                  <Button 
                    variant="fill" 
                    onClick={() => adicionarAoCarrinho(produto)}
                    className="btn-comprar"
                  >
                    Comprar
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Informações sobre a loja */}
        <div className="loja-info mt-48">
          <div className="info-cards">
            <div className="info-card">
              <h4><TruckIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Entregas</h4>
              <p>Fazemos entregas em Guarulhos e região. Para outros locais, consulte o frete via Correios.</p>
            </div>
            <div className="info-card">
              <h4><CreditCardIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Pagamento</h4>
              <p>Aceitamos Pix (5% desconto), cartão de crédito e dinheiro (para retirada local).</p>
            </div>
            <div className="info-card">
              <h4><HandshakeIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Economia Solidária</h4>
              <p>70% do valor vai direto para os artistas. 30% mantém a Nossa Casa funcionando.</p>
            </div>
          </div>
        </div>

        {/* Como comprar */}
        <div className="como-comprar mt-32">
          <h3>Como comprar</h3>
          <div className="passos-compra">
            <div className="passo">
              <div className="passo-numero">1</div>
              <div className="passo-info">
                <h4>Escolha seu produto</h4>
                <p>Navegue por nossa seleção e encontre o que fala com você</p>
              </div>
            </div>
            <div className="passo">
              <div className="passo-numero">2</div>
              <div className="passo-info">
                <h4>Entre em contato</h4>
                <p>WhatsApp ou email para confirmar disponibilidade e detalhes</p>
              </div>
            </div>
            <div className="passo">
              <div className="passo-numero">3</div>
              <div className="passo-info">
                <h4>Finalize a compra</h4>
                <p>Escolha forma de pagamento e entrega</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carrinho de compras simples */}
        {carrinho.length > 0 && (
          <div className="carrinho-resumo mt-32">
            <h3>Carrinho ({carrinho.length} {carrinho.length === 1 ? 'item' : 'itens'})</h3>
            <div className="carrinho-total">
              Total: {formatarPreco(carrinho.reduce((total, item) => total + item.preco, 0))}
            </div>
            <Button variant="accent" className="finalizar-compra">
              Finalizar Compra via WhatsApp
            </Button>
          </div>
        )}

        {/* CTA para artistas */}
        <div className="artistas-cta mt-48">
          <h3>Quer vender seus produtos na nossa loja?</h3>
          <p>Se você é artista ou artesã e tem produtos alinhados com nossos valores, vamos conversar!</p>
          <div className="cta-buttons mt-24">
            <Button variant="accent" href="#contato">Seja um fornecedor</Button>
            <Button href="#facilite">Saiba mais</Button>
          </div>
        </div>

        {/* Destaques dos artistas */}
        <div className="artistas-destaque mt-32">
          <h3>Conheça nossos artistas</h3>
          <div className="artistas-grid">
            <div className="artista-card">
              <h4>Val Araújo</h4>
              <p>Cantora e artista visual, cria obras que celebram a ancestralidade afro-brasileira.</p>
            </div>
            <div className="artista-card">
              <h4>Coletivo Mulheres Criadoras</h4>
              <p>Grupo de mulheres periféricas que trabalham com sustentabilidade e economia criativa.</p>
            </div>
            <div className="artista-card">
              <h4>Cooperativa Mãos Criativas</h4>
              <p>Cooperativa local especializada em produtos naturais e artesanato tradicional.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loja;