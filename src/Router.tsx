import { createBrowserRouter } from "react-router-dom";
import { Home, Blog, Contact, Hire } from "./pages";
import { Layout, NotFoundError } from "./components/organisms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "hire",
        element: <Hire />,
      },
    ],
  },
]);

export default router;
