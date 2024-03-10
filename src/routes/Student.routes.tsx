import StudentCourse from "../pages/Student/StudentCourse";
import Studentdashboard from "../pages/Student/StudentDashbord";

export const StudentRoute = [
  {
    name: "Student dashboard",
    path: "student-dashboard",
    element: <Studentdashboard />,
  },
  {
    name: "Student Course",
    path: "Student-course",
    element: <StudentCourse />,
  },
];
