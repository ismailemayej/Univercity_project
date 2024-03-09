import { AdminRoute } from "../routes/Admin.routes";
import { NavLink } from "react-router-dom";
import { TSitebaritem } from "../types/Type";

export const SidebarRoutes = AdminRoute.reduce((acc: TSitebaritem[], item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    });
  }

  return acc;
}, []);
