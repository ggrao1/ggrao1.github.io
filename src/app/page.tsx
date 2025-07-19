import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import Achievements from '@/components/Achievements'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <FeaturedProjects />
      <Achievements />
      <Skills />
    </div>
  )
}
