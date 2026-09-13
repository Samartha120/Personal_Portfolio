import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../ui/ProjectCard';
import { ProjectModal } from '../ui/ProjectModal';
import { projectsData } from '../../data/projects';
import type { Project } from '../../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const regularProjects = projectsData.filter((p) => p.id !== featuredProject.id);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured Engineering Work"
          title="Projects & Implementation"
          subtitle="Real software projects with verified implementations, technical specs, and source code repositories."
        />

        <div className="space-y-8">
          {/* Featured Project */}
          {featuredProject && (
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                Featured Highlight
              </div>
              <ProjectCard
                project={featuredProject}
                onSelect={setSelectedProject}
                featured={true}
              />
            </div>
          )}

          {/* Other Projects Grid */}
          <div className="pt-6">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
              More Selected Projects
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regularProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={setSelectedProject}
                  featured={false}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Project Detail Technical Specification Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
