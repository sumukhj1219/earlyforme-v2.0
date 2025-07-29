import React from 'react'
import Navbar from './globals/Navbar'
import Hero from './globals/Hero'
import Features from './globals/Features'
import Animation from './globals/Animation'
import Sponsorers from './globals/Sponsorers'
import Footer from './globals/Footer'

const Landing = () => {
  return (
    <div className='max-w-5xl min-h-screen border-x border-dashed w-full  mx-auto'>
      <Navbar />
      <Hero />
      <Features />
      <Animation />
      <Sponsorers />
      <Footer />
    </div>
  )
}

export default Landing

