import { useLocale } from '../i18n/LocaleContext.jsx';
import Section from './Section.jsx';

export default function Stack() {
  const { t } = useLocale();

  return (
    <Section id="stack" label={t.stack.label} title={t.stack.title}>
      <div className="stack-grid">
        {t.stack.groups.map((group) => (
          <div className="stack-group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="stack-now">
        <strong>{t.stack.learningLabel}:</strong> {t.stack.learning.join(' · ')}
      </p>
    </Section>
  );
}
