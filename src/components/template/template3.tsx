"use client"
import React, { useEffect, useState } from 'react'
import type { Template } from '~/types/template'
import { Badge } from '../ui/badge'
import { useWaitlist } from '~/contexts/WaitlistContext'
import { BookmarkXIcon } from 'lucide-react'
import * as Icons from "lucide-react"
import { bricolage_grotesque } from '../common/fonts/fonts'
import { getResponsiveSize } from '~/utils/getResponsiveSize'
import { AnimatePresence, motion } from 'motion/react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { api } from '~/trpc/react'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { usePage } from '~/hooks/use-page'

const formSchema = z.object({
    email: z.string().email("Please enter a valid email"),
})

const Template3 = (props?: Template) => {
    const { waitlistDetails } = useWaitlist()
    const iconName = waitlistDetails?.waitlistIcon || props?.waitlistIcon
    const LucideIcon = Icons[iconName as keyof typeof Icons];
    const [showInput, setShowInput] = useState(false)
    const title = usePage()

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

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { email: "" },
    })

    const { mutate: createJoinee, isPending } = api.joinee.createJoinee.useMutation({
        onSuccess: () => {
            toast("Thank you for joining")
            form.reset()
            setShowInput(false)
        },
        onError: (err) => {
            toast.error(err.message)
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        createJoinee({ waitlistName: props?.subdomain as string, email: values.email })
    }

    return (
        <div className={`${waitlistDetails?.backgroundColor || props?.backgroundColor || "bg-neutral-900"}
    flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8`}
        >
            <motion.div
                initial={{ filter: "blur(4px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center w-full max-w-lg gap-y-5 text-center"
            >
                {/* Logo */}
                <span className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-full flex items-center justify-center">
                    {props?.waitlistLogo || waitlistDetails?.waitlistLogo ? (
                        <img
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                            src={props?.waitlistLogo || waitlistDetails?.waitlistLogo}
                            alt="Waitlist Logo"
                        />
                    ) : props?.waitlistIcon || waitlistDetails?.waitlistIcon ? (
                        <LucideIcon
                            stroke={waitlistDetails?.iconStroke || props?.iconStroke}
                            className={`${waitlistDetails?.waitlistLogoIconSize || props?.waitlistLogoIconSize || "size-10 sm:size-12"} p-2 sm:p-3`}
                        />
                    ) : (
                        <BookmarkXIcon
                            stroke={waitlistDetails?.iconStroke || props?.iconStroke || "white"}
                            className="size-10 sm:size-12 p-2 sm:p-3"
                        />
                    )}
                </span>

                {/* Badge */}
                <Badge
                    variant="outline"
                    className={`flex items-center justify-center gap-x-2 px-2 py-1 text-xs sm:text-sm ${props?.badgeColor || waitlistDetails?.badgeColor}`}
                >
                    <span className="w-1.5 h-1.5 bg-lime-500 animate-ping rounded-full"></span>
                    {(props?.badge || waitlistDetails?.badge) ?? "earlyfor.me"}
                </Badge>

                {/* Headings */}
                <motion.h1
                    className={`text-lg sm:text-2xl md:text-4xl lg:text-5xl px-1.5 ${props?.headerColor || waitlistDetails?.headerColor || "dark:text-secondary text-accent"} font-extrabold tracking-wide break-words ${props?.headerFont || waitlistDetails?.headerFont || bricolage_grotesque.className}`}
                >
                    {props?.header || waitlistDetails?.header || "Be the First to Know"}
                </motion.h1>

                <motion.h2
                    className={`text-xs sm:text-sm md:text-base px-1.5 ${props?.subHeaderColor || waitlistDetails?.subHeaderColor || "dark:text-neutral-400 text-neutral-500"} font-medium tracking-wide ${props?.subHeaderFont || waitlistDetails?.subHeaderFont || bricolage_grotesque.className}`}
                >
                    {props?.subHeader || waitlistDetails?.subHeader || "Join our early access list and get exclusive updates."}
                </motion.h2>

                {/* Waitlist form */}
                <div className="flex flex-col items-center gap-y-4 w-full">
                    {!showInput && (
                        <motion.button
                            onClick={() => setShowInput(true)}
                            whileTap={{ scale: 0.95 }}
                            className="bg-neutral-800 px-4 py-2 rounded-md border-b-4 border-x border-neutral-700 hover:bg-neutral-700 transition-colors w-full sm:w-auto"
                        >
                            Join the Waitlist
                        </motion.button>
                    )}

                    <AnimatePresence>
                        {showInput && (
                            <motion.div
                                key="waitlist-form"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.2 }}
                                className="w-full max-w-sm"
                            >
                                <Form {...form}>
                                    <form
                                        onSubmit={form.handleSubmit(onSubmit)}
                                        className="flex flex-col sm:flex-row gap-3 w-full"
                                    >
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem className="flex-1">
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Enter your email"
                                                            className="bg-neutral-700 border-neutral-600 w-full"
                                                            autoFocus
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button disabled={title !== "Home"} className={`${props?.buttonBackground || waitlistDetails?.buttonBackground || "bg-neutral-800"} border-x border-b-4 border-neutral-700 w-full sm:w-auto hover:${props?.backgroundColor || waitlistDetails?.backgroundColor}/50 transition`}>
                                            {(props?.buttonPlaceholder || waitlistDetails?.buttonPlaceholder) ?? 'Join Now'}
                                        </Button>
                                    </form>
                                </Form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Countdown */}
                <div className="flex flex-wrap items-center mt-8 justify-center gap-1 sm:gap-2 md:gap-3">
                    {[
                        { label: "DAYS", value: timeleft.days },
                        { label: "HOURS", value: timeleft.hours },
                        { label: "MINUTES", value: timeleft.minutes },
                        { label: "SECONDS", value: timeleft.seconds },
                    ].map((item, i) => (
                        <React.Fragment key={i}>
                            <div className="flex flex-col items-center bg-neutral-900 p-2 sm:p-3 rounded-xl w-14 sm:w-16">
                                <span className="text-base sm:text-xl font-bold">{item.value.toString().padStart(2, "0")}</span>
                                <span className="text-[10px] sm:text-xs">{item.label}</span>
                            </div>
                            {i < 3 && <span className="text-base sm:text-xl">:</span>}
                        </React.Fragment>
                    ))}
                </div>
            </motion.div>
        </div >

    )
}

export default Template3
