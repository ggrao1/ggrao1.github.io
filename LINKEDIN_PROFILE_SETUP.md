# LinkedIn Profile Picture Setup Guide

## Quick Setup Instructions

### Step 1: Get Your LinkedIn Profile Picture

1. Go to [linkedin.com/in/ggrao](https://linkedin.com/in/ggrao)
2. Right-click on your profile picture
3. Choose one of these options:

#### Option A: Download Image

- Select "Save image as..."
- Save as `linkedin-profile.jpg`
- Copy to `/public/images/profile/linkedin-profile.jpg`

#### Option B: Copy Image URL

- Select "Copy image address"
- Update the `src` in `ProfileSection.tsx` with the LinkedIn URL

### Step 2: Update Next.js Config (if using LinkedIn URL)

If you're using the direct LinkedIn URL, add this to `next.config.js`:

```javascript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'media.licdn.com',
      port: '',
      pathname: '/**',
    },
    // ... existing patterns
  ],
},
```

### Step 3: Test the Setup

1. Restart the development server: `npm run dev`
2. Visit the About page to see your profile picture
3. The image should load properly in the circular frame

## File Locations

- Profile Component: `src/components/ProfileSection.tsx`
- Image Directory: `public/images/profile/`
- Next.js Config: `next.config.js`

## Troubleshooting

- If image doesn't load, check the file path
- Ensure image dimensions are square (recommended: 400x400px)
- Restart server after config changes
- Check browser console for errors

## Image Optimization Tips

- Use JPEG or PNG format
- Recommended size: 400x400px
- File size under 500KB for best performance
- Consider using tools like TinyPNG for compression
