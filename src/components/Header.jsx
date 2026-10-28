import { useLocale } from '../i18n/LocaleContext.jsx';
import LocaleToggle from './LocaleToggle.jsx';

export default function Header() {
  const { t } = useLocale();

  const links = [
    { href: '#projetos', label: t.nav.projects },
    { href: '#stack', label: t.nav.stack },
    { href: '#processo', label: t.nav.process },
    { href: '#contato', label: t.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#inicio">
          {t.hero.name}
        </a>
        <div className="header-actions">
          <nav className="site-nav" aria-label={t.nav.label}>
            <ul className="nav-list">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <LocaleToggle />
        </div>
      </div>
    </header>
  );
}
