import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Link as LinkIcon } from 'lucide-react';
import { Button } from './ui/button';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    imageUrl: string;
    dataAiHint: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:border-primary/30 relative">
      <CardHeader className="p-0">
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            data-ai-hint={project.dataAiHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-primary/80 rounded-full text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
            <LinkIcon className="w-6 h-6" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="font-headline text-xl mb-3">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <p className="text-muted-foreground text-sm">{project.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="ghost" className="p-0 h-auto text-primary hover:text-primary">
          <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 group/link">
            View Project 
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
