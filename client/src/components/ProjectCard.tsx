import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  image,
  category,
  technologies,
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full flex flex-col overflow-hidden group border-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-300">
        {/* Image Section with Overlay */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay with Quick Actions - appears on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4 gap-2">
            {githubUrl && (
              <Button
                size="sm"
                variant="secondary"
                asChild
                className="backdrop-blur-sm bg-white/90 hover:bg-white"
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
                variant="default"
                asChild
                className="backdrop-blur-sm"
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </Button>
            )}
          </div>

          {/* Category Badge - Top Right */}
          <div className="absolute top-3 right-3">
            <Badge 
              variant="default" 
              className="text-xs font-semibold shadow-lg backdrop-blur-sm bg-primary/90"
            >
              {category}
            </Badge>
          </div>

          {/* Featured Badge - Top Left */}
          {featured && (
            <div className="absolute top-3 left-3">
              <Badge 
                variant="secondary" 
                className="text-xs font-semibold shadow-lg backdrop-blur-sm bg-yellow-400 text-black"
              >
                ⭐ Featured
              </Badge>
            </div>
          )}
        </div>

        {/* Content Section */}
        <CardHeader className="pb-3">
          <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
        </CardHeader>

        <CardContent className="flex-grow pb-4">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>
        </CardContent>

        {/* Technologies Footer */}
        <CardFooter className="pt-0 pb-4 flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-xs font-medium bg-muted/50 hover:bg-muted transition-colors"
            >
              {tech}
            </Badge>
          ))}
          {technologies.length > 4 && (
            <Badge
              variant="outline"
              className="text-xs font-medium bg-muted/50"
            >
              +{technologies.length - 4}
            </Badge>
          )}
        </CardFooter>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 group-hover:via-primary/100 transition-all duration-300" />
      </Card>
    </motion.div>
  );
}
