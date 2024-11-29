import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("user")));

  }, []);

  const logout = () => {
    setUserInfo(localStorage.removeItem("user"));
    navigate("/login");
  };
  return userInfo ? (
    <div>
      <img src={userInfo?.image} alt={userInfo?.name} />
      <h1>Wecome {userInfo?.name}</h1>
      <h1>Email {userInfo?.email}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <></>
  );
};

export default Dashboard;
