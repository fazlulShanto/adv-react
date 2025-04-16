import { Button } from "@/components/ui/button";
import { memo, useState } from "react";

const CountView = ({ count, from }: { count: number; from: string }) => {
  console.log(`🟥 rendering [${from}]: ${count}`);
  return (
    <div className="bg-violet-900 max-w-sm mx-auto text-violet-500 text-lg py-4 px-8 rounded-md">
      Prop Count Value : {count}
    </div>
  );
};

const Component1 = () => {
  let count = 1;

  const showValue = () => {
    alert(`Count value is ${count}`);
  };

  return (
    <div className="flex w-1/2 flex-col gap-8 border border-gray-400 p-6 rounded">
      <CountView count={count} from="Component1" />
      <div className="flex justify-center gap-4">
        <Button variant={"secondary"} onClick={() => count++}>
          Increment Value
        </Button>
        <Button variant={"destructive"} onClick={() => count--}>
          {" "}
          Decrement Value{" "}
        </Button>
        <Button
          variant={"outline"}
          className="text-green-400 bg-green-900 border-none"
          onClick={showValue}
        >
          Show Value
        </Button>
      </div>
    </div>
  );
};

const MemoView = memo(CountView);

const MemoComponent = () => {
  const [input, setInput] = useState(1);
  const [count, setCount] = useState(1);

  return (
    <div className="flex w-1/2 flex-col gap-8 border border-gray-400 p-6 rounded">
      <div className="flex">
        <MemoView count={count} from="MemoCompoent" />
        <div className="bg-violet-900 text-violet-400 w-fit mx-auto px-8 py-4 rounded-lg">
          {" "}
          input value : {input}{" "}
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <input
          className="text-black h-9 border-none focus-within:ring-0 focus:ring-0 focus:outline-none rounded px-4"
          type="number"
          value={input}
          placeholder="Enter a Number"
          onChange={(e) => setInput(+e.target.value)}
        />
        <Button
          variant={"outline"}
          className="text-green-400 bg-green-900 border-none"
          onClick={() => setCount(+input)}
        >
          Set Value
        </Button>
      </div>
    </div>
  );
};

export const PropDoesnotReRender = () => {
  return (
    <div className="p-8 flex flex-col gap-8 w-full">
      <div className="flex flex-col gap-8 items-center border border-slate-400 rounded-md p-4">
        <h1 className="text-2xl text-center leading-7 ">
          Myth: Component's ReRender on Props Changes
        </h1>
        <p className="text-lg text-violet-300 italic leading-8 text-center">
          Normal React behavior is that if a state update is triggered, React
          will rerender all the nested components regardless of their props. And
          if a state update is not triggered, then changing props will be just
          "swallowed": React doesn't monitor them.
        </p>
        <pre className="w-fit text-center whitespace-break-spaces">
          "Component re-renders when its props change." It's one of the most
          common misconceptions in React: everyone believes it, no one doubts
          it, and it's just not true.
        </pre>
        <pre className="w-fit text-center whitespace-break-spaces">
          In the context of re-renders, whether props have changed or not on a
          component matters only in one case: if the said component is wrapped
          in the React.memo higher-order component. Then, and only then, will
          React stop its natural chain of re-renders and first check the props.
          If none of the props change, then re-renders will stop there. If even
          one single prop changes, they will continue as usual.
        </pre>
      </div>
      <div className="flex gap-4 w-full">
        <Component1 />
        <MemoComponent />
      </div>

    </div>
  );
};
