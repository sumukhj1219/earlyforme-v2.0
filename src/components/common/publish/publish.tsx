"use client";

import { GlobeIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { useWaitlist } from "~/contexts/WaitlistContext";
import { api } from "~/trpc/react";
import type { Template } from "~/types/template";
import Unauthenticated from "../messages/unauthenticated";
import ChooseTemplate from "../messages/chooseTemplate";
import AddWaitlistName from "../messages/addWaitlistName";
import { toast } from "sonner";

const Publish = () => {
  const { data: session, status } = useSession();
  const { template, setTemplate } = useWaitlist();
  const [dialogType, setDialogType] = useState<"unauthenticated" | "chooseTemplate" | "addWaitlistName" | null>(null);

  const waitlistName = template?.waitlistName?.trim();

  const createWaitlist = api.waitlist.createWaitlist.useMutation({
    onSuccess: () => {
      toast("Waitlist created successfully");
      setTemplate((prev) => ({
        ...(prev as Template),
        userId: createWaitlist.data?.userId,
      }));
    },
    onError: (err) => {
      console.error("Failed to create waitlist:", err);
    },
  });

  const { data } = api.waitlist.checkName.useQuery(
    { waitlistName: waitlistName! },
    { enabled: !!waitlistName }
  );

  async function handlePublish() {
    if (!session?.user?.email || status === "unauthenticated") {
      setDialogType("unauthenticated");
      return;
    }

    if (!template || !template.templateId) {
      setDialogType("chooseTemplate");
      return;
    }

    if (!waitlistName) {
      setDialogType("addWaitlistName");
      return;
    }

    createWaitlist.mutate({
      ...template,
      templateId: template.templateId as number,
      waitlistLogo: template.waitlistLogo as string,
      waitlistName,
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
        {createWaitlist.isPending ? "Publishing..." : "Publish"}
        <GlobeIcon className="w-3 h-3" stroke="white" />
      </Button>

      {dialogType === "unauthenticated" && (
        <Unauthenticated showDialog={true} setShowDialog={() => setDialogType(null)} />
      )}

      {dialogType === "chooseTemplate" && (
        <ChooseTemplate showDialog={true} setShowDialog={() => setDialogType(null)} />
      )}

      {dialogType === "addWaitlistName" && (
        <AddWaitlistName showDialog={true} setShowDialog={() => setDialogType(null)} />
      )}
    </div>
  );
};

export default Publish;
