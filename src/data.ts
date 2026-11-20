export const baseGh = 'https://github.com/sistemak/korvil-app/blob/main/';
export const baseRaw = 'https://raw.githubusercontent.com/sistemak/korvil-app/main/';

export type SectionItem = {
  name: string;
  path: string;
  icon: string;
};

export type Section = {
  id: string;
  name: string;
  logo: string;
  path: string;
  color: string;
  tagline: string;
  neon?: boolean;
};

export const sections: Section[] = [
  { id: 'kalma', name: 'k-alma', logo: baseRaw + 'korvil/sections/kalma/images/logokalma.png', path: 'korvil/sections/kalma/index.html', color: '#ec4899', tagline: 'saude & bem-estar' },
  { id: 'kafortunado', name: 'k-afortunado', logo: baseRaw + 'korvil/sections/kafortunado/images/logokafortunado.png', path: 'korvil/sections/kafortunado/index.html', color: '#f59e0b', tagline: 'empreendedorismo & financas' },
  { id: 'ktp', name: 'k-tp', logo: baseRaw + 'korvil/sections/ktp/assets/images/logoktp.png', path: 'korvil/sections/ktp/index.html', color: '#00ff88', tagline: 'fitness & performance', neon: true },
  { id: 'sistemak', name: 'sistema k', logo: baseRaw + 'korvil/sections/sistemak/images/logosistemak.png', path: 'korvil/sections/sistemak/index.html', color: '#3b82f6', tagline: 'servicos & tecnologia' },
];

export const central: Record<string, SectionItem[]> = {
  desenvolvimentohumano: [
    { name: 'cursos', path: 'korvil/sections/centralkorvil/desenvolvimento-humano/cursos/index.html', icon: '📚' },
    { name: 'plataforma-dos-cursos', path: 'korvil/sections/centralkorvil/desenvolvimento-humano/cursos/plataforma-dos-cursos.html', icon: '🎓' },
    { name: 'areas', path: 'korvil/sections/centralkorvil/desenvolvimento-humano/cursos/areas/index.html', icon: '🗂️' },
    { name: 'treinamento-personalizado', path: 'korvil/sections/centralkorvil/desenvolvimento-humano/cursos/areas/treinamento-personalizado/index.html', icon: '🎯' },
    { name: 'servicos-profissionais', path: 'korvil/sections/centralkorvil/desenvolvimento-humano/cursos/areas/servicos-profissionais/index.html', icon: '💼' },
    { name: 'form-pro-manut-cel', path: 'korvil/sections/centralkorvil/desenvolvimento-humano/cursos/areas/servicos-profissionais/form-pro-manut-cel/index.html', icon: '📱' },
    { name: 'saude / kth', path: 'korvil/sections/centralkorvil/desenvolvimento-humano/cursos/areas/saude/kth/index.html', icon: '💙' },
    { name: 'calendario-anual', path: 'korvil/sections/centralkorvil/desenvolvimento-humano/cursos/areas/saude/kth/calendario-anual.html', icon: '📅' },
    { name: 'conclusao-certificados', path: 'korvil/sections/centralkorvil/desenvolvimento-humano/cursos/areas/saude/kth/conclusao-certificados/index.html', icon: '🏆' },
    { name: 'fase1', path: 'korvil/sections/centralkorvil/desenvolvimento-humano/cursos/areas/saude/kth/fase1/index.html', icon: '①' },
    { name: 'fase2', path: 'korvil/sections/centralkorvil/desenvolvimento-humano/cursos/areas/saude/kth/fase2/index.html', icon: '②' },
    { name: 'fase3', path: 'korvil/sections/centralkorvil/desenvolvimento-humano/cursos/areas/saude/kth/fase3/index.html', icon: '③' },
    { name: 'fase4', path: 'korvil/sections/centralkorvil/desenvolvimento-humano/cursos/areas/saude/kth/fase4/index.html', icon: '④' },
    { name: 'empreendedorismo / negocio-proprio', path: 'korvil/sections/centralkorvil/desenvolvimento-humano/cursos/areas/empreendedorismo/negocio-proprio/index.html', icon: '🚀' },
    { name: 'beleza / cabeleireiro-unissex', path: 'korvil/sections/centralkorvil/desenvolvimento-humano/cursos/areas/beleza/cabeleireiro-unissex/index.html', icon: '💇' },
  ],
  negocios: [
    { name: 'negocios', path: 'korvil/sections/centralkorvil/negocios/index.html', icon: '💼' },
    { name: 'parcerias', path: 'korvil/sections/centralkorvil/negocios/parcerias/index.html', icon: '🤝' },
  ],
  servicos: [
    { name: 'servicos', path: 'korvil/sections/centralkorvil/servicos/index.html', icon: '🔧' },
  ],
  korvilloja: [
    { name: 'korvil-loja', path: 'korvil/sections/centralkorvil/korvil-loja/index.html', icon: '🛒' },
    { name: 'loja - sections/korvil-loja', path: 'korvil/sections/korvil-loja/index.html', icon: '🛒' },
  ],
};

export const sistemakItems: SectionItem[] = [
  { name: 'servicos-gerais', path: 'korvil/sections/sistemak/index.html', icon: '🔧' },
  { name: 'suporte', path: 'korvil/sections/sistemak/servicos/suporte.html', icon: '🛡️' },
  { name: 'integracoes', path: 'korvil/sections/sistemak/servicos/integracoes.html', icon: '🔌' },
  { name: 'sistemak', path: 'korvil/sections/sistemak/index.html', icon: '⚙️' },
];

export const ktpItems: SectionItem[] = [
  { name: 'k-tp', path: 'korvil/sections/ktp/index.html', icon: '💪' },
  { name: 'projeto-transformacao', path: 'korvil/sections/ktp/projetotransformacao/index.html', icon: '🏃' },
  { name: 'planos', path: 'korvil/sections/ktp/servicos/planos.html', icon: '📋' },
];

export const kafortunadoItems: SectionItem[] = [
  { name: 'k-afortunado', path: 'korvil/sections/kafortunado/index.html', icon: '💰' },
  { name: 'cursos', path: 'korvil/sections/kafortunado/cursos.html', icon: '🎓' },
  { name: 'oportunidades', path: 'korvil/sections/kafortunado/oportunidades.html', icon: '💡' },
];

export const kalmaItems: SectionItem[] = [
  { name: 'k-alma', path: 'korvil/sections/kalma/index.html', icon: '💙' },
  { name: 'servicos', path: 'korvil/sections/kalma/servicos.html', icon: '🔧' },
  { name: 'terapeutas', path: 'korvil/sections/kalma/terapeutas.html', icon: '🧖' },
];

export function sectionItems(id: string): SectionItem[] {
  if (id === 'kalma') return kalmaItems;
  if (id === 'kafortunado') return kafortunadoItems;
  if (id === 'ktp') return ktpItems;
  if (id === 'sistemak') return sistemakItems;
  return [];
}

export const drawerGroups: { title: string; items: SectionItem[] }[] = [
  {
    title: 'central korvil',
    items: [
      ...central.desenvolvimentohumano,
      ...central.negocios,
      ...central.servicos,
      ...central.korvilloja,
    ],
  },
  { title: 'sistema k', items: sistemakItems },
  { title: 'k-tp', items: ktpItems },
  { title: 'k-afortunado', items: kafortunadoItems },
  { title: 'k-alma', items: kalmaItems },
];

export const kaiResponses: Record<string, string> = {
  loja: 'conectando ao github... verifiquei a estrutura korvil/sections/centralkorvil/korvil-loja/index.html e tambem korvil/sections/korvil-loja/index.html. a korvil loja esta pronta com marketplace oficial, produtos do ecossistema, carrinho, categorias e checkout integrado. quer que eu abra a loja agora?',
  cursos: 'a central korvil oferece: plataforma-dos-cursos, areas (beleza, empreendedorismo, saude, servicos-profissionais), treinamento-personalizado, form-pro-manut-cel, saude/kth com 4 fases, calendario-anual, conclusao-certificados, empreendedorismo/negocio-proprio e beleza/cabeleireiro-unissex. todos com certificados de conclusao. qual curso deseja explorar?',
  servicos: 'o sistema k oferece: servicos-gerais, suporte, integracoes e a plataforma sistemak. inclui limpeza, seguranca, profissionais, advocacia, contabilidade, tecnologias, sites e sistemas. acesso total automatico verificado e combinado com o github e o bolt.',
  kafortunado: 'k-afortunado: empreendedorismo, cursos, oportunidades, financas, investimentos e planilhas. tudo verificado no repositorio e pronto para uso no app.',
  kalma: 'k-alma: saude, terapia-holistica, massoterapia, ortopedista, ortodontia, beleza, barbearia, cabeleireiro, esteticista e manicure-pedicure. cuidado completo do bem-estar verificado no github.',
  ktp: 'k-tp: fitness, projeto-transformacao, planos, acessorios, artigos-esportivos, equipamentos-aparelhos, suplementos e produtos-alimentares. performance total verificada.',
  sistemak: 'sistema k: servicos-gerais, suporte, integracoes, tecnologias, sites e sistemas. acesso total combinado com k-ai, github, bolt e app.',
  github: 'github e a fonte original onde toda estrutura, pastas, arquivos, codigos e index sao salvos. k-ai, bolt e app tem acesso total automatico permitido combinado entre eles.',
  bolt: 'bolt e o construtor ilimitado que cria tudo completo e salva organizado em pastas dentro do github. ja cria o projeto final renderizado como app instalado no celular. bolt reconhece k-ai, github e app automaticamente.',
  app: 'korvil app e o app final que atualiza em tempo real sem precisar desinstalar e instalar de novo a cada atualizacao. reconhece tudo que esta no github e no s.o.k automaticamente.',
};

export function kaiReply(q: string): string {
  const lower = q.toLowerCase();
  for (const [key, resp] of Object.entries(kaiResponses)) {
    if (lower.includes(key)) return resp;
  }
  return 'sou a k-ai, inventora do ecossistema korvil. tenho acesso total automatico ao github, bolt e app. posso criar lojas, cursos, servicos, sistemas e muito mais. o que voce quer construir hoje?';
}

export const kaiLogo = baseRaw + 'korvil/sok/k-ai/assets/logokai/logokai.png';
export const korvilLogo = baseRaw + 'korvil/assets/images/logokorvil.png';
