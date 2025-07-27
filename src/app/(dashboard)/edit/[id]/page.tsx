"use client"
import React from "react"
import EditWaitlist from '~/components/dashboard/actions/editWaitlist'

interface PageProps {
  params: {
    id: string
  }
}

const Page = ({ params }: PageProps) => {
  return <EditWaitlist id={params.id} />
}

export default Page
