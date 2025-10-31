import ProjectCard from '../ProjectCard';
import dataImg from '@assets/stock_images/modern_data_analytic_8270b338.jpg';
import aiImg from '@assets/stock_images/artificial_intellige_2dcb513b.jpg';
import pipelineImg from '@assets/stock_images/data_pipeline_cloud__22f08324.jpg';

export default function ProjectCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-background">
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
  );
}
