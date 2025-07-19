'use client'

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
      </div>
    </section>
  )
}

export default Achievements
