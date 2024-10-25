import { Button } from "@/components/ui/button";
import useCounter from "@/hooks/useCounter";

function CounterCard() {
    const { counterValues, incrementCounter1, decrementCounter1 } =
        useCounter();
    const counter1 = counterValues.counter1;
    console.log(
        `[Rending] [CounterCard - 1] at ${new Date().toLocaleTimeString()}`
    );
    return (
        <div className="p-6 border border-gray-500 rounded-md flex flex-col gap-4">
            <p className="text-center text-lg font-medium">Counter Card 1</p>
            <p className="text-center bg-emerald-900 font-semibold text-green-300 text-lg py-2 rounded-lg">
                Count : {counter1}{" "}
            </p>
            <div className="flex gap-3 mt-4">
                <Button
                    onClick={() => incrementCounter1()}
                    variant={"secondary"}
                >
                    Increment
                </Button>
                <Button
                    onClick={() => decrementCounter1()}
                    variant={"destructive"}
                >
                    Decrement
                </Button>
            </div>
        </div>
    );
}

export default CounterCard;
