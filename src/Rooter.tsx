import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Impressum from "./pages/Impressum";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/impressum",
      element: <Impressum />,
    },
  ],
  { basename: "/Portfolio/" },
);

function Rooter() {
  return <RouterProvider router={router} />;
}

export default Rooter;
