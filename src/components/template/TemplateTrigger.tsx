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
            <DialogDescription>
              Select a template from the list below.
            </DialogDescription>
          </DialogHeader>

          <div className="grid md:grid-cols-3 grid-cols-2 gap-4 mt-4">
            {templates.map((t) => (
              <div
                key={t.templateId}
                onClick={() => setTemplate(() => t)}
                className={`rounded-md overflow-hidden border-2 transition cursor-pointer ${
                  template?.templateId === t.templateId
                    ? "border-primary"
                    : "border-border hover:border-neutral-700"
                }`}
              >
                <div className="w-full aspect-square bg-muted">
                  <img
                    src={t.href as string}
                    alt={`Template ${t.templateId}`}
                    className="w-full h-full object-cover"
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
