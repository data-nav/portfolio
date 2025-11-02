import { Github, Linkedin, Plus } from "lucide-react";
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
    <div className="p-6 pb-4 border-b border-slate-700">
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Profile Image */}
        <Avatar className="w-32 h-32 border-4 border-slate-700 shadow-xl">
          <AvatarImage src={imageSrc} alt={name} />
          <AvatarFallback className="text-2xl bg-slate-700 text-white">
            {name.split(" ").map(n => n[0]).join("")}
          </AvatarFallback>
        </Avatar>

        {/* Name & Title */}
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-white tracking-tight">
            {name}
          </h2>
          <p className="text-sm text-slate-400 font-medium">
            {title}
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2">
          {githubUrl && (
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-10 w-10 rounded-full bg-slate-700/50 hover:bg-slate-600 text-slate-300 hover:text-white transition-all"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
          
          {linkedinUrl && (
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-10 w-10 rounded-full bg-slate-700/50 hover:bg-slate-600 text-slate-300 hover:text-white transition-all"
            >
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
          )}
          
          {tableauUrl && (
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-10 w-10 rounded-full bg-slate-700/50 hover:bg-slate-600 text-slate-300 hover:text-white transition-all"
            >
              <a href={tableauUrl} target="_blank" rel="noopener noreferrer" aria-label="Tableau">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.654 0v2.596h2.292V5.07h-2.292v2.595h-.84V5.07H8.523V2.596h2.291V0h.84zm7.448 7.564v1.74h3.892v.565h-3.892v1.74h-.565v-1.74h-3.893v-.565h3.893v-1.74h.565zM4.06 7.564v1.74h3.893v.565H4.061v1.74h-.566v-1.74H0v-.565h3.495v-1.74h.566zm15.955 3.288v5.856h-2.589v1.888h-.516v-1.888h-2.59v-5.856h2.59V9.288h.516v1.564h2.589zm-15.955 0v1.564h2.59v5.856h.515v-5.856h2.59v-1.564h-2.59V9.288h-.516v1.564h-2.59zm8.23 3.722v.84h-2.291v2.291h-.84v-2.291H6.869v-.84h2.291v-2.292h.84v2.292h2.291z"/>
                </svg>
              </a>
            </Button>
          )}
          
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-slate-700/50 hover:bg-slate-600 text-slate-300 hover:text-white transition-all"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
