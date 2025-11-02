import { useState } from "react";
import { Download, BarChart3, Brain, Database, Layers, Workflow, Lightbulb, ChevronDown, Award, Mail } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServiceCard from "@/components/ServiceCard";
import SkillBar from "@/components/SkillBar";
import TimelineItem from "@/components/TimelineItem";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import TypingText from "@/components/TypingText";
import dataImg from '@assets/stock_images/modern_data_analytic_8270b338.jpg';
import aiImg from '@assets/stock_images/artificial_intellige_2dcb513b.jpg';
import pipelineImg from '@assets/stock_images/data_pipeline_cloud__22f08324.jpg';

const CATEGORIES = ["ALL", "GENERATIVE AI", "MACHINE LEARNING", "DATA ANALYTICS", "COMPUTER VISION"] as const;
type Category = typeof CATEGORIES[number];

const ALL_PROJECTS = [
  {
    title: "Multi-Agent Content Pipeline",
    description: "Production-grade multi-agent system transforming PRDs into polished blog posts using 4 chained AI agents with fact-checking and rollback capabilities.",
    image: aiImg,
    category: "GENERATIVE AI" as const,
    technologies: ["LangChain", "Next.js", "Supabase", "OpenAI"],
    githubUrl: "https://github.com/data-nav/multi-agent-content-ops",
  },
  {
    title: "Drift-Aware Retraining Pipeline",
    description: "MLOps pipeline detecting embedding drift and performance degradation, automatically triggering model retraining to maintain 95%+ accuracy.",
    image: dataImg,
    category: "MACHINE LEARNING" as const,
    technologies: ["Python", "Prometheus", "Grafana", "pgvector"],
    githubUrl: "https://github.com/data-nav/drift-aware-retraining",
  },
  {
    title: "AI Model Router with Budget Control",
    description: "Intelligent routing system optimizing cost vs quality by directing queries to appropriate models (GPT-3.5/4), reducing costs by 60% while maintaining performance.",
    image: pipelineImg,
    category: "DATA ANALYTICS" as const,
    technologies: ["Node.js", "OpenAI", "Claude", "PostgreSQL"],
    githubUrl: "https://github.com/data-nav/model-router-budget",
  },
  {
    title: "Guardrail & Red-Team Harness",
    description: "Adversarial testing framework stress-testing AI systems with automated red-team prompts, measuring jailbreak success rates and guardrail effectiveness.",
    image: aiImg,
    category: "GENERATIVE AI" as const,
    technologies: ["Python", "FastAPI", "Supabase", "Moderation API"],
    githubUrl: "https://github.com/data-nav/guardrail-red-team",
  },
  {
    title: "Evaluation-as-a-Service Platform",
    description: "CI/CD-integrated eval platform with automated rubric scoring, experiment tracking, and deployment blocking for below-threshold model performance.",
    image: pipelineImg,
    category: "COMPUTER VISION" as const,
    technologies: ["Next.js", "Python", "Supabase", "CI/CD"],
    githubUrl: "https://github.com/data-nav/eval-as-a-service",
  },
];

// Sample certificates - replace with your actual certificate images
const CERTIFICATES = [
  {
    title: "Datacamp - Data Analyst",
    organization: "Datacamp",
    date: "July 2024",
    image: "/certificates/datacamp.png",
    skills: ["Python", "SQL", "Statistics"]
  },
  {
    title: "Salesforce AI Associate",
    organization: "Salesforce/Trailhead",
    date: "January 2025",
    image: "/certificates/salesforce.png",
    skills: ["AI", "CRM", "Salesforce"]
  },
  {
    title: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "March 2024",
    image: "/certificates/aws.png",
    skills: ["AWS", "Cloud", "Architecture"]
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Section heading with blue underline
const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold mb-8 inline-block">
    {children}
    <span className="block h-1 w-16 bg-primary mt-2"></span>
  </h2>
);

// Certificate Card Component
const CertificateCard = ({ title, organization, date, image, skills }: { 
  title: string; 
  organization: string; 
  date: string; 
  image: string;
  skills: string[];
}) => (
  <Card className="h-full hover-elevate">
    <CardContent className="p-6">
      <div className="aspect-[4/3] bg-muted rounded-lg mb-4 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18"%3ECertificate%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{organization}</p>
      <p className="text-xs text-muted-foreground mb-3">{date}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

// Scroll to Contact Button - FIXED VERSION
const ScrollToContactButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // FIX: Use useEffect instead of useState for scroll listener
  useState(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      onClick={scrollToContact}
      className="fixed bottom-8 right-8 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-110"
      aria-label="Scroll to contact"
      title="Contact Me"
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <Mail className="w-6 h-6" />
    </motion.button>
  );
};

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("ALL");
  const { scrollY } = useScroll();
  
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // FIX: Ensure filteredProjects always returns an array
  const filteredProjects = selectedCategory === "ALL" 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(project => project.category === selectedCategory);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Navkaran_Singh_Resume.pdf';
    link.download = 'Navkaran_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Debug: Log filtered projects
  console.log('Selected Category:', selectedCategory);
  console.log('Filtered Projects:', filteredProjects);

  return (
    <div className="pb-0">
      <ScrollToContactButton />

      {/* Hero Section - Pure white background */}
      <motion.section 
        id="home" 
        className="relative min-h-[50vh] flex items-center justify-center overflow-hidden px-6 py-12 bg-white dark:bg-background"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5"
          style={{ y: heroY, opacity: heroOpacity }}
        />
        
        <div className="relative z-10 max-w-4xl text-center space-y-6">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Navkaran Singh<span className="text-primary">_</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            A passionate{" "}
            <span className="text-primary font-semibold">
              <TypingText
                phrases={["Data Analyst", "Data Engineer", "Data Scientist", "ML Engineer"]}
              />
            </span>
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" className="mt-6" onClick={handleDownloadCV} data-testid="button-download-cv">
              <Download className="w-4 h-4 mr-2" />
              DOWNLOAD CV
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-6 h-6 text-primary opacity-50" />
        </motion.div>
      </motion.section>

      {/* About Section - Light gray/blue background */}
      <motion.section 
        id="about" 
        className="bg-gray-50 dark:bg-muted/30 py-16 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-6xl px-6">
          <SectionHeading>About Me<span className="text-primary">_</span></SectionHeading>
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
        </div>
      </motion.section>

      {/* Services Section - White background */}
      <motion.section 
        id="services" 
        className="bg-white dark:bg-background py-16 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-6xl px-6">
          <SectionHeading>How I Create Impact<span className="text-primary">_</span></SectionHeading>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
          >
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
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section - Light gray/blue background */}
      <motion.section 
        id="skills" 
        className="bg-gray-50 dark:bg-muted/30 py-16 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-6xl px-6">
          <SectionHeading>Skills<span className="text-primary">_</span></SectionHeading>
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
        </div>
      </motion.section>

      {/* Portfolio Section - White background */}
      <motion.section 
        id="portfolio" 
        className="bg-white dark:bg-background py-16 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-6xl px-6">
          <SectionHeading>Portfolio<span className="text-primary">_</span></SectionHeading>
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
                onClick={() => {
                  console.log('Clicking category:', category);
                  setSelectedCategory(category);
                }}
                data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Badge>
            ))}
          </div>
          
          {/* FIX: Always show grid, even if empty, and add key to force re-render */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[200px]"
            variants={staggerContainer}
            key={`${selectedCategory}-${filteredProjects.length}`}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={`${selectedCategory}-${project.title}`}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  category={project.category}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No projects found in this category.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Background Section (formerly Resume) - Light gray/blue background */}
      <motion.section 
        id="background" 
        className="bg-gray-50 dark:bg-muted/30 py-16 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-6xl px-6">
          <SectionHeading>Background<span className="text-primary">_</span></SectionHeading>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold tracking-wide text-foreground uppercase mb-8 flex items-center gap-2">
                <span className="text-primary">📚</span> Education
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
              <h3 className="text-lg font-bold tracking-wide text-foreground uppercase mb-8 flex items-center gap-2">
                <span className="text-primary">💼</span> Employment
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
        </div>
      </motion.section>

      {/* Achievements Section - White background */}
      <motion.section 
        id="achievements" 
        className="bg-white dark:bg-background py-16 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-6xl px-6">
          <SectionHeading>Achievements<span className="text-primary">_</span></SectionHeading>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Demonstrating my commitment to continuous learning, I have attained notable certifications and accomplishments that highlight my dedication to excellence in the field of data. I actively pursue opportunities to enhance my knowledge, ensuring I stay at the forefront of data-driven innovations.
          </p>
          
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {CERTIFICATES.map((cert, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <CertificateCard {...cert} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {CERTIFICATES.map((_, index) => (
              <div 
                key={index} 
                className="w-2 h-2 rounded-full bg-muted hover:bg-primary transition-colors"
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section - Light blue accent background */}
      <motion.section 
        id="contact" 
        className="bg-blue-50/70 dark:bg-primary/5 py-16 scroll-mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-6xl px-6">
          <ContactForm
            email="navkarancad@gmail.com"
            phone="+1 (514) 804-1045"
            location="Montréal, Canada"
          />
        </div>
      </motion.section>
    </div>
  );
}
