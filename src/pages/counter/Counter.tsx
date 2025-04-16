import Layout from "@/components/Layout";
import CounterCard1 from "./CounterCard1";
import CounterCard2 from "./CounterCard2";
import CounterCard3 from "./CounterCard3";
import CounterCard4 from "./CounterCard4";
import PrintCard from "./PrintCard";

export function Counter() {
    return (
        <Layout className="p-8 flex flex-col gap-8">
            <h1 className="page-header"> Counter Page</h1>
            <div className="w-full border border-gray-700 rounded-md p-12 flex gap-4 flex-wrap">
                <CounterCard1 />
                <CounterCard2 />
                <CounterCard3 />
                <CounterCard4 />
                <PrintCard />
            </div>
        </Layout>
    );
}

export default Counter;
