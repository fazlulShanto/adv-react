import { createBrowserRouter } from "react-router-dom";
import Counter from "../pages/counter/Counter";
import Home from "@/pages/home/Home";

export const router = createBrowserRouter([
    {
        index: true,
        element: <Home />,
    },
    {
        path: "/counter",
        element: <Counter />,
    },
]);
