import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { experienceData } from '../../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  if (!experienceData || experienceData.length === 0) return null;

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Work History"
          title="Experience & Internships"
          subtitle="Engineering roles where I contributed to production web products and internal tooling."
        />

        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-3 md:ml-4 space-y-10 pl-6 md:pl-8">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Bullet Dot */}
              <span className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-500 border-2 border-white dark:border-zinc-950 shadow-xs" />

              <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>{exp.role}</span>
                    </h3>
                    <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Concrete Bullet Points */}
                <ul className="space-y-2.5 text-xs md:text-sm text-zinc-600 dark:text-zinc-300 mb-5">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-1 shrink-0 text-blue-600 dark:text-blue-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-200/80 dark:border-zinc-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
