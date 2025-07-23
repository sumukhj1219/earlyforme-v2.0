"use client"
import React from 'react'
import LookForTemplate from '~/components/common/messages/lookForTemplate'
import { useWaitlist } from '~/contexts/WaitlistContext'

const PreviewWaitlist = () => {
  const { waitlistDetails, template } = useWaitlist()

  const TemplateComponent = template?.component

  return (
    <div className=' h-full'>
      {TemplateComponent ? <TemplateComponent /> : <LookForTemplate />}
    </div>
  )
}

export default PreviewWaitlist
