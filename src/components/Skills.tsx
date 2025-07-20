'use client'

import { useComponentTracking } from '@/hooks/useAnalytics'

const skillsData = {
  'Programming Languages': [
    { name: 'JavaScript', level: 95, description: 'Node.js, ES6+, Full-stack development' },
    { name: 'Python', level: 90, description: 'AI/ML, Backend development, Data processing' },
    { name: 'TypeScript', level: 85, description: 'Type-safe development, React, Next.js' },
    { name: 'Java', level: 75, description: 'Enterprise applications, Spring framework' },
    { name: 'C', level: 70, description: 'Systems programming, Performance optimization' }
  ],
  'Cloud Platforms': [
    { name: 'Google Cloud Platform', level: 95, description: 'Certified Associate Cloud Engineer' },
    { name: 'AWS', level: 85, description: 'EC2, Lambda, S3, RDS, Comprehensive services' },
    { name: 'Azure', level: 80, description: 'AI Services, Functions, Storage solutions' }
  ],
  'LLM & AI Integration': [
    { name: 'Vertex AI', level: 95, description: 'Model deployment, Fine-tuning, Production' },
    { name: 'RAG Frameworks', level: 90, description: 'Cost-optimized, High-accuracy systems' },
    { name: 'Azure AI Search', level: 85, description: 'Cognitive search, Document processing' },
    { name: 'Azure OpenAI', level: 85, description: 'GPT integration, Enterprise solutions' },
    { name: 'Gemini Models', level: 90, description: '1.5 Pro, 2.0, Code generation' },
    { name: 'Custom Fine-tuning', level: 80, description: 'SQL generation, Domain-specific models' }
  ],
  'Databases & Storage': [
    { name: 'BigQuery', level: 90, description: 'Data analytics, ML integration' },
    { name: 'MySQL', level: 85, description: 'Relational design, Optimization' },
    { name: 'PostgreSQL', level: 85, description: 'Advanced queries, JSON support' },
    { name: 'MongoDB', level: 80, description: 'Document store, Aggregation pipelines' },
    { name: 'Redis', level: 75, description: 'Caching, Session management' },
    { name: 'Firestore', level: 80, description: 'NoSQL, Real-time databases' }
  ],
  'Frameworks & Tools': [
    { name: 'ReactJS', level: 85, description: 'Frontend development, Component architecture' },
    { name: 'NestJS', level: 80, description: 'Scalable backend, Microservices' },
    { name: 'FastAPI', level: 85, description: 'High-performance APIs, Python backends' },
    { name: 'Docker', level: 80, description: 'Containerization, Deployment' },
    { name: 'WebSocket', level: 85, description: 'Real-time applications, Chat systems' },
    { name: 'Socket.io', level: 80, description: 'Real-time communication, Gaming' }
  ]
}

const Skills = () => {
  // Track skills section view
  useComponentTracking('skills_section')
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning cloud platforms, AI technologies, and modern development practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                {category}
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
