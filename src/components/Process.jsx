import { useLocale } from '../i18n/LocaleContext.jsx';
import Section from './Section.jsx';

export default function Process() {
  const { t } = useLocale();

  return (
    <Section id="processo" label={t.process.label} title={t.process.title}>
      <div className="process-grid">
        {t.process.items.map((step) => (
          <div className="process-step" key={step.number}>
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
