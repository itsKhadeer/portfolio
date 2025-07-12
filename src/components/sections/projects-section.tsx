"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/lib/data';
import SectionWrapper from '../section-wrapper';
import ProjectCard from '../project-card';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The header height is 4rem (64px)
    const headerHeight = 64; 
    const pin = gsap.fromTo(
      trackRef.current,
      {
        translateX: 0,
      },
      {
        translateX: () => `-${trackRef.current!.scrollWidth - triggerRef.current!.offsetWidth}px`,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: `top ${headerHeight}px`,
          end: () => `+=${trackRef.current!.scrollWidth - triggerRef.current!.offsetWidth}`,
          scrub: 0.5,
          pin: true,
          invalidateOnRefresh: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <AnimatedSection as="section" id="projects" className="py-20 md:py-28 bg-secondary section-bg-gradient" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-center mb-16">
            My Projects
          </h2>
        </div>
      </div>
      <div ref={triggerRef} className="relative h-[28rem] overflow-hidden">
        <div ref={trackRef} className="absolute top-0 left-0 flex items-center h-full gap-8 px-8">
          {projects.map((project, index) => (
            <div key={index} className="flex-shrink-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};


const AnimatedSection = ({ as: Tag = 'section', className, children, ...props }: React.HTMLAttributes<HTMLElement> & {as?: React.ElementType}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const title = el.querySelector('.section-title');
    
    // Only animate title if it exists
    if (title) {
      gsap.fromTo(title,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      {...props}
    >
      {children}
    </Tag>
  );
};


export default ProjectsSection;
