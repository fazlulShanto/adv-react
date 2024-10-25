import { Button } from "@/components/ui/button";
import useCounter, { useCounter2 } from "@/hooks/useCounter";

function CounterCard2() {
    // const { counter2, incrementCounter2, decrementCounter2 } = useCounter();
    const { counter2, incrementCounter2, decrementCounter2 } = useCounter2()();

    console.log(
        `[Rending] [CounterCard - 2] at ${new Date().toLocaleTimeString()}`
    );
    return (
        <div className="p-6 border border-gray-500 rounded-md flex flex-col gap-4">
            <p className="text-center text-lg font-medium">Counter Card 2</p>
            <p className="text-center bg-emerald-900 font-semibold text-green-300 text-lg py-2 rounded-lg">
                Count : {counter2}{" "}
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
