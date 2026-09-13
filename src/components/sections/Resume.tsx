import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';
import { Download, ExternalLink, FileCheck, CheckCircle2 } from 'lucide-react';

export const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Curriculum Vitae"
          title="Resume & Documentation"
          subtitle="Download or view a concise single-page engineering resume tailored for recruiter review."
        />

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 md:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-200 dark:border-emerald-800">
                <FileCheck className="w-4 h-4" />
                <span>PDF Format • Updated for 2026</span>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {profileData.name} — Technical Resume
              </h3>

              <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
                Contains detailed technical project specs, verified system metrics, education, programming stack, and internship work history.
              </p>

              <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono text-zinc-700 dark:text-zinc-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>ATS-Optimized Layout</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>Verified Project Repos</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
              <Button
                as="a"
                href={profileData.resumeUrl}
                download="Samartha_Shrestha_Resume.pdf"
                variant="primary"
                size="md"
                className="w-full justify-center"
                icon={<Download className="w-4 h-4" />}
              >
                Download PDF
              </Button>

              <Button
                as="a"
                href={profileData.resumeUrl}
                target="_blank"
                variant="outline"
                size="md"
                className="w-full justify-center text-xs font-mono"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                View in Browser
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
