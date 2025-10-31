import { Download, BarChart3, Brain, Database, Layers, Workflow, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceCard from "@/components/ServiceCard";
import SkillBar from "@/components/SkillBar";
import TimelineItem from "@/components/TimelineItem";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import TypingText from "@/components/TypingText";
import dataImg from '@assets/stock_images/modern_data_analytic_8270b338.jpg';
import aiImg from '@assets/stock_images/artificial_intellige_2dcb513b.jpg';
import pipelineImg from '@assets/stock_images/data_pipeline_cloud__22f08324.jpg';

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <section id="home" className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background px-6 py-16">
        <div className="max-w-4xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Navkaran Singh<span className="text-primary">_</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            A passionate{" "}
            <span className="text-primary font-semibold">
              <TypingText
                phrases={["Data Analyst", "Data Engineer", "Data Scientist", "ML Engineer"]}
              />
            </span>
          </p>
          <Button size="lg" className="mt-6" data-testid="button-download-cv">
            <Download className="w-4 h-4 mr-2" />
            DOWNLOAD CV
          </Button>
        </div>
      </section>

      <section id="about" className="container max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-8">Hi<span className="text-primary">_</span></h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm <strong className="text-foreground">Navkaran</strong>, a data professional with <strong className="text-foreground">4+ years of experience</strong> turning complex problems into actionable insights.
          </p>
          <p>
            With a Master's in Artificial Intelligence from Concordia University and a Bachelor's in Computer Science Engineering, I specialize in data analysis, machine learning, and building automated workflows that drive real business value.
          </p>
          <p>
            I thrive on collaboration, clear communication, and solving challenging problems. Whether it's building dashboards, prototyping AI solutions, or engineering data pipelines—I bring curiosity, clarity, and a results-driven approach to every project.
          </p>
        </div>
      </section>

      <section id="services" className="container max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-8">How I Create Impact<span className="text-primary">_</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <ServiceCard
            icon={Layers}
            title="Dashboard Development"
            description="Creating interactive dashboards for real-time decision-making and business intelligence."
            tools={["Tableau", "Power BI", "D3.js", "Plotly"]}
          />
          <ServiceCard
            icon={Workflow}
            title="Automation & APIs"
            description="Streamlining business processes with robust APIs and intelligent automation solutions."
            tools={["Node.js", "FastAPI", "REST", "GraphQL"]}
          />
          <ServiceCard
            icon={Lightbulb}
            title="Experimentation & Insights"
            description="Running A/B tests, analyzing metrics, and translating results into actionable strategy."
            tools={["A/B Testing", "Statistics", "Google Analytics", "Mixpanel"]}
          />
        </div>
      </section>

      <section id="skills" className="container max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-12">Skills<span className="text-primary">_</span></h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6">
              Core Skills
            </h3>
            <div className="space-y-4">
              <SkillBar name="PYTHON" level={90} icon="🐍" />
              <SkillBar name="SQL" level={90} icon="💾" />
              <SkillBar name="MACHINE LEARNING" level={85} icon="🤖" />
              <SkillBar name="GIT" level={85} icon="🔀" />
              <SkillBar name="DOCKER" level={75} icon="🐳" />
            </div>
            
            <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6 mt-10">
              Libraries & Frameworks
            </h3>
            <div className="space-y-4">
              <SkillBar name="NUMPY" level={85} icon="🔢" />
              <SkillBar name="TENSORFLOW" level={80} icon="🧠" />
              <SkillBar name="SCIKIT-LEARN" level={85} icon="📊" />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6">
              Tools & Platforms
            </h3>
            <div className="space-y-4">
              <SkillBar name="TABLEAU" level={80} icon="📈" />
              <SkillBar name="POWER BI" level={85} icon="💡" />
              <SkillBar name="AWS" level={70} icon="☁️" />
              <SkillBar name="MS EXCEL" level={90} icon="📊" />
              <SkillBar name="JUPYTER" level={85} icon="📓" />
            </div>
            
            <h3 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6 mt-10">
              Additional Skills
            </h3>
            <div className="space-y-4">
              <SkillBar name="PANDAS" level={90} icon="🐼" />
              <SkillBar name="PYTORCH" level={75} icon="🔥" />
              <SkillBar name="MATPLOTLIB" level={80} icon="📉" />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="container max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-8">Portfolio<span className="text-primary">_</span></h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Explore my projects where I apply my technical skills to develop practical solutions. I aim to showcase my ability to implement innovative solutions and drive tangible results. These experiences empower me to tackle complex real-world challenges effectively.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="AirBnB Price Prediction"
            description="ML model predicting AirBnB prices with 85% accuracy using regression techniques and feature engineering."
            image={dataImg}
            category="Machine Learning"
            technologies={["Python", "Scikit-learn", "Pandas"]}
            githubUrl="https://github.com"
            liveUrl="https://example.com"
          />
          <ProjectCard
            title="Document Q&A with RAG"
            description="Intelligent chatbot using Retrieval-Augmented Generation to answer questions from PDFs. 90% relevance achieved."
            image={aiImg}
            category="Generative AI"
            technologies={["LangChain", "ChromaDB", "OpenAI"]}
            githubUrl="https://github.com"
          />
          <ProjectCard
            title="Customer Segmentation"
            description="Clustering analysis for customer segmentation using K-means and behavioral data analytics."
            image={pipelineImg}
            category="Data Analytics"
            technologies={["Python", "Tableau", "SQL"]}
            liveUrl="https://example.com"
          />
        </div>
      </section>

      <section id="resume" className="container max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-12">Resume<span className="text-primary">_</span></h2>
        <div className="grid md:grid-cols-2 gap-12">
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
                "Drove 25% higher relevance with RAG pipeline",
                "Optimized workflows with CI testing, cutting outputs 20%",
                "Streamlined cross-team AI deployment pipelines"
              ]}
              skills={["RAG", "LLMs", "CI/CD"]}
            />
            <TimelineItem
              type="experience"
              organization="REALITY LABS"
              role="Generative AI Intern"
              period="April 2024 - Aug 2024"
              location="New York, NY"
              achievements={[
                "Drove 25% higher relevance with RAG pipeline",
                "Optimized workflows with CI testing, cutting outputs 20%",
                "Streamlined cross-team AI deployment pipelines"
              ]}
              skills={["RAG", "LLMs", "CI/CD"]}
            />
            <TimelineItem
              type="experience"
              organization="L'ORIGINAL.ORG"
              role="Analyst Intern"
              period="Jan 2023 - July 2023"
              location="Montréal, QC"
              achievements={[
                "Reduced query latency 40ms with distributed caching",
                "Boosted engagement via hybrid recommender system",
                "Automated tagging with transformer pipelines"
              ]}
              skills={["Python", "A/B Testing", "Transformers"]}
            />
          </div>
        </div>
      </section>

      <section id="contact" className="container max-w-6xl px-6">
        <h2 className="text-3xl font-bold mb-8">Get in Touch<span className="text-primary">_</span></h2>
        <ContactForm
          email="navkarancad@gmail.com"
          phone="+1 (514) 804-1045"
          location="Montréal, Canada"
        />
      </section>
    </div>
  );
}
