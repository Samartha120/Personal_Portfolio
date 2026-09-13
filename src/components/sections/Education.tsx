import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { educationData } from '../../data/education';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  if (!educationData || educationData.length === 0) return null;

  return (
    <section id="education" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          subtitle="Formal engineering education and computer science fundamentals."
        />

        <div className="space-y-6">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{edu.degree} — {edu.field}</span>
                  </h3>
                  <div className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="text-zinc-300 dark:text-zinc-700">•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {edu.location}
                  </span>
                </div>
              </div>

              {edu.details && (
                <ul className="space-y-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-300 mt-4">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-1 shrink-0 text-blue-600 dark:text-blue-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
