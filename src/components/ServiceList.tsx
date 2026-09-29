import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProject } from '../data/projects';
import { services } from '../data/services';
import { cn } from '../lib/cn';

export function ServiceList() {
  const [active, setActive] = useState(0);

  return (
    <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(200px,28%)] lg:items-start lg:gap-16">
      <ul>
        {services.map((service, index) => (
          <li key={service.id} className="border-t border-ink/15 last:border-b" onMouseEnter={() => setActive(index)}>
            <Link
              to={`/services#${service.id}`}
              className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-4 py-7 md:gap-8 md:py-8"
              onFocus={() => setActive(index)}
            >
              <span className="kicker pt-2 text-ink/70">{service.number}</span>
              <span className="min-w-0">
                <span className="link-shift display block text-[clamp(1.8rem,3vw,2.9rem)] text-ink">{service.title}</span>
                <span className="mt-3 block max-w-xl text-sm leading-relaxed text-body/80">{service.summary}</span>
              </span>
              <span aria-hidden="true" className="arrow pt-3 text-ink">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="relative mt-8 hidden lg:block" aria-hidden="true">
        <div className="sticky top-28 overflow-hidden bg-ink-2">
          {services.map((service, index) => {
            const image = getProject(service.relatedSlug)?.hero;
            if (!image) return null;
            return (
              <img
                key={service.id}
                src={image.src}
                alt=""
                className={cn(
                  'aspect-[3/4] w-full object-cover transition-opacity duration-500',
                  index === active ? 'relative opacity-100' : 'pointer-events-none absolute inset-0 opacity-0',
                )}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
