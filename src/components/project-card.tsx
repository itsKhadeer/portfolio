import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { Button } from './ui/button';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    imageUrl: string;
    dataAiHint: string;
    year: number;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group h-full w-[350px] flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
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
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <CardTitle className="font-headline text-lg">{project.title}</CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{project.year}</span>
          </div>
        </div>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-3">{project.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex flex-col items-start mt-auto">
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
  );
};

export default ProjectCard;
