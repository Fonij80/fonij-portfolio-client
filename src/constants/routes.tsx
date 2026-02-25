import { Home, BlogListPage, BlogPostPage, BlogCMSPage } from "../pages";

type RouteConfig = {
  path: string;
  element: React.ReactNode;
  label?: string;
  nav?: boolean;
};

export const getNavLinks = (routes: RouteConfig[]) =>
  routes
    .filter((route) => route.nav)
    .map(({ label, path }) => ({ label: label!, to: path }));

export const ROUTES: RouteConfig[] = [
  {
    path: "/",
    element: <Home />,
    label: "Home",
    nav: true,
  },

  {
    path: "/blog",
    element: <BlogListPage />,
    label: "Blog",
    nav: true,
  },
  {
    path: "/blog/:slug",
    element: <BlogPostPage />,
    label: undefined,
    nav: false,
  },
  {
    path: "/admin/blog",
    element: <BlogCMSPage />,
    label: "Blog CMS",
    nav: false, // protect this with your auth later
  },
];
