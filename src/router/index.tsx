import Layout from "@/components/organisms/Layout";
import Loading from "@/pages/Loading";
import NotFound from "@/pages/NotFound";
import { JSX, lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
// const Projects = lazy(() => import('@/pages/Projects'));
// const Contact = lazy(() => import('@/pages/Contact'));

const withSuspense = (
  Component: React.LazyExoticComponent<() => JSX.Element>
) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: "sobre", element: withSuspense(About) },
      //   { path: "projetos", element: withSuspense(Projects) },
      //   { path: "contato", element: withSuspense(Contact) },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
