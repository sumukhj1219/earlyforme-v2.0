export default function MultiTenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en"><body className="bg-background">{children}</body></html>;
}
