import React from "react";
import Logo from "../img/skratelogo1.png";
import "./styles/home.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "./Menu";
function home() {
  return (
    <>
      {" "}
      <header>
        <img src={Logo} alt="logo" />
        <button className="logout">Sign out</button>
        <AccountCircleIcon
          style={{
            position: "absolute",
            width: "51px",
            height: "51px",
            left: "1568px",
            top: "36px",
          }}
        />
        <span className="list">Avatar</span>
      </header>
      <Menu />
    </>
  );
}

export default home;
