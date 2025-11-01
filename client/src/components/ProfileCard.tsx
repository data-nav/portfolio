import { Github, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  name: string;
  title: string;
  imageSrc: string;
  githubUrl?: string;
  linkedinUrl?: string;
  tableauUrl?: string;
}

export default function ProfileCard({
  name,
  title,
  imageSrc,
  githubUrl,
  linkedinUrl,
  tableauUrl,
}: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 border-b">
      <Avatar className="w-32 h-32 mb-4">
        <AvatarImage src={imageSrc} alt={name} />
        <AvatarFallback className="text-2xl">{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      
      <h2 className="text-xl font-bold text-sidebar-foreground mb-1">{name}</h2>
      <p className="text-sm text-muted-foreground mb-4">{title}</p>
      
      <div className="flex gap-2">
        {githubUrl && (
          <Button
            size="icon"
            variant="ghost"
            asChild
            className="hover-elevate active-elevate-2"
            data-testid="button-github"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
        )}
        {linkedinUrl && (
          <Button
            size="icon"
            variant="ghost"
            asChild
            className="hover-elevate active-elevate-2"
            data-testid="button-linkedin"
          >
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
        )}
        {tableauUrl && (
          <Button
            size="icon"
            variant="ghost"
            asChild
            className="hover-elevate active-elevate-2"
            data-testid="button-tableau"
          >
            <a href={tableauUrl} target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <rect x="11" y="2" width="2" height="6" />
                <rect x="11" y="16" width="2" height="6" />
                <rect x="2" y="11" width="6" height="2" />
                <rect x="16" y="11" width="6" height="2" />
                <rect x="10" y="10" width="4" height="4" />
              </svg>
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}