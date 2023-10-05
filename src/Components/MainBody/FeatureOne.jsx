import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const FeatureOne = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.imagePath} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
          <button className="btn btn-primary">
            <a href={props.watch} className="Watchtrailer">
              Watch
            </a>
          </button>
        </Card.Body>
      </Card>
     
    </div>
    
  );
};

export default FeatureOne;
