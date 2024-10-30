import { Dispatch, RootState } from "@/utils/store";
import { useDispatch, useSelector } from "react-redux";

export default function useCounter() {
    const counterValues = useSelector((state: RootState) => state.count);

    const dispatch = useDispatch<Dispatch>();

    const getPrinterText = () => {
        return "Printing time " + new Date().toLocaleTimeString();
    };

    // Increment functions
    const incrementCounter1 = () => dispatch.count.increment1(1);
    const incrementCounter2 = () => dispatch.count.increment2(1);
    const incrementCounter3 = () => dispatch.count.increment3(1);

    // Decrement functions
    const decrementCounter1 = () => dispatch.count.decrement1(1);
    const decrementCounter2 = () => dispatch.count.decrement2(1);
    const decrementCounter3 = () => dispatch.count.decrement3(1);

    // useEffect(() => {}, [counter1]);

    return {
        counterValues,
        getPrinterText,
        incrementCounter1,
        incrementCounter2,
        incrementCounter3,
        decrementCounter1,
        decrementCounter2,
        decrementCounter3,
    };
}

export function useCounterWithSpecificSelector() {
    const counter2 = useSelector((state: RootState) => state.count.counter2);
    // const counter1 = useSelector((state: RootState) => state.count.counter1);

    const dispatch = useDispatch<Dispatch>();
    const incrementCounter2 = () => dispatch.count.increment2(1);
    const decrementCounter2 = () => dispatch.count.decrement2(1);

    return { counter2, incrementCounter2, decrementCounter2 };
}

export function useCounterWithDestructure() {
    const { counter4 } = useSelector((state: RootState) => ({
        counter4: state.count.counter4,
    }));
    const dispatch = useDispatch<Dispatch>();
    const incrementCounter4 = () => dispatch.count.increment4(1);
    const decrementCounter4 = () => dispatch.count.decrement4(1);

    return { counter4, incrementCounter4, decrementCounter4 };
}
