/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { ImSpinner10 } from "react-icons/im";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex items-center">
          <ImSpinner10 className="text-5xl animate-spin" />
        </div>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace />;
};

export default PrivateRoute;