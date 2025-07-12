import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface ProjectTimelineCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    imageUrl: string;
    dataAiHint: string;
    year: number;
  };
  index: number;
}

const ProjectTimelineCard = ({ project, index }: ProjectTimelineCardProps) => {
  const isOdd = index % 2 !== 0;

  return (
    <div className={cn("relative mb-8", isOdd ? "md:pl-[calc(50%+2rem)]" : "md:pr-[calc(50%+2rem)]")}>
       <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/20 border-4 border-background shadow-lg left-1/2 -translate-x-1/2">
         <div className="w-full h-full rounded-full bg-primary animate-pulse"></div>
      </div>
      <div className={cn("hidden md:block absolute top-1/2 w-[calc(50%-1rem)] h-0.5", isOdd ? "left-0" : "right-0", { "bg-gradient-to-l from-primary/50": isOdd, "bg-gradient-to-r from-primary/50": !isOdd })}></div>

      <Card className="group overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              data-ai-hint={project.dataAiHint}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <CardTitle className="font-headline text-lg">{project.title}</CardTitle>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-col items-start">
          <div className="flex flex-wrap gap-1 mb-3">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>
          <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary mt-auto">
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 group/link text-sm">
              View Project
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectTimelineCard;
