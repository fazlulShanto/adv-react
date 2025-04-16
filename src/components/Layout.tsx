import { cn } from "@/lib/utils";

type LayoutProps = {
    children: any;
    className?: string;
};
function Layout({ children, className = "" }: LayoutProps) {
    return (
        <div
            className={cn(
                "w-screen min-h-screen relative text-white bg-slate-900",
                className
            )}
        >
            {children}
        </div>
    );
}

export default Layout;
