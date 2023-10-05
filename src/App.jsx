import React from "react";
import MainHeader from "./Components/TopHeader/MainHeader";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MovieBodyComponent from "./Components/MainBody/MovieBodyComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/SearchPageComponent/Contact";
import Movie from "./Components/SearchPageComponent/Movie";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MainHeader />

        <Routes>
          <Route path="/Movie" element={<Movie />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/" element={<MovieBodyComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
