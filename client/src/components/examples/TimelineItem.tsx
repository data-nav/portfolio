import TimelineItem from '../TimelineItem';

export default function TimelineItemExample() {
  return (
    <div className="max-w-3xl p-8 bg-background space-y-8">
      <div>
        <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-8">
          Education
        </h3>
        <TimelineItem
          type="education"
          organization="CONCORDIA UNIVERSITY"
          role="Master's in Artificial Intelligence"
          period="2023 - 2025"
          location="Montreal, QC"
          gpa="3.85"
          courses={["Machine Learning", "Deep Learning", "NLP", "Computer Vision"]}
        />
        <TimelineItem
          type="education"
          organization="PUNJAB ENGINEERING COLLEGE"
          role="B.Tech in Computer Science & Engineering"
          period="2017 - 2021"
          location="Chandigarh, India"
          gpa="3.72"
          courses={["Data Structures", "Algorithms", "Databases", "OS"]}
        />
      </div>
      
      <div>
        <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-8">
          Employment
        </h3>
        <TimelineItem
          type="experience"
          organization="WINDO"
          role="AI Intern"
          period="Jan 2025 - July 2025"
          location="Montréal, QC"
          achievements={[
            "Developed RAG pipeline achieving 90% relevance",
            "Optimized workflows with CI testing, cutting outputs 20%",
            "Streamlined cross-team AI deployment pipelines"
          ]}
          skills={["RAG", "LLMs", "CI/CD"]}
        />
      </div>
    </div>
  );
}
