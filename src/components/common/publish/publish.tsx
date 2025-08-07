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
import type { Template } from "~/types/template";
import Unauthenticated from "../messages/unauthenticated";
import ChooseTemplate from "../messages/chooseTemplate";
import AddWaitlistName from "../messages/addWaitlistName";

const Publish = () => {
  const { data: session, status } = useSession();
  const { template } = useWaitlist();
  const [showDialog, setShowDialog] = useState(false);
  const {setTemplate} = useWaitlist()

  const waitlistName = template?.waitlistName?.trim();

  const createWaitlist = api.waitlist.createWaitlist.useMutation({
    onSuccess: () => {
      console.log("Waitlist created successfully!");
      setTemplate((prev)=>({...prev as Template, userId:createWaitlist.data?.userId}))
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
      enabled: !!waitlistName, 
    }
  );

  async function handlePublish() {
    if (!session?.user?.email || status === "unauthenticated") {
      setShowDialog(true);
      return 
    }

    if (!template || !template.templateId) {
      setShowDialog(true);
      return

    }

    createWaitlist.mutate({
      ...template,
      templateId: template.templateId as number,
      waitlistLogo: template.waitlistLogo as string,
      waitlistName: waitlistName!,
      waitlistIcon: template.waitlistIcon,
      launchDate: template.launchDate?.toDateString(),
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
      {
        status === "unauthenticated" && <Unauthenticated showDialog={showDialog} setShowDialog={setShowDialog} />
        
      }
      {
        !template?.templateId && <ChooseTemplate showDialog={showDialog} setShowDialog={setShowDialog} /> 
      }
      {
        !template?.waitlistName && <AddWaitlistName showDialog={showDialog} setShowDialog={setShowDialog} /> 
      }
    </div>
  );
};

export default Publish;
