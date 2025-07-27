"use client"
import React, { type FC } from 'react';
import { useViewMode } from '~/contexts/ViewModeContext';
import CreateWaitlist from '~/components/dashboard/waitlists/CreateWaitlist';
import PreviewWaitlist from '~/components/dashboard/waitlists/PreviewWaitlist';
import { api } from '~/trpc/react';
import { useWaitlist } from '~/contexts/WaitlistContext';
import { templateMap } from '~/config/template/templateMap';
import type { Template } from '~/types/template';
import { useEffect } from "react"
import type { WaitlistDetails } from '~/types/waitlist';

const EditWaitlist = ({ id }: { id: string }) => {
    const { viewMode } = useViewMode();
    const { setTemplate, setWaitlistDetails, template } = useWaitlist()
    const { data } = api.waitlist.checkParams.useQuery({ waitlistId: id })
    const { data: waitlistData } = api.waitlist.getWaitlistById.useQuery({
        waitlistId: id
    })
    if (!data && data !== undefined) {
        return <>
            404 page
        </>
    }

   useEffect(() => {
    if (waitlistData) {
        setWaitlistDetails(waitlistData);
        setTemplate({
            id: waitlistData.templateId,
            component: templateMap[waitlistData.templateId] as FC<Template>,
            href: waitlistData.href, 
            ...waitlistData,
        });
    }
}, [waitlistData]);


    return (
        <>
            {viewMode !== "Preview" && <CreateWaitlist viewMode={viewMode} />}
            {viewMode !== "Form" && <PreviewWaitlist />}
        </>
    );
};

export default EditWaitlist;
