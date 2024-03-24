import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Error from "../Components/Error";
import Home from "../Pages/Home/Home";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default Router;
