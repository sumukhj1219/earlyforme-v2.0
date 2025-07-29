import React from 'react'
import { instrument_serif, jetbrains_mono } from '~/components/common/fonts/fonts'

const Footer = () => {
  return (
    <div className="w-full">
      <svg viewBox="0 0 1440 300" width="100%" height="100%">
        <defs>
          <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>

        <text x={60} y={250} fontSize={220} stroke="currentColor" className={`${instrument_serif.className} tracking-widest`} strokeWidth={0.5} fill="url(#diagonalLines)">
          EARLYFOR.ME
        </text>
      </svg>
    </div>
  )
}

export default Footer
