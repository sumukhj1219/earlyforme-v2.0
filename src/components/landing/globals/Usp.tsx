import React from 'react'
import Image from 'next/image'
import { jetbrains_mono } from '~/components/common/fonts/fonts';

const Usp = () => {
  const steps = [
    {
      id: 1,
      title: 'Choose template',
      description: 'We have cool templates. Choose any one and start editing.',
      href: '/features/templates.png'
    },
    {
      id: 2,
      title: 'Edit your waitlist',
      description: 'Our templates are highly customizable. Edit your waitlist and give it a cool name.',
      href: '/features/edit.png'
    },
    {
      id: 3,
      title: 'Publish your waitlist',
      description: 'Waitlists are published with custom domains and are easily trackable.',
      href: '/features/publish.png'
    }
  ]

  return (
    <div className="w-full flex flex-col">

      {/* Top SVG */}
      <svg viewBox="0 0 1440 100" width="100%" height="40" preserveAspectRatio="none" className="stroke-neutral-300 dark:stroke-neutral-500 fill-none">
        {Array.from({ length: 72 }).map((_, i) => {
          const x = i * 20;
          return (
            <path key={i} d={`M${x},100 L${x + 10},0`} stroke="currentColor" strokeWidth="0.25" />
          );
        })}
      </svg>

      {/* Main Content */}
      <div className="w-full px-6 flex flex-col border-y border-dashed py-6 text-center bg-background">
        <h2 className={`md:text-3xl text-md font-bold ${jetbrains_mono.className} mb-2`}>
          Create your waitlists in just 3 steps.
        </h2>
        <p className={`max-w-2xl text-xs md:text-md mx-auto text-primary ${jetbrains_mono.className}`}>
          Earlyfor.me helps you to set up your waitlist within a few clicks.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-background hover:bg-foreground/5 overflow-hidden transition border border-dashed hover:border-secondary"
            >
              <div className="relative w-full h-56">
                <Image
                  src={step.href}
                  alt={step.title}
                  fill
                  className="object-cover p-2"
                />
              </div>
              <div className="p-4 text-left">
                <h3 className={`text-lg font-semibold ${jetbrains_mono.className}`}>
                  {step.id}. {step.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom SVG */}
      <svg viewBox="0 0 1440 100" width="100%" height="40" preserveAspectRatio="none" className="rotate-180 stroke-neutral-300 dark:stroke-neutral-500 fill-none">
        {Array.from({ length: 72 }).map((_, i) => {
          const x = i * 20;
          return (
            <path key={i} d={`M${x},100 L${x + 10},0`} stroke="currentColor" strokeWidth="0.25" />
          );
        })}
      </svg>

    </div>
  )
}

export default Usp
