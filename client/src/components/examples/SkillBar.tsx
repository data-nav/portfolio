import SkillBar from '../SkillBar';

export default function SkillBarExample() {
  return (
    <div className="max-w-2xl p-8 bg-background space-y-8">
      <div className="space-y-4">
        <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6">
          Core Skills
        </h3>
        <SkillBar name="PYTHON" level={90} icon="🐍" />
        <SkillBar name="SQL" level={90} icon="📊" />
        <SkillBar name="MACHINE LEARNING" level={85} icon="🤖" />
        <SkillBar name="GIT" level={85} icon="📦" />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6">
          Tools & Platforms
        </h3>
        <SkillBar name="TABLEAU" level={80} icon="📈" />
        <SkillBar name="POWER BI" level={85} icon="💡" />
        <SkillBar name="AWS" level={70} icon="☁️" />
        <SkillBar name="DOCKER" level={75} icon="🐳" />
      </div>
    </div>
  );
}
