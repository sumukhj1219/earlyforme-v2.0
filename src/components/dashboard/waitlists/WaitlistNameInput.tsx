"use client"

import React from "react"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { Tooltip, TooltipContent, TooltipTrigger } from "~/components/ui/tooltip"
import { useWaitlist } from "~/contexts/WaitlistContext"
import { api } from "~/trpc/react"
import { Info } from "lucide-react"
import type { Template } from "~/types/template"

const WaitlistNameInput = () => {
  const { waitlistDetails, setWaitlistDetails, setTemplate, template } = useWaitlist()

  const { data: isUnique, isLoading } = api.waitlist.checkName.useQuery(
    { waitlistName: waitlistDetails?.waitlistName ?? "" },
    { enabled: !!waitlistDetails?.waitlistName }
  )

  return (
    <div className="flex flex-col space-y-1 w-full">
      <div className="flex items-center gap-x-2">
        <Label htmlFor="waitlistName text-xs">Waitlist Name</Label>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="w-4 h-4 text-neutral-500 cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Used as your unique domain name.</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <Input
        id="waitlistName"
        placeholder="My waitlist"
        value={waitlistDetails?.waitlistName ?? ""}
        onChange={(e) => {
          setWaitlistDetails((prev) => ({
            ...prev,
            waitlistName: e.target.value.trim(),
          }));
          setTemplate((prev) => ({
            ...prev as Template,
            waitlistName: e.target.value.trim(),
          }))
        }}
        className={`rounded shadow-none transition-colors border-none duration-150 border-2 ${
          isLoading
            ? "border-neutral-400"
            : isUnique === true
            ? "border-green-500"
            : isUnique === false
            ? "border-red-500"
            : "border-neutral-700"
        }`}
      />
    </div>
  )
}

export default WaitlistNameInput
