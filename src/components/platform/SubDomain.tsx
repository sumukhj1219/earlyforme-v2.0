'use client';

import { api } from "~/trpc/react";
import Template1 from "../template/template1";
import { templateMap } from "~/config/template/templateMap";

export function SubDomain({ subdomain }: { subdomain: string }) {
    const { data, isLoading } = api.waitlist.checkName.useQuery({
        waitlistName: subdomain,
    });

    if (isLoading) return <div>Loading...</div>;
    if (!data?.status) return <div>Not found</div>;


    const templateId = data.data?.templateId;
    const TemplateComponent = templateMap[templateId as number];

    if (!TemplateComponent) {
        return <div>Template not found</div>;
    }
    return (
        <div className="">
            <TemplateComponent {...{ ...data.data, subdomain }}   />
        </div>
    );
}
