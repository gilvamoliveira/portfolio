import { useLocale } from '../i18n/LocaleContext.jsx';
import Section from './Section.jsx';

export default function Contact() {
  const { t } = useLocale();

  return (
    <Section id="contato" label={t.contact.label} title={t.contact.title}>
      <div className="contact-grid">
        <p className="contact-lead">{t.contact.lead}</p>
        <ul className="contact-list">
          {t.contact.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <span>{link.label}</span>
                <span className="contact-value">{link.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="availability">{t.contact.location}</p>
    </Section>
  );
}
