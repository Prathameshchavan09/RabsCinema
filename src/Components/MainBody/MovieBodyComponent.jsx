import React from "react";
import "./MainBodyComponents.css";
import FeatureOne from "./FeatureOne";
import Sidebar from "../SideBar/Sidebar";
import { useState, useEffect } from "react";
const MovieBodyComponent = () => {
  const [records, setrecords] = useState();

  useEffect(() => {
    fetch("https://mocki.io/v1/64627322-446c-48b3-994a-929372fcd4e8")
      .then((response) => response.json())
      .then((data) => setrecords(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mainContainer">
      {records?.map((value, i) => (
        <FeatureOne
          key={i}
          desc={value.desc}
          imagePath={value.imagePath}
          title={value.title}
          watch={value.watch}
        ></FeatureOne>
      ))}
    </div>
  );
};

export default MovieBodyComponent;
