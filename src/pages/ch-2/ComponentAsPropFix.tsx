import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Flower } from "lucide-react";
import { useState } from "react";

const dealyTime = 250;

const MovingBlock = ({ position }: { position: number }) => {
  if (position < 85) {
    position = 85;
  }

  return (
    <div className="fixed right-40 " style={{ top: position }}>
      <Popover>
        <PopoverTrigger className=" p-1 border-2 rounded-full border-fuchsia-500">
          <Flower className="text-fuchsia-500 size-5" strokeWidth={2.5} />
        </PopoverTrigger>
        <PopoverContent side="left" className="w-fit p-2 text-sm">
          <p className="hover:bg-slate-700 w-full rounded-lg px-2 py-1 hover:text-white hover:cursor-pointer">
            Menu 1
          </p>
          <p className="hover:bg-slate-700 w-full rounded-lg px-2 py-1 hover:text-white  hover:cursor-pointer">
            Menu 2
          </p>
          <p className="hover:bg-slate-700 w-full rounded-lg px-2 py-1 hover:text-white hover:cursor-pointer">
            Menu 3
          </p>
        </PopoverContent>
      </Popover>
    </div>
  );
};

const wait = (ms: number) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) now = Date.now();
};

export const BunchOfStuff = () => (
  <div className="bg-gray-900 text-white border border-blue-300/30 p-4 my-4 min-h-[15rem]">
    Bunch of stuff
  </div>
);

export const OtherStuffAlsoComplicated = () => <div>Other stuff</div>;

export const VerySlowComponent = () => {
  wait(dealyTime);
  return (
    <div className="bg-gray-800 text-white rounded-lg px-4 py-8 text-center">
      I am very slow
    </div>
  );
};

export const AnotherVerySlowComponent = () => {
  wait(dealyTime);
  return <div>I am Another Slow Component</div>;
};

const containerHeight = 320;
const getPosition = (val: number) => containerHeight - val;

const ScrollableWithMovingBlock = ({ content }: { content: JSX.Element }) => {
  const [position, setPosition] = useState(containerHeight);

  const onScroll = (e: any) => {
    // calculate position based on the scrolled value
    const calculated = getPosition(e.target.scrollTop);
    // save it to state
    // console.log({
    //   scrollTop: e.target.scrollTop,
    //   height: e.currentTarget.scrollHeight,
    //   calculated,
    // });
    setPosition(calculated);
  };
  return (
    <div
      className="w-3/4 p-3 mx-auto mt-20 h-80 overflow-y-scroll border border-gray-500/50 relative z-[1]"
      onScroll={onScroll}
    >
      {/* pass position value to the new movable component */}
      <MovingBlock position={position} />
      {content}
    </div>
  );
};

export function ComponentAsPropsFix() {
  const slowComponents = (
    <>
      <BunchOfStuff />
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </>
  );
  return (
    <>
      <ScrollableWithMovingBlock content={slowComponents} />
      <p className="p-8 mx-auto bg-gray-800 rounded-lg mt-8 max-w-screen-md leading-8">
        Now, onto the state update and re-renders situation. If a state update
        is triggered, we will once again trigger a re-render of a component, as
        usual. However, in this case, it will be the ScrollableWithMovingBlock
        component - just a div with a movable block. The rest of the slow
        components are passed through props, they are outside of that component.
        In the "hierarchical" components tree, they belong to the parent. And
        remember? React never goes "up" that tree when it re-renders a
        component. So our slow components won't re-render when the state is
        updated, and the scrolling experience will be smooth and lag-free.
      </p>
    </>
  );
}
