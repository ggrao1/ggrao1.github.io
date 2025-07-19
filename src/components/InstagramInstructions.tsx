'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Extend Window interface for Instagram embed script
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

interface InstagramEmbed {
  id: string
  type: 'post' | 'reel'
  url: string
  caption: string
  isEmbed: boolean
  isPinned?: boolean
}

const InstagramProfile = () => {
  const [embedsLoaded, setEmbedsLoaded] = useState(false)

  // Load Instagram embed script
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//www.instagram.com/embed.js'
    script.async = true
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
        setEmbedsLoaded(true)
      }
    }
    document.body.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[src="//www.instagram.com/embed.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  // Re-process embeds when needed
  useEffect(() => {
    if (embedsLoaded && window.instgrm) {
      setTimeout(() => {
        window.instgrm?.Embeds.process()
      }, 100)
    }
  }, [embedsLoaded])

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-xl p-6">
      {/* Instagram Profile Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 p-0.5">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <Image
                src="https://instagram.fblr20-3.fna.fbcdn.net/v/t51.2885-19/420690413_796174808981625_8699232698502744540_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fblr20-3.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2QHNskPMw55AQrqaUuBpiopYgVIA3Kdf94NkWC47cWGPL-uWgj_4G_F3psSV47UykTW9quNos2vF0nY35UA_cxVd&_nc_ohc=HaFie0VlFtYQ7kNvwGUNzuB&_nc_gid=R-UTJeQ9-9CKw405H3KexA&edm=AA5fTDYBAAAA&ccb=7-5&oh=00_AfQbQANmCA-WiCWJH1pjT_PwDWRd58aVosinVnuY4fAG-A&oe=6881D713&_nc_sid=7edfe2"
                alt="@g_g_rao"
                width={60}
                height={60}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">@g_g_rao</h3>
            <p className="text-gray-600">Cloud Engineer • Travel Enthusiast</p>
          </div>
        </div>
        <a 
          href="https://instagram.com/g_g_rao" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span>Follow</span>
        </a>
      </div>

      {/* Profile Stats */}
      <div className="flex justify-center space-x-8 mb-6 py-4 bg-white bg-opacity-50 rounded-lg">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">42</div>
          <div className="text-gray-600 text-sm">Posts</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">2.4k</div>
          <div className="text-gray-600 text-sm">Followers</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">890</div>
          <div className="text-gray-600 text-sm">Following</div>
        </div>
      </div>

      {/* Bio */}
      <div className="text-center mb-6 p-4 bg-white bg-opacity-50 rounded-lg">
        <p className="text-gray-800 font-medium mb-2">🌍 Travel • ☁️ Cloud Engineer • 🤖 AI Enthusiast</p>
        <p className="text-gray-700">Documenting adventures while building the future with AI and cloud technologies</p>
        <p className="text-gray-600 text-sm mt-2">📍 Currently: Building LLM applications at Niveus Solutions</p>
      </div>

      {/* View More Link */}
      <div className="text-center mt-6">
        <a 
          href="https://instagram.com/g_g_rao" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
        >
          View all posts on Instagram
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default InstagramProfile
