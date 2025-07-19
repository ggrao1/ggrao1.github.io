'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Photo {
  id: number
  src: string
  alt: string
  caption?: string
}

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  // Travel photos from Instagram @g_g_rao - replace these URLs with your actual Instagram photo URLs
  const photos: Photo[] = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop',
      alt: 'Beautiful mountain landscape',
      caption: 'Exploring mountain peaks 🏔️'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      alt: 'Stunning sunset over water',
      caption: 'Golden hour magic ✨'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop',
      alt: 'City skyline adventure',
      caption: 'Urban exploration 🏙️'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1501436513145-30f24e19fcc4?w=600&h=600&fit=crop',
      alt: 'Road trip adventure',
      caption: 'Road less traveled 🛣️'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop&sat=-20',
      alt: 'Beach vibes',
      caption: 'Ocean therapy 🌊'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=600&h=600&fit=crop',
      alt: 'Forest adventure',
      caption: 'Into the wild 🌲'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&h=600&fit=crop',
      alt: 'Desert landscape',
      caption: 'Desert wanderer 🏜️'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
      alt: 'Forest path',
      caption: 'Finding my path 🥾'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop&hue=30',
      alt: 'Coastal adventure',
      caption: 'Coastal vibes 🌅'
    }
  ]

  return (
    <div className="py-8">
      <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Travel Photos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Highlights from my adventures around the world - where wanderlust meets technology
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white text-sm p-3 font-medium">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged photo */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary-300 transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  width={800}
                  height={800}
                  className="rounded-lg max-h-[80vh] w-auto object-contain"
                />
                {selectedPhoto.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                    <p className="text-white text-lg font-medium">
                      {selectedPhoto.caption}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default PhotoGallery
