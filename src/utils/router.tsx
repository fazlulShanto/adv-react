import { createBrowserRouter } from "react-router-dom";
import Counter from "../pages/counter/Counter";
import Home from "@/pages/home/Home";
import { PropDoesnotReRender } from "@/pages/PropDoesntReRender";
import Layout from "@/components/Layout";
import { MovingStateDown } from "@/pages/moving-state-down/MovingStateDown";
import { ComponentAsProps } from "@/pages/ch-2/ComponentAsProps";
import { ComponentAsPropsFix } from "@/pages/ch-2/ComponentAsPropFix";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/ch-1",
    element: <Layout />,
    children: [
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "prop-rerender",
        element: <PropDoesnotReRender />,
      },
      {
        path: "moving-state-down",
        element: <MovingStateDown />,
      },
    ],
  },
  {
    path: "/ch-2",
    element: <Layout />,
    children: [
      {
        path: "component-as-props",
        element: <ComponentAsProps />,
      },
      {
        path: "component-as-props-fix",
        element: <ComponentAsPropsFix />,
      },
    ],
  },
]);
