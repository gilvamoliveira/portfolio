import { useLocale } from '../i18n/LocaleContext.jsx';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';
import Section from './Section.jsx';

export default function Projects() {
  const { t } = useLocale();

  return (
    <Section id="projetos" label={t.projects.label} title={t.projects.title}>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
