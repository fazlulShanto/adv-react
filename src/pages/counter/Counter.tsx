import Layout from "@/components/Layout";
import CounterCard from "./CounterCard";
import CounterCard2 from "./CounterCard2";
import CounterCard3 from "./CounterCard3";

export function Counter() {
    return (
        <Layout className="p-8 flex flex-col gap-8">
            <h1 className="page-header"> Counter Page</h1>
            <div className="w-full border border-gray-700 rounded-md p-12 flex gap-4 flex-wrap">
                <CounterCard />
                <CounterCard2 />
                <CounterCard3 />
            </div>
        </Layout>
    );
}

export default Counter;
