import { useParams, Link } from 'react-router-dom';
import demoImage from '../assets/images/demo.png';
import streamlitApp from '../assets/images/streamlit_app.png';
import dashboard from '../assets/images/dashboard.png';
import chatbot from '../assets/images/chatbot.jpg';
import cv from '../assets/images/cv.png';

const projects = [
  {
    id: 1,
    title: "AI Image Generation",
    description: "A web application that generates images using AI models",
    longDescription: "This project implements state-of-the-art image generation using GANs and diffusion models. Users can input text prompts and receive high-quality generated images. The system includes features like style transfer and image-to-image translation.",
    image: demoImage,
    technologies: ["Streamlit", "Python", "Stable Diffusion model","PyTorch", "Transformers"],
    githubLink: "https://github.com/Mannie297/ai-image-generator",
    demoLink: "https://github.com/Mannie297/ai-image-generator"
  },
  {
    id: 2,
    title: "Natural Language Processing",
    description: "Text analysis and sentiment detection using NLP",
    longDescription: "An advanced NLP system that performs sentiment analysis, named entity recognition, key phrase extraction and dependency parsing. The system uses transformer-based models for accurate text understanding and processing. The results are presented through a user-friendly Streamlit web interface.",
    image: streamlitApp,
    technologies: ["Streamlit", "Python", "BERT", "NER"],
    githubLink: "https://github.com/Mannie297/advanced-nlp-system",
    demoLink: "https://github.com/Mannie297/advanced-nlp-system"
  },
  {
    id: 3,
    title: "Machine Learning Dashboard",
    description: "Interactive dashboard for ML model visualization",
    longDescription: "A comprehensive dashboard that visualizes machine learning model performance, training metrics, and predictions. Includes interactive charts and real-time model monitoring capabilities.",
    image: dashboard,
    technologies: ["Streamlit", "Python", "Plotly", "Pandas"],
    githubLink: "https://github.com/Mannie297/machine_learning_dashboard",
    demoLink: "https://github.com/Mannie297/machine_learning_dashboard"
  },
  {
    id: 4,
    title: "AI Chatbot",
    description: "Conversational AI assistant with natural language understanding",
    longDescription: "An intelligent chatbot that understands context and maintains natural conversations. Built with transformer models and integrated with various APIs for enhanced functionality.",
    image: chatbot,
    technologies: ["Python", "TensorFlow", "WebSocket"],
    githubLink: "https://github.com/Mannie297/ai-chatbot",
    demoLink: "https://github.com/Mannie297/ai-chatbot"
  },
  {
    id: 5,
    title: "Computer Vision System",
    description: "Real-time object detection and recognition",
    longDescription: "A real-time computer vision system that performs object detection, face recognition, and scene understanding. Optimized for performance with hardware acceleration support.",
    image: cv,
    technologies: ["OpenCV", "PyTorch", "React"],
    githubLink: "https://github.com/Mannie297/computer-vision",
    demoLink: "https://github.com/Mannie297/computer-vision"
  }
];

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Project not found</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Projects
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-98 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-600 text-lg mb-6">{project.longDescription}</p>
          
          <div className="mb-8 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              View on GitHub
            </a>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails; 