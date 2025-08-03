import React from "react"
import EditWaitlist from '~/components/dashboard/actions/editWaitlist'
// import { generateMetadata as createMetadata } from '~/components/common/meta/meta'
interface PageProps {
  params: {
    id: string
  }
}

export const generateMetadata = () => {
  // return createMetadata('/edit/*')
}

const Page = ({ params }: PageProps) => {
  return <EditWaitlist id={params.id} />
}

export default Page
