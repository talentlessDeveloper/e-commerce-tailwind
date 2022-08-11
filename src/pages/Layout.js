import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, [navigate]);
  return (
    <main>
      <Outlet />
    </main>
  );
};
export default Layout;
