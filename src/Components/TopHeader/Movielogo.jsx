import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Movielogo = () => {
  return (
    <div className="TopLogo">
      <Row>
        <Col>
          <div className="logo">
            <img src="./images/logo.jpg" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Movielogo;
