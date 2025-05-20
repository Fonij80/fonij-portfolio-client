import { Home, Blog, Tutorial, Contact } from "@/pages";

export const appRoutes = [
  { path: "/", element: <Home />, labelKey: "home" },
  { path: "/blog", element: <Blog />, labelKey: "blog" },
  // { path: "/tutorial", element: <Tutorial />, labelKey: "tutorial" },
  { path: "/contact", element: <Contact />, labelKey: "contact" },
];
