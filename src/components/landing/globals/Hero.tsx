import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { instrument_serif } from '~/components/common/fonts/fonts'

const Hero = () => {
  return (
    <section className="h-[calc(100vh-12rem)] border-b border-dashed flex items-center px-6">
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2  items-center">
        <div>
          <h1 className={`text-6xl font-bold leading-tight ${instrument_serif.className}`}>
            The Fastest Way to Build and Launch Waitlists.
          </h1>
          <p className="mt-4 text-muted-foreground text-sm md:text-base">
            Start collecting interest, validate your ideas, and grow an audience — all before you launch.
          </p>
          <Link
            href="/create"
            className="inline-flex items-center gap-2 mt-6 text-sm font-medium px-4 py-2 rounded bg-gradient-to-br from-primary to-primary/40 text-white hover:opacity-90 transition"
          >
            Give it a try
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="hidden md:block w-full h-full">
        </div>

      </div>
    </section>
  )
}

export default Hero
