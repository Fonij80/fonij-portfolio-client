import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components";
import { NotFound } from "@/pages";
import { appRoutes } from "@/constants/routes";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        ...appRoutes
          .filter((route) => route.path !== "/")
          .map((route) => ({
            path: route.path.replace(/^\//, ""), // remove leading slash for child routes
            element: route.element,
            index: route.path === "/", // for home/index route
          })),
        {
          index: true,
          element: appRoutes.find((r) => r.path === "/")?.element,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default router;
