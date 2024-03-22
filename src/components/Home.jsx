import React from "react";

const Home = ({ images }) => {
  return (
    <>
      <div className="container-fluid">
        {images.map((image) => (
          <div key={image.id} className="items">
            <img src={image.src.medium} alt={image.photographer} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
