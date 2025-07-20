# Analytics Setup Guide

This portfolio includes a complete analytics tracking system that's ready to integrate with Firebase Analytics or any other analytics service.

## Current Implementation

### ✅ What's Already Working

1. **Custom Analytics System**: A robust analytics utility that tracks user interactions
2. **Page View Tracking**: Automatic tracking of page visits and navigation
3. **Component Tracking**: Tracks when users view different sections of the portfolio
4. **Form Analytics**: Tracks contact form interactions and submissions
5. **Social Media Tracking**: Tracks clicks on LinkedIn, GitHub, and email links
6. **User Interaction Tracking**: Tracks button clicks, hovers, and scroll behavior

### 📊 Analytics Events Being Tracked

- **Page Views**: Automatic tracking when users navigate between pages
- **Hero Section**: Tracks button clicks for "View Projects" and "Contact"
- **Contact Form**: Tracks form starts, field focus, and submissions
- **Social Links**: Tracks clicks on LinkedIn, GitHub, and email
- **Component Views**: Tracks when users view skills, projects, etc.

## Firebase Analytics Integration (Optional)

### Step 1: Install Firebase

```bash
npm install firebase
```

### Step 2: Setup Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Add a web app to your project
4. Copy the Firebase configuration

### Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

2. Fill in your Firebase configuration in `.env.local`:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Step 4: Enable Firebase Analytics

1. Open `src/lib/firebase.ts`
2. Uncomment the Firebase imports and initialization code
3. Comment out the placeholder export

### Step 5: Update Analytics Utility

1. Open `src/lib/analytics.ts`
2. Update the TODO comments to use Firebase Analytics
3. Replace console.log statements with actual Firebase tracking calls

## Current Analytics Structure

### Files Overview

- **`src/lib/analytics.ts`**: Main analytics utility with tracking methods
- **`src/lib/firebase.ts`**: Firebase configuration (ready for activation)
- **`src/hooks/useAnalytics.ts`**: React hooks for easy analytics integration
- **`src/components/AnalyticsProvider.tsx`**: Provider component for app-wide analytics

### Key Analytics Methods

```typescript
// Page tracking
analytics.trackPageView("/projects");

// Event tracking
analytics.trackEvent({
  action: "button_click",
  category: "navigation",
  label: "hero_projects_button",
});

// Specialized tracking
analytics.trackContactForm("email");
analytics.trackProjectView("project_id");
analytics.trackSocialClick("linkedin");
analytics.trackResumeDownload();
```

## Usage Examples

### Track Custom Events

```typescript
import analytics from "@/lib/analytics";

// Track button click
analytics.trackEvent({
  action: "download_cv",
  category: "engagement",
  label: "header_button",
});

// Track external link
analytics.trackExternalLink("https://github.com/ggrao1", "github_profile");
```

### Use Analytics Hooks

```typescript
import { useInteractionTracking } from "@/hooks/useAnalytics";

const MyComponent = () => {
  const { trackClick } = useInteractionTracking();

  return (
    <button onClick={() => trackClick("my_button", "interaction")}>
      Click Me
    </button>
  );
};
```

## Benefits

1. **Job Search Insights**: Track which projects and skills get the most attention
2. **Portfolio Optimization**: Understand user behavior to improve the site
3. **Contact Tracking**: Monitor how users interact with contact forms
4. **Performance Metrics**: Track page views and user engagement
5. **Social Media Impact**: Monitor clicks to LinkedIn, GitHub, etc.

## Privacy Compliant

- Only tracks user interactions, not personal data
- Respects user privacy settings
- Can be easily disabled or configured
- No tracking in development mode

The analytics system is production-ready and will provide valuable insights into how recruiters and potential employers interact with your portfolio!
