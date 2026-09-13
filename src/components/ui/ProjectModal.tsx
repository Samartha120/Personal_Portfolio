import React, { useEffect } from 'react';
import { X, ExternalLink, Cpu, CheckCircle2, ShieldCheck, BarChart3 } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../../types';
import { Button } from './Button';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-zinc-950/70 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 md:p-8 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <span className="inline-block text-xs font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-2">
            {project.category} Technical Specification
          </span>
          <h2 id="modal-title" className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            {project.title}
          </h2>
          <p className="mt-1 text-sm md:text-base text-zinc-600 dark:text-zinc-400">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack Bar */}
        <div className="flex flex-wrap gap-1.5 mb-8 pb-6 border-b border-zinc-100 dark:border-zinc-800">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Section 1: Problem & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              The Problem
            </h3>
            <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Engineering Approach
            </h3>
            <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {project.approach}
            </p>
          </div>
        </div>

        {/* Section 2: Architecture Highlights */}
        {project.architecture && (
          <div className="mb-8">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
              System Architecture
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-zinc-700 dark:text-zinc-300 bg-zinc-50/50 dark:bg-zinc-800/20 p-4 rounded-lg border border-zinc-200/60 dark:border-zinc-800">
              {project.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-xs text-blue-600 dark:text-blue-400 font-bold shrink-0">
                    [{idx + 1}]
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Section 3: Implementation Bullet Points */}
        <div className="mb-8">
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
            Implementation Details
          </h3>
          <ul className="space-y-2.5 text-xs md:text-sm text-zinc-700 dark:text-zinc-300">
            {project.implementationDetails.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4: Performance Metrics */}
        {project.metrics && (
          <div className="mb-8 p-4 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/60">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              Verified Metrics & Benchmarks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200">
                  • {metric}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="flex items-center justify-between gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-800">
          <Button variant="outline" size="sm" onClick={onClose}>
            Close Specs
          </Button>

          <div className="flex items-center gap-3">
            <Button
              as="a"
              href={project.githubUrl}
              target="_blank"
              variant="secondary"
              size="sm"
              icon={<GithubIcon className="w-4 h-4" />}
            >
              Source Code
            </Button>
            {project.liveDemoUrl && (
              <Button
                as="a"
                href={project.liveDemoUrl}
                target="_blank"
                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
