import { Link } from 'react-router-dom';
import { cn } from '../lib/cn';

export function Logo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn('kicker text-[0.78rem] tracking-[0.32em] text-white', className)}>
      Vertex
    </Link>
  );
}
