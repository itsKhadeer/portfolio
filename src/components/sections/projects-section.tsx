import { projects } from '@/lib/data';
import SectionWrapper from '../section-wrapper';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ProjectCard from '../project-card';

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" title="My Projects" className="bg-secondary section-bg-gradient">
      <div className="relative max-w-5xl mx-auto">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <ProjectCard project={project} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 -top-16 -translate-x-1/2" />
          <CarouselNext className="absolute right-0 -top-16 translate-x-1/2" />
        </Carousel>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
