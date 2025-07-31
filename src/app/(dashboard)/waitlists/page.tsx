import React from 'react'
import Waitlists from '~/components/dashboard/waitlists/Waitlists'
import { generateMetadata as createMetadata } from '~/components/common/meta/meta'

export const generateMetadata = () => {
  return createMetadata('/waitlists')
}

const page = () => {
  return (
    <div>
      <Waitlists />
    </div>
  )
}

export default page
