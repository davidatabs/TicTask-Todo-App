import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";

const route = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    // @TODO: Add a NOT FOUND Component
    element: <HomePage />,
  },
]);

export { route };
