import React from 'react'
import { jetbrains_mono } from '~/components/common/fonts/fonts'

const Features = () => {
  return (
    <div className="w-full grid md:grid-cols-3 border-b border-dashed">
        <div className={`${jetbrains_mono.className} flex flex-col sm:border-b text-sm items-start border-r border-dashed p-4 gap-y-4`}>
          <span className="font-semibold">Polished Waitlists</span>
          <p>Create beautifully designed, professional waitlists in minutes using our collection of modern, responsive templates.</p>
        </div>

        <div className={`${jetbrains_mono.className} flex flex-col text-sm items-start border-r border-dashed p-4 gap-y-4`}>
          <span className="font-semibold">Highly Customizable</span>
          <p>Tailor every detail — colors, fonts, layout, and content — to match your brand identity and marketing needs.</p>
        </div>

        <div className={`${jetbrains_mono.className} flex flex-col text-sm items-start  p-4 gap-y-4`}>
          <span className="font-semibold">Custom Domain Support</span>
          <p>Make your waitlist feel truly yours by publishing it under a unique branded URL or your own domain name.</p>
        </div>
    </div>
  )
}

export default Features
