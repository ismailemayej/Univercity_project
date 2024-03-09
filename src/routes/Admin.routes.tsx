import Admindashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";

export const AdminRoute = [
  {
    name: "dashboard",
    path: "dashboard",
    element: <Admindashboard />,
  },
  {
    name: "User Management",
    path: "usermanagement",
    children: [
      {
        name: "crate admin",
        path: "CREATE_ADMIN",
        element: <CreateAdmin />,
      },
      {
        name: "crate fucalty",
        path: "CREATE_FUCALTY",
        element: <CreateFaculty />,
      },
      {
        name: "crate student",
        path: "CREATE_STUDENT",
        element: <CreateStudent />,
      },
    ],
  },
];
