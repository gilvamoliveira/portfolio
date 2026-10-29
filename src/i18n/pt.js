export const pt = {
  meta: {
    lang: 'pt-BR',
    title: 'Gilvam Oliveira — Desenvolvedor Back-End em formação',
    description:
      'Sou Gilvam Oliveira, desenvolvedor back-end em formação. Meu portfólio reúne cadastro de clientes com API REST em Node.js e SQLite, API de fórum em Java e Spring Boot, catálogo de livros com JPA e PostgreSQL e 84 exercícios de lógica.',
  },
  a11y: {
    skip: 'Pular para o conteúdo',
    language: 'Idioma',
    themeLight: 'Ativar tema claro',
    themeDark: 'Ativar tema escuro',
  },
  nav: {
    label: 'Seções do site',
    projects: 'Projetos',
    stack: 'Stack',
    process: 'Processo',
    contact: 'Contato',
  },
  hero: {
    label: 'Portfólio · 2026',
    name: 'Gilvam Oliveira',
    role: 'Desenvolvedor back-end em formação',
    lead: 'Construo APIs com Java, Spring Boot e Node.js e cuido também da interface que consome cada uma. Tenho um cadastro de clientes full-stack com SQLite e 23 testes no CI e uma API de fórum em Java. Começo C#/.NET no Instituto PROA.',
    ctaProjects: 'Ver projetos',
    ctaLinkedin: 'LinkedIn',
  },
  projects: {
    label: 'Projetos',
    title: 'O que eu já construí',
    roleLabel: 'Meu papel',
    demo: 'Ver demo',
    code: 'Código',
    items: {
      meteoro: {
        name: 'Meteoro de Lógica',
        summary:
          'Plataforma de estudo com 84 exercícios das apostilas Manzano e Faccat, soluções em VisualG e JavaScript lado a lado e um interpretador de VisualG escrito em JavaScript que executa os programas no navegador.',
        role: 'Resolvi os 84 exercícios nas duas linguagens.',
        alt: 'Catálogo do Meteoro de Lógica com exercícios da apostila Manzano organizados por página e linguagem',
      },
      crud: {
        name: 'Cadastro de Clientes — API e interface',
        summary:
          'API REST em Node.js com SQLite: paginação, busca, filtros e ordenação no servidor, autenticação opcional por token, rate limiting e CORS restrito. A interface funciona com a API e também sozinha, com fallback para localStorage.',
        role: 'Construí a base a partir do projeto do curso e evoluí a API e os 23 testes automatizados.',
        alt: 'Tela do Cadastro de Clientes em modo API, com indicadores, filtros e a tabela de clientes cadastrados',
      },
      'html-css': {
        name: 'Exercícios de HTML e CSS',
        summary:
          'Trilha com 70 exercícios de HTML5 e CSS3 feitos no PROA, de semântica e formulários a layout e responsividade, cada um em uma página própria.',
        role: 'Todos os 70 exercícios.',
        alt: 'Página inicial da trilha de exercícios de HTML e CSS com os níveis e as atividades',
      },
    },
    othersLabel: 'Também publiquei',
    others: [
      {
        name: 'ForumHub',
        description: 'API de fórum em Java e Spring Boot, com JPA, MySQL, Flyway e emissão de JWT.',
        href: 'https://github.com/GilvamOliveira/forumhub',
      },
      {
        name: 'LiterAlura',
        description: 'Catálogo de livros com Java, Spring Boot, JPA e PostgreSQL, consumindo a API Gutendex.',
        href: 'https://github.com/GilvamOliveira/LiterAlura',
      },
      {
        name: 'Portfólio de design',
        description: 'Oito protótipos de interface no Figma, de login a landing pages.',
        href: 'https://github.com/GilvamOliveira/design-portfolio',
      },
    ],
  },
  stack: {
    label: 'Stack',
    title: 'O que eu uso hoje',
    groups: [
      { title: 'Back-end', items: ['Java 17', 'Spring Boot', 'JPA', 'Node.js', 'APIs REST'] },
      { title: 'Dados', items: ['SQL', 'MySQL', 'PostgreSQL', 'SQL Server', 'SQLite'] },
      { title: 'Front-end', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite'] },
      { title: 'Qualidade', items: ['JUnit', 'node:test', 'GitHub Actions', 'Docker', 'Git'] },
    ],
    learningLabel: 'Começando agora',
    learning: ['C#/.NET'],
  },
  process: {
    label: 'Processo',
    title: 'Como eu trabalho',
    items: [
      {
        number: '01',
        title: 'Desenho',
        text: 'Antes de codificar, desenho o fluxo e a tela no Figma: wireframe, paleta e tipografia.',
      },
      {
        number: '02',
        title: 'Codifico',
        text: 'Começo pelo modelo de dados e pelo contrato da API. A interface vem depois, em JavaScript ou React.',
      },
      {
        number: '03',
        title: 'Publico',
        text: 'Deploy no GitHub Pages ou Vercel e teste no celular antes de mostrar para alguém.',
      },
    ],
  },
  contact: {
    label: 'Contato',
    title: 'Vamos conversar',
    lead: 'Estou buscando estágio ou posição júnior em back-end.',
    location: 'São Paulo — remoto ou híbrido',
    links: [
      {
        label: 'LinkedIn',
        value: 'in/gilvam-oliveira',
        href: 'https://www.linkedin.com/in/gilvam-oliveira',
      },
      {
        label: 'E-mail',
        value: 'oliveiragilvam70@gmail.com',
        href: 'mailto:oliveiragilvam70@gmail.com',
      },
      {
        label: 'GitHub',
        value: '@GilvamOliveira',
        href: 'https://github.com/GilvamOliveira',
      },
    ],
  },
  footer: {
    built: 'Construído por mim em React + Vite.',
    code: 'Código no GitHub',
    rights: '© 2026',
  },
};
