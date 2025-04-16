import { Button } from "@/components/ui/button";
import { useState } from "react";

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

export const MovingStateDown = () => {
  const [randomValue, setRandomValue] = useState(Math.random());

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-4xl text-blue-300 text-center">Moving State Down</h1>
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
