'use client'

import { useEffect } from 'react'
import analytics from '@/lib/analytics'
import { usePageTracking } from '@/hooks/useAnalytics'

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  // Initialize analytics on mount
  useEffect(() => {
    analytics.init()
  }, [])

  // Track page views automatically
  usePageTracking()

  return <>{children}</>
}
