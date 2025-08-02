"use client"

import * as React from "react"
import { parseDate } from "chrono-node"
import { CalendarIcon } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Calendar } from "~/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import { useWaitlist } from "~/contexts/WaitlistContext"
import type { WaitlistDetails } from "~/types/waitlist"
import type { Template } from "~/types/template"

function formatDate(date: Date | undefined) {
  if (!date) return ""
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

function getTimeRemaining(target: Date | null) {
  if (!target || isNaN(target.getTime())) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const now = new Date()
  const diff = target.getTime() - now.getTime()

  if (diff <= 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}


export function LaunchDate({ props }: { props: WaitlistDetails }) {
  const { waitlistDetails, template, setTemplate, setWaitlistDetails } = useWaitlist()
  const initialDate = new Date(waitlistDetails?.launchDate || props?.launchDate || new Date());
  const [date, setDate] = React.useState<Date | undefined>(initialDate ?? undefined)
  const [month, setMonth] = React.useState<Date | undefined>(initialDate ?? undefined)
  const [open, setOpen] = React.useState(false)
  const [timeLeft, setTimeLeft] = React.useState(getTimeRemaining(date ?? null))

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(date ?? null))
    }, 1000)
    return () => clearInterval(interval)
  }, [date])

  return (
    <div className="flex  flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-fit text-sm justify-start"
          >
            <CalendarIcon className="mr-2 size-4" />
            {date ? formatDate(date) : "Select a date"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            month={month}
            onMonthChange={setMonth}
            onSelect={(newDate) => {
              if (newDate) {
                setDate(newDate)
                setWaitlistDetails(prev => ({
                  ...prev as WaitlistDetails,
                  launchDate: newDate,
                }))
                setTemplate(prev => ({
                  ...prev as Template,
                  launchDate: newDate,
                }))
              }
              setOpen(false)
            }}

          />
        </PopoverContent>
      </Popover>

      {/* {date && (
        <>
          <div className="text-muted-foreground px-1 text-sm">
            Launch date on <span className="font-medium">{formatDate(date)}</span>.
          </div>
          <div className="text-primary px-1 text-sm font-medium">
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s remaining
          </div>
        </>
      )} */}
    </div>
  )
}
