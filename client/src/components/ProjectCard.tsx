import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  category,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate h-full flex flex-col" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {image && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <Badge variant="outline" className="text-xs uppercase tracking-wide">
            {category}
          </Badge>
        </div>
        <CardTitle className="text-lg line-clamp-2">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col gap-4">
        <CardDescription className="text-sm leading-relaxed line-clamp-3">
          {description}
        </CardDescription>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="gap-2 pt-0">
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1"
            data-testid={`button-github-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        )}
        {liveUrl && (
          <Button
            size="sm"
            asChild
            className="flex-1"
            data-testid={`button-live-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
