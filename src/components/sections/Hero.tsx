import React from 'react';
import { ArrowDown, FileText, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const yOffset = -70;
      const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-28 md:pt-36 pb-16 md:pb-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-300 text-xs font-mono mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{profileData.status}</span>
        </div>

        {/* Role Title Eyebrow */}
        <div className="text-xs md:text-sm font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
          {profileData.roleTitle}
        </div>

        {/* Main Name Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.15] mb-6">
          Hi, I&apos;m {profileData.name} — I build reliable software and clean digital experiences.
        </h1>

        {/* Natural Intro Paragraph */}
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-8">
          {profileData.shortBio}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <Button
            onClick={scrollToProjects}
            variant="primary"
            size="md"
            icon={<ArrowDown className="w-4 h-4" />}
            iconPosition="right"
          >
            View Projects
          </Button>

          <Button
            as="a"
            href={profileData.resumeUrl}
            download="Samartha_Shrestha_Resume.pdf"
            variant="outline"
            size="md"
            icon={<FileText className="w-4 h-4" />}
          >
            Download Resume
          </Button>
        </div>

        {/* Quick Social & Contact Bar */}
        <div className="flex items-center gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-400 pt-6 border-t border-zinc-100 dark:border-zinc-800/60">
          <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Connect:</span>
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <a
            href={`mailto:${profileData.email}`}
            className="inline-flex items-center gap-1 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};
