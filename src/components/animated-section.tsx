"use client";

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

const AnimatedSection = ({ as: Tag = 'section', className, children, ...props }: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn(className, 'transition-all duration-1000', {
        'is-visible': isVisible
      })}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default AnimatedSection;
