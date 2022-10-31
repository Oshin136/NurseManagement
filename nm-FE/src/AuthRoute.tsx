import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {
  getUserLoginFromLocalStorage,
  isUserLoggedIn,
} from "./utils/localStorage";

const AuthRoute = () => {
  const isLoggedIn = isUserLoggedIn();
  return isLoggedIn ? (
    <div>
      <Navbar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default AuthRoute;
