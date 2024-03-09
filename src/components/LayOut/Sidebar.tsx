import { AdminRoute } from "../../routes/Admin.routes";
import { FacultyRoute } from "../../routes/Faculty.routes";
import { StudentRoute } from "../../routes/Student.routes";
import { SidebarItemsGenarator } from "../../utils/SidebarItemsGanaretor";

import { Layout, Menu } from "antd";
const { Sider } = Layout;

const UserRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  const role = "admin";
  let SidebarItem;
  switch (role) {
    case UserRole.ADMIN:
      SidebarItem = SidebarItemsGenarator(AdminRoute, UserRole.ADMIN);
      break;
    case UserRole.FACULTY:
      SidebarItem = SidebarItemsGenarator(FacultyRoute, UserRole.FACULTY);
      break;
    case UserRole.STUDENT:
      SidebarItem = SidebarItemsGenarator(StudentRoute, UserRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <h2
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Our Dashboard
      </h2>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={SidebarItem}
      />
    </Sider>
  );
};

export default Sidebar;
