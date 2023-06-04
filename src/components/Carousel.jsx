import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={previousImage}>Previous</button>
      <img src={images[currentImageIndex]} alt="Carousel Image" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Carousel;
