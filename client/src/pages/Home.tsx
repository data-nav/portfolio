import { useState } from "react";
import { Download, BarChart3, Brain, Database, Layers, Workflow, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

const CATEGORIES = ["ALL", "GENERATIVE AI", "MACHINE LEARNING", "DATA ANALYTICS", "FULL-STACK"] as const;
type Category = typeof CATEGORIES[number];

// 🎯 PROJECT TEMPLATE - ADD YOUR PROJECTS HERE
// Just copy this template and fill in your details!
const ALL_PROJECTS = [
  {
    title: "AirBnB Price Prediction",
    description: "ML model predicting AirBnB prices with 85% accuracy using regression techniques and feature engineering.",
    image: dataImg, // Replace with your project image path
    category: "MACHINE LEARNING" as const,
    technologies: ["Python", "Scikit-learn", "Pandas"],
    githubUrl: "https://github.com/yourusername/airbnb-prediction", // 👈 Add your GitHub URL
    liveUrl: "https://your-project-demo.com", // 👈 Add demo URL (optional)
  },
  {
    title: "Document Q&A with RAG",
    description: "Intelligent chatbot using Retrieval-Augmented Generation to answer questions from PDFs. 90% relevance achieved.",
    image: aiImg,
    category: "GENERATIVE AI" as const,
    technologies: ["LangChain", "ChromaDB", "OpenAI"],
    githubUrl: "https://github.com/yourusername/doc-qa-rag", // 👈 Add your GitHub URL
    // liveUrl: undefined, // 👈 Leave undefined if no live demo
  },
  {
    title: "Customer Segmentation",
    description: "Clustering analysis for customer segmentation using K-means and behavioral data analytics.",
    image: pipelineImg,
    category: "DATA ANALYTICS" as const,
    technologies: ["Python", "Tableau", "SQL"],
    // githubUrl: undefined, // 👈 Leave undefined if repo is private
    liveUrl: "https://your-tableau-dashboard.com",
  },
  
  // 🚀 TO ADD MORE PROJECTS, COPY THIS TEMPLATE:
  /*
  {
    title: "Your Project Name",
    description: "Short description of what your project does and its key achievements.",
    image: dataImg, // Use dataImg, aiImg, or pipelineImg, or add your own image
    category: "MACHINE LEARNING", // Must be one of: "GENERATIVE AI", "MACHINE LEARNING", "DATA ANALYTICS", "FULL-STACK"
    technologies: ["Tech1", "Tech2", "Tech3"], // List main technologies used
    githubUrl: "https://github.com/yourusername/project-repo", // Optional: your GitHub repo
    liveUrl: "https://your-live-demo.com", // Optional: live demo link
  },
  */
];

// Simple fade-in animation
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("ALL");

  const filteredProjects = selectedCategory === "ALL" 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(project => project.category === selectedCategory);

  // 📄 CV Download Handler
  const handleDownloadCV = () => {
    // This will download the PDF from the public folder
    const link = document.createElement('a');
    link.href = '/Navkaran_Singh_Resume.pdf'; // 👈 Make sure this matches your PDF filename in client/public/
    link.download = 'Navkaran_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section - YOUR ORIGINAL CONTENT */}
      <motion.section 
        id="home" 
        className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-background px-6 py-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
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
          <Button size="lg" className="mt-6" onClick={handleDownloadCV} data-testid="button-download-cv">
            <Download className="w-4 h-4 mr-2" />
            DOWNLOAD CV
          </Button>
        </div>
      </motion.section>

      {/* About Section - YOUR ORIGINAL CONTENT */}
      <motion.section 
        id="about" 
        className="container max-w-6xl px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
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
      </motion.section>

      {/* Services Section - YOUR ORIGINAL CONTENT */}
      <motion.section 
        id="services" 
        className="container max-w-6xl px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
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
      </motion.section>

      {/* Skills Section - YOUR ORIGINAL CONTENT */}
      <motion.section 
        id="skills" 
        className="container max-w-6xl px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
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
      </motion.section>

      {/* Portfolio Section - YOUR ORIGINAL CONTENT */}
      <motion.section 
        id="portfolio" 
        className="container max-w-6xl px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Portfolio<span className="text-primary">_</span></h2>
        <p className="text-muted-foreground mb-8 max-w-3xl">
          Explore my projects where I apply my technical skills to develop practical solutions. I aim to showcase my ability to implement innovative solutions and drive tangible results. These experiences empower me to tackle complex real-world challenges effectively.
        </p>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {CATEGORIES.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`cursor-pointer text-xs uppercase tracking-wide px-4 py-2 hover-elevate active-elevate-2 ${
                selectedCategory === category ? "toggle-elevate toggle-elevated" : "toggle-elevate"
              }`}
              onClick={() => setSelectedCategory(category)}
              data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Badge>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              category={project.category}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </motion.section>

      {/* Resume Section - YOUR ORIGINAL CONTENT */}
      <motion.section 
        id="resume" 
        className="container max-w-6xl px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
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
      </motion.section>

      {/* Contact Section - YOUR ORIGINAL CONTENT */}
      <motion.section 
        id="contact" 
        className="container max-w-6xl px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <ContactForm
          email="navkarancad@gmail.com"
          phone="+1 (514) 804-1045"
          location="Montréal, Canada"
        />
      </motion.section>
    </div>
  );
}