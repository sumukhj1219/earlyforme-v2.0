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
import { api } from '~/trpc/react'

const Waitlists = () => {
    const { data, isLoading } = api.waitlist.getWaitlists.useQuery()

    return (
        <div className='flex flex-col gap-4 p-2'>
            <div className="max-w-[calc(100svw-2rem)] overflow-hidden rounded-md border md:max-w-full">
                <div className="relative w-full overflow-x-auto">

                    <Table className="w-full caption-bottom text-sm">
                        <TableHeader className="bg-muted/50">
                            <TableRow>
                                <TableHead className="w-[300px]">Id</TableHead>
                                <TableHead className="w-[100px]">Template Id</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead className="">Url</TableHead>
                                <TableHead className="">Status</TableHead>
                                <TableHead className="">Total users</TableHead>
                                <TableHead className="">Created on</TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                data?.map((waitlist) => (
                                    <TableRow key={waitlist.id} className="text-xs">
                                        <TableCell >{waitlist.id}</TableCell>
                                        <TableCell >Template-{waitlist.templateId}</TableCell>
                                        <TableCell>{waitlist.waitlistName}</TableCell>
                                        <TableCell >{`https://${waitlist.waitlistName}.earlyfor.me`}</TableCell>
                                        <TableCell >NA</TableCell>
                                        <TableCell >NA</TableCell>
                                        <TableCell >NA</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>


                </div>
            </div>
        </div>

    )
}

export default Waitlists
