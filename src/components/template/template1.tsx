"use client"
import { WavesIcon } from 'lucide-react'
import React from 'react'
import { Badge } from '~/components/ui/badge'
import { Input } from '~/components/ui/input'
import { useWaitlist } from '~/contexts/WaitlistContext'
import type { Template } from '~/types/template'
import { getResponsiveSize } from '~/utils/getResponsiveSize'

const Template1 = ({props}:{props:Template}) => {
  const { waitlistDetails, template } = useWaitlist()

  return (
    <div
      className={`${props?.backgroundColor ||waitlistDetails?.backgroundColor || 'bg-neutral-950'
        } min-h-screen flex items-center justify-center px-4 py-10`}
    >
      <div className="w-full max-w-6xl flex flex-col gap-y-6 items-center justify-center text-center">
        <WavesIcon className="p-1 w-10 h-10 sm:w-12 sm:h-12 bg-lime-500 rounded" stroke="black" />

        <Badge
          variant="outline"
          className={`flex items-center ${props?.badgeColor || waitlistDetails?.badgeColor} justify-center gap-x-2 ${props?.badgeSize || waitlistDetails?.badgeSize || 'text-sm'
            } px-3 py-1`}
        >
          <span className="w-2 h-2 bg-lime-500 animate-ping rounded-full"></span>
          {(props?.badge || waitlistDetails?.badge) ?? "Available in early 2025"}
        </Badge>

        <h1 className={`${getResponsiveSize(props?.headerSize || waitlistDetails?.headerSize as string) || 'text-4xl'} font-semibold ${props?.headerColor || waitlistDetails?.headerColor || 'text-white'} leading-tight`}>
          {(props?.header || waitlistDetails?.header) ?? "Get early access"}
        </h1>

        <h2 className={`${getResponsiveSize(props?.headerSize || waitlistDetails?.subHeaderSize as string) || 'text-2xl'} text-neutral-400 max-w-xl mx-auto leading-relaxed`}>
          {(props?.subHeader || waitlistDetails?.subHeader) ?? (
            <>
              Be amongst the first to experience Wait and launch a viral
              <br className="hidden sm:inline" />
              waitlist. Sign up to be notified when we launch!
            </>
          )}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full max-w-md">
          <Input placeholder="Email" className="w-full" />
          <button className={`${props?.buttonBackground || waitlistDetails?.buttonBackground || "bg-lime-500 "} sm:w-32 p-2 text-neutral-950 text-sm rounded hover:${props?.backgroundColor || waitlistDetails?.backgroundColor}/50 transition`}>
            {(props?.buttonPlaceholder || waitlistDetails?.buttonPlaceholder) ?? 'Join Now'}
          </button>
        </div>

        <span className="text-neutral-500 text-sm">+12,000 users already on the waitlist</span>

        <div className="bg-neutral-900 max-w-3xl rounded-xl h-[200px] sm:h-[300px] md:h-[400px] mt-6 p-2 overflow-hidden">
          <video
            className="w-full h-full object-cover rounded-lg"
            controls
            src={(props?.video || waitlistDetails?.video) ?? '/video.mp4'} 
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default Template1
