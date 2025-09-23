import { useState } from 'react';
import Button from './Button';
import { 
  SearchIcon, 
  HandshakeIcon, 
  BarChartIcon, 
  TargetIcon, 
  TrendingUpIcon, 
  MailIcon, 
  DollarSignIcon, 
  CheckIcon, 
  AlertTriangleIcon, 
  DownloadIcon, 
  BuildingGovIcon, 
  ClipboardIcon, 
  MegaphoneIcon, 
  SmartphoneIcon, 
  InboxIcon 
} from './Icons';

const Transparencia = () => {
  const [anoSelecionado, setAnoSelecionado] = useState('2023');

  const dadosFinanceiros = {
    '2023': {
      receitas: {
        total: 85000,
        doacoes: 45000,
        eventos: 20000,
        oficinas: 15000,
        parcerias: 5000
      },
      despesas: {
        total: 78000,
        pessoal: 35000,
        infraestrutura: 20000,
        materiais: 12000,
        eventos: 8000,
        administrativo: 3000
      },
      beneficiarios: 1200,
      oficinas: 48,
      eventos: 24,
      voluntarios: 35
    },
    '2022': {
      receitas: {
        total: 72000,
        doacoes: 38000,
        eventos: 18000,
        oficinas: 12000,
        parcerias: 4000
      },
      despesas: {
        total: 68000,
        pessoal: 30000,
        infraestrutura: 18000,
        materiais: 10000,
        eventos: 7000,
        administrativo: 3000
      },
      beneficiarios: 950,
      oficinas: 36,
      eventos: 18,
      voluntarios: 28
    }
  };

  const relatorios = [
    {
      ano: 2023,
      titulo: "Relatório de Atividades 2023",
      tipo: "Atividades",
      arquivo: "relatorio-atividades-2023.pdf",
      tamanho: "2.1 MB",
      data: "2024-01-15"
    },
    {
      ano: 2023,
      titulo: "Prestação de Contas 2023",
      tipo: "Financeiro",
      arquivo: "prestacao-contas-2023.pdf",
      tamanho: "1.8 MB",
      data: "2024-01-15"
    },
    {
      ano: 2022,
      titulo: "Relatório de Impacto Social 2022",
      tipo: "Impacto",
      arquivo: "impacto-social-2022.pdf",
      tamanho: "3.2 MB",
      data: "2023-01-20"
    },
    {
      ano: 2022,
      titulo: "Demonstrativo Financeiro 2022",
      tipo: "Financeiro",
      arquivo: "demonstrativo-2022.pdf",
      tamanho: "1.5 MB",
      data: "2023-01-20"
    }
  ];

  const principios = [
    {
      titulo: "Transparência Total",
      descricao: "Todas as nossas informações financeiras e atividades são públicas e acessíveis",
      icone: <SearchIcon size={24} />
    },
    {
      titulo: "Gestão Participativa",
      descricao: "Decisões importantes são tomadas coletivamente com participação da comunidade",
      icone: <HandshakeIcon size={24} />
    },
    {
      titulo: "Prestação de Contas",
      descricao: "Relatórios regulares sobre uso de recursos e resultados alcançados",
      icone: <BarChartIcon size={24} />
    },
    {
      titulo: "Auditoria Externa",
      descricao: "Avaliações independentes garantem a veracidade de nossas informações",
      icone: <SearchIcon size={24} />
    }
  ];

  const dados = dadosFinanceiros[anoSelecionado];

  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  };

  const calcularPercentual = (valor, total) => {
    return ((valor / total) * 100).toFixed(1);
  };

  return (
    <section id="transparencia" className="section transparencia-section" aria-labelledby="transparencia-title">
      <div className="wrap">
        <div className="kicker">
          <span className="rule" aria-hidden="true"></span>
          Transparência
        </div>
        <h2 id="transparencia-title" className="section__title">
          Prestação de Contas
        </h2>
        
        <p className="lead">
          Acreditamos que a transparência é fundamental para uma gestão responsável. 
          Aqui você encontra todas as informações sobre nossos recursos, atividades e impacto na comunidade.
        </p>

        {/* Princípios de governança */}
        <div className="principios-governanca mt-32">
          <h3>Nossos princípios de governança</h3>
          <div className="principios-grid">
            {principios.map((principio, index) => (
              <div key={index} className="principio-card">
                <div className="principio-icone">{principio.icone}</div>
                <h4>{principio.titulo}</h4>
                <p>{principio.descricao}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Seletor de ano */}
        <div className="ano-selector mt-48">
          <h3>Dados financeiros e de impacto</h3>
          <div className="selector-container">
            <label htmlFor="ano-select">Selecione o ano:</label>
            <select 
              id="ano-select"
              value={anoSelecionado} 
              onChange={(e) => setAnoSelecionado(e.target.value)}
              className="ano-select"
            >
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>

        {/* Dashboard financeiro */}
        <div className="dashboard-financeiro mt-32">
          <div className="dashboard-grid">
            {/* Receitas */}
            <div className="dashboard-card receitas">
              <h4><DollarSignIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Receitas {anoSelecionado}</h4>
              <div className="valor-principal">{formatarMoeda(dados.receitas.total)}</div>
              <div className="detalhes-lista">
                <div className="detalhe-item">
                  <span>Doações</span>
                  <span>{formatarMoeda(dados.receitas.doacoes)} ({calcularPercentual(dados.receitas.doacoes, dados.receitas.total)}%)</span>
                </div>
                <div className="detalhe-item">
                  <span>Eventos</span>
                  <span>{formatarMoeda(dados.receitas.eventos)} ({calcularPercentual(dados.receitas.eventos, dados.receitas.total)}%)</span>
                </div>
                <div className="detalhe-item">
                  <span>Oficinas</span>
                  <span>{formatarMoeda(dados.receitas.oficinas)} ({calcularPercentual(dados.receitas.oficinas, dados.receitas.total)}%)</span>
                </div>
                <div className="detalhe-item">
                  <span>Parcerias</span>
                  <span>{formatarMoeda(dados.receitas.parcerias)} ({calcularPercentual(dados.receitas.parcerias, dados.receitas.total)}%)</span>
                </div>
              </div>
            </div>

            {/* Despesas */}
            <div className="dashboard-card despesas">
              <h4><DollarSignIcon size={24} style={{display: 'inline', marginRight: '8px', transform: 'rotate(180deg)'}} /> Despesas {anoSelecionado}</h4>
              <div className="valor-principal">{formatarMoeda(dados.despesas.total)}</div>
              <div className="detalhes-lista">
                <div className="detalhe-item">
                  <span>Pessoal</span>
                  <span>{formatarMoeda(dados.despesas.pessoal)} ({calcularPercentual(dados.despesas.pessoal, dados.despesas.total)}%)</span>
                </div>
                <div className="detalhe-item">
                  <span>Infraestrutura</span>
                  <span>{formatarMoeda(dados.despesas.infraestrutura)} ({calcularPercentual(dados.despesas.infraestrutura, dados.despesas.total)}%)</span>
                </div>
                <div className="detalhe-item">
                  <span>Materiais</span>
                  <span>{formatarMoeda(dados.despesas.materiais)} ({calcularPercentual(dados.despesas.materiais, dados.despesas.total)}%)</span>
                </div>
                <div className="detalhe-item">
                  <span>Eventos</span>
                  <span>{formatarMoeda(dados.despesas.eventos)} ({calcularPercentual(dados.despesas.eventos, dados.despesas.total)}%)</span>
                </div>
                <div className="detalhe-item">
                  <span>Administrativo</span>
                  <span>{formatarMoeda(dados.despesas.administrativo)} ({calcularPercentual(dados.despesas.administrativo, dados.despesas.total)}%)</span>
                </div>
              </div>
            </div>

            {/* Resultado */}
            <div className="dashboard-card resultado">
              <h4><TrendingUpIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Resultado {anoSelecionado}</h4>
              <div className={`valor-principal ${dados.receitas.total - dados.despesas.total >= 0 ? 'positivo' : 'negativo'}`}>
                {formatarMoeda(dados.receitas.total - dados.despesas.total)}
              </div>
              <div className="resultado-info">
                {dados.receitas.total - dados.despesas.total >= 0 ? (
                  <p><CheckIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Recursos disponíveis para novos projetos</p>
                ) : (
                  <p><AlertTriangleIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Déficit coberto por reservas</p>
                )}
              </div>
            </div>

            {/* Impacto */}
            <div className="dashboard-card impacto">
              <h4><TargetIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Impacto {anoSelecionado}</h4>
              <div className="impacto-stats">
                <div className="stat-item">
                  <span className="stat-numero">{dados.beneficiarios}</span>
                  <span className="stat-label">Pessoas beneficiadas</span>
                </div>
                <div className="stat-item">
                  <span className="stat-numero">{dados.oficinas}</span>
                  <span className="stat-label">Oficinas realizadas</span>
                </div>
                <div className="stat-item">
                  <span className="stat-numero">{dados.eventos}</span>
                  <span className="stat-label">Eventos promovidos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-numero">{dados.voluntarios}</span>
                  <span className="stat-label">Voluntários ativos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Relatórios para download */}
        <div className="relatorios-download mt-48">
          <h3>Relatórios e documentos</h3>
          <div className="relatorios-grid">
            {relatorios.map((relatorio, index) => (
              <div key={index} className="relatorio-card">
                <div className="relatorio-info">
                  <h4>{relatorio.titulo}</h4>
                  <div className="relatorio-meta">
                    <span className="tipo">{relatorio.tipo}</span>
                    <span className="tamanho">{relatorio.tamanho}</span>
                  </div>
                  <div className="relatorio-data">
                    Publicado em {new Date(relatorio.data).toLocaleDateString('pt-BR')}
                  </div>
                </div>
                <Button variant="outline" size="small">
                  <DownloadIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Download
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Auditoria e certificações */}
        <div className="auditoria-certificacoes mt-48">
          <h3>Auditoria e certificações</h3>
          <div className="audit-grid">
            <div className="audit-card">
              <h4><BuildingGovIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Registro no CNPJ</h4>
              <p>CNPJ: 12.345.678/0001-90</p>
              <p>Situação: Ativa</p>
              <p>Natureza: Associação Privada</p>
            </div>
            
            <div className="audit-card">
              <h4><ClipboardIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Certificações</h4>
              <p><CheckIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> OSCIP - Organização da Sociedade Civil de Interesse Público</p>
              <p><CheckIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Utilidade Pública Municipal</p>
              <p><CheckIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Cadastro Municipal de Entidades</p>
            </div>
            
            <div className="audit-card">
              <h4><SearchIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Auditoria Externa</h4>
              <p>Empresa: Auditores Associados Ltda</p>
              <p>Última auditoria: Janeiro 2024</p>
              <p>Resultado: Aprovada sem ressalvas</p>
            </div>
          </div>
        </div>

        {/* Política de transparência */}
        <div className="politica-transparencia mt-48">
          <h3>Nossa política de transparência</h3>
          <div className="politica-content">
            <p>
              A Nossa Casa adota os mais rigorosos padrões de transparência e prestação de contas. 
              Entendemos que a confiança da comunidade é nosso maior patrimônio.
            </p>
            
            <h4>Compromissos</h4>
            <ul>
              <li>Publicação trimestral de relatórios financeiros</li>
              <li>Divulgação anual de impacto social detalhado</li>
              <li>Assembleia geral anual aberta à comunidade</li>
              <li>Canal permanente para denúncias e sugestões</li>
              <li>Auditoria externa anual independente</li>
            </ul>

            <h4>Acesso à informação</h4>
            <p>
              Qualquer pessoa pode solicitar informações adicionais sobre nossas atividades e finanças. 
              Respondemos a todas as solicitações em até 15 dias úteis.
            </p>
          </div>
        </div>

        {/* Canal de denúncias */}
        <div className="canal-denuncias mt-32">
          <div className="denuncias-card">
            <h3><MegaphoneIcon size={24} style={{display: 'inline', marginRight: '8px'}} /> Canal de Transparência</h3>
            <p>
              Tem alguma dúvida sobre nossos processos ou quer fazer uma denúncia? 
              Entre em contato conosco de forma anônima ou identificada.
            </p>
            <div className="contatos-transparencia">
              <p><MailIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> transparencia@nossacasaat.org.br</p>
              <p><SmartphoneIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> WhatsApp: (61) 9999-9999</p>
              <p><InboxIcon size={16} style={{display: 'inline', marginRight: '4px'}} /> Caixa de sugestões física no nosso espaço</p>
            </div>
            <Button variant="fill">
              Enviar mensagem
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transparencia;