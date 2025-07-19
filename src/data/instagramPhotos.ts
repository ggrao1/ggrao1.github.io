/**
 * Instagram Photo Helper
 * 
 * Instructions for @g_g_rao to add Instagram travel photos:
 * 
 * STEP 1: Get your Instagram photo URLs
 * 1. Go to https://instagram.com/g_g_rao
 * 2. Right-click on any photo
 * 3. Select "Copy image address" or "Copy image URL"
 * 4. The URL will look like: https://instagram.com/p/XXXXXX/media/?size=l
 * 
 * STEP 2: Replace the URLs below
 * Copy your Instagram photo URLs and replace the Unsplash URLs in the photos array
 * 
 * STEP 3: Update captions
 * Add your own captions that match your travel experiences
 */

export const instagramPhotos = [
  {
    id: 1,
    // Replace this with your Instagram photo URL
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop',
    alt: 'Travel adventure',
    caption: 'Add your caption here 📸'
  },
  {
    id: 2,
    // Replace this with your Instagram photo URL
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
    alt: 'Travel adventure',
    caption: 'Add your caption here 🌍'
  },
  // Add more photos here...
]

/**
 * Quick Tips:
 * 
 * 1. Instagram URLs change frequently - consider downloading photos and saving to /public/images/gallery/
 * 2. For better performance, resize images to 600x600px
 * 3. Use consistent captions with emojis for better visual appeal
 * 4. Consider organizing photos by location or theme
 * 
 * Example local path: '/images/gallery/bali-sunset.jpg'
 */

export default instagramPhotos
