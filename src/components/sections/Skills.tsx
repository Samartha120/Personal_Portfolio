import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { skillsData } from '../../data/skills';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Skills & Tooling"
          subtitle="Technologies and concepts I work with regularly across full-stack software development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-5 md:p-6 shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-900 dark:text-zinc-100 uppercase mb-1">
                {category.title}
              </h3>
              {category.description && (
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-normal">
                  {category.description}
                </p>
              )}

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/90 px-3 py-1 rounded border border-zinc-200/80 dark:border-zinc-700/60 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
