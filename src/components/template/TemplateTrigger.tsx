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
            <DialogDescription className="text-center">
              Select a template from the list below.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center mt-4">
            {templates.map((t) => (
              <div
                key={t.id}
                onClick={() => setTemplate(() => t)}
                className={`mt-5 rounded-md overflow-hidden border-2 transition cursor-pointer ${
                  template?.id === t.id
                    ? "border-primary"
                    : "border-transparent hover:border-neutral-700"
                }`}
              >
                <Image
                  src={t.href}
                  alt={`Template ${t.templateId}`}
                  width={300}
                  height={200}
                  className="rounded-md"
                />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default TemplateTrigger
