import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
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
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden group cursor-pointer transition-shadow duration-300 hover:shadow-xl">
        <div className="relative overflow-hidden aspect-video">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick action buttons on hover */}
          <motion.div 
            className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ y: 10 }}
            whileHover={{ y: 0 }}
          >
            {githubUrl && (
              <Button
                size="icon"
                variant="secondary"
                asChild
                className="shadow-lg"
                data-testid="button-project-github"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button
                size="icon"
                variant="secondary"
                asChild
                className="shadow-lg"
                data-testid="button-project-live"
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
          </motion.div>
        </div>
        
        <CardHeader className="flex-grow">
          <div className="flex items-start justify-between gap-2 mb-2">
            <CardTitle className="text-xl">{title}</CardTitle>
            <Badge variant="secondary" className="text-xs shrink-0">
              {category}
            </Badge>
          </div>
          <CardDescription className="line-clamp-3">{description}</CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs font-normal transition-colors duration-200 hover:bg-primary/10"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}