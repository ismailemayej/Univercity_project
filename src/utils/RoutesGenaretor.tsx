import { TRoutes, TUserPaths } from "../types/Type";

export const RoutesGenaretor = (items: TUserPaths[]) => {
  const routes = items.reduce((acc: TRoutes[], item) => {
    if (item.path && item.element) {
      items.forEach((item) => {
        acc.push({
          path: item.path,
          element: item.element,
        });
        if (item.children) {
          item.children.forEach((child) => {
            acc.push({
              path: child.path,
              element: child.element,
            });
          });
        }
      });
    }
    return acc;
  }, []);
  return routes;
};
