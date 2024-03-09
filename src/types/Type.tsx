import { ReactNode } from "react";

export type TSitebaritem = {
  key: string;
  label: ReactNode;
  children?: TSitebaritem[];
};

export type TRoutes = {
  path?: string;
  element: ReactNode;
};
export type TUserPaths = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPaths[];
};
export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};
