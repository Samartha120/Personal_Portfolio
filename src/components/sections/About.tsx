import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { profileData } from '../../data/profile';
import { Terminal, Code, Database, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Background & Focus"
          title="About Me"
          subtitle="Engineering pragmatic web applications and robust backend systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bio text block */}
          <div className="md:col-span-2 space-y-4 text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {profileData.fullBio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Quick Technical Summary Card */}
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/50 p-5 h-fit space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 pb-2 border-b border-zinc-200 dark:border-zinc-800">
              Core Technical Focus
            </h3>

            <ul className="space-y-3 text-xs md:text-sm text-zinc-700 dark:text-zinc-300">
              {profileData.primaryFocus.map((focus, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  {index === 0 && <Code className="w-4 h-4 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />}
                  {index === 1 && <Database className="w-4 h-4 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />}
                  {index === 2 && <Cpu className="w-4 h-4 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />}
                  {index === 3 && <Terminal className="w-4 h-4 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />}
                  {(index > 3) && <Code className="w-4 h-4 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />}
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
