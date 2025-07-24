'use client';

import { useParams, usePathname } from "next/navigation";
import { SubDomain } from "~/components/platform/SubDomain";

export default function SubDomainPage() {
  const pathname = usePathname();
  const params = useParams();
  const subdomain = params?.subdomain as string | undefined;

  if (pathname !== '/' || !subdomain) return null;

  return <SubDomain subdomain={subdomain} />;
}
