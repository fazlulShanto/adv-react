import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="p-12">
            <main className="p-12  w-full relative border h-auto border-zinc-300 rounded-lg flex flex-col gap-8">
                <h1 className="text-center text-2xl underline">Home</h1>
                <div className="flex gap-6">
                    <Link
                        to={"/counter"}
                        className="px-10 py-4 text-lg font-bold rounded-md text-gray-200 border border-blue-600"
                    >
                        Counter
                    </Link>
                    <Link
                        to={"/user"}
                        className="px-10 py-4 text-lg font-bold rounded-md text-gray-200 border border-blue-600"
                    >
                        User
                    </Link>
                    <Link
                        to={"/prop-rerender"}
                        className="px-10 py-4 text-lg font-bold rounded-md text-gray-200 border border-blue-600"
                    >
                        Myth: Prop changes Rerender
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default Home;
