"use client"

import * as React from "react"
import { useState } from "react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

import { Columns, View, NotepadText, ChevronDown } from "lucide-react"
import type { ViewMode } from "~/types/viewMode"

type Options = {
  label: string
  icon: React.ElementType
}


const options: Options[] = [
  {
    label: "Both",
    icon: Columns,
  },
  {
    label: "Preview",
    icon: View,
  },
  {
    label: "Form",
    icon: NotepadText,
  },
]

export function TogglePreview({viewMode, setViewMode}:{viewMode:ViewMode, setViewMode:React.Dispatch<React.SetStateAction<ViewMode>>}) {
  const active = options.find((opt) => opt.label === viewMode)!
  const Icon = active.icon

  return (
    <DropdownMenu>
      <DropdownMenuTrigger  className="bg-secondary/10 border flex items-center justify-center gap-x-2 rounded p-1">
        <Icon stroke="white" className="w-5 p-1 rounded h-5 bg-gradient-to-br from-primary to-primary/30" />
        <span className="text-sm font-medium">{active.label}</span>
        <ChevronDown className="w-3 h-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map((opt) => {
          const OptIcon = opt.icon
          return (
            <DropdownMenuItem
              key={opt.label}
              onClick={() => setViewMode(opt.label)}
              className="flex items-center gap-2"
            >
              <OptIcon stroke="white" className="w-6 p-1 rounded h-6 bg-gradient-to-br from-primary to-primary/30" />
              <span className="text-xs font-bold">{opt.label}</span>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
