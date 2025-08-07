import React from 'react'
import { SignupForm } from '~/components/auth/sign-up-form'

const page = () => {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <SignupForm />
            </div>
        </div>
    )
}
export default page
