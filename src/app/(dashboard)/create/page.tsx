'use client';

import { useViewMode } from '~/contexts/ViewModeContext';
import CreateWaitlist from '~/components/dashboard/waitlists/CreateWaitlist';
import PreviewWaitlist from '~/components/dashboard/waitlists/PreviewWaitlist';

const DashboardPage = () => {
  const { viewMode } = useViewMode();

  return (
    <>
      {viewMode !== "Preview" && <CreateWaitlist viewMode={viewMode} />}
      {viewMode !== "Form" && <PreviewWaitlist />}
    </>
  );
};

export default DashboardPage;
