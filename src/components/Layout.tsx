import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";


function Layout() {
    return (
        <div
            className={cn(
                "max-w-screen overflow-x-hidden min-h-screen relative text-white bg-slate-900",
            )}
        >
           <Outlet />
        </div>
    );
}

export default Layout;
