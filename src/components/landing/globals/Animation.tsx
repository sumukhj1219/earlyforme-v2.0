import React from 'react'
import { jetbrains_mono } from '~/components/common/fonts/fonts';
import Animation1 from '../animations/animation1';

const Animation = () => {
  return (
    <div className="w-full flex flex-col">

      <svg viewBox="0 0 1440 100" width="100%" height="40" preserveAspectRatio="none" className="stroke-neutral-300 dark:stroke-neutral-500 fill-none">
        {
          Array.from({ length: 72 }).map((_, i) => {
            const x = i * 20;
            return (
              <path
                key={i}
                d={`M${x},100 L${x + 10},0`} 
                stroke="currentColor"
                strokeWidth="0.25"
              />
            );
          })
        }
      </svg>

      <div className="w-full px-6 border-y border-dashed py-6 text-center bg-background">
        <h2 className={`md:text-3xl text-md font-bold ${jetbrains_mono.className} mb-2`}>Eliminate all your waitlist problems.</h2>
        <p className={`max-w-2xl text-xs md:text-md mx-auto text-primary ${jetbrains_mono.className}`}>
          Earlyfor.me helps you to setup your waitlist with in few clicks.
        </p>

        <Animation1 />
      </div>

      <svg viewBox="0 0 1440 100" width="100%" height="40" preserveAspectRatio="none" className="rotate-180 stroke-neutral-300 dark:stroke-neutral-500 fill-none">
        {
          Array.from({ length: 72 }).map((_, i) => {
            const x = i * 20;
            return (
              <path
                key={i}
                d={`M${x},100 L${x + 10},0`} 
                stroke="currentColor"
                strokeWidth="0.25"
              />
            );
          })
        }
      </svg>

    </div>
  )
}

export default Animation
