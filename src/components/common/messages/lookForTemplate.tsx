import React from 'react'
import { waiting_for_the_sunrise } from '../fonts/fonts'

const LookForTemplate = () => {
  return (
    <div className='flex items-center justify-center mx-auto my-auto'>
      <h4 className={`${waiting_for_the_sunrise.className} antialiased text-xl md:text-2xl min-h-screen flex items-center justify-center mx-auto`}>Please select a template from above</h4>
    </div>
  )
}

export default LookForTemplate
