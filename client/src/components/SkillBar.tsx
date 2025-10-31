import { Progress } from "@/components/ui/progress";

interface SkillBarProps {
  name: string;
  level: number;
  icon?: string;
}

export default function SkillBar({ name, level, icon }: SkillBarProps) {
  return (
    <div className="space-y-2" data-testid={`skill-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <span className="text-sm">{icon}</span>}
          <span className="text-sm font-medium text-foreground">{name}</span>
        </div>
        <span className="text-sm font-semibold text-muted-foreground">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </div>
  );
}
