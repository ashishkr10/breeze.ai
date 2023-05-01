import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase";

const Dashboard = () => {
  const navigate = useNavigate();
  const Logout = () => {
    logout();
    navigate("/login");
    localStorage.removeItem("id");
  };

  return (
    <div>
      <div>
        <p className="text-blue-800 text-3xl  mb-8 font-bold">Welcome</p>
        <h1 className="m-20 text-4xl">Hello World!!</h1>
      </div>
      <button
        onClick={Logout}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
