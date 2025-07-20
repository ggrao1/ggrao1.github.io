'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import analytics from '@/lib/analytics'

// Hook for page view tracking
export const usePageTracking = () => {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view when pathname changes
    analytics.trackPageView(pathname)
  }, [pathname])
}

// Hook for component visibility tracking
export const useComponentTracking = (componentName: string, isVisible: boolean = true) => {
  useEffect(() => {
    if (isVisible) {
      analytics.trackEvent({
        action: 'component_view',
        category: 'content',
        label: componentName
      })
    }
  }, [componentName, isVisible])
}

// Hook for tracking user interactions
export const useInteractionTracking = () => {
  return {
    trackClick: (elementName: string, category: string = 'interaction') => {
      analytics.trackEvent({
        action: 'click',
        category,
        label: elementName
      })
    },
    trackHover: (elementName: string) => {
      analytics.trackEvent({
        action: 'hover',
        category: 'interaction',
        label: elementName
      })
    },
    trackScroll: (section: string) => {
      analytics.trackEvent({
        action: 'scroll_to_section',
        category: 'navigation',
        label: section
      })
    }
  }
}

// Hook for form tracking
export const useFormTracking = () => {
  return {
    trackFormStart: (formName: string) => {
      analytics.trackEvent({
        action: 'form_start',
        category: 'engagement',
        label: formName
      })
    },
    trackFormSubmit: (formName: string, success: boolean = true) => {
      analytics.trackEvent({
        action: success ? 'form_submit_success' : 'form_submit_error',
        category: 'engagement',
        label: formName
      })
    },
    trackFieldFocus: (fieldName: string, formName: string) => {
      analytics.trackEvent({
        action: 'form_field_focus',
        category: 'engagement',
        label: `${formName}_${fieldName}`
      })
    }
  }
}
