import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/Hooks";
import { logout } from "../../redux/features/Auth/authSlice";
import { toast } from "sonner";
import { useGetAllSemestersQuery } from "../../redux/features/AcademicSemesterApi/academicSemesterApi";

const MainLayOut = () => {
  const { data } = useGetAllSemestersQuery(0, {});
  console.log("all semester data=>", data);
  const { Header, Content } = Layout;
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
  };
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout style={{ marginLeft: 200 }}>
        <Header>
          <Button onClick={handleLogout}>Logout</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayOut;
