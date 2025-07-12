import { projects } from '@/lib/data';
import SectionWrapper from '../section-wrapper';
import ProjectTimelineCard from '../project-timeline-card';

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" title="My Projects" className="bg-secondary section-bg-gradient">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
        {projects.map((project, index) => (
          <ProjectTimelineCard key={index} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
