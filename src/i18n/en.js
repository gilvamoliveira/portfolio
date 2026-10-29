export const en = {
  meta: {
    lang: 'en-US',
    title: 'Gilvam Oliveira — Back-End Developer in training',
    description:
      'I am Gilvam Oliveira, a back-end developer in training. My portfolio brings together a client registry with a REST API in Node.js and SQLite, a forum API in Java and Spring Boot, a book catalogue with JPA and PostgreSQL, and 84 programming-logic exercises.',
  },
  a11y: {
    skip: 'Skip to content',
    language: 'Language',
    themeLight: 'Switch to light theme',
    themeDark: 'Switch to dark theme',
  },
  nav: {
    label: 'Site sections',
    projects: 'Projects',
    stack: 'Stack',
    process: 'Process',
    contact: 'Contact',
  },
  hero: {
    label: 'Portfolio · 2026',
    name: 'Gilvam Oliveira',
    role: 'Back-end developer in training',
    lead: 'I build APIs with Java, Spring Boot and Node.js, and I also take care of the interface that consumes them. I have a full-stack client registry with SQLite and 23 tests in CI, and a forum API in Java. I am starting C#/.NET at Instituto PROA.',
    ctaProjects: 'View projects',
    ctaLinkedin: 'LinkedIn',
  },
  projects: {
    label: 'Projects',
    title: "What I've built",
    roleLabel: 'My role',
    demo: 'Live demo',
    code: 'Source',
    items: {
      meteoro: {
        name: 'Meteoro de Lógica',
        summary:
          'Study platform with 84 exercises from the Manzano and Faccat workbooks, VisualG and JavaScript solutions side by side, and a VisualG interpreter written in JavaScript that runs the programs in the browser.',
        role: 'I solved all 84 exercises in both languages.',
        alt: 'Meteoro de Lógica catalog with Manzano workbook exercises organized by page and language',
      },
      crud: {
        name: 'Client Registry — API and interface',
        summary:
          'REST API in Node.js with SQLite: server-side pagination, search, filters and sorting, optional token authentication, rate limiting and restricted CORS. The interface works with the API and also on its own, falling back to localStorage.',
        role: 'I built the base from the course project and evolved the API and its 23 automated tests.',
        alt: 'Client registry screen in API mode with summary metrics, filters and the client table',
      },
      'html-css': {
        name: 'HTML and CSS Exercises',
        summary:
          'A 70-exercise HTML5 and CSS3 track built at PROA, from semantics and forms to layout and responsiveness, each one on its own page.',
        role: 'All 70 exercises.',
        alt: 'Landing page of the HTML and CSS exercise track with levels and activities',
      },
    },
    othersLabel: 'Also published',
    others: [
      {
        name: 'ForumHub',
        description: 'Forum API in Java and Spring Boot, with JPA, MySQL, Flyway and JWT issuance.',
        href: 'https://github.com/GilvamOliveira/forumhub',
      },
      {
        name: 'LiterAlura',
        description: 'Book catalogue with Java, Spring Boot, JPA and PostgreSQL, querying the Gutendex API.',
        href: 'https://github.com/GilvamOliveira/LiterAlura',
      },
      {
        name: 'Design portfolio',
        description: 'Eight interface prototypes in Figma, from login screens to landing pages.',
        href: 'https://github.com/GilvamOliveira/design-portfolio',
      },
    ],
  },
  stack: {
    label: 'Stack',
    title: 'What I use today',
    groups: [
      { title: 'Back end', items: ['Java 17', 'Spring Boot', 'JPA', 'Node.js', 'REST APIs'] },
      { title: 'Data', items: ['SQL', 'MySQL', 'PostgreSQL', 'SQL Server', 'SQLite'] },
      { title: 'Front end', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vite'] },
      { title: 'Quality', items: ['JUnit', 'node:test', 'GitHub Actions', 'Docker', 'Git'] },
    ],
    learningLabel: 'Starting now',
    learning: ['C#/.NET'],
  },
  process: {
    label: 'Process',
    title: 'How I work',
    items: [
      {
        number: '01',
        title: 'Design',
        text: 'Before coding, I sketch the flow and the screen in Figma: wireframe, palette and typography.',
      },
      {
        number: '02',
        title: 'Build',
        text: 'I start with the data model and the API contract. The interface comes next, in JavaScript or React.',
      },
      {
        number: '03',
        title: 'Ship',
        text: 'Deploy to GitHub Pages or Vercel and test on a phone before showing it to anyone.',
      },
    ],
  },
  contact: {
    label: 'Contact',
    title: "Let's talk",
    lead: "I'm looking for an internship or a junior back-end position.",
    location: 'São Paulo — remote or hybrid',
    links: [
      {
        label: 'LinkedIn',
        value: 'in/gilvam-oliveira',
        href: 'https://www.linkedin.com/in/gilvam-oliveira',
      },
      {
        label: 'Email',
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
    built: 'Built by me with React + Vite.',
    code: 'Source on GitHub',
    rights: '© 2026',
  },
};
