import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import "./styles/Menu.css";

function Menu() {
  return (
    <div className="conatiner">
      <div className="homeicon">
        <HomeIcon />
        Home
      </div>
      <div className="dashboardicon">
        <DashboardSharpIcon />
        Shuffle
      </div>
      <div>
        <h3>Overview</h3>
      </div>
    </div>
  );
}

export default Menu;
