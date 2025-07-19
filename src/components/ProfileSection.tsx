'use client'

import Image from 'next/image'

const ProfileSection = () => {
  return (
    <div className="text-center mb-16">
      <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-xl">
        <Image
          src="/images/profile/linkedin-profile.jpg"
          alt="Gautham G Rao - Professional Photo"
          width={192}
          height={192}
          className="w-full h-full object-cover"
          priority
        //   onError={(e) => {
        //     // Fallback to a placeholder if LinkedIn photo isn't available
        //     e.currentTarget.src = "https://media.licdn.com/dms/image/v2/D5603AQEFdgzmeHls9Q/profile-displayphoto-crop_800_800/B56ZgiXwwmH0AI-/0/1752923312127"
        //   }}
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Hi, I'm Gautham G Rao
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Results-driven Software Engineer specializing in cloud and Generative AI solutions. 
        Proven ability to solve complex problems and drive business value through innovative technology.
      </p>
    </div>
  )
}

export default ProfileSection
