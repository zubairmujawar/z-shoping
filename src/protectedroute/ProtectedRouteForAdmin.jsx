import { Navigate } from "react-router-dom";

const ProtectedRouteForAdmin = ({ Children }) => {
  const user = JSON.parse(localStorage.getItem("users"));
  if (user?.role === "admin") {
    return Children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
export default ProtectedRouteForAdmin;
