import { positions } from '@/lib/data';
import SectionWrapper from '../section-wrapper';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';

const ResponsibilitiesSection = () => {
  return (
    <SectionWrapper id="responsibilities" title="Positions of Responsibility">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {positions.map((pos, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <div className="flex items-center gap-4 mb-2">
                <pos.icon className="w-8 h-8 text-primary" />
                <div className="flex-1">
                  <CardTitle className="font-headline text-lg">{pos.role}</CardTitle>
                  <CardDescription>{pos.duration}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{pos.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ResponsibilitiesSection;
