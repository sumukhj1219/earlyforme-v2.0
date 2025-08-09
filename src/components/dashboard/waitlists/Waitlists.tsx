"use client"
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"
import { Status } from '~/config/waitlist/status'
import { api } from '~/trpc/react'
import View from '../actions/view'
import Link from 'next/link'
import { instrument_serif } from '~/components/common/fonts/fonts'



const Waitlists = () => {
    const { data, isLoading, refetch } = api.waitlist.getWaitlists.useQuery()

    if (data?.length)
        return (
            <div className='flex flex-col gap-4 p-2'>
                <div className="max-w-[calc(100svw-2rem)] overflow-hidden rounded-md border md:max-w-full">
                    <div className="relative w-full overflow-x-auto">

                        <Table className="w-full caption-bottom text-xs">
                            <TableHeader className="bg-muted/50">
                                <TableRow>
                                    <TableHead className="w-[300px]">Id</TableHead>
                                    <TableHead className="w-[100px]">Analytics</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead className="">Url</TableHead>
                                    <TableHead className="">Status</TableHead>
                                    <TableHead className="">Total users</TableHead>
                                    <TableHead className="">Created on</TableHead>
                                    <TableHead className="">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    data?.map((waitlist) => {
                                        const Icon = Status[waitlist.status]?.icon;
                                        return (
                                            <TableRow key={waitlist.id} className="text-xs  font-medium">
                                                <TableCell className='text-secondary/30'>{waitlist.id}</TableCell>
                                                <TableCell>
                                                    <Link href={`/analyze/${waitlist.id}`} className='underline p-0.5 bg-indigo-500/20 text-sky-200 rounded-md'>
                                                        View Analytics
                                                    </Link>
                                                </TableCell>
                                                <TableCell>{waitlist.waitlistName}</TableCell>
                                                <TableCell className=''>
                                                    <Link className='underline p-0.5 bg-sky-500/20 text-sky-200 rounded-md' href={`https://${waitlist.waitlistName}.earlyfor.me`}>
                                                        {`https://${waitlist.waitlistName}.earlyfor.me`}
                                                    </Link>
                                                </TableCell>
                                                <TableCell className={`flex font-medium ${Status[waitlist.status]?.text} items-center w-18 p-0.5 rounded-md gap-1 my-2.5 justify-center ${Status[waitlist.status]?.bg || ''}`}>
                                                    {Icon && <Icon className="w-3 h-3" stroke={Status[waitlist.status]?.stroke} />}
                                                    {Status[waitlist.status]?.label || "Unknown"}
                                                </TableCell>
                                                <TableCell>NA</TableCell>
                                                <TableCell>NA</TableCell>
                                                <TableCell>
                                                    <View waitlistId={waitlist.id} refetch={refetch} />
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })
                                }
                            </TableBody>
                        </Table>


                    </div>
                </div>
            </div>
        )
    else
        return (
            <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center space-y-4">
                <h2 className={`${instrument_serif.className} text-2xl font-semibold text-muted-foreground`}>
                    No waitlists yet
                </h2>
                <div className="rounded-lg border border-dashed border-muted-foreground/30 bg-muted/30 px-6 py-4 space-y-3">
                    <p className="text-sm text-muted-foreground">
                        Please choose a template and create your first waitlist
                    </p>
                    <Link
                        href="/create"
                        className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                    >
                        Create Waitlist
                    </Link>
                </div>
            </div>
        )
}

export default Waitlists
