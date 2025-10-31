import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, MapPin, Award } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface TimelineItemProps {
  organization: string;
  role: string;
  period: string;
  location: string;
  description?: string;
  achievements?: string[];
  skills?: string[];
  gpa?: string;
  courses?: string[];
  type: "education" | "experience";
}

export default function TimelineItem({
  organization,
  role,
  period,
  location,
  description,
  achievements,
  skills,
  gpa,
  courses,
  type,
}: TimelineItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pl-8 pb-8 border-l-2 border-primary last:pb-0" data-testid={`timeline-${type}-${organization.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />
      
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <Card className="hover-elevate">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <CardTitle className="text-base mb-1">{organization}</CardTitle>
                <p className="text-sm text-muted-foreground mb-1">{period}</p>
                <CardDescription className="font-medium text-foreground">{role}</CardDescription>
              </div>
              <CollapsibleTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="shrink-0"
                  data-testid={`button-toggle-${organization.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
              </CollapsibleTrigger>
            </div>
            
            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground pt-2">
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{location}</span>
              </div>
              {gpa && (
                <div className="flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  <span>GPA: {gpa}</span>
                </div>
              )}
            </div>
          </CardHeader>
          
          <CollapsibleContent>
            <CardContent className="pt-0 space-y-4">
              {description && (
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              )}
              
              {achievements && achievements.length > 0 && (
                <div className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-2 text-sm">
                      <span className="text-primary shrink-0">▸</span>
                      <p className="text-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              )}
              
              {courses && courses.length > 0 && (
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Relevant Courses</p>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course) => (
                      <Badge key={course} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              
              {skills && skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </div>
  );
}
