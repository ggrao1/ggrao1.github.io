import type { Metadata } from 'next'
import ProfileSection from '@/components/ProfileSection'
import ImageUploadFAB from '@/components/ImageUploadFAB'
import InstagramProfile from '@/components/InstagramInstructions'

export const metadata: Metadata = {
  title: 'About - Gautham G Rao',
  description: 'Learn about my journey as a Cloud Specialist & Generative AI Engineer, my experience at Niveus Solutions and Juegostudios, and passion for solving complex problems.',
}

const About = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <ProfileSection />

        {/* Main Content */}
        <div className="max-w-none">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                I'm a results-driven Software Engineer with over 6+ years of experience specializing in cloud and 
                Generative AI solutions. With extensive experience in cloud migration and AI/ML engineering, 
                I'm actively seeking exciting career opportunities with innovative companies that push the boundaries of technology.
              </p>
              
              <p>
                My expertise spans developing LLM applications, RAG frameworks, and automating processes across multiple 
                cloud platforms including GCP, AWS, and Azure. I'm proficient in JavaScript, Python, and TypeScript, cloud migration,
                with deep experience in Vertex AI and modern cloud architectures.
              </p>
              
              <p>
                I've successfully delivered end-to-end applications for top-tier financial institutions across India and 
                Southeast Asia, and played a key role in developing internal libraries and frameworks that improve code quality 
                and accelerate development. As a Google Cloud Certified Associate Cloud Engineer, I bring both theoretical 
                knowledge and practical experience to every project.
              </p>
            </div>
          </div>

          {/* Career Highlights */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Career Highlights</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Specialist - Niveus Solutions (2021-Present)</h3>
                <p className="text-gray-700">
                  Led development of Generative AI solutions including competitor analysis tools, RAG frameworks, 
                  and LLM applications. Successfully delivered end-to-end applications for top-tier financial institutions 
                  across India and Southeast Asia, focusing on secure and scalable cloud architectures.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Software Developer - Juegostudios (2019-2021)</h3>
                <p className="text-gray-700">
                  Designed and developed scalable server applications, focusing on architecture, database optimization, 
                  and high availability. Built backend systems for chat, real-time applications, and multiplayer games 
                  using WebSockets and AWS services.
                </p>
              </div>
              
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation & Development</h3>
                <p className="text-gray-700">
                  Developed multiple internal libraries and frameworks, created VS Code extensions with multi-LLM support, 
                  and built automated code migration tools. Focus on improving development efficiency and code quality 
                  through innovative tooling and platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 md:p-8 text-white mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Achievements & Certifications</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L3.09 8.26L12 14.5L20.91 8.26L12 2ZM12 16.5L3.09 10.24L12 16.5L20.91 10.24L12 16.5Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Google Cloud Certified</h3>
                    <p className="text-primary-100 mb-3">
                      Associate Cloud Engineer certification demonstrating expertise in cloud architecture and deployment strategies.
                    </p>
                    <div className="flex items-center text-primary-100 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Certified Professional
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.79 4.21a.996.996 0 0 0-1.58 0l-5.66 7.55L7.21 8.43a.996.996 0 1 0-1.58 1.22l4 5.33a.996.996 0 0 0 1.58 0l7-9.33a.996.996 0 0 0 0-1.44z"/>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Google Cloud India Summit 2025</h3>
                    <p className="text-primary-100 mb-3">
                      Represented Niveus Solutions (NTT Data company) at Google Cloud India Summit, connecting with industry leaders 
                      and showcasing expertise in AI advancements within the Google Cloud ecosystem.
                    </p>
                    <div className="flex items-center text-primary-100 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                      </svg>
                      January 2025
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Publications & Research */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Publications & Research</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary-600 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Feature Extraction and Classification of Gestures from Myo-Electric Data Using a Neural Network Classifier
                </h3>
                <div className="flex items-center space-x-4 mb-3">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    Neural Networks
                  </span>
                  <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-full text-sm font-medium">
                    Machine Learning
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Signal Processing
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    Developer Implementation
                  </span>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong>Role:</strong> Developer for implementation of the classification system. 
                  Contributed to the development of a neural network classifier achieving 94% accuracy 
                  for gesture recognition from surface electromyography signals using the Myo-armband device.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The study focuses on extracting intended hand gestures from surface electromyography signals 
                  for multi-functional prosthetic controllers. Our implementation included data acquisition, 
                  feature extraction, and offline gesture classification using Artificial Neural Networks, 
                  with performance comparison against Support Vector Machine classifiers.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Technical Contributions:</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Implemented neural network architecture for multi-sensor EMG data processing</li>
                    <li>• Developed feature extraction algorithms for real-time gesture recognition</li>
                    <li>• Achieved 94% accuracy on validation dataset for 5 distinct hand gestures</li>
                    <li>• Optimized single neural network approach over multiple sensor-specific networks</li>
                    <li>• Integrated Myo-armband hardware for non-invasive EMG signal acquisition</li>
                  </ul>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  <strong>Published in:</strong> Advances in Intelligent Systems and Computing, Springer
                </p>
                <a 
                  href="https://link.springer.com/chapter/10.1007/978-981-15-5788-0_7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  View Publication
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 md:p-8 text-white mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">My Philosophy</h2>
            <div className="space-y-4 text-lg">
              <p>
                "I believe in building technology that not only solves today's problems but 
                anticipates tomorrow's challenges."
              </p>
              <p>
                My approach combines rigorous engineering practices with creative problem-solving, 
                ensuring that every solution is both technically sound and user-centric. 
                Whether it's optimizing RAG systems for cost and accuracy or designing scalable 
                cloud architectures, I focus on delivering measurable value.
              </p>
            </div>
          </div>

          {/* Personal Interests */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Beyond Code</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Learning</h3>
                <p className="text-gray-700">
                  Staying current with the rapidly evolving AI landscape through research papers, 
                  hands-on experimentation, and active participation in the cloud-native community.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Knowledge Sharing</h3>
                <p className="text-gray-700">
                  Contributing to the developer community through technical blogs, open-source 
                  projects, and speaking engagements at industry conferences.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-700">
                  Exploring emerging technologies and their practical applications, from 
                  experimental AI models to cutting-edge cloud services.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
                <p className="text-gray-700">
                  Working with diverse teams to bring ambitious projects to life, fostering 
                  an environment of creativity and technical excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Let's Build the Future Together</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Interested in collaborating on innovative AI and cloud projects?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
            >
              Get In Touch
            </a>
            <a
              href="/projects"
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-colors duration-200"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      {/* Photo Gallery Section */}
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InstagramProfile />
        </div>
      </div>
      
      {/* Image Upload FAB */}
      <ImageUploadFAB />
    </div>
  )
}

export default About
