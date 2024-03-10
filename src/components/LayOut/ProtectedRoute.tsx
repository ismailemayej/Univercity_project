import { ReactNode } from "react";
import { useAppSelector } from "../../redux/Hooks";
import { useCurrentToken } from "../../redux/features/Auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoute;
