import Image from 'next/image';
import { experience } from '@/lib/data';
import SectionWrapper from '../section-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Briefcase } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" title="Internship Experience">
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
        {experience.map((exp, index) => (
          <div key={index} className="relative mb-12 group">
            <div className="absolute left-1/2 top-4 h-4 w-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/40"></div>
            <Card className="md:w-11/12 mx-auto transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/30">
              <CardHeader className="flex flex-row items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="font-headline text-xl">{exp.title}</CardTitle>
                  <CardDescription>{exp.company} | {exp.duration}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
