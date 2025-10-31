import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tools: string[];
}

export default function ServiceCard({ icon: Icon, title, description, tools }: ServiceCardProps) {
  return (
    <Card className="hover-elevate h-full flex flex-col" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="space-y-4">
        <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        <CardDescription className="text-sm leading-relaxed flex-1">
          {description}
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <Badge key={tool} variant="secondary" className="text-xs">
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
