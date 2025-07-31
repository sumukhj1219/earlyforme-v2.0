"use client"
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { useWaitlist } from '~/contexts/WaitlistContext'
import type { Template } from '~/types/template'
import type { WaitlistDetails } from '~/types/waitlist'
import { strokeColorClassMap, strokeColors } from '~/utils/colors'

interface Props {
  iconStroke: keyof WaitlistDetails
}

const StrokeColorChanger = ({ iconStroke }: Props) => {
  const { waitlistDetails, template, setTemplate, setWaitlistDetails } = useWaitlist()
  return (
    <div className="flex items-center mt-1 gap-2 justify-center">
      <Select
        value={waitlistDetails?.[iconStroke] as string || template?.[iconStroke] as string || ""}
        onValueChange={(val) => {
          setTemplate((prev) => ({
            ...prev as Template,
            [iconStroke]: val
          }));
          setWaitlistDetails((prev) => ({
            ...prev as WaitlistDetails,
            [iconStroke]: val
          }));
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Icon Stroke" />
        </SelectTrigger>
        <SelectContent>
          {strokeColors.map((stroke) => (
            <SelectItem key={stroke} value={stroke}>
              <div className="flex items-center gap-x-2">
                <span className={`${strokeColorClassMap[stroke]} w-4 h-4 rounded-sm`} />
                <span className="capitalize">{stroke}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export default StrokeColorChanger
