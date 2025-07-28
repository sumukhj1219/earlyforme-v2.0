import React from 'react'
import { instrument_serif } from '~/components/common/fonts/fonts'

const Hero = () => {
    return (
        <div className="h-[calc(100vh-15rem)] border-b border-dashed flex items-center justify-center px-4">
            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1 items-center justify-center my-auto">
                    <h1 className={`text-6xl ${instrument_serif.className}`}>
                        The Fastest Way to Build and Launch Waitlists.
                    </h1>
                </div>
                <div className='hidden md:block '>
                  
                </div>
            </div>
        </div>
    )
}

export default Hero
