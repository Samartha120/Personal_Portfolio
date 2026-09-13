import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../../data/profile';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

import { experienceData } from '../../data/experience';

const baseNavItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' }
];

const navItems = experienceData && experienceData.length > 0
  ? [
      ...baseNavItems.slice(0, 3),
      { id: 'experience', label: 'Experience' },
      ...baseNavItems.slice(3)
    ]
  : baseNavItems;

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navItems.map((item) => item.id), 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b',
        isScrolled
          ? 'bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-zinc-200/80 dark:border-zinc-800/80 py-3 shadow-xs'
          : 'bg-transparent border-transparent py-4'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Name Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1 -mx-1 cursor-pointer"
        >
          {profileData.name}
          <span className="text-blue-600 dark:text-blue-400 font-mono ml-1">.dev</span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-medium">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'px-3 py-1.5 rounded-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600',
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50/80 dark:bg-blue-950/50'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40'
                )}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Button
            as="a"
            href={profileData.resumeUrl}
            download="Samartha_Shrestha_Resume.pdf"
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex text-xs font-mono"
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            iconPosition="right"
          >
            Resume
          </Button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Over Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-4 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer',
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 font-semibold'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                )}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 mt-2 flex justify-between items-center">
            <a
              href={profileData.resumeUrl}
              download="Samartha_Shrestha_Resume.pdf"
              className="text-xs font-mono font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1 py-1"
            >
              Download Resume PDF <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
