import FaculityCourse from "../pages/Faculty/FaculityCourse";
import Facultydashboard from "../pages/Faculty/FacultyDashboard";

export const FacultyRoute = [
  {
    name: "Faculty dashboard",
    path: "faculty-dashboard",
    element: <Facultydashboard />,
  },
  {
    name: "Faculty Course",
    path: "faculty-course",
    element: <FaculityCourse />,
  },
];
