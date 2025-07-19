import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills - Gautham G Rao',
  description: 'Comprehensive overview of my technical skills in cloud platforms, AI technologies, programming languages, and development tools.',
}

const skillsData = {
  'Programming Languages': [
    { 
      name: 'JavaScript', 
      level: 95, 
      description: 'Node.js, ES6+, TypeScript',
      experience: '5+ years',
      projects: ['VSCode Extension', 'RAG SaaS Platform', 'Multiple Web Apps']
    },
    { 
      name: 'Python', 
      level: 90, 
      description: 'FastAPI, Django, ML Libraries',
      experience: '4+ years',
      projects: ['AI Analytics Platform', 'Document Validator API', 'ML Models']
    },
    { 
      name: 'TypeScript', 
      level: 85, 
      description: 'React, Next.js, Type Safety',
      experience: '3+ years',
      projects: ['Portfolio Website', 'Enterprise Apps', 'Developer Tools']
    },
    { 
      name: 'Java', 
      level: 80, 
      description: 'Spring Boot, Enterprise Apps',
      experience: '3+ years',
      projects: ['Banking Solutions', 'Enterprise APIs', 'Microservices']
    },
    { 
      name: 'C', 
      level: 75, 
      description: 'Systems Programming, Performance',
      experience: '2+ years',
      projects: ['System Utilities', 'Performance-Critical Apps']
    }
  ],
  'Cloud Platforms': [
    { 
      name: 'Google Cloud Platform', 
      level: 95, 
      description: 'Certified Associate Cloud Engineer',
      experience: '4+ years',
      projects: ['Multi-cloud RAG Systems', 'AI/ML Pipelines', 'Serverless Apps']
    },
    { 
      name: 'AWS', 
      level: 85, 
      description: 'EC2, Lambda, S3, RDS',
      experience: '3+ years',
      projects: ['Document Processing APIs', 'Scalable Web Apps', 'Data Pipelines']
    },
    { 
      name: 'Azure', 
      level: 80, 
      description: 'App Services, Functions, Storage',
      experience: '2+ years',
      projects: ['AI Search Integration', 'Enterprise Solutions', 'Hybrid Apps']
    }
  ],
  'AI & LLM Integration': [
    { 
      name: 'Vertex AI', 
      level: 95, 
      description: 'Model Training, Deployment',
      experience: '3+ years',
      projects: ['Competitor Analysis Tool', 'Financial Analytics', 'Custom Models']
    },
    { 
      name: 'Gemini', 
      level: 90, 
      description: 'API Integration, Fine-tuning',
      experience: '2+ years',
      projects: ['VSCode Extension', 'Code Assistant', 'Content Generation']
    },
    { 
      name: 'RAG Systems', 
      level: 90, 
      description: 'Vector DBs, Embeddings',
      experience: '2+ years',
      projects: ['RAG SaaS Platform', 'Document QA', 'Knowledge Bases']
    },
    { 
      name: 'Azure AI Search', 
      level: 85, 
      description: 'Cognitive Search, Indexing',
      experience: '2+ years',
      projects: ['Document Discovery', 'Semantic Search', 'Content Analysis']
    },
    { 
      name: 'Langgraph', 
      level: 80, 
      description: 'Agent Workflows, Orchestration',
      experience: '1+ year',
      projects: ['AI Workflow Automation', 'Multi-Agent Systems']
    },
    { 
      name: 'Agent Development Kit', 
      level: 75, 
      description: 'Custom AI Agents',
      experience: '1+ year',
      projects: ['Intelligent Assistants', 'Automated Workflows']
    }
  ],
  'Databases & Storage': [
    { 
      name: 'MySQL', 
      level: 90, 
      description: 'Relational Design, Optimization',
      experience: '4+ years',
      projects: ['Enterprise Apps', 'E-commerce Platforms', 'Analytics Systems']
    },
    { 
      name: 'PostgreSQL', 
      level: 85, 
      description: 'Advanced Queries, Extensions',
      experience: '3+ years',
      projects: ['RAG Platform', 'Document APIs', 'Complex Analytics']
    },
    { 
      name: 'MongoDB', 
      level: 80, 
      description: 'Document Store, Aggregation',
      experience: '3+ years',
      projects: ['Content Management', 'Real-time Apps', 'IoT Data']
    },
    { 
      name: 'Redis', 
      level: 75, 
      description: 'Caching, Session Store',
      experience: '2+ years',
      projects: ['Performance Optimization', 'Session Management', 'Real-time Features']
    },
    { 
      name: 'BigQuery', 
      level: 85, 
      description: 'Data Analytics, ML',
      experience: '2+ years',
      projects: ['Competitor Analysis', 'Business Intelligence', 'Large-scale Analytics']
    }
  ],
  'Development Tools & Technologies': [
    { 
      name: 'Docker', 
      level: 90, 
      description: 'Containerization, Orchestration',
      experience: '3+ years',
      projects: ['Microservices', 'CI/CD Pipelines', 'Scalable Deployments']
    },
    { 
      name: 'Git', 
      level: 95, 
      description: 'Version Control, Collaboration',
      experience: '5+ years',
      projects: ['All Projects', 'Team Collaboration', 'Code Management']
    },
    { 
      name: 'GitHub', 
      level: 90, 
      description: 'CI/CD, Actions, Workflows',
      experience: '4+ years',
      projects: ['Automated Testing', 'Deployment Pipelines', 'Code Reviews']
    },
    { 
      name: 'WebSocket', 
      level: 85, 
      description: 'Real-time Communication',
      experience: '3+ years',
      projects: ['Live Chat Systems', 'Real-time Dashboards', 'Collaborative Tools']
    },
    { 
      name: 'Serverless', 
      level: 80, 
      description: 'Functions, Auto-scaling',
      experience: '2+ years',
      projects: ['Event-driven Apps', 'Cost-optimized Solutions', 'Microservices']
    },
    { 
      name: 'Socket.io', 
      level: 75, 
      description: 'Real-time Web Apps',
      experience: '2+ years',
      projects: ['Interactive Dashboards', 'Multiplayer Features', 'Live Updates']
    }
  ]
}

const certifications = [
  {
    title: 'Google Cloud Certified Associate Cloud Engineer',
    issuer: 'Google Cloud',
    date: '2023',
    description: 'Comprehensive certification covering GCP services, architecture, and best practices',
    badge: '🏅'
  },
  {
    title: 'Google Cloud Partner - Speaker',
    issuer: 'Google Cloud',
    date: '2025',
    description: 'Presented at Google Cloud India Summit 2025 on AI and cloud architectures',
    badge: '🎤'
  }
]

const Skills = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning cloud platforms, AI technologies, programming languages, 
            and modern development practices built through years of hands-on experience
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                {category}
              </h2>
              
              <div className="space-y-8">
                {skills.map((skill) => (
                  <div key={skill.name} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{skill.name}</h3>
                        <p className="text-sm text-purple-600 font-medium">{skill.experience} experience</p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-gray-900">{skill.level}%</span>
                        <div className="text-sm text-gray-500">Proficiency</div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    
                    <p className="text-gray-700 mb-2">{skill.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {skill.projects.map((project, index) => (
                        <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Certifications & Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-purple-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{cert.badge}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-purple-600 font-medium mb-2">{cert.issuer} • {cert.date}</p>
                    <p className="text-gray-700">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Skills at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-blue-100">Technologies</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Major Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3</div>
              <div className="text-blue-100">Cloud Platforms</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Collaborate?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how these skills can bring your next project to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
            >
              Start a Project
            </a>
            <a
              href="/projects"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors duration-200"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
