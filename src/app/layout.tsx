import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnalyticsProvider from '@/components/AnalyticsProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gautham G Rao - Cloud Specialist & Generative AI Engineer',
  description: 'Results-driven Software Engineer specializing in cloud and Generative AI solutions. Proven ability to solve complex problems and drive business value.',
  keywords: ['Cloud Specialist', 'Generative AI', 'Software Engineer', 'GCP', 'AWS', 'Azure', 'RAG', 'LLM', 'Vertex AI'],
  authors: [{ name: 'Gautham G Rao' }],
  openGraph: {
    title: 'Gautham G Rao - Cloud Specialist & Generative AI Engineer',
    description: 'Results-driven Software Engineer specializing in cloud and Generative AI solutions. Google Cloud Certified Associate Cloud Engineer.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnalyticsProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </AnalyticsProvider>
      </body>
    </html>
  )
}
