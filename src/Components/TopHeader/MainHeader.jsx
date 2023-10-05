import React from "react";
import Movielogo from "./Movielogo";
import "./MovieHeader.css";
import Sidebaropenor from "./Sidebaropenor";

const MainHeader = () => {
  return (
    <div className="headerContainer">
      <Movielogo />
      <Sidebaropenor />
    </div>
  );
};

export default MainHeader;
