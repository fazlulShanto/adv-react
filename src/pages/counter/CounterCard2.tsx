import { Button } from "@/components/ui/button";
import { useCounterWithSpecificSelector } from "@/hooks/useCounter";
import { Star } from "lucide-react";

function CounterCard2() {
    // const { counter2, incrementCounter2, decrementCounter2 } = useCounter();
    const { counter2, incrementCounter2, decrementCounter2 } =
        useCounterWithSpecificSelector();

    console.log(
        `[Rending] [CounterCard - 2] at ${new Date().toLocaleTimeString()}`
    );
    return (
        <div className="p-6 border border-gray-500 rounded-md flex flex-col gap-4">
             <Star className="size-4 text-green-400 fill-green-900" />
            <p className="text-center text-lg font-medium">Counter Card 2</p>
            <p className="text-center bg-emerald-900 font-semibold text-green-300 text-lg py-2 rounded-lg">
                Count : {counter2}
            </p>
            <div className="flex gap-3 mt-4">
                <Button
                    onClick={() => incrementCounter2()}
                    variant={"secondary"}
                >
                    Increment
                </Button>
                <Button
                    onClick={() => decrementCounter2()}
                    variant={"destructive"}
                >
                    Decrement
                </Button>
            </div>
        </div>
    );
}

export default CounterCard2;
