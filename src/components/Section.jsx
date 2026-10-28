export default function Section({ id, label, title, children, className = '' }) {
  const titleId = `${id}-title`;

  return (
    <section
      id={id}
      className={`section ${className}`.trim()}
      aria-labelledby={titleId}
    >
      <header className="section-head">
        <p className="label">{label}</p>
        <h2 id={titleId}>{title}</h2>
      </header>
      {children}
    </section>
  );
}
