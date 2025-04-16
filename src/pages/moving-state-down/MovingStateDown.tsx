import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  // DialogTrigger,
} from "@/components/ui/dialog";

const waitUtils = (ms: number) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) now = Date.now();
};

export const VerySlowComponent = () => {
  waitUtils(500);
  return (
    <div className="text-blue-400 bg-blue-950 w-full text-center rounded p-4 text-lg">
      I am VerySlowComponent
    </div>
  );
};

export const AnotherVerySlowComponent = () => {
  waitUtils(500);
  return (
    <div className="text-pink-400 bg-pink-950 w-full text-center rounded p-4 text-lg">
      I am AnotherVerySlowComponent
    </div>
  );
};

const SubscriptionModal = () => {
  const [localIsOpen, setLocalIsOpen] = useState(false);
  return (
    <Dialog open={localIsOpen} onOpenChange={setLocalIsOpen}>
      <DialogTrigger className="border border-green-900 p-3 rounded bg-green-700 hover:bg-green-700">
        Manage Subscription
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export const MovingStateDown = () => {
  const [randomValue, setRandomValue] = useState(Math.random());

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-4xl text-blue-300 text-center">Moving State Down</h1>
      <SubscriptionModal />
      <div className="flex flex-col justify-center items-center gap-4 border rounded-lg p-4">
        <p>Random Value : {randomValue}</p>
        <Button
          variant={"secondary"}
          onClick={() => setRandomValue(Math.random())}
        >
          Generate New Random Value
        </Button>
      </div>

      <VerySlowComponent />
      <AnotherVerySlowComponent />
    </div>
  );
};
