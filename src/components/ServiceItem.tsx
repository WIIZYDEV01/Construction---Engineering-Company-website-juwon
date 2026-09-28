import { Link } from 'react-router-dom';

export function ServiceItem({
  number,
  title,
  description,
  href,
}: {
  number: string;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      to={href}
      className="group grid gap-3 border-b border-line py-6 transition-colors hover:bg-light sm:grid-cols-[4.5rem_1fr] sm:gap-6 sm:px-4"
    >
      <span className="font-display text-lg font-semibold text-accent-ink">{number}</span>
      <span>
        <span className="block font-display text-xl font-semibold text-navy transition-colors group-hover:text-accent-ink">
          {title}
        </span>
        <span className="mt-2 block text-muted">{description}</span>
      </span>
    </Link>
  );
}
