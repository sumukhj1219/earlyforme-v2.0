import React from 'react'
import { useWaitlist } from '~/contexts/WaitlistContext'
import type { WaitlistDetails } from '~/types/waitlist'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select"
import type { Template } from '~/types/template'

interface Props {
    objectKey: keyof WaitlistDetails,
    // objectSize: keyof WaitlistDetails
}

const ImageLogoSize = ({ objectKey }: Props) => {
    const { setWaitlistDetails, setTemplate, waitlistDetails, template } = useWaitlist()
    return (
        <div className='flex items-center mt-5 gap-2 justify-center'>
            <Select
                value={waitlistDetails?.[objectKey] as string || template?.[objectKey] as string || ""}
                onValueChange={(val) => {
                    setWaitlistDetails((prev) => ({
                        ...prev as WaitlistDetails,
                        [objectKey]: val
                    }));
                    setTemplate((prev) => ({
                        ...prev as Template,
                        [objectKey]: val
                    }))
                }}
            >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Logo / Image Size" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="size-1">4px</SelectItem>
                    <SelectItem value="size-2">8px</SelectItem>
                    <SelectItem value="size-3">12px</SelectItem>
                    <SelectItem value="size-4">16px</SelectItem>
                    <SelectItem value="size-5">20px</SelectItem>
                    <SelectItem value="size-6">24px</SelectItem>
                    <SelectItem value="size-7">28px</SelectItem>
                    <SelectItem value="size-8">32px</SelectItem>
                    <SelectItem value="size-10">40px</SelectItem>
                    <SelectItem value="size-12">48px</SelectItem>
                    <SelectItem value="size-16">64px</SelectItem>
                    <SelectItem value="size-20">80px</SelectItem>
                    <SelectItem value="size-24">96px</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default ImageLogoSize
