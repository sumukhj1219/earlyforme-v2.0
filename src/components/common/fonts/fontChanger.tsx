"use client"
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { useWaitlist } from '~/contexts/WaitlistContext';
import type { Template } from '~/types/template';
import type { WaitlistDetails } from '~/types/waitlist';
import { fontMap, fontNames } from '~/utils/fontMap';

interface Props {
    type: keyof WaitlistDetails;
}

const FontChanger = ({ type }: Props) => {
    const { waitlistDetails, template, setTemplate, setWaitlistDetails } = useWaitlist()
    return (
        <div className="flex items-center mt-1 gap-2 justify-center">
            <Select
            value={waitlistDetails?.[type] as string || template?.[type] as string}
            onValueChange={(val)=>{
                setWaitlistDetails((prev)=>({...prev as WaitlistDetails, [type]:val}));
                setTemplate((prev)=>({...prev as Template, [type]:val}));
            }}
            >
                <SelectTrigger className='w-[100px]'>
                    <SelectValue placeholder="Font" />
                </SelectTrigger>
                <SelectContent>
                    {
                        fontNames.map((font)=>(
                            <SelectItem value={fontMap[font] as string} className={fontMap[font]}>
                                {font}
                            </SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
        </div>
    )
}

export default FontChanger
