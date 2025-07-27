import { ViewModeProvider } from '~/contexts/ViewModeContext';
import SidebarWrapper from '~/components/common/sidebar/sidebar-wrapper';
import { Toaster } from '~/components/ui/sonner';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewModeProvider>
      <SidebarWrapper>
        {children}
        <Toaster />
      </SidebarWrapper>
    </ViewModeProvider>
  );
}
