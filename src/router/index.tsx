import Layout from "@/components/organisms/Layout";
import ErrorFallback from "@/pages/ErrorFallback";
import Loading from "@/pages/Loading";
import NotFound from "@/pages/NotFound";
import { JSX, lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home/Home"));
const About = lazy(() => import("@/pages/About/About"));
const Projects = lazy(() => import("@/pages/Projects/Projects"));
const FutebolPalpites = lazy(
  () => import("@/pages/Projects/FutebolPalpites/FutebolPalpites")
);
const JavaCorrige = lazy(
  () => import("@/pages/Projects/JavaCorrige/JavaCorrige")
);
const Contact = lazy(() => import("@/pages/Contact"));

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
    errorElement: <ErrorFallback />,
    children: [
      { index: true, element: withSuspense(Home) },
      { path: "sobre", element: withSuspense(About) },
      { path: "projetos", element: withSuspense(Projects) },
      {
        path: "projetos/futebol-palpites",
        element: withSuspense(FutebolPalpites),
      },
      { path: "projetos/javacorrige", element: withSuspense(JavaCorrige) },
      { path: "contato", element: withSuspense(Contact) },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
