import CounterCard1 from "./CounterCard1";
import CounterCard2 from "./CounterCard2";
import CounterCard3 from "./CounterCard3";
import CounterCard4 from "./CounterCard4";
import PrintCard from "./PrintCard";

export function Counter() {
  return (
    <div className="p-8 flex flex-col gap-8">
      <h1 className="page-header"> Danger of Custom Hooks</h1>
      <div className="w-full border border-gray-700 rounded-md p-12 flex gap-4 flex-wrap">
        <CounterCard1 />
        <CounterCard2 />
        <CounterCard3 />
        <CounterCard4 />
        <PrintCard />
      </div>
      <pre className="break-words whitespace-break-spaces leading-8 text-gray-200 max-w-3xl mx-auto p-8 mb-8">
        Hooks are essentially just pockets in your trousers. If, instead of
        carrying a 10-kilogram dumbbell in your hands, you put it in your
        pocket,{" "}
        <b className="text-blue-400">
          it wouldn't change the fact that it's still hard to run
        </b>
        : you have 10 kilograms of additional weight on your person. But if you
        put that ten kilograms in a self-driving trolley, you can run around
        freely and fresh and maybe even stop for coffee: the trolley will take
        care of itself.{" "}
        <b className="text-blue-400">
          Components for the state are that trolley.
        </b>
      </pre>
    </div>
  );
}

export default Counter;
