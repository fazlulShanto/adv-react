import useCounter from "@/hooks/useCounter";

function PrintCard() {
    const { getPrinterText } = useCounter();
    console.log(`[Rending] [PrintCard] at ${new Date().toLocaleTimeString()}`);
    return (
        <div className="p-6 border border-gray-500 rounded-md flex flex-col gap-4">
            <p className="text-center text-lg font-medium">Generic Card</p>
            <p className="text-center bg-emerald-900 font-semibold text-green-300 text-lg py-2 rounded-lg">
                Print Card
            </p>
            <div className="flex gap-3 mt-4 bg-slate-900 text-white">
                {getPrinterText()}
            </div>
        </div>
    );
}

export default PrintCard;
