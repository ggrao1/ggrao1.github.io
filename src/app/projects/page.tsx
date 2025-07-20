import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects - Gautham G Rao',
  description: 'Explore my portfolio of AI and cloud projects, including RAG systems, VSCode extensions, and enterprise solutions.',
}

const projects = [
  {
    id: 1,
    title: 'GenAI-Powered Insurance Operations Chatbot',
    description: 'Architected and developed an AI-powered chatbot for a leading insurance company to streamline operations, automate data extraction, and enhance product knowledge access.',
    longDescription: 'Transforming business operations with GenAI chatbot for a leading insurance company. The client faced challenges in streamlining operations, accessing product information, and managing HR support. We empowered them with an AI-powered chatbot that provides instant, accurate responses, automating data extraction, enhancing product knowledge, and simplifying HR policy access. The outcome: Increased efficiency, reduced manual effort, and a smarter, more scalable solution driving growth and decision-making.',
    technologies: ['Generative AI', 'Natural Language Processing', 'Python', 'Cloud AI Services', 'Insurance Domain APIs', 'Enterprise Integration'],
    challenges: 'Complex insurance product information management, HR policy accessibility, and automating data extraction from various enterprise systems.',
    solutions: 'Designed intelligent chatbot architecture with domain-specific training, implemented seamless enterprise system integration, and created intuitive conversation flows for complex insurance operations.',
    outcomes: 'Increased operational efficiency, reduced manual effort significantly, improved employee productivity, and enabled faster decision-making across the organization.',
    image: '/api/placeholder/600/400',
    github: '',
    demo: '',
    featured: true,
    category: 'Enterprise AI',
    status: 'Production',
    clientWork: true,
    company: 'Niveus Solutions (Part of NTT Data)',
    linkedinPost: 'https://www.linkedin.com/posts/niveus-solutions_cs-gen-ai-powered-chatbot-for-insurance-activity-7328652891647307777-SHkR?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSRWwgBXCeWxrtzY8Uq5B5zQt3wP2o-oz0'
  },
  {
    id: 2,
    title: 'Generative AI-Powered Competitor Analysis Tool',
    description: 'Designed and developed an application that uses any SQL database. This tool interprets user queries in natural language, generates SQL queries to retrieve relevant data, and displays visualizations.',
    longDescription: 'A sophisticated application that interprets user queries in natural language, generates SQL queries to retrieve relevant data, and subsequently uses the SQL results to display visualizations. The custom fine-tuned model is used for improved accuracy of SQL generation. Built for top-tier financial institutions across India and Southeast Asia.',
    technologies: ['Python', 'SQL', 'Vertex AI', 'BigQuery', 'Gemini', 'Custom Fine-tuned Models'],
    challenges: 'Interpreting natural language queries accurately and generating precise SQL queries while ensuring data security for financial institutions.',
    solutions: 'Implemented custom fine-tuned models for improved SQL generation accuracy and designed secure data processing pipelines.',
    outcomes: 'Successfully deployed across top-tier private sector banks, enabling natural language-based data analysis and business intelligence.',
    image: '/api/placeholder/600/400',
    github: 'https://github.com/ggrao1/genai-competitor-analysis',
    demo: 'https://competitor-analysis-demo.com',
    featured: true,
    category: 'AI/ML',
    status: 'Production'
  },
  {
    id: 3,
    title: 'VS Code Extension for Code Generation',
    description: 'Developed a VS Code extension utilizing Gemini 1.5 Flash, Code Bison, Code Geko, Gemini 2.0 and Claude Sonet 3.7 models for comprehensive code assistance.',
    longDescription: 'A comprehensive VS Code extension that provides features like auto-completion, code generation, test case generation, documentation generation and commit message generation. Utilizes multiple LLM models including Gemini 1.5 Flash, Code Bison, Code Geko, Gemini 2.0 and Claude Sonet 3.7 for optimal performance.',
    technologies: ['TypeScript', 'VSCode API', 'Gemini 1.5 Flash', 'Code Bison', 'Code Geko', 'Gemini 2.0', 'Claude Sonet 3.7'],
    challenges: 'Integrating multiple LLM models seamlessly while maintaining performance and providing accurate code assistance.',
    solutions: 'Developed intelligent model selection algorithms and efficient caching mechanisms for optimal performance across different coding scenarios.',
    outcomes: 'Enhanced developer productivity with comprehensive code assistance features and multi-model support.',
    image: '/api/placeholder/600/400',
    github: 'https://github.com/ggrao1/vscode-genai-extension',
    demo: 'https://marketplace.visualstudio.com/items?itemName=gauthamgrao.genai-assistant',
    featured: true,
    category: 'Developer Tools',
    status: 'Production'
  },
  {
    id: 4,
    title: 'RAG Framework & SaaS Platform',
    description: 'Developed a cost-effective RAG framework and SaaS platform by designing the architecture, selecting vector stores, and implementing efficient chunking mechanisms.',
    longDescription: 'A comprehensive RAG framework and SaaS platform that optimizes retrieval accuracy and performance while significantly lowering operating costs compared to market alternatives. Features efficient resource use, optimized algorithms, and scalable architecture for enterprise deployment.',
    technologies: ['Python', 'FastAPI', 'Vector Databases', 'Azure AI Search', 'Vertex AI', 'Docker', 'Kubernetes'],
    challenges: 'Balancing retrieval accuracy with cost efficiency while maintaining enterprise-grade performance and scalability.',
    solutions: 'Implemented efficient chunking mechanisms, optimized vector store selection, and designed cost-effective architecture with intelligent resource management.',
    outcomes: 'Achieved significant cost reduction compared to market alternatives while maintaining high retrieval accuracy and performance.',
    image: '/api/placeholder/600/400',
    github: 'https://github.com/ggrao1/rag-saas-platform',
    demo: 'https://rag-platform-demo.com',
    featured: true,
    category: 'SaaS',
    status: 'Production'
  },
  {
    id: 5,
    title: 'Gen AI Code Migration (Ionic to React Native)',
    description: 'Implemented a Gen AI solution to automate the conversion of Ionic applications to React Native, minimizing manual effort and accelerating the migration process.',
    longDescription: 'An innovative Gen AI solution that automates the conversion of Ionic applications to React Native. The system analyzes application structure, components, and business logic to generate equivalent React Native code, significantly reducing manual migration effort.',
    technologies: ['Python', 'AST Parsing', 'Generative AI', 'React Native', 'Ionic', 'TypeScript'],
    challenges: 'Understanding complex application architectures and maintaining functional equivalency during automated migration.',
    solutions: 'Developed sophisticated code analysis algorithms and AI-powered conversion logic to ensure accurate migration with minimal manual intervention.',
    outcomes: 'Significantly reduced migration time and effort while maintaining application functionality and performance.',
    image: '/api/placeholder/600/400',
    github: 'https://github.com/ggrao1/ionic-reactnative-migration',
    demo: 'https://migration-tool-demo.com',
    featured: false,
    category: 'Developer Tools',
    status: 'Production'
  },
  {
    id: 6,
    title: 'Generic Document Validator',
    description: 'Built with Gemini model which helps to create multiple validation profiles and validate documents as a service with REST API integration options.',
    longDescription: 'A comprehensive document validation service built with Gemini model that allows creation of multiple validation profiles and provides document validation as a service. Features REST API integration options to integrate document validation service into existing application pipelines.',
    technologies: ['Python', 'Gemini', 'FastAPI', 'REST APIs', 'Document Processing', 'Microservices'],
    challenges: 'Creating flexible validation profiles that can handle diverse document types and formats while maintaining accuracy.',
    solutions: 'Leveraged Gemini model capabilities to build intelligent validation logic with customizable profiles and robust API infrastructure.',
    outcomes: 'Enabled automated document validation across various application pipelines with high accuracy and flexibility.',
    image: '/api/placeholder/600/400',
    github: 'https://github.com/ggrao1/document-validator',
    demo: 'https://doc-validator-api.com',
    featured: false,
    category: 'API',
    status: 'Production'
  },
  {
    id: 7,
    title: 'SOW Compliance and Risk Assessment Tool',
    description: 'Created a tool to automate the validation of Statements of Work (SOWs) against project requirements and identify potential risks with reusable accelerators.',
    longDescription: 'An intelligent tool that automates the validation of Statements of Work (SOWs) against project requirements, identifies potential risks, and recommends reusable accelerators as part of Gen AI platform\'s SOW validation and RAG system. Streamlines project planning and risk management processes.',
    technologies: ['Python', 'RAG System', 'Generative AI', 'Risk Assessment', 'Document Analysis'],
    challenges: 'Accurately analyzing complex SOW documents and identifying subtle risks and compliance issues.',
    solutions: 'Developed intelligent document analysis using RAG systems and generative AI to provide comprehensive SOW validation and risk assessment.',
    outcomes: 'Automated SOW validation process, reduced compliance risks, and improved project planning efficiency.',
    image: '/api/placeholder/600/400',
    github: 'https://github.com/ggrao1/sow-compliance-tool',
    demo: 'https://sow-validator-demo.com',
    featured: true,
    category: 'AI/ML',
    status: 'Production'
  },
  {
    id: 7,
    title: 'Financial Data Processing Platform',
    description: 'End-to-end application for top-tier private sector banks that processes financial data from PDF documents, converts it into structured format, and stores it in BigQuery.',
    longDescription: 'A comprehensive end-to-end application designed for top-tier private sector banks across India and Southeast Asia. The application processes financial data from PDF documents, converts it into a structured format, and stores it in BigQuery. Features SQL-based application interface utilized by Custom built Generative AI-powered competitor analysis tool.',
    technologies: ['Python', 'BigQuery', 'PDF Processing', 'SQL', 'GCP', 'Data Pipelines', 'Financial Data'],
    challenges: 'Processing complex financial documents with high accuracy while ensuring data security and compliance with banking regulations.',
    solutions: 'Implemented robust PDF processing pipelines, secure data handling, and efficient BigQuery integration for structured data storage.',
    outcomes: 'Successfully deployed across multiple top-tier banks, enabling automated financial data processing and analysis.',
    image: '/api/placeholder/600/400',
    github: 'https://github.com/ggrao1/financial-data-platform',
    demo: 'https://financial-platform-demo.com',
    featured: true,
    category: 'Enterprise',
    status: 'Production'
  }
]

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            A showcase of real-world applications at the intersection of cloud technologies, 
            artificial intelligence, and modern web development
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium">
              All Projects
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              AI/ML
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              SaaS
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              Developer Tools
            </button>
            <button className="bg-white text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
              API
            </button>
          </div>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={true} />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured={false} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's collaborate on building innovative AI and cloud solutions together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Start a Conversation
            </a>
            <a
              href="https://github.com/ggrao1"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
