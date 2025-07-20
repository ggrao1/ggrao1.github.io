'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useComponentTracking, useInteractionTracking } from '@/hooks/useAnalytics'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  const { trackClick } = useInteractionTracking()
  
  // Track hero section view
  useComponentTracking('hero_section')
  
  const texts = [
    'Cloud Specialist & Generative AI Engineer',
    'Software Engineer',
    'Google Cloud Certified',
    'LLM Application Developer'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 relative overflow-hidden">
      {/* Background particles/shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-300 opacity-10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-300 opacity-5 rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Gautham G Rao
          </h1>
          
          <div className="h-16 mb-8">
            <h2 className="text-2xl md:text-3xl text-primary-100 animate-slide-up">
              {texts[currentText]}
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-primary-100 mb-12 max-w-4xl mx-auto font-light">
            Developing LLM Applications, RAG Frameworks, and Automating Processes across Cloud Platforms
          </p>
          
          <p className="text-lg text-primary-200 mb-12 max-w-3xl mx-auto">
            Results-driven Software Engineer specializing in cloud and Generative AI solutions. 
            Expertise in AI/ML engineering, and developing LLM applications. 
            Actively seeking exciting career opportunities in innovative tech companies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/projects"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={() => trackClick('hero_projects_button', 'navigation')}
            >
              View My Projects
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
              onClick={() => trackClick('hero_contact_button', 'navigation')}
            >
              Get In Touch
            </Link>
          </div>
          
          <div className="mt-16 flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">6+</div>
              <div className="text-primary-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-primary-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">3</div>
              <div className="text-primary-200">Cloud Platforms</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
