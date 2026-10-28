import { useLocale } from '../i18n/LocaleContext.jsx';

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>{t.footer.built}</p>
        <p>
          <a
            href="https://github.com/GilvamOliveira/portfolio"
            target="_blank"
            rel="noreferrer"
          >
            {t.footer.code}
          </a>
          <span aria-hidden="true"> · </span>
          {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
