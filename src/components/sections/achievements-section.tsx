import { achievements } from '@/lib/data';
import SectionWrapper from '../section-wrapper';
import { Card, CardContent } from '../ui/card';

const AchievementsSection = () => {
  return (
    <SectionWrapper id="achievements" title="Achievements">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-muted-foreground">{achievement.text}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default AchievementsSection;
