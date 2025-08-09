import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Lock, AlertCircle, LucideFileWarning } from "lucide-react";
import { Button } from '~/components/ui/button';


const AlreadyExist = ({
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
          <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-2">
            <LucideFileWarning className="w-6 h-6" />
          </div>
          <DialogTitle className="text-lg font-semibold">
            Name already exists
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-1">
              <AlertCircle className="w-4 h-4" />
              You need to keep unique name as domain has to be assigned.
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AlreadyExist;
