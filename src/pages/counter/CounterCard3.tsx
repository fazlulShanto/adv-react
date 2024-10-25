import { Button } from "@/components/ui/button";
import useCounter from "@/hooks/useCounter";

function CounterCard3() {
    const { counterValues, incrementCounter3, decrementCounter3 } =
        useCounter();

    const countr3 = counterValues.counter3;

    console.log(
        `[Rending] [CounterCard - 3] at ${new Date().toLocaleTimeString()}`
    );
    return (
        <div className="p-6 border border-gray-500 rounded-md flex flex-col gap-4">
            <p className="text-center text-lg font-medium">Counter Card 3</p>
            <p className="text-center bg-emerald-900 font-semibold text-green-300 text-lg py-2 rounded-lg">
                Count : {countr3}
            </p>
            <div className="flex gap-3 mt-4">
                <Button
                    onClick={() => incrementCounter3()}
                    variant={"secondary"}
                >
                    Increment
                </Button>
                <Button
                    onClick={() => decrementCounter3()}
                    variant={"destructive"}
                >
                    Decrement
                </Button>
            </div>
        </div>
    );
}

export default CounterCard3;
