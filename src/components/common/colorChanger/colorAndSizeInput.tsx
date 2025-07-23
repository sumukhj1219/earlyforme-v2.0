"use client"
import { useWaitlist } from "~/contexts/WaitlistContext";
import type { WaitlistDetails } from "~/types/waitlist";
import { ColorChanger } from "./colorChanger";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { tailwindTextColors } from "~/utils/colors";

type Props = {
  colorKey: keyof WaitlistDetails;
  sizeKey: keyof WaitlistDetails;
};

export function ColorAndSizeInput({ colorKey, sizeKey }: Props) {
  const { waitlistDetails, setWaitlistDetails } = useWaitlist();

  return (
    <div className="flex items-center mt-1 gap-2 justify-center">

      <ColorChanger
        type={colorKey}
        preset={tailwindTextColors}
      />

      <Select
        value={waitlistDetails?.[sizeKey] || ""}
        onValueChange={(val) =>
          setWaitlistDetails((prev) => ({
            ...prev,
            [sizeKey]: val,
          }))
        }
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Size" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="text-xs">Extra Small</SelectItem>
          <SelectItem value="text-sm">Small</SelectItem>
          <SelectItem value="text-base">Normal</SelectItem>
          <SelectItem value="text-md">Medium</SelectItem>
          <SelectItem value="text-lg">Large</SelectItem>
          <SelectItem value="text-xl">XL</SelectItem>
          <SelectItem value="text-2xl">2XL</SelectItem>
          <SelectItem value="text-2xl">2XL</SelectItem>
          <SelectItem value="text-3xl">3XL</SelectItem>
          <SelectItem value="text-4xl">4XL</SelectItem>
          <SelectItem value="text-5xl">5XL</SelectItem>
          <SelectItem value="text-6xl">6XL</SelectItem>
          <SelectItem value="text-7xl">7XL</SelectItem>
          <SelectItem value="text-8xl">8XL</SelectItem>
          <SelectItem value="text-9xl">9XL</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
