'use client'

import analytics from '@/lib/analytics'

const Achievements = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Achievements & Certifications */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6 md:p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Achievements & Certifications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L3.09 8.26L12 14.5L20.91 8.26L12 2ZM12 16.5L3.09 10.24L12 16.5L20.91 10.24L12 16.5Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Google Cloud Certified</h3>
                  <p className="text-primary-100 mb-3">
                    Associate Cloud Engineer certification demonstrating expertise in cloud architecture and deployment strategies.
                  </p>
                  <div className="flex items-center text-primary-100 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                    <path d="M17.79 4.21a.996.996 0 0 0-1.58 0l-5.66 7.55L7.21 8.43a.996.996 0 1 0-1.58 1.22l4 5.33a.996.996 0 0 0 1.58 0l7-9.33a.996.996 0 0 0 0-1.44z" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Google Cloud Partner Representative - India Summit 2025</h3>
                  <p className="text-primary-100 mb-3">
                    Represented Niveus Solutions (Part of NTT Data) as Google Cloud Premium Partner
                    at Google Cloud India Summit 2025, connecting with industry leaders and showcasing AI and cloud architecture expertise.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-primary-100 text-sm">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                      </svg>
                      May 2025
                    </div>
                    <a
                      href="https://www.linkedin.com/posts/ggrao_googlecloudindia-niveussolutions-googlecloudpartner-activity-7328038219940352000-atGa?utm_source=share&utm_medium=member_desktop&rcm=ACoAACSRWwgBXCeWxrtzY8Uq5B5zQt3wP2o-oz0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-100 hover:text-white text-sm transition-colors duration-200"
                      onClick={() => analytics.trackExternalLink('linkedin-post', 'google-cloud-summit-post')}
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      View LinkedIn Post
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
