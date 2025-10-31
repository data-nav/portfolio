import ServiceCard from '../ServiceCard';
import { BarChart3, Brain, Database } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-background">
      <ServiceCard
        icon={BarChart3}
        title="Data Analysis & Visualization"
        description="Turning raw data into clear stories using Python, SQL, and BI tools."
        tools={["Python", "SQL", "Tableau", "Power BI"]}
      />
      <ServiceCard
        icon={Brain}
        title="Machine Learning & AI"
        description="Building intelligent models that uncover insights and automate workflows."
        tools={["TensorFlow", "PyTorch", "scikit-learn", "OpenAI"]}
      />
      <ServiceCard
        icon={Database}
        title="Data Engineering & Pipelines"
        description="Designing reliable ETL and data flow systems that scale efficiently."
        tools={["Apache Spark", "Airflow", "AWS", "Docker"]}
      />
    </div>
  );
}
