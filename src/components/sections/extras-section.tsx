import { extras } from '@/lib/data';
import SectionWrapper from '../section-wrapper';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CheckCircle2 } from 'lucide-react';

const ExtrasSection = () => {
  return (
    <SectionWrapper id="extras" title="Extracurriculars">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {extras.map((extra, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex items-start space-x-4">
                 <div className="flex-shrink-0 mt-1">
                    <extra.icon className="w-6 h-6 text-primary" />
                  </div>
                <p className="text-muted-foreground">{extra.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExtrasSection;
