import React, { useEffect, useState } from "react";
import "./style.css";

const Movie = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="MovieContainer">
      <h1 className="MovieTitle">Latest 2023 Movies</h1>

      <div className="MovieList">
        <ul className="MovieGrid">
          {records?.map((list, index) => (
            <li className="MovieItem" key={index}>
              {list.id} | {list.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Movie;
