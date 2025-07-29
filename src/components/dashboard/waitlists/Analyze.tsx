"use client"
import { ArrowRight, Eye, TrendingUp, UserPlus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AreaChartStats } from '~/components/charts/AreaChart'
import { instrument_serif } from '~/components/common/fonts/fonts'
import { Button } from '~/components/ui/button'
import { Separator } from '~/components/ui/separator'
import { Status } from '~/config/waitlist/status'
import { api } from '~/trpc/react'

interface Props {
    id: string
}

const Analyze = ({ id }: Props) => {
    if (!id) return <div>Invalid waitlist ID</div>;

    const { data: waitlist, isLoading } = api.waitlist.getWaitlistById.useQuery({
        waitlistId: id
    })
    const { data: totalJoinees } = api.joinee.totalJoinees.useQuery({
        waitlistId: id
    })
    return (
        <div className='flex flex-col max-w-5xl w-full px-4 md:px-0 mx-auto'>
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-y-2 w-full mb-4'>
                <span className={`text-xl md:text-3xl font-semibold ${instrument_serif.className}`}>Overview</span>
            </div>

            <div className='p-2 flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4 rounded-md bg-sidebar min-h-[9rem] w-full'>
                <div className='flex items-start gap-3 min-w-[180px]'>
                    <Image src={waitlist?.waitlistLogo as string} className='rounded-sm' alt='image' width={48} height={48} />
                    <div className='flex flex-col gap-y-1'>
                        <span className='text-base md:text-xl font-medium'>{waitlist?.waitlistName}</span>
                        <Link href={`https://${waitlist?.waitlistName}.earlyfor.me`} className='text-sm flex items-center  justify-center decoration-dashed underline underline-offset-2 text-muted-foreground'>{waitlist?.waitlistName} <ArrowRight className='w-3 h-3' /></Link>
                    </div>
                </div>

                <Separator orientation='vertical' className='hidden md:block h-14' />

                <div className='flex flex-col'>
                    <label className='text-xs text-muted-foreground'>STATUS</label>
                    <span className='mt-2 px-2 py-0.5 bg-green-300/50 rounded-md text-sm w-fit'>
                        {waitlist?.status}
                    </span>
                </div>

                <div className='flex flex-col'>
                    <label className='text-xs text-muted-foreground'>ID</label>
                    <span className='mt-2 py-0.5 text-sm break-all rounded-md'>
                        {waitlist?.id}
                    </span>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
                <div className='p-4 rounded-xl bg-sidebar border border-border flex flex-col gap-2 shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <span className='text-muted-foreground text-sm'>Total Views</span>
                        <span className='rounded p-1 bg-gradient-to-br from-primary to-primary/50'>
                            <Eye className='w-3 h-3 text-primary' stroke='white' />
                        </span>
                    </div>
                    <span className='text-3xl font-semibold'>0</span>
                </div>

                <div className='p-4 rounded-xl bg-sidebar border border-border flex flex-col gap-2 shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <span className='text-muted-foreground text-sm'>Subscribers</span>
                        <span className='rounded p-1 bg-gradient-to-br from-primary to-primary/50'>
                            <UserPlus className='w-3 h-3 text-primary' stroke='white' />
                        </span>
                    </div>
                    <span className='text-3xl font-semibold'>{totalJoinees?.length}</span>
                </div>

                <div className='p-4 rounded-xl bg-sidebar border border-border flex flex-col gap-2 shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <span className='text-muted-foreground text-sm'>7-day Growth</span>
                        <span className='rounded p-1 bg-gradient-to-br from-primary to-primary/50'>
                            <TrendingUp className='w-3 h-3 text-primary' stroke='white' />
                        </span>
                    </div>
                    <span className='text-3xl font-semibold'>+0%</span>
                </div>
            </div>
            <AreaChartStats />
        </div>
    )
}

export default Analyze
