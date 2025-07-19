# Instagram Integration Setup Guide

## ✅ What's Already Set Up

- Instagram embed script integration
- Profile picture from your Instagram URL
- Placeholder structure for posts and reels
- Responsive grid layout
- Instagram-style UI components

## 📝 How to Add Your Real Instagram Content

### Step 1: Get Instagram Post URLs

1. Go to your Instagram profile: https://instagram.com/g_g_rao
2. Click on any post you want to feature
3. Click the "..." menu (three dots)
4. Select "Embed"
5. Copy the URL from the embed code (it looks like: `https://www.instagram.com/p/POST_ID/`)

### Step 2: Update the Component

Open `src/components/InstagramInstructions.tsx` and replace the placeholder URLs:

```typescript
// Replace these placeholder URLs with your actual Instagram URLs
const instagramPosts: InstagramEmbed[] = [
  {
    id: "1",
    type: "post",
    url: "https://www.instagram.com/p/YOUR_ACTUAL_POST_ID/", // ← Replace this
    caption: "Your actual post caption here", // ← Update this
    isEmbed: true,
  },
  // Add more posts...
];
```

### Step 3: Add Instagram Reels

For reels, the process is similar:

```typescript
const instagramReels: InstagramEmbed[] = [
  {
    id: "r1",
    type: "reel",
    url: "https://www.instagram.com/reel/YOUR_ACTUAL_REEL_ID/", // ← Replace this
    caption: "Your actual reel caption here", // ← Update this
    isEmbed: true,
    isPinned: true, // Set to true for pinned reels
  },
  // Add more reels...
];
```

## 🎯 Features Available

### Current Features:

- ✅ Real Instagram profile picture
- ✅ Instagram embed integration
- ✅ Posts and Reels tabs
- ✅ Responsive grid layout
- ✅ Official Instagram embeds (shows real data)
- ✅ Pinned content badges
- ✅ Follow button link

### Benefits of Instagram Embeds:

- **Real data**: Shows actual likes, comments, engagement
- **Always up-to-date**: Content updates automatically from Instagram
- **Official**: Uses Instagram's official embed system
- **Interactive**: Users can like, comment, and follow directly

## 🔧 Technical Details

### Domains Configured:

- `*.fna.fbcdn.net` (Instagram CDN)
- `media.licdn.com` (LinkedIn)
- `images.unsplash.com` (Unsplash)

### Scripts Loaded:

- Instagram embed script (`//www.instagram.com/embed.js`)
- Automatic embed processing on tab changes

## 📋 Example URLs to Replace

Look for these placeholder patterns in the component and replace them:

- `YOUR_POST_ID_1` → Your actual Instagram post ID
- `YOUR_REEL_ID_1` → Your actual Instagram reel ID
- Update captions with your real content

## 🎨 Customization Options

You can customize:

- Number of posts/reels displayed
- Grid layout (currently 1-3 columns responsive)
- Pinned content badges
- Profile stats (followers, following)
- Bio text and links

## 🚀 Next Steps

1. Add 3-6 of your best Instagram posts
2. Add 3-6 of your best travel reels
3. Update the bio section with your actual content
4. Test the embeds load correctly
5. Deploy your updated portfolio!

## 💡 Tips

- Choose your best travel content for maximum impact
- Mix posts and reels for variety
- Use the pinned feature for your most important reels
- Keep captions concise but engaging
- Test on mobile for responsive design

---

**Note**: Instagram embeds require an internet connection to load. The placeholders will show helpful instructions until you replace them with real URLs.
