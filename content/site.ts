// content/site.ts
import type { Product, Pain, Segment, Pillar } from "@/lib/types";

export const products: Product[] = [
  {
    id: "locacao",
    role: "Locação",
    name: "GT Locação",
    tagline: "Equipamentos de TI sob medida, sem imobilizar capital.",
    features: [
      "Notebooks, desktops, monitores e periféricos",
      "Troca de CAPEX por OPEX mensal previsível",
      "Reposição e upgrade contínuos",
    ],
    color: "green",
    href: "#contato",
  },
  {
    id: "servicos",
    role: "Serviços",
    name: "GT Serviços",
    tagline: "Suporte e assistência com uma equipe altamente especializada.",
    features: [
      "Help desk e suporte técnico dedicado",
      "Onboarding e offboarding de colaboradores",
      "Infraestrutura gerenciada de ponta a ponta",
    ],
    color: "magenta",
    href: "#contato",
  },
  {
    id: "tracker",
    role: "Plataforma",
    name: "Tracker Pro",
    tagline: "Todos os dados dos seus ativos de TI em um só painel.",
    features: [
      "Inventário e ciclo de vida dos equipamentos",
      "Indicadores de uso e alertas de manutenção",
      "Decisões orientadas por dados, não por achismo",
    ],
    color: "orange",
    href: "#tracker",
  },
];

export const pains: Pain[] = [
  { index: "01", title: "Capital preso em hardware",  description: "Comprar equipamento imobiliza um caixa que poderia ir para pessoas e projetos." },
  { index: "02", title: "Gestão que consome tempo",   description: "Contratos, prazos, manutenção, reposição... uma operação inteira só pra administrar TI." },
  { index: "03", title: "Suporte que não resolve",    description: "Quando um equipamento para, o prejuízo é a produtividade da equipe toda." },
];

export const segments: Segment[] = [
  { id: "logistica",  label: "Logística" },
  { id: "industria",  label: "Indústria" },
  { id: "educacao",   label: "Educação" },
  { id: "varejo",     label: "Varejo" },
  { id: "saude",      label: "Saúde" },
  { id: "servicos",   label: "Serviços" },
  { id: "impressao",  label: "Impressão" },
];

export const pillars: Pillar[] = [
  { key: "Multi recursos",  title: "Soluções, não caixas",        description: "Mais que equipamentos, soluções integradas que transformam a operação.", color: "blue" },
  { key: "Data driven",     title: "Dados são o novo petróleo",   description: "Abordagem orientada por dados que destrava insights e decisões precisas.", color: "green" },
  { key: "Skin in the game",title: "Nossa pele no jogo",          description: "Riscos compartilhados e compromisso genuíno com o seu resultado.",       color: "magenta" },
  { key: "Evolução",        title: "A única constante",           description: "Aprendizado contínuo: cada solução antecipa as tendências do mercado.",   color: "orange" },
];