import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { LayoutTemplate, AlertCircle } from "lucide-react";
import { Button } from '~/components/ui/button';

const ChooseTemplate = ({
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
          <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full  mb-2">
            <LayoutTemplate className="w-6 h-6" />
          </div>

          <DialogTitle className="text-lg font-semibold">
            Choose a Template First
          </DialogTitle>

          <DialogDescription className="text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-1">
              <AlertCircle className="w-4 h-4" />
              Please select a template to proceed with publishing your waitlist.
            </div>
          </DialogDescription>
        </DialogHeader>

        <Button
          onClick={() => {
            setShowDialog(false);
            const el = document.getElementById("template-section");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="w-full"
        >
          Choose Template
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ChooseTemplate;
