# Portfólio — Gilvam Oliveira

Site pessoal de Gilvam Oliveira, desenvolvedor front-end em formação. Uma página única, em português e inglês, com os projetos que ele consegue explicar linha por linha.

- **Stack:** React 19 + Vite 8, CSS puro com design tokens, i18n sem biblioteca externa.
- **Deploy alvo:** Vercel (`gilvamoliveira.vercel.app`), com domínio próprio `gilvam.is-a.dev`.
- **Sem router:** navegação por âncoras (`#inicio`, `#projetos`, `#stack`, `#processo`, `#contato`).

## Como rodar

```bash
npm install
npm run dev      # servidor local em http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o dist/ em http://localhost:4173
```

Requisitos: Node 20+ (testado com Node 24).

## Estrutura

```
src/
  App.jsx                 composição das seções
  main.jsx                entrada
  styles.css              tokens, layout e responsividade
  components/             Header, Hero, Section, Projects, ProjectCard,
                          Stack, Process, Contact, Footer, LocaleToggle
  data/projects.js        dados estruturais dos projetos (URLs, imagens, stack)
  i18n/
    pt.js                 todos os textos em português
    en.js                 todos os textos em inglês
    LocaleContext.jsx     provider, useLocale(), persistência e <html lang>
public/
  projects/               capturas dos três projetos (4:3)
  og.png                  imagem de compartilhamento (1200x630)
  favicon.svg
```

### Onde editar o quê

- **Textos:** `src/i18n/pt.js` e `src/i18n/en.js`. As duas árvores têm a mesma forma; ao adicionar uma chave, adicione nas duas.
- **Projetos:** `src/data/projects.js` guarda apenas o que não é traduzível (`id`, `number`, `stack`, `demo`, `repo`, `image`, `width`, `height`, `featured`). Título, resumo e "meu papel" ficam nos arquivos de i18n, indexados pelo `id`.
- **Cores, espaçamento e tipografia:** tokens no topo de `src/styles.css`. Grid de 8px, paleta escura (`--bg #0a0c0f`, `--accent #58e6a8`).
- **Imagens:** 4:3, recortadas com `object-fit: cover` e `object-position: top center`. Substitua mantendo a proporção para não cortar títulos.

### Idioma

`LocaleContext` lê `localStorage["portfolio-locale"]`, atualiza `document.documentElement.lang` e `document.title`, e cai em `pt-BR` quando não há preferência salva. O toggle usa `aria-pressed` e não recarrega a página.

## Acessibilidade

- Skip link para o conteúdo principal.
- Foco visível (`:focus-visible`) em todos os elementos interativos.
- Contraste conferido na paleta escura; imagens com `alt` descritivo.
- `prefers-reduced-motion` desliga animações e rolagem suave.

## Deploy

1. Crie o repositório `portfolio` em `github.com/GilvamOliveira` e envie este projeto.
2. Na Vercel, importe o repositório com o nome de projeto `gilvamoliveira` (o nome define a URL `gilvamoliveira.vercel.app`). Framework: Vite; build: `npm run build`; output: `dist`.
3. Depois do primeiro deploy, troque `og:image` em `index.html` para a URL absoluta (`https://gilvamoliveira.vercel.app/og.png`).
4. Domínio próprio `gilvam.is-a.dev`: abra um PR em `is-a-dev/register` com `domains/gilvam.json` apontando para `cname.vercel-dns.com`, conforme as instruções do repositório. O JSON deve ser escrito à mão — o próprio projeto pede que não seja gerado por IA.

## Notas

- O link "Código no GitHub" no rodapé aponta para `github.com/GilvamOliveira/portfolio`; ele só funciona depois do passo 1 acima.
- A fonte Inter é empacotada via `@fontsource-variable/inter`, sem requisição a CDN.
- As capturas em `public/projects/` vêm dos próprios projetos publicados.
