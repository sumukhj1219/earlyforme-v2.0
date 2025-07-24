import { ViewModeProvider } from '~/contexts/ViewModeContext';
import SidebarWrapper from '~/components/common/sidebar/sidebar-wrapper';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewModeProvider>
      <SidebarWrapper>{children}</SidebarWrapper>
    </ViewModeProvider>
  );
}
