import { Loader, Trash2 } from 'lucide-react'
import React from 'react'
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

interface DeleteProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    waitlistId: string;
    refetch:()=>void;
}

const DeleteWaitlist = ({ waitlistId, open, onOpenChange, refetch }: DeleteProps) => {
    const { mutate: deleteWaitlist, isPending } = api.waitlist.deleteWaitlist.useMutation({
        onSuccess: () => {
            toast("Deleted waitlist successfully!");
            onOpenChange(false);
            refetch()
        }
    });

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='flex items-center gap-x-1'>
                        <Trash2 stroke='white' className='w-8 h-8 p-1 rounded-md bg-gradient-to-br from-primary to-primary/50' />
                        <span className='flex flex-col gap-0 items-start'>
                            <span className='text-md font-medium'>Delete Waitlist</span>
                            <span className='text-xs font-light'>This action cannot be undone</span>
                        </span>
                    </DialogTitle>
                    <Separator className='my-1' />
                    <DialogDescription className='p-2 bg-primary/5 gap-y-1 rounded-sm flex flex-col items-start'>
                        <span className='text-sm font-medium text-red-500'>Proceed with caution!</span>
                        <span className='text-xs'>This action cannot be undone. It will remove the invoice permanently from the database. You will not be able to recover it</span>
                    </DialogDescription>
                    <DialogDescription className='flex flex-col gap-y-1'>
                        <label htmlFor='waitlistId' className='font-medium text-xs'>Waitlist ID</label>
                        <span className='p-1 text-secondary/50 bg-primary/5 rounded-sm ring ring-secondary/5 font-normal tracking-wider text-md'>{waitlistId}</span>
                    </DialogDescription>
                    <Separator className='my-1' />
                    <DialogFooter>
                        <Button
                            onClick={() => deleteWaitlist({ waitlistId })}
                            variant={'destructive'}
                            size={'sm'}
                        >
                            {
                                isPending ? <Loader className='w-4 h-4 animate-spin' /> : "Delete"
                            }
                        </Button>
                    </DialogFooter>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteWaitlist
