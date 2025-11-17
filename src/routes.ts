import { createBrowserRouter } from "react-router";
import HomeLayout from "@/layouts/HomeLayout";
import Index from "@/pages/index";
import AdminLayout from "@/layouts/AdminLayout";
import Login from "@/pages/admin/Login";
import Intro from "@/pages/admin/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [{ index: true, Component: Index }],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: Intro },
      { path: "explore", Component: Intro },
      { path: "service", Component: Intro },
      { path: "contact", Component: Intro },
      { path: "blogs", Component: Intro },
      { path: "article", Component: Intro },
    ],
  },
]);

// function delayForDemo<T>(promise: Promise<T>) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 10000);
//   }).then(() => promise);
// }
export default router;
