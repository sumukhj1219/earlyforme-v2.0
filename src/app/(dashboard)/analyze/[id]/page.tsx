import React from 'react'
import Analyze from '~/components/dashboard/waitlists/Analyze'
import { generateMetadata as createMetadata } from '~/components/common/meta/meta'

export const generateMetadata = () => {
  return createMetadata('/analyze/*')
}
interface Params {
    id: string
}

const page = ({ params }: { params: Params }) => {
  return (
    <div className='m-5'>
      <Analyze id={params.id} />
    </div>
  )
}

export default page

