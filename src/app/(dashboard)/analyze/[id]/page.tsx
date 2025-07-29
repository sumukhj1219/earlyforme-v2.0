import React from 'react'
import Analyze from '~/components/dashboard/waitlists/Analyze'

interface Params {
    id: string
}

const page = (params: Params) => {
    return (
        <div className='m-5'>
            <Analyze />
        </div>
    )
}

export default page
