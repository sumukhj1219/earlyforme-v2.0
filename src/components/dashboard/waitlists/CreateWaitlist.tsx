"use client"
import { UploadIcon } from "lucide-react"
import React, { useEffect, useState } from "react"
import { ColorAndSizeInput } from "~/components/common/colorChanger/colorAndSizeInput"
import { ColorChanger } from "~/components/common/colorChanger/colorChanger"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import { useWaitlist } from "~/contexts/WaitlistContext"
import type { Template } from "~/types/template"
import { tailwindBgColors } from "~/utils/colors"
import WaitlistNameInput from "./WaitlistNameInput"

type Props = {
  viewMode: "Both" | "Form" | "Preview"
}

const CreateWaitlist = ({ viewMode }: Props) => {
  const { setWaitlistDetails, waitlistDetails, template, setTemplate } = useWaitlist()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const isGrid = viewMode === "Form"

  return (
    <div
      className={`${isGrid ? "w-full" : "w-full max-w-screen-xl mx-auto"
        } bg-background `}
    >
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="md:text-md font-medium tracking-wide bg-background">
            <span className="px-4">General Details</span>
          </AccordionTrigger>

          <AccordionContent
            className={`bg-background p-4 gap-6 ${isGrid
              ? "md:grid grid-cols-2 items-start justify-center"
              : "flex flex-col"
              }`}
          >
            <div className="flex justify-center">
              <div
                id="logo"
                className="w-full max-w-[300px] h-48 p-2 border border-dashed border-muted-foreground rounded bg-secondary/10 flex flex-col items-center justify-center"
              >
                <UploadIcon className="p-1 w-7 h-7 rounded bg-gradient-to-br from-primary to-primary/50" stroke="white" />
                <span className="text-xs mt-1">Upload logo</span>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <WaitlistNameInput />
              <Label className="text-xs">Change Background</Label>
              <div className="flex  sm:items-center gap-2 mt-2">
                <span
                  style={{
                    backgroundColor: waitlistDetails?.backgroundColor?.startsWith("bg-")
                      ? undefined
                      : waitlistDetails?.backgroundColor || template?.backgroundColor || "",
                  }}
                  data-color-class={waitlistDetails?.backgroundColor}
                  className={`p-4  border rounded ${waitlistDetails?.backgroundColor?.startsWith("bg-")
                    ? waitlistDetails?.backgroundColor
                    : ""
                    }`}
                />
                <Input
                  type="text"
                  value={waitlistDetails?.backgroundColor || template?.backgroundColor || ""}
                  onChange={(e) =>
                    setWaitlistDetails((prev) => ({
                      ...prev,
                      backgroundColor: e.target.value,
                    }))
                  }
                  placeholder="Enter color (hex or Tailwind class)"
                  className=" rounded shadow-none"
                />
                <ColorChanger type="backgroundColor" preset={tailwindBgColors} />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="md:text-md font-medium tracking-wide bg-background">
            <span className="px-4">Add Headings and Title</span>
          </AccordionTrigger>

          <AccordionContent
            className={`bg-background p-4 gap-4 ${isGrid
              ? "md:grid grid-cols-2 items-start justify-center"
              : "flex flex-col"
              }`}
          >
            <div className="flex flex-col w-full gap-4">
              <div>
                <Label htmlFor="badge" className="text-xs font-medium">
                  Badge
                </Label>
                <div className="flex items-center justify-center gap-x-1">
                  <Input
                    id="badge"
                    type="text"
                    value={waitlistDetails?.badge || template?.badge || ""}
                    onChange={(e) => {
                      setWaitlistDetails((prev) => ({
                        ...prev,
                        badge: e.target.value,
                      }));
                      setTemplate((prev) => ({
                        ...(prev as Template),
                        badge: e.target.value
                      }))
                    }

                    }
                    placeholder="Badge"
                    className="w-full mt-1 shadow-none"
                  />
                  <ColorAndSizeInput colorKey="badgeColor" sizeKey="badgeSize" />
                </div>
              </div>

              <div>
                <Label htmlFor="header" className="text-xs font-medium">
                  Header
                </Label>
                <div className="flex items-center justify-center gap-x-1">
                  <Input
                    id="header"
                    type="text"
                    value={waitlistDetails?.header || template?.header || ""}
                    onChange={(e) => {
                      setWaitlistDetails((prev) => ({
                        ...prev,
                        header: e.target.value,
                      }));
                      setTemplate((prev) => ({
                        ...(prev as Template),
                        header: e.target.value,
                      }))
                    }
                    }
                    placeholder="Header"
                    className="w-full mt-1 shadow-none"
                  />
                  <ColorAndSizeInput colorKey="headerColor" sizeKey="headerSize" />
                </div>
              </div>

              <div>
                <Label htmlFor="subHeader" className="text-xs font-medium">
                  Sub Header
                </Label>
                <div className="flex items-center justify-center gap-x-1">
                  <Input
                    id="subHeader"
                    type="text"
                    value={waitlistDetails?.subHeader || template?.subHeader || ""}
                    onChange={(e) => {
                      setWaitlistDetails((prev) => ({
                        ...prev,
                        subHeader: e.target.value,
                      }));
                      setTemplate((prev) => ({
                        ...(prev as Template),
                        subHeader: e.target.value,
                      }));
                    }

                    }
                    placeholder="Waitlist name"
                    className="w-full mt-1 shadow-none"
                  />
                  <ColorAndSizeInput colorKey="subHeaderColor" sizeKey="subHeaderSize" />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
           <AccordionTrigger className="md:text-md font-medium tracking-wide bg-background">
            <span className="px-4">Update Inputs and media</span>
          </AccordionTrigger> 

          <AccordionContent
            className={`bg-background p-4 gap-4 ${isGrid
              ? "md:grid grid-cols-2 items-start justify-center"
              : "flex flex-col"
              }`}
          >
            <div className="flex flex-col w-full gap-4">
              <div>
                <Label htmlFor="buttonPlaceholder" className="text-xs font-medium">
                  Button Placeholder
                </Label>
                <div className="flex items-center justify-center gap-x-1">
                  <Input
                    id="buttonPlaceholder"
                    type="text"
                    value={waitlistDetails?.buttonPlaceholder || template?.buttonPlaceholder || ""}
                    onChange={(e) => {
                      setWaitlistDetails((prev) => ({
                        ...prev,
                        buttonPlaceholder: e.target.value,
                      }));
                      setTemplate((prev) => ({
                        ...(prev as Template),
                        buttonPlaceholder: e.target.value
                      }))
                    }
                    }
                    placeholder="Enter button placeholder"
                    className="w-full mt-1 shadow-none"
                  />
                  <ColorChanger preset={tailwindBgColors} type="buttonBackground" />
                </div>
              </div>

              <div>
                <Label htmlFor="video" className="text-xs font-medium">
                  Video url
                </Label>
                <div className="flex items-center justify-center gap-x-1">
                  <Input
                    id="video"
                    type="text"
                    value={waitlistDetails?.video || template?.video || ""}
                    onChange={(e) => {
                      setWaitlistDetails((prev) => ({
                        ...prev,
                        video: e.target.value,
                      }));
                      setTemplate((prev) => ({
                        ...(prev as Template),
                        video: e.target.value
                      }))
                    }
                    }
                    placeholder="Paste your video url here"
                    className="w-full mt-1 shadow-none"
                  />
                  {/* <ColorChanger preset={tailwindBgColors} type="buttonBackground" /> */}
                </div>
              </div>
            </div>
          </AccordionContent>        
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default CreateWaitlist
