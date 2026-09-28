export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto w-full max-w-[1360px] px-5 py-14 sm:px-8 md:py-20 lg:px-10">
        {eyebrow ? (
          <p className="text-xs font-semibold tracking-[0.18em] text-accent-ink uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold md:text-5xl">{title}</h1>
        {intro ? <p className="mt-5 max-w-2xl text-lg text-muted">{intro}</p> : null}
      </div>
    </header>
  );
}
