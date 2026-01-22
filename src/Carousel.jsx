import { useState, useEffect } from 'react';
import { carouselConfig } from './carouselConfig';
import './Carousel.css';

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { images, intervalDuration } = carouselConfig;

  useEffect(() => {
    // Set up the interval to change images
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        // Loop back to the first image when reaching the end
        return (prevIndex + 1) % images.length;
      });
    }, intervalDuration);

    // Clean up the interval when component unmounts
    return () => clearInterval(interval);
  }, [images.length, intervalDuration]);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
}

export default Carousel;
