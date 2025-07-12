import { GraduationCap } from 'lucide-react';
import { education } from '@/lib/data';
import SectionWrapper from '../section-wrapper';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

const AboutSection = () => {
  return (
    <SectionWrapper id="about" title="About Me" className="bg-secondary">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-lg text-muted-foreground">
          A passionate and dedicated Full-Stack and Mobile Developer from NIT Trichy with a knack for building fast, scalable, and user-friendly applications. I thrive on solving complex problems and continuously learning new technologies.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {education.map((edu, index) => (
          <Card key={index} className="flex flex-col text-center items-center p-6">
            <CardHeader className="items-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                 <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-lg">{edu.institution}</CardTitle>
              <CardDescription>{edu.degree}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="text-muted-foreground">{edu.duration}</p>
              <p className="font-medium">{edu.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
