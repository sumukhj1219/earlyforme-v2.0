'use client';

import { api } from "~/trpc/react";

export function SubDomain({ subdomain }: { subdomain: string }) {
  const { data, isLoading } = api.waitlist.checkName.useQuery({
    waitlistName: subdomain,
  });

  if (isLoading) return <div>Loading...</div>;
  if (!data?.status) return <div>Not found</div>;

  return (
    <div className="text-white text-3xl p-10 bg-black">
      Hello from <strong>{subdomain}</strong>
    </div>
  );
}
