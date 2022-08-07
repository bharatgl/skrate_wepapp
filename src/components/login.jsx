import React from "react";
import Logo from "../img/skratelogo1.png";
import cloud from "../img/vector2 .png";
import main_img from "../img/Login.png";
import "./styles/login.css";

const login = () => {
  return (
    <div className="main_container">
      <img src={Logo} alt="logo" />

      <p className="skrate_line">Welcome Back to Skrate!! </p>
      {/* <p>Skrate</p> */}
      <button className="button_para">Sign In with Google </button>
      <div className="cloud_container">
        <img className="cloud_img" src={cloud} alt="cloud" />
      </div>
      <div className="main_img">
        <img className="cloud_img" src={main_img} alt="cloud" />
      </div>
    </div>
  );
};

export default login;
