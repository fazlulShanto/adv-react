import { createBrowserRouter } from "react-router-dom";
import Counter from "../pages/counter/Counter";
import Home from "@/pages/home/Home";
import { PropDoesnotReRender } from "@/pages/PropDoesntReRender";
import Layout from "@/components/Layout";
import { MovingStateDown } from "@/pages/moving-state-down/MovingStateDown";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/prop-rerender",
        element: <PropDoesnotReRender />,
      },
      {
        path: "/moving-state-down",
        element: <MovingStateDown />,
      },
    ],
  },
]);
