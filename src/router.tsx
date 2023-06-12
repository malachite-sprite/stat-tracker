import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./routes/navigation";
import ErrorPage from "./error-page";
import Logger from "./routes/logger";
import Calendar from "./routes/calendar";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigation />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/logger",
          element: <Logger />,
        },
        {
          path: "/calendar",
          element: <Calendar />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
