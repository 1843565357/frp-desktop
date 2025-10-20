import { Outlet } from "react-router";
import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";

export const AppMain = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 仅在访问根路径时重定向一次
    if (location.pathname === "/") {
      navigate("/home", { replace: true });
    }
  }, [location.pathname, navigate]);
  return (
    <div className="main-container">
      <Outlet />
    </div>
  );
};
