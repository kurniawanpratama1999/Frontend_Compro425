import { createBrowserRouter } from "react-router";
import HomeLayout from "@/layouts/HomeLayout";
import { lazy } from "react";
const Index = lazy(() => import("@/pages"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Index,
      },
    ],
  },
]);

// function delayForDemo<T>(promise: Promise<T>) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 10000);
//   }).then(() => promise);
// }
export default router;
