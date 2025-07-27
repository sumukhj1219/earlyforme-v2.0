"use client"
import { Landmark } from 'lucide-react'
import dynamic from 'next/dynamic'
import React from 'react'
import { instrument_serif } from '~/components/common/fonts/fonts'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet"

const AllIcons = dynamic(()=>import("./all-icons"), {ssr:false})

const Lucide = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <Landmark className="p-1 w-7 h-7 rounded bg-gradient-to-br from-primary to-primary/50" stroke="white" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className={`${instrument_serif.className} antialiased md:text-3xl`}>
                            Lucide Icons
                        </SheetTitle>
                        <SheetDescription>
                            Import lucide icons into your waitlist within few clicks.
                        </SheetDescription>
                            {/* <AllIcons /> */}
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Lucide
