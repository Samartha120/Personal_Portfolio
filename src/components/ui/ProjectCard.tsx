import React from 'react';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import type { Project } from '../../types';
import { Button } from './Button';
import { cn } from '../../lib/utils';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelect,
  featured = false
}) => {
  return (
    <article
      className={cn(
        'group relative flex flex-col justify-between rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 p-6 md:p-8 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm hover:shadow-md',
        featured && 'md:col-span-2 border-zinc-300 dark:border-zinc-700 bg-zinc-50/50 dark:bg-zinc-900/90'
      )}
    >
      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2">
            <span className="inline-block text-[11px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
              {project.category}
            </span>
            {featured && (
              <span className="inline-block text-[11px] font-mono font-medium tracking-wide uppercase px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                Featured Project
              </span>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2">
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
          {project.tagline}
        </p>

        {/* Implementation Bullets */}
        <div className="mb-6 space-y-2">
          <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Key Implementation Details
          </h4>
          <ul className="space-y-2 text-xs md:text-sm text-zinc-700 dark:text-zinc-300">
            {project.implementationDetails.slice(0, featured ? 4 : 3).map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-normal">
                <CheckCircle2 className="w-3.5 h-3.5 mt-1 shrink-0 text-blue-600 dark:text-blue-400" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 px-2 py-1 rounded border border-zinc-200/60 dark:border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 mt-auto">
        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors"
              aria-label={`Open live demo for ${project.title}`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => onSelect(project)}
          className="text-xs font-mono font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800"
          icon={<ArrowRight className="w-3.5 h-3.5" />}
          iconPosition="right"
        >
          View Specs
        </Button>
      </div>
    </article>
  );
};
