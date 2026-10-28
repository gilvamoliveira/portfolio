import { useLocale } from '../i18n/LocaleContext.jsx';

export default function ProjectCard({ project }) {
  const { t } = useLocale();
  const copy = t.projects.items[project.id];

  return (
    <article className={`card${project.featured ? ' card--wide' : ''}`}>
      <div className="card-media">
        <img
          src={project.image}
          alt={copy.alt}
          width={project.width}
          height={project.height}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <span className="card-number">{project.number}</span>
          <h3>{copy.name}</h3>
        </div>
        <p className="card-summary">{copy.summary}</p>
        <p className="card-role">
          <span>{t.projects.roleLabel}</span>
          {copy.role}
        </p>
        <ul className="tags">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="card-links">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              {t.projects.demo} <span aria-hidden="true">↗</span>
            </a>
          )}
          <a href={project.repo} target="_blank" rel="noreferrer">
            {t.projects.code} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}
