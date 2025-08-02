"use client"
import { BookmarkXIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { instrument_serif, jetbrains_mono } from '../common/fonts/fonts'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import type { Template } from '~/types/template'
import { toast } from 'sonner'
import { useWaitlist } from '~/contexts/WaitlistContext'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '~/trpc/react'
import { usePage } from '~/hooks/use-page'
import { Tooltip } from '../templateComponents/tooltip'
import * as Icons from "lucide-react"
import { getResponsiveSize } from '~/utils/getResponsiveSize'

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email is required to join waitlist.",
  }),
})

const Template2 = (props?: Template) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  const { waitlistDetails, template } = useWaitlist()
  const { mutate: createJoinee, isPending } = api.joinee.createJoinee.useMutation({
    onSuccess: () => {
      console.log("Success!");
      toast("Thank you for joining");
    },
    onError: (err) => {
      console.error("Join error:", err);
      toast.error(err.message);
    },
  });

  const title = usePage()

  function onSubmit(values: z.infer<typeof formSchema>) {
    createJoinee({ waitlistName: props?.subdomain as string, email: values.email })
    console.log(values)
  }

  const [timeleft, setTimeLeft] = useState(getTimeRemaining(new Date(waitlistDetails?.launchDate || props?.launchDate || "")))

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(new Date(waitlistDetails?.launchDate || props?.launchDate || "")))
    }, 1000)

    return () => clearInterval(interval)
  }, [waitlistDetails?.launchDate, props?.launchDate])

  function getTimeRemaining(target: Date | null) {
    if (!target || isNaN(target.getTime())) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

    const now = new Date()
    const diff = target.getTime() - now.getTime()

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }


  const iconName = waitlistDetails?.waitlistIcon || props?.waitlistIcon
  const LucideIcon = Icons[iconName as keyof typeof Icons];

  return (
    <div className={`flex flex-col w-full ${props?.backgroundColor || waitlistDetails?.backgroundColor || "bg-neutral-950"}  items-center min-h-screen justify-center px-4 py-10 space-y-6`}>
      <div className="flex items-center justify-center w-full flex-wrap gap-x-1 sm:gap-x-2 md:gap-x-4">
        <svg viewBox="0 0 200 20" className="w-[30vw] sm:w-[150px] h-5 flex-shrink-0">
          <defs>
            <radialGradient id="gradient-left" fx="1" fy="0.5" r="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="100%" stopColor="white" />
            </radialGradient>
          </defs>
          <path d="M 50 10 h 150" stroke="white" strokeWidth="0.5" />
          <circle cx="197" cy="10" r="3" fill="white" />
        </svg>

        <span className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-t border-neutral-600 rounded-full">
          {
            (props?.waitlistIcon || waitlistDetails?.waitlistIcon) ? (<LucideIcon stroke={waitlistDetails?.iconStroke || props?.iconStroke} className={`${waitlistDetails?.waitlistLogoIconSize || props?.waitlistLogoIconSize || "size-14"} p-3 `} />) : (
              <BookmarkXIcon stroke={waitlistDetails?.iconStroke || props?.iconStroke} className="size-14 p-3" />
            )
          }
        </span>

        <svg viewBox="0 0 200 20" className="w-[30vw] sm:w-[150px] h-5 flex-shrink-0">
          <defs>
            <linearGradient id="gradient-right" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <circle cx="3" cy="10" r="3" fill="white" />
          <path d="M 3 10 h 155" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="flex flex-col items-center justify-center gap-y-2 text-center">
        <h1 className={`${getResponsiveSize(props?.headerSize || waitlistDetails?.headerSize as string) || 'text-4xl'} text-3xl sm:text-5xl md:text-6xl mt-5 p-1.5 ${props?.headerColor || waitlistDetails?.headerColor || "bg-gradient-to-r from-neutral-200 to-neutral-300 via-neutral-500 bg-clip-text"}  font-extrabold text-transparent tracking-wide ${instrument_serif.className}`}>
          {props?.header || waitlistDetails?.header || "Get early access"}
        </h1>
        <h2 className={`text-xs ${getResponsiveSize(props?.headerSize || waitlistDetails?.headerSize as string) || 'text-4xl'} sm:text-sm md:text-base text-center max-w-lg ${jetbrains_mono.className} ${props?.subHeaderColor || waitlistDetails?.subHeaderColor || "text-white"}`}>
          {
            props?.subHeader || waitlistDetails?.subHeader || " We're getting close.Signup to get early access.And start building your viral waitlist."
          }
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full max-w-md p-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-md">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative w-full">
                      <Input
                        placeholder="Your email address"
                        className="w-full h-14 !bg-transparent px-6 pr-32 py-4 rounded-3xl border border-neutral-700 placeholder:text-neutral-400 !text-base sm:!text-lg"
                        {...field}
                      />
                      <Button
                        type="submit"
                        disabled={title !== 'Home'}
                        className={`absolute right-1.5 top-1.5 h-11 px-5 text-sm text-neutral-950 rounded-2xl ${props?.buttonBackground || waitlistDetails?.buttonBackground || 'bg-neutral-50'} hover:opacity-90 transition`}
                      >
                        {props?.buttonPlaceholder || waitlistDetails?.buttonPlaceholder || 'Join Waitlist'}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 p-1 mt-4">
        <Tooltip />
        <h4 className="text-xs md:text-sm mt-4 sm:mt-0">Join +1,000 others on the waitlist</h4>
      </div>

      <div className="flex flex-wrap items-center mt-8 justify-center gap-x-1 sm:gap-x-2 md:gap-x-3">
        <div className="flex items-center gap-x-2">
          {[
            { label: "DAYS", value: timeleft.days },
            { label: "HOURS", value: timeleft.hours },
            { label: "MINUTES", value: timeleft.minutes },
            { label: "SECONDS", value: timeleft.seconds },
          ].map((item, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center bg-neutral-900 p-3 rounded-xl w-16">
                <span className="text-xl">{item.value.toString().padStart(2, "0")}</span>
                <span className="text-xs">{item.label}</span>
              </div>
              {i < 3 && <span className="text-xl">:</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Template2
