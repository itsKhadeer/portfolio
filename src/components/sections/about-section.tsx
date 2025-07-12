import { GraduationCap } from 'lucide-react';
import { education } from '@/lib/data';
import SectionWrapper from '../section-wrapper';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

const AboutSection = () => {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-secondary section-bg-gradient">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          A passionate and dedicated Full-Stack and Mobile Developer from NIT Trichy with a knack for building fast, scalable, and user-friendly applications. I thrive on solving complex problems and continuously learning new technologies.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {education.map((edu, index) => (
          <Card key={index} className="flex flex-col text-center items-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-transparent hover:border-primary/20 h-full">
            <CardHeader className="items-center pb-4 flex-grow">
              <div className="bg-primary/10 p-4 rounded-full mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                 <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-lg">{edu.institution}</CardTitle>
              {edu.degree && <CardDescription>{edu.degree}</CardDescription>}
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground mt-auto">
              <p>{edu.duration}</p>
              <p className="font-semibold text-foreground/80">{edu.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
