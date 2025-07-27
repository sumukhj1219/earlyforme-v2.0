import { FileEdit, SignalHigh, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import DeleteWaitlist from './deleteWaitlist'
import Link from 'next/link';

interface ViewProps {
    waitlistId: string;
    refetch: () => void;
}

const View = ({ waitlistId, refetch }: ViewProps) => {
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger className='text-primary bg-secondary/10 rounded p-1'>
                    View
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem className='flex items-center'>
                        <SignalHigh strokeWidth={4} />
                        Update Status
                    </DropdownMenuItem>
                    <Link href={`/edit/${waitlistId}`} className='flex items-center gap-x-2 w-full'>
                        <DropdownMenuItem className='w-full'>
                            <FileEdit strokeWidth={2} />
                            Edit
                        </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem
                        onSelect={(e) => {
                            e.preventDefault();
                            setShowDeleteDialog(true);
                        }}
                        className='flex items-center gap-2'
                    >
                        <Trash2 strokeWidth={2} />
                        Delete Waitlist
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <DeleteWaitlist
                waitlistId={waitlistId}
                open={showDeleteDialog}
                onOpenChange={setShowDeleteDialog}
                refetch={refetch}
            />
        </>
    )
}

export default View
