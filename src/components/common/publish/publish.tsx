"use client";

import { GlobeIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { useWaitlist } from "~/contexts/WaitlistContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { api } from "~/trpc/react";

const Publish = () => {
  const { data: session, status } = useSession();
  const { template } = useWaitlist();
  const [showDialog, setShowDialog] = useState(false);

  const waitlistName = template?.waitlistName?.trim();

  const createWaitlist = api.waitlist.createWaitlist.useMutation({
    onSuccess: () => {
      console.log("Waitlist created successfully!");
    },
    onError: (err) => {
      console.error("Failed to create waitlist:", err);
    },
  });

  const { data } = api.waitlist.checkName.useQuery(
    {
      waitlistName: waitlistName!,
    },
    {
      enabled: !!waitlistName, // 🧠 only run when waitlistName is truthy
    }
  );

  async function handlePublish() {
    if (!session?.user?.email || status === "unauthenticated") {
      setShowDialog(true);
      return;
    }

    if (!template || !template.id) {
      setShowDialog(true);
      return;
    }

    if (data?.status) {
      setShowDialog(true);
      return;
    }

    createWaitlist.mutate({
      ...template,
      templateId: template.id,
      waitlistLogo: "",
      waitlistName: waitlistName!,
    });
  }

  return (
    <div>
      <Button
        size="sm"
        className="text-xs rounded flex items-center justify-center gap-x-1"
        onClick={handlePublish}
        disabled={createWaitlist.isPending}
      >
        {createWaitlist.isPending ? "Publishing..." : "Publish"}{" "}
        <GlobeIcon className="w-3 h-3" stroke="white" />
      </Button>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Something went wrong</DialogTitle>
            <DialogDescription>
              {status === "unauthenticated"
                ? "Please log in to publish your waitlist."
                : "Please select a valid template or the name already exists."}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Publish;
