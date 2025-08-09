"use client";

import { GlobeIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import React, { useCallback, useState } from "react";
import { Button } from "~/components/ui/button";
import { useWaitlist } from "~/contexts/WaitlistContext";
import { api } from "~/trpc/react";
import type { Template } from "~/types/template";
import { toast } from "sonner";

import Unauthenticated from "../messages/unauthenticated";
import ChooseTemplate from "../messages/chooseTemplate";
import AddWaitlistName from "../messages/addWaitlistName";
import AlreadyExist from "../messages/nameAlreadyExists";

type DialogType =
  | "unauthenticated"
  | "chooseTemplate"
  | "addWaitlistName"
  | "alreadyExists"
  | null;

const Publish = () => {
  const { data: session, status } = useSession();
  const { template, setTemplate } = useWaitlist();
  const [dialogType, setDialogType] = useState<DialogType>(null);

  const waitlistName = template?.waitlistName?.trim();

  const createWaitlist = api.waitlist.createWaitlist.useMutation({
    onSuccess: (created) => {
      toast.success("Waitlist created successfully");
      setTemplate((prev) => ({
        ...(prev as Template),
        userId: created.userId,
      }));
    },
    onError: (err) => {
      console.error("Failed to create waitlist:", err);
      toast.error("Something went wrong while publishing.");
    },
  });

  const { data } = api.waitlist.checkName.useQuery(
    { waitlistName: waitlistName! },
    { enabled: !!waitlistName }
  );

  const handlePublish = useCallback(() => {
    if (!session?.user?.email || status === "unauthenticated") {
      setDialogType("unauthenticated");
      return;
    }
    if (!template?.templateId) {
      setDialogType("chooseTemplate");
      return;
    }
    if (!waitlistName) {
      setDialogType("addWaitlistName");
      return;
    }
    if (data?.status) {
      setDialogType("alreadyExists");
      return;
    }

    createWaitlist.mutate({
      ...template,
      templateId: template.templateId!,
      waitlistLogo: template.waitlistLogo!,
      waitlistName,
      waitlistIcon: template.waitlistIcon,
      launchDate: template.launchDate?.toDateString(),
    });
  }, [session, status, template, waitlistName, data?.status, createWaitlist]);

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
        <Unauthenticated showDialog setShowDialog={() => setDialogType(null)} />
      )}
      {dialogType === "chooseTemplate" && (
        <ChooseTemplate showDialog setShowDialog={() => setDialogType(null)} />
      )}
      {dialogType === "addWaitlistName" && (
        <AddWaitlistName showDialog setShowDialog={() => setDialogType(null)} />
      )}
      {dialogType === "alreadyExists" && (
        <AlreadyExist showDialog setShowDialog={() => setDialogType(null)} />
      )}
    </div>
  );
};

export default Publish;
