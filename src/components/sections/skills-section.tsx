import { skills } from '@/lib/data';
import SectionWrapper from '../section-wrapper';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Code, Wrench } from 'lucide-react';

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Code className="w-8 h-8 text-primary" />
            <CardTitle className="font-headline text-2xl">Languages</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.languages.map((skill, index) => (
              <Badge key={index} variant="default" className="text-sm py-1 px-3 bg-primary/10 text-primary hover:bg-primary/20">{skill}</Badge>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <Wrench className="w-8 h-8 text-primary" />
            <CardTitle className="font-headline text-2xl">Frameworks & Tools</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {skills.tools.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1 px-3">{skill}</Badge>
            ))}
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
