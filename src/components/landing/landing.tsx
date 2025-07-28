import React from 'react'
import Navbar from './globals/Navbar'
import Hero from './globals/Hero'
import Features from './globals/Features'

const Landing = () => {
  return (
    <div className='max-w-5xl min-h-screen border-x border-dashed w-full  mx-auto'>
      <Navbar />
      <Hero />
      <Features />
    </div>
  )
}

export default Landing

