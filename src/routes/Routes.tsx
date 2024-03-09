import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contac from "../pages/contac";
import { AdminRoute } from "./Admin.routes";
import { RoutesGenaretor } from "../utils/RoutesGenaretor";
import { FacultyRoute } from "./Faculty.routes";
import { StudentRoute } from "./Student.routes";
import Login from "../pages/Login";
import ProtectedRoute from "../components/LayOut/ProtectedRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contac />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: RoutesGenaretor(AdminRoute),
  },
  {
    path: "/faculty",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: RoutesGenaretor(FacultyRoute),
  },
  {
    path: "/student",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: RoutesGenaretor(StudentRoute),
  },
  {
    path: "login",
    element: <Login />,
  },
]);
export default router;
