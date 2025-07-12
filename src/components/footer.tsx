"use client";

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '@/lib/data';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-headline font-bold">{personalInfo.name}</h3>
            <p className="text-sm text-muted-foreground">Full-Stack & Mobile Developer</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Made with ❤️ by Khadeer</p>
            <Button variant="ghost" size="icon" onClick={scrollToTop} aria-label="Back to top">
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
