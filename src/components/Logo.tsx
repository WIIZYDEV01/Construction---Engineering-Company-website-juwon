import { Link } from 'react-router-dom';

export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const color = tone === 'light' ? '#ffffff' : '#0B1F33';

  return (
    <Link to="/" className="inline-flex items-center gap-2.5" aria-label="Vertex Construction & Engineering, home">
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <path d="M4 23 L14 5 L24 23" fill="none" stroke={color} strokeWidth="1.8" />
        <path d="M9.2 23 L14 14 L18.8 23" fill="none" stroke="#E8752A" strokeWidth="1.8" />
      </svg>
      <span className="font-display text-[15px] font-semibold tracking-[0.22em]" style={{ color }}>
        VERTEX
      </span>
    </Link>
  );
}
