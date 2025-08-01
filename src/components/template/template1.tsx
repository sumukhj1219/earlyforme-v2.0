"use client"
import { WavesIcon } from 'lucide-react'
import React from 'react'
import { Badge } from '~/components/ui/badge'
import { Input } from '~/components/ui/input'
import { useWaitlist } from '~/contexts/WaitlistContext'
import type { Template } from '~/types/template'
import { getResponsiveSize } from '~/utils/getResponsiveSize'
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import * as Icons from "lucide-react"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form"
import { Button } from '../ui/button'
import { api } from '~/trpc/react'
import { toast } from 'sonner'
import { usePage } from '~/hooks/use-page'
import { useForm } from 'react-hook-form'

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email is required to join waitlist.",
  }),
})


const Template1 = (props?: Template) => {
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
  const iconName = waitlistDetails?.waitlistIcon || props?.waitlistIcon
  const LucideIcon = Icons[iconName as keyof typeof Icons];

  function onSubmit(values: z.infer<typeof formSchema>) {
    createJoinee({ waitlistName: props?.subdomain as string, email: values.email })
    console.log(values)
  }
  return (
    <div
      className={`${props?.backgroundColor || waitlistDetails?.backgroundColor || 'bg-neutral-950'
        } min-h-screen flex items-center justify-center px-4 py-10`}
    >
      <div className="w-full max-w-6xl flex flex-col gap-y-6 items-center justify-center text-center">
        {(props?.waitlistLogo || waitlistDetails?.waitlistLogo) && <img className="p-1 w-10 h-10 md:w-32 md:h-32 lg:w-52 lg:h-52  rounded" src={props?.waitlistLogo || waitlistDetails?.waitlistLogo || ""} />}

        {
        (props?.waitlistIcon || waitlistDetails?.waitlistIcon) && <LucideIcon stroke={waitlistDetails?.iconStroke || props?.iconStroke} className={`${waitlistDetails?.waitlistLogoIconSize || props?.waitlistLogoIconSize || "size-12"} p-1.5 bg-muted rounded`} />
        }
        <Badge
          variant="outline"
          className={`flex ${props?.badgeFont || waitlistDetails?.badgeFont} items-center ${props?.badgeColor || waitlistDetails?.badgeColor} justify-center gap-x-2 ${props?.badgeSize || waitlistDetails?.badgeSize || 'text-sm'
            } px-3 py-1`}
        >
          <span className="w-2 h-2 bg-lime-500 animate-ping rounded-full"></span>
          {(props?.badge || waitlistDetails?.badge) ?? "Available in early 2025"}
        </Badge>

        <h1 className={`${getResponsiveSize(props?.headerSize || waitlistDetails?.headerSize as string) || 'text-4xl'} font-semibold ${props?.headerColor || waitlistDetails?.headerColor || 'text-white'} leading-tight ${props?.headerFont || waitlistDetails?.headerFont}`}>
          {(props?.header || waitlistDetails?.header) ?? "Get early access"}
        </h1>

        <h2 className={`${getResponsiveSize(props?.subHeaderSize || waitlistDetails?.subHeaderSize as string) || 'text-sm'} text-neutral-400 max-w-xl mx-auto leading-relaxed ${props?.subHeaderFont || waitlistDetails?.subHeaderFont}`}>
          {(props?.subHeader || waitlistDetails?.subHeader) ?? (
            <>
              Be amongst the first to experience Wait and launch a viral
              <br className="hidden sm:inline" />
              waitlist. Sign up to be notified when we launch!
            </>
          )}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full max-w-md">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="gap-x-2 flex">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="johndoe@gmail.com" className='w-full' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={title !== "Home"} className={`${props?.buttonBackground || waitlistDetails?.buttonBackground || "bg-lime-500 "} sm:w-32 p-2 text-neutral-950 text-sm rounded hover:${props?.backgroundColor || waitlistDetails?.backgroundColor}/50 transition`}>
                {(props?.buttonPlaceholder || waitlistDetails?.buttonPlaceholder) ?? 'Join Now'}
              </Button>
            </form>
          </Form>
        </div>

        <span className="text-neutral-500 text-sm">+12,000 users already on the waitlist</span>

        <div className="bg-neutral-900 max-w-3xl rounded-xl h-[200px] sm:h-[300px] md:h-[400px] mt-6 p-2 overflow-hidden">
          <video
            className="w-full h-full object-cover rounded-lg"
            controls
            src={(props?.video || waitlistDetails?.video) ?? '/video.mp4'}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default Template1
