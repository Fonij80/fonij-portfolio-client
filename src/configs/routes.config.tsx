import {
  LandingPage,
  BlogPostPage,
  WorkWithMePage,
  PromptryPage,
} from "@/pages";

type RouteConfig = {
  path: string;
  element: React.ReactNode;
  label?: string;
  nav?: boolean;
};

export const getNavLinks = (routes: RouteConfig[]) =>
  routes
    .filter(
      (route): route is RouteConfig & { label: string } =>
        !!route.nav && !!route.label,
    )
    .map(({ label, path }) => ({ label, to: path }));

export const ROUTES: RouteConfig[] = [
  {
    path: "/",
    element: <LandingPage />,
    label: "Home",
    nav: true,
  },
  {
    path: "/work-with-me",
    element: <WorkWithMePage />,
    label: undefined,
    nav: false,
  },
  {
    path: "/blog/:slug",
    element: <BlogPostPage />,
    label: undefined,
    nav: false,
  },
  {
    path: "/promptry",
    element: <PromptryPage />,
    label: "Promprty",
    nav: true,
  },
];
