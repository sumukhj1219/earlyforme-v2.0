import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { PencilLine, AlertCircle } from "lucide-react";
import { Button } from '~/components/ui/button';

const AddWaitlistName = ({
  showDialog,
  setShowDialog,
}: {
  showDialog: boolean;
  setShowDialog: (val: boolean) => void;
}) => {
  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent className="text-center space-y-4 py-6">
        <DialogHeader className="items-center">
          <div className="flex items-center justify-center bg-primary w-12 h-12 rounded-full  mb-2">
            <PencilLine className="w-6 h-6" />
          </div>

          <DialogTitle className="text-lg font-semibold">
            Add a Waitlist Name
          </DialogTitle>

          <DialogDescription className="text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-1">
              <AlertCircle className="w-4 h-4" />
              A unique name is required to continue.
            </div>
          </DialogDescription>
        </DialogHeader>

        <Button
          onClick={() => {
            setShowDialog(false);
            const el = document.getElementById("waitlist-name-input");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full"
        >
          Add Name
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddWaitlistName;
