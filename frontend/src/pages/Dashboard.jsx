import React from "react";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";

const Dashboard = () => {
  return (
    <div className="bg-[#93C572] h-full">
      <AppBar />
      <Balance />
      <Users />
    </div>
  );
};

export default Dashboard;
