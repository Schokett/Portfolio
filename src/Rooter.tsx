import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Impressum from "./pages/Impressum";
import Portfolio from "./pages/Portfolio";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Portfolio /> },
        { path: "impressum", element: <Impressum /> },
      ],
    },
  ],
  { basename: "/Portfolio/" },
);

function Rooter() {
  return <RouterProvider router={router} />;
}

export default Rooter;
