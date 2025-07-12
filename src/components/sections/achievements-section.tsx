import { achievements } from '@/lib/data';
import SectionWrapper from '../section-wrapper';
import { Card, CardContent } from '../ui/card';

const AchievementsSection = () => {
  return (
    <SectionWrapper id="achievements" title="Achievements">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <ul className="space-y-6">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 mt-1 bg-primary/10 text-primary p-2.5 rounded-full transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                    <achievement.icon className="w-5 h-5" />
                  </div>
                  <p className="text-muted-foreground pt-2 group-hover:text-foreground transition-colors">{achievement.text}</p>
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
