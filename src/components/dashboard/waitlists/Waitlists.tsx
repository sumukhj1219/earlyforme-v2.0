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



const Waitlists = () => {
    const { data, isLoading, refetch } = api.waitlist.getWaitlists.useQuery()

    return (
        <div className='flex flex-col gap-4 p-2'>
            <div className="max-w-[calc(100svw-2rem)] overflow-hidden rounded-md border md:max-w-full">
                <div className="relative w-full overflow-x-auto">

                    <Table className="w-full caption-bottom text-xs">
                        <TableHeader className="bg-muted/50">
                            <TableRow>
                                <TableHead className="w-[300px]">Id</TableHead>
                                <TableHead className="w-[100px]">Template Id</TableHead>
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
                                            <TableCell>Template-{waitlist.templateId}</TableCell>
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
}

export default Waitlists
