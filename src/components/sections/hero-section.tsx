"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const headline = el.querySelector('.hero-headline');
    const paragraph = el.querySelector('.hero-paragraph');
    const buttons = el.querySelectorAll('.hero-button');

    gsap.set([headline, paragraph, buttons], { autoAlpha: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(headline, 
      { y: 50 }, 
      { duration: 1, y: 0, autoAlpha: 1 }
    )
    .fromTo(paragraph, 
      { y: 40 }, 
      { duration: 0.8, y: 0, autoAlpha: 1 }, 
      "-=0.7"
    )
    .fromTo(buttons, 
      { y: 30 }, 
      { duration: 0.6, y: 0, autoAlpha: 1, stagger: 0.2 },
      "-=0.6"
    );

  }, []);

  return (
    <div ref={heroRef} className="relative h-[calc(100vh-4rem)] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background opacity-70 z-10"></div>
      <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
          <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]"></div>
      </div>
      
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div>
            <h1 className="hero-headline text-4xl sm:text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-4 invisible">
              {personalInfo.name}
            </h1>
            <p className="hero-paragraph max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 invisible">
              I build fast, scalable, and visually compelling full-stack and mobile applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="hero-button invisible bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={personalInfo.resumeUrl} download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="hero-button invisible">
                <Link href="#contact" onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <Send className="mr-2 h-5 w-5" />
                  Get in Touch
                </Link>
              </Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
