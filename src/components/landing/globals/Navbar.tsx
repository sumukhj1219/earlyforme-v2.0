import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BsFileEarmarkSpreadsheet } from 'react-icons/bs'
import { instrument_serif } from '~/components/common/fonts/fonts'
import { ThemeToggle } from '~/components/ui/theme-toggle'

const Navbar = () => {
  return (
    <nav className="p-3 border-b border-x border-dashed   top-0 left-0 right-0 bg-background z-50 max-w-5xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-primary to-primary/50 text-white flex items-center justify-center rounded-lg p-2">
            <BsFileEarmarkSpreadsheet className="size-5" />
          </div>
          <span className={`font-medium md:text-3xl text-2xl ${instrument_serif.className}`}>
            Earlyfor.me
          </span>
        </Link>

        <div className='flex items-center justify-center gap-x-2'>
          <ThemeToggle />
          <Link
            href="/create"
            className="flex rounded items-center gap-2 p-2 px-3 text-sm font-semibold
            text-background bg-gradient-to-br dark:text-background
            bg-foreground dark:bg-primary"
          >
            Create Waitlist
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
