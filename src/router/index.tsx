import Home from "../views/Home";
// import About from "../views/About";
import { Navigate } from "react-router-dom";
import React, { lazy } from "react";
const About = lazy(() => import("../views/About"));
const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/Page2"));
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
);
const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />,
  },
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/page1",
        element: withLoadingComponent(<Page1 />),
      },
      {
        path: "/page2",
        element: withLoadingComponent(<Page2 />),
      },
    ],
  },
  // {
  //   path: "/about",
  //   // 懒加载简写
  //   element: withLoadingComponent(<About />),
  //   // <React.Suspense fallback={<div>loading...</div>}>
  //   //   <About />
  //   // </React.Suspense>
  // },
];
export default routes;
