import { useLocale } from '../i18n/LocaleContext.jsx';

export default function Hero() {
  const { t } = useLocale();

  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <p className="label">{t.hero.label}</p>
      <h1 id="hero-title">{t.hero.name}</h1>
      <p className="hero-role">{t.hero.role}</p>
      <p className="hero-lead">{t.hero.lead}</p>
      <div className="actions">
        <a className="btn btn-primary" href="#projetos">
          {t.hero.ctaProjects}
        </a>
        <a
          className="btn btn-ghost"
          href="https://www.linkedin.com/in/gilvam-oliveira"
          target="_blank"
          rel="noreferrer"
        >
          {t.hero.ctaLinkedin} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
