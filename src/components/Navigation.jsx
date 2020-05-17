import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

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
      <Link style={navStyle} to="/lior">
        <li className="link">ליאור</li>
      </Link>
      <Link style={navStyle} to="/hezi">
        <li className="link">חזי</li>
      </Link>
      <Link style={navStyle} to="/ayra">
        <li className="link">איירה</li>
      </Link>
      <Link style={navStyle} to="/itay">
        <li className="link">איתי</li>
      </Link>
      <Link style={navStyle} to="/lavan">
        <li className="link">לבן</li>
      </Link>
    </ul>
  );
};

export default Navigation;
