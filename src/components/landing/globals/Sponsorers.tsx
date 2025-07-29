import React from 'react'
import { jetbrains_mono } from '~/components/common/fonts/fonts'
import Cloudflare from '~/components/common/svg/cloudflare'
import Vercel from '~/components/common/svg/vercel'

const sponsors = [
  {
    name: 'Vercel',
    tag: 'Open Source Program',
    description:
      'Vercel is a platform for building modern web applications. It provides a seamless development experience with a focus on performance and scalability. Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.',
    logo: <Vercel className="w-28 h-28" stroke="currentColor" fill="currentColor" />,
  },
  {
    name: 'NeonDB',
    tag: 'Best Database Service',
    description:
      'NeonDB is a modern, open-source database that provides a seamless database. The database developers trust, on a serverless platform designed to help you build reliable and scalable applications faster.',
    logo: (
      <img
        src="/sponsers/neon.png"
        alt="Neon"
        className="w-40 h-10 object-contain"
      />
    ),
  },
  {
    name: 'Cloudflare',
    tag: 'Open Source Program',
    description:
      'Cloudflare is a global CDN that provides a secure and fast way to deliver content to your users. Cloudflare makes websites, apps, and networks faster and more secure. Our developer platform is the best place to build modern apps and deliver AI initiatives.',
    logo: (
      <Cloudflare className="w-28 h-28" stroke="currentColor" fill="currentColor" />
    ),
  },
]

const Sponsorers = () => {
  return (
    <div className="w-full divide-y border-y border-dashed">
      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-10"
        >
          <div className="md:w-1/3 w-full flex items-center justify-center">
            {sponsor.logo}
          </div>

          <div className={`md:w-2/3 w-full ${jetbrains_mono.className}`}>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-bold text-foreground">{sponsor.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {sponsor.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sponsorers
