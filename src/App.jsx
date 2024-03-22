import React from "react";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Saved from "./components/Saved";

const App = () => {
  const [images, setimages] = useState([]);
  const [search, setSearch] = useState("nature");
  const API_KEY = "NVlAxs4vnsr7qrKd6DFNcnOnWarZC9RnUxIdYLjvQp0a6wcq5Mdp7ndQ";

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      // console.log(" response from API =", res.data.photos);
      setimages(res.data.photos);
      console.log(images);
    };
    fetchImage();
  }, [search]);

  return (
    <>
      <Router>
        <Navbar setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home images={images} />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
