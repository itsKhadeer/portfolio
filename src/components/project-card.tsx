import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
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
    <Card className="h-full flex flex-col overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl">
      <CardHeader>
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            data-ai-hint={project.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 h-auto">
          <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
            View Project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
