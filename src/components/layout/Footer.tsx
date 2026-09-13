import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profileData } from '../../data/profile';
import { SocialLinks } from '../ui/SocialLinks';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="font-mono">© {currentYear} {profileData.name}</span>
          <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">•</span>
          <span>Designed & Engineered for Performance</span>
        </div>

        <SocialLinks iconSize={16} />

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 p-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
