// Custom analytics utility for portfolio website
// This provides a simple interface that can be easily replaced with Firebase Analytics later

interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

class PortfolioAnalytics {
  private isEnabled: boolean = false

  constructor() {
    this.isEnabled = typeof window !== 'undefined' && process.env.NODE_ENV === 'production'
  }

  // Initialize analytics (placeholder for Firebase setup)
  init() {
    if (this.isEnabled) {
      console.log('Analytics initialized')
      // TODO: Initialize Firebase Analytics here
    }
  }

  // Track page views
  trackPageView(page: string) {
    if (this.isEnabled) {
      console.log('Page view tracked:', page)
      // TODO: Implement Firebase page view tracking
      // Example: logEvent(analytics, 'page_view', { page_title: page })
    }
  }

  // Track custom events
  trackEvent({ action, category, label, value }: AnalyticsEvent) {
    if (this.isEnabled) {
      console.log('Event tracked:', { action, category, label, value })
      // TODO: Implement Firebase event tracking
      // Example: logEvent(analytics, action, { category, label, value })
    }
  }

  // Track contact form submissions
  trackContactForm(method: string) {
    this.trackEvent({
      action: 'contact_form_submit',
      category: 'engagement',
      label: method
    })
  }

  // Track project views
  trackProjectView(projectId: string) {
    this.trackEvent({
      action: 'project_view',
      category: 'content',
      label: projectId
    })
  }

  // Track skill section views
  trackSkillsView() {
    this.trackEvent({
      action: 'skills_view',
      category: 'content',
      label: 'technical_skills'
    })
  }

  // Track resume/CV downloads
  trackResumeDownload() {
    this.trackEvent({
      action: 'resume_download',
      category: 'engagement',
      label: 'cv_pdf'
    })
  }

  // Track external link clicks
  trackExternalLink(url: string, label: string) {
    this.trackEvent({
      action: 'external_link_click',
      category: 'outbound',
      label: `${label} - ${url}`
    })
  }

  // Track social media clicks
  trackSocialClick(platform: string) {
    this.trackEvent({
      action: 'social_click',
      category: 'social',
      label: platform
    })
  }
}

// Create singleton instance
const analytics = new PortfolioAnalytics()

export default analytics
export type { AnalyticsEvent }
