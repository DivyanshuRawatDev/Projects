import React, { useEffect } from "react";
import { useNavigate, useLocation, replace } from "react-router-dom";

const RefreshHandler = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const data = localStorage.getItem("user");
    const token = JSON.parse(data)?.token;

    if (token) {
      setIsAuthenticated(true);
      if (location.pathname == "/" || location.pathname == "/login") {
        navigate("/dashboard", { replace: false });
      }
    }
  }, [navigate, location, setIsAuthenticated]);
  return null;
};

export default RefreshHandler;
