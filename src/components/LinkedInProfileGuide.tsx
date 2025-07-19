'use client'

import { useState } from 'react'

const LinkedInProfileGuide = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-blue-600 text-white rounded-lg p-4 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <div>
            <h3 className="font-semibold">Add Your LinkedIn Profile Picture</h3>
            <p className="text-blue-100 text-sm">Professional photo from linkedin.com/in/ggrao</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-sm transition-colors"
        >
          {isOpen ? 'Hide' : 'Show'} Guide
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          <div className="bg-blue-700 rounded-lg p-4">
            <h4 className="font-semibold mb-2">📥 Method 1: Download from LinkedIn</h4>
            <ol className="text-sm space-y-1 text-blue-100 list-decimal list-inside">
              <li>Go to <strong>linkedin.com/in/ggrao</strong></li>
              <li>Right-click your profile picture</li>
              <li>Select "Save image as..." or "Download image"</li>
              <li>Save as <code className="bg-blue-800 px-1 rounded">linkedin-profile.jpg</code></li>
              <li>Copy to <code className="bg-blue-800 px-1 rounded">/public/images/profile/</code></li>
            </ol>
          </div>

          <div className="bg-blue-700 rounded-lg p-4">
            <h4 className="font-semibold mb-2">🔗 Method 2: Direct Image URL</h4>
            <ol className="text-sm space-y-1 text-blue-100 list-decimal list-inside">
              <li>Right-click your LinkedIn profile picture</li>
              <li>Select "Copy image address"</li>
              <li>Replace the src URL in <code className="bg-blue-800 px-1 rounded">ProfileSection.tsx</code></li>
              <li>Update Next.js config if needed for LinkedIn domain</li>
            </ol>
          </div>

          <div className="bg-blue-700 rounded-lg p-4">
            <h4 className="font-semibold mb-2">⚡ Quick Update</h4>
            <p className="text-sm text-blue-100">
              File to edit: <code className="bg-blue-800 px-1 rounded">src/components/ProfileSection.tsx</code> (line 10)
            </p>
            <p className="text-sm text-blue-100 mt-1">
              Current path: <code className="bg-blue-800 px-1 rounded">/images/profile/linkedin-profile.jpg</code>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default LinkedInProfileGuide
