import { useLocale } from '../i18n/LocaleContext.jsx';

const options = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
];

export default function LocaleToggle() {
  const { locale, setLocale, t } = useLocale();

  return (
    <div className="locale-toggle" role="group" aria-label={t.a11y.language}>
      {options.map((option) => (
        <button
          key={option.code}
          type="button"
          className="locale-option"
          aria-pressed={locale === option.code}
          onClick={() => setLocale(option.code)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
