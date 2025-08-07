import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Lock, AlertCircle } from "lucide-react";
import { Button } from '~/components/ui/button';


const Unauthenticated = ({
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
            <Lock className="w-6 h-6" />
          </div>
          <DialogTitle className="text-lg font-semibold">
            You're not logged in
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-1">
              <AlertCircle className="w-4 h-4" />
              You need to log in to publish your waitlist.
            </div>
          </DialogDescription>
        </DialogHeader>

        <Button
          onClick={() => {
            setShowDialog(false);
            window.location.href = "/login";
          }}
          className="w-full"
        >
          Login
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Unauthenticated;
