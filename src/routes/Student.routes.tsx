import StudentCourse from "../pages/Student/StudentCourse";
import Studentdashboard from "../pages/Student/StudentDashbord";

export const StudentRoute = [
  {
    name: "Student dashboard",
    path: "dashboard",
    element: <Studentdashboard />,
  },
  {
    name: "Student Course",
    path: "Studentcourse",
    element: <StudentCourse />,
  },
];
