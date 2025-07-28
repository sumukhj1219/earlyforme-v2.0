import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { BsFileEarmarkSpreadsheet } from 'react-icons/bs'
import { instrument_serif } from '~/components/common/fonts/fonts'
import { ThemeToggle } from '~/components/ui/theme-toggle'

const Navbar = () => {
  return (
    <nav className="w-full border-b border-x border-dashed bg-background z-50">
      <div className="max-w-5xl w-full mx-auto px-4 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-3">
        
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="bg-gradient-to-br from-primary to-primary/50 text-white flex items-center justify-center rounded-lg p-2">
            <BsFileEarmarkSpreadsheet className="size-5" />
          </div>
          <span className={`font-medium text-2xl md:text-3xl ${instrument_serif.className}`}>
            Earlyfor.me
          </span>
        </Link>

        <div className="flex items-center gap-2 ml-auto">
          <Link
            href="/create"
            className="flex items-center gap-1 px-2 py-2 rounded text-sm font-semibold
            bg-foreground text-background dark:bg-primary dark:text-background hover:opacity-90 transition"
          >
            Create Waitlist
            <ArrowRight className="w-4 h-4" />
          </Link>
            <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
