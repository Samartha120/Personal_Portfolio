import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { achievementsData } from '../../data/achievements';
import { Award, ExternalLink } from 'lucide-react';

export const Achievements: React.FC = () => {
  if (!achievementsData || achievementsData.length === 0) return null;

  return (
    <section id="achievements" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Recognition"
          title="Achievements & Activity"
          subtitle="Notable engineering competitions, awards, and community contributions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-600 dark:text-blue-400">
                    <Award className="w-4 h-4 shrink-0" />
                    {item.issuer}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 hover:underline pt-2 border-t border-zinc-100 dark:border-zinc-800/80"
                >
                  <span>View Project Reference</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
