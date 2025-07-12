"use client";

import { useState, useMemo } from 'react';
import { projects } from '@/lib/data';
import SectionWrapper from '../section-wrapper';
import ProjectCard from '../project-card';
import { Button } from '../ui/button';

const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  return (
    <SectionWrapper id="projects" title="My Projects" className="bg-secondary">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <Button
          variant={!selectedTag ? 'default' : 'outline'}
          onClick={() => setSelectedTag(null)}
          className="rounded-full"
        >
          All
        </Button>
        {allTags.map(tag => (
          <Button
            key={tag}
            variant={selectedTag === tag ? 'default' : 'outline'}
            onClick={() => setSelectedTag(tag)}
            className="rounded-full"
          >
            {tag}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
