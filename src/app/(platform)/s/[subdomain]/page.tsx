'use client';

import { useParams} from "next/navigation";
import { SubDomain } from "~/components/platform/SubDomain";

export default function SubDomainPage() {
  const params = useParams();
  const subdomain = params?.subdomain as string | undefined;

  if (!subdomain) return null;

  return <SubDomain subdomain={subdomain} />;
}
