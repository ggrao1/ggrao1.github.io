import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  challenges: string
  solutions: string
  outcomes: string
  image: string
  github?: string
  demo?: string
  featured: boolean
  category: string
  status: string
  clientWork?: boolean
  company?: string
  linkedinPost?: string
}

interface ProjectCardProps {
  project: Project
  featured: boolean
}

const ProjectCard = ({ project, featured }: ProjectCardProps) => {
  const cardClasses = featured
    ? "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group lg:col-span-1"
    : "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"

  return (
    <div className={cardClasses}>
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                {project.category === 'AI/ML' && (
                  <path d="M12 2L13.09 8.26L12 14.5L10.91 8.26L12 2ZM21 12L14.74 13.09L8.5 12L14.74 10.91L21 12Z"/>
                )}
                {project.category === 'Enterprise AI' && (
                  <path d="M12 2L13.09 8.26L12 14.5L10.91 8.26L12 2ZM21 12L14.74 13.09L8.5 12L14.74 10.91L21 12Z"/>
                )}
                {project.category === 'SaaS' && (
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                )}
                {project.category === 'Developer Tools' && (
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                )}
                {project.category === 'API' && (
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 5-5v10zm2-10l5 5-5 5V7z"/>
                )}
              </svg>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status === 'Production' ? 'bg-green-500' : 
                project.status === 'Beta' ? 'bg-yellow-500' : 'bg-blue-500'
              }`}>
                {project.status}
              </span>
              <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {featured ? project.longDescription : project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, featured ? 5 : 3).map((tech) => (
              <span key={tech} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
            {project.technologies.length > (featured ? 5 : 3) && (
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                +{project.technologies.length - (featured ? 5 : 3)} more
              </span>
            )}
          </div>
        </div>

        {/* Project Stats for Featured Projects */}
        {featured && (
          <div className="mb-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-1 gap-2 text-sm">
              <div>
                <span className="font-semibold text-gray-700">Challenge: </span>
                <span className="text-gray-600">{project.challenges.substring(0, 100)}...</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Outcome: </span>
                <span className="text-gray-600">{project.outcomes.substring(0, 100)}...</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <Link 
            href={`/projects/${project.id}`}
            className="text-purple-600 hover:text-purple-700 font-medium flex items-center gap-2 group"
          >
            Learn More
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          
          <div className="flex gap-2">
            {project.linkedinPost && (
              <a
                href={project.linkedinPost}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn Case Study"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="GitHub Repository"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Live Demo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
