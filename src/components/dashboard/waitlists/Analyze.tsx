import { Eye, Image, TrendingUp, UserPlus } from 'lucide-react'
import React from 'react'
import { AreaChartStats } from '~/components/charts/AreaChart'
import { instrument_serif } from '~/components/common/fonts/fonts'
import { Button } from '~/components/ui/button'
import { Separator } from '~/components/ui/separator'

const Analyze = () => {
    return (
        <div className='flex flex-col max-w-5xl w-full px-4 md:px-0 mx-auto'>
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-y-2 w-full mb-4'>
                <span className={`text-xl md:text-3xl font-semibold ${instrument_serif.className}`}>Overview</span>
            </div>

            <div className='p-4 flex flex-col md:flex-row flex-wrap items-start md:items-center gap-4 rounded-md bg-sidebar min-h-[9rem] w-full'>
                <div className='flex items-start gap-3 min-w-[180px]'>
                    <Image className='w-12 h-12 rounded' />
                    <div className='flex flex-col gap-y-1'>
                        <span className='text-base md:text-xl font-medium'>Waitlist name</span>
                        <span className='text-sm text-muted-foreground'>Url</span>
                    </div>
                </div>

                <Separator orientation='vertical' className='hidden md:block h-14' />

                <div className='flex flex-col'>
                    <label className='text-xs text-muted-foreground'>STATUS</label>
                    <span className='mt-2 px-2 py-0.5 bg-green-300/50 rounded-md text-sm w-fit'>
                        Active
                    </span>
                </div>

                <div className='flex flex-col'>
                    <label className='text-xs text-muted-foreground'>ID</label>
                    <span className='mt-2 px-2 py-0.5 text-sm break-all rounded-md'>
                        ijd73-3i3jr9-3io399-dk39r3-3e030
                    </span>
                </div>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
                <div className='p-4 rounded-xl bg-sidebar border border-border flex flex-col gap-2 shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <span className='text-muted-foreground text-sm'>Total Views</span>
                        <Eye className='w-5 h-5 text-primary' />
                    </div>
                    <span className='text-3xl font-semibold'>0</span>
                </div>

                <div className='p-4 rounded-xl bg-sidebar border border-border flex flex-col gap-2 shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <span className='text-muted-foreground text-sm'>Subscribers</span>
                        <UserPlus className='w-5 h-5 text-primary' />
                    </div>
                    <span className='text-3xl font-semibold'>0</span>
                </div>

                <div className='p-4 rounded-xl bg-sidebar border border-border flex flex-col gap-2 shadow-sm'>
                    <div className='flex items-center justify-between'>
                        <span className='text-muted-foreground text-sm'>7-day Growth</span>
                        <TrendingUp className='w-5 h-5 text-primary' />
                    </div>
                    <span className='text-3xl font-semibold'>+0%</span>
                </div>
            </div>
            <AreaChartStats />
        </div>
    )
}

export default Analyze
