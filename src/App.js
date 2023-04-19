import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/rootLayout/RootLayout";
import HomePage from "./pages/HomePage";
import WeekData from "./pages/WeekData";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      { path: "/week", element: <WeekData /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
