import { projects } from '@/lib/data';
import SectionWrapper from '../section-wrapper';
import ProjectCard from '../project-card';
import { InfiniteScroller } from '../infinite-scroller';

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" title="My Projects" className="bg-secondary section-bg-gradient">
      <div className="relative">
        <InfiniteScroller speed="slow">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </InfiniteScroller>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
