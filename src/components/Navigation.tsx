'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Determine if current page is home page
  const isHomePage = pathname === '/'

  // Dynamic classes based on scroll and page
  const navClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled || !isHomePage
      ? 'bg-white shadow-lg backdrop-blur-md border-b border-gray-200'
      : 'bg-transparent backdrop-blur-sm'
  }`

  const textClasses = `transition-colors duration-300 ${
    isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
  }`

  const linkClasses = `transition-colors duration-300 relative group ${
    isScrolled || !isHomePage 
      ? 'text-gray-700 hover:text-primary-600' 
      : 'text-white hover:text-primary-200'
  }`

  const underlineClasses = `absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
    isScrolled || !isHomePage ? 'bg-primary-600' : 'bg-primary-200'
  }`

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className={`text-xl font-bold ${textClasses}`}>
              Gautham G Rao
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={linkClasses}
              >
                {item.name}
                <span className={underlineClasses}></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textClasses} hover:opacity-70 focus:outline-none`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 ${
            isScrolled || !isHomePage 
              ? 'bg-white border-t border-gray-200' 
              : 'bg-black bg-opacity-20 backdrop-blur-sm'
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isScrolled || !isHomePage 
                    ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-50' 
                    : 'text-white hover:text-primary-200 hover:bg-white hover:bg-opacity-10'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
