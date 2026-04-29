import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "@/configs/routes.config";
import { NotFoundPage, Layout } from "@/pages";

const basename = import.meta.env.BASE_URL?.replace(/^\.\//, "/") || "/";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        ...ROUTES.filter((route) => route.path !== "/").map((route) => ({
          path: route.path.replace(/^\//, ""),
          element: route.element,
          index: route.path === "/",
        })),
        {
          index: true,
          element: ROUTES.find((r) => r.path === "/")?.element,
        },
      ],
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ],
  {
    basename,
  },
);

export default router;
