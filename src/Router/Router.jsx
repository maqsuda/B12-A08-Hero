import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Components/Home/Home";
import AllApp from "../Components/AppApps/AllApp";
import Installation from "../Components/Installation/Installation";
import { Suspense } from "react";

const allAppPromise = fetch("/heroData.json").then((res) => res.json());

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      { index: true, path: "/", Component: Home },
      {
        path: "/allApp",
        // loader:()=>fetch('/heroData.json'),
        // Component: AllApp

        element: (
          <Suspense
            fallback={
              <span className="loading loading-bars loading-xl text-primary "></span>
            }
          >
            <AllApp allAppPromise={allAppPromise}></AllApp>
          </Suspense>
        ),
      },
      { path: "/installation", Component: Installation },
    ],
  },
]);
