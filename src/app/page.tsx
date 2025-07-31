import React from 'react'
import Landing from '~/components/landing/landing'
import { generateMetadata as createMetadata } from '~/components/common/meta/meta'

export const generateMetadata = () => {
  return createMetadata('/')
}

const page = () => {
  return (
    <div>
      <Landing />
    </div>
  )
}

export default page
