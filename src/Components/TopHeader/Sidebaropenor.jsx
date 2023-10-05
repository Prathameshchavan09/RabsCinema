import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Sidebaropenor = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div onClick={toggleSidebar} className="ToggleButton">
        <BiMenu size={36} />
      </div>
      <div className="TopSideBar">
        <div className="TopSideBarContent">
          <Row>
            <Col>
              <div className={`sidebar ${isOpen ? "active" : ""}`}>
                <div className="sidebarheader">
                  <h3>MENU</h3>
                </div>
                <ul className="SideBarTabs">
                  <li>
                    <Link onClick={toggleSidebar} to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link onClick={toggleSidebar} to="/Movie">
                      Movies
                    </Link>
                  </li>
                  <li>
                    <Link onClick={toggleSidebar} to="/Contact">
                      Contacts
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Sidebaropenor;
