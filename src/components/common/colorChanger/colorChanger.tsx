"use client"

import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "~/lib/utils"
import { Button } from "~/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "~/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import Tailwind from "../svg/tailwind"
import { useWaitlist } from "~/contexts/WaitlistContext"
import type { WaitlistDetails } from "~/types/waitlist"
import type { Template } from "~/types/template"

export function ColorChanger({
  preset,
  type
}: {
  preset?: string[],
  type: keyof WaitlistDetails 
}) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  const { setWaitlistDetails, setTemplate } = useWaitlist()

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between rounded"
        >
          <Tailwind />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0 max-h-[300px] ">
        <Command>
          <CommandInput placeholder="Search colors..." className="h-9" />
          <CommandList>
            <CommandEmpty>No color found.</CommandEmpty>
            <CommandGroup>
              {preset?.map((color) => (
                <CommandItem
                  key={color}
                  value={color}
                  onSelect={(currentValue) => {
                    const selected = currentValue === value ? "" : currentValue
                    setValue(selected)
                    setWaitlistDetails((prev) => ({
                      ...prev as WaitlistDetails,
                      [type]: selected
                    }));
                    setTemplate((prev)=>({
                      ...prev as Template,
                      [type]: selected
                    }));
                    setOpen(false)
                  }}
                >
                  <span className={`w-4 h-4 mr-2 rounded ${color.replace("text-", "bg-")}`} />
                  <span className="capitalize">
                    {color.replace("bg-", "").replace("-", " ")}
                  </span>
                  <Check
                    className={cn(
                      "ml-auto",
                      value === color ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
