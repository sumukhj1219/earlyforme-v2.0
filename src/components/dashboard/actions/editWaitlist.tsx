"use client"
import React from 'react';
import { useViewMode } from '~/contexts/ViewModeContext';
import CreateWaitlist from '~/components/dashboard/waitlists/CreateWaitlist';
import PreviewWaitlist from '~/components/dashboard/waitlists/PreviewWaitlist';
import { api } from '~/trpc/react';
import { useWaitlist } from '~/contexts/WaitlistContext';
import { templateMap } from '~/config/template/templateMap';

const EditWaitlist = ({ id }: { id: string }) => {
    const { viewMode } = useViewMode();
    const {setTemplate, setWaitlistDetails, template} = useWaitlist()
    const {data} = api.waitlist.checkParams.useQuery({waitlistId:id})
    const {data:waitlistData} = api.waitlist.getWaitlistById.useQuery({
        waitlistId:id
    })
    if(!data && data !== undefined){
        return <>
        404 page
        </>
    }else{
        setWaitlistDetails(waitlistData)
        setTemplate({...waitlistData, component:templateMap[waitlistData?.templateId]})
        console.log(template)
    }
    return (
        <>
            {viewMode !== "Preview" && <CreateWaitlist viewMode={viewMode} />}
            {viewMode !== "Form" && <PreviewWaitlist />}
        </>
    );
};

export default EditWaitlist;
