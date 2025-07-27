import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "~/components/ui/dialog"
import { api } from '~/trpc/react'
import { toast } from "sonner"
import { Separator } from '~/components/ui/separator'
import { Button } from '~/components/ui/button'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select"
import { Ban, CircleAlert, CircleCheck, SignalHigh } from 'lucide-react'

interface UpdateStatusProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    waitlistId: string;
    refetch: () => void;
}

const UpdateStatus = ({ waitlistId, open, onOpenChange, refetch }: UpdateStatusProps) => {
    const [value, setValue] = useState("Active")

    const {mutate:updateStatusMutation, isPending} = api.waitlist.updateStatus.useMutation({
        onSuccess: () => {
            toast.success("Status updated successfully!")
            refetch()
            onOpenChange(false)
        },
        onError: () => {
            toast.error("Failed to update status")
        }
    })

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='flex items-center gap-x-1'>
                        <SignalHigh stroke='white' className='w-8 h-8 p-1 rounded-md bg-gradient-to-br from-primary to-primary/50' />
                        <span className='flex flex-col gap-0 items-start'>
                            <span className='text-md font-medium'>Update Status</span>
                            <span className='text-xs font-light'>Update the waitlist status to new status.</span>
                        </span>
                    </DialogTitle>
                    <Separator className='my-1' />
                    <DialogDescription className='flex flex-col gap-y-1'>
                        <label htmlFor='waitlistId' className='font-medium text-xs'>Waitlist ID</label>
                        <span className='p-1 text-secondary/50 bg-primary/5 rounded-sm ring ring-secondary/5 font-normal tracking-wider text-md'>
                            {waitlistId}
                        </span>
                    </DialogDescription>
                    <DialogDescription className='flex flex-col gap-y-1 mt-2'>
                        <label htmlFor='update-status' className='font-medium text-xs'>Update Status</label>
                        <Select onValueChange={(val) => setValue(val)} defaultValue="Active">
                            <SelectTrigger id='update-status' size='sm' className="w-full">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Active" className='flex items-center gap-x-2'>
                                    <CircleCheck className="w-4 h-4" /> Active
                                </SelectItem>
                                <SelectItem value="Inactive" className='flex items-center gap-x-2'>
                                    <CircleAlert className="w-4 h-4" /> Inactive
                                </SelectItem>
                                <SelectItem value="Deleted" className='flex items-center gap-x-2'>
                                    <Ban className="w-4 h-4" /> Deleted
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </DialogDescription>
                    <Separator className='my-1' />
                    <DialogFooter>
                        <Button
                            size='sm'
                            onClick={() => updateStatusMutation({ waitlistId, newStatus: value as any })}
                            disabled={isPending}
                        >
                            {isPending ? "Updating..." : "Update"}
                        </Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateStatus
