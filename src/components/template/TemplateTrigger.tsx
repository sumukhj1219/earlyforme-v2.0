"use client"

import React, { useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Button } from "../ui/button"
import { Layers } from "lucide-react"
import { templates } from "~/config/template/templates"
import Image from "next/image"
import { useWaitlist } from "~/contexts/WaitlistContext"

const TemplateTrigger = () => {
  const { setTemplate, template } = useWaitlist()

  useEffect(() => {
    console.log("Current Template:", template)
  }, [template])

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="sm"
            className="text-xs rounded flex items-center justify-center gap-x-1"
          >
            Templates <Layers className="w-3 h-3" stroke="white" />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Choose any template</DialogTitle>
            <DialogDescription className="">
              Select a template from the list below.
            </DialogDescription>
          </DialogHeader>

          <div className="grid md:grid-cols-4 grid-cols-3 gap-x-2 items-center">
            {templates.map((t) => (
              <div
                key={t.templateId}
                onClick={() => setTemplate(() => t)}
                className={`mt-5 rounded-md overflow-hidden border-2 transition cursor-pointer ${template?.templateId === t.templateId
                  ? "border-primary"
                  : "border-transparent hover:border-neutral-700"
                  }`}
              >
                <div className="w-28 h-28 relative shadow-md hover:shadow-lg rounded-md overflow-hidden transition-all duration-300 hover:brightness-105 hover:scale-105">
                  <Image
                    src={t.href as string}
                    alt={`Template ${t.templateId}`}
                    fill
                    className="rounded-md object-cover"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default TemplateTrigger
