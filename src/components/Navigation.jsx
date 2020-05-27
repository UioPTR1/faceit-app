import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import IDS from "../playerIDS";

const Navigation = () => {
  const navStyle = {
    padding: "0",
    margin: "0",
    textDecoration: "none",
  };

  return (
    <ul className="navbar">
      <li>
        <Link style={navStyle} to="/faceit-app/">
          <Logo />
        </Link>
      </li>
      {Object.keys(IDS).map((name) => {
        let link = "/faceit-app/" + name;
        return (
          <Link style={navStyle} to={link}>
            <li className="link">{name}</li>
          </Link>
        );
      })}
      {/* <Link style={navStyle} to="/faceit-app/lior">
        <li className="link">ליאור</li>
      </Link>
      <Link style={navStyle} to="/faceit-app/hezi">
        <li className="link">חזי</li>
      </Link>
      <Link style={navStyle} to="/faceit-app/ayra">
        <li className="link">איירה</li>
      </Link>
      <Link style={navStyle} to="/faceit-app/itay">
        <li className="link">איתי</li>
      </Link>
      <Link style={navStyle} to="/faceit-app/lavan">
        <li className="link">לבן</li>
      </Link>
      <Link style={navStyle} to="/faceit-app/ariel">
        <li className="link">מיותאריאל</li>
      </Link> */}
    </ul>
  );
};

export default Navigation;
