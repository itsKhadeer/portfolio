"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

const AnimatedSection = ({ as: Tag = 'section', className, children, ...props }: AnimatedSectionProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const title = el.querySelector('.section-title');
    const content = el.querySelector('.section-content');
    
    // Animate the section container itself
    gsap.fromTo(el, 
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animate the title
    if (title) {
      gsap.fromTo(title,
        { autoAlpha: 0, y: 40, skewX: -5 },
        {
          autoAlpha: 1,
          y: 0,
          skewX: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
    
    // Animate the content children
    if (content) {
        const elements = Array.from(content.children);
        gsap.fromTo(elements,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: content,
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
      className={cn('opacity-0', className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default AnimatedSection;
