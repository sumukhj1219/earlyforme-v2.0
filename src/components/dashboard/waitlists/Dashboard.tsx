"use client"
import React, { useState } from 'react'
import CreateWaitlist from './CreateWaitlist'
import SidebarWrapper from '~/components/common/sidebar/sidebar-wrapper'
import PreviewWaitlist from './PreviewWaitlist'
import type { ViewMode } from '~/types/viewMode'


const Dashboard = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("Both")

  return (
    <SidebarWrapper viewMode={viewMode} setViewMode={setViewMode}>
      {viewMode !== "Preview" && <CreateWaitlist viewMode={viewMode} />}
      {viewMode !== "Form" && <PreviewWaitlist />}
    </SidebarWrapper>
  )
}

export default Dashboard
