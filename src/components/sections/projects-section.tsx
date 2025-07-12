"use client";

import { useState, useMemo } from 'react';
import { projects } from '@/lib/data';
import SectionWrapper from '../section-wrapper';
import ProjectCard from '../project-card';
import { Button } from '../ui/button';

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" title="My Projects" className="bg-secondary section-bg-gradient">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
