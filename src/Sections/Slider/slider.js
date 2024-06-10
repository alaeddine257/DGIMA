import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
import pyfac from '../../assets/images/py.jpg';
import nmtc from '../../assets/images/nmtc.jpg';
import lorem from '../../assets/images/lorem.jpg';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      const images = document.querySelectorAll('.carousel-image');
      if (images.length > 0) {
        const firstImage = images[0];
        const container = firstImage.parentNode.parentNode;
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const aspectRatio = firstImage.naturalWidth / firstImage.naturalHeight;

        let imageWidth = containerWidth;
        let imageHeight = containerWidth / aspectRatio;

        if (imageHeight > containerHeight) {
          imageHeight = containerHeight;
          imageWidth = containerHeight * aspectRatio;
        }

        for (let i = 0; i < images.length; i++) {
          images[i].style.width = imageWidth + 'px';
          images[i].style.height = imageHeight + 'px';
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Appel initial pour ajuster les images

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

        <div className="carousel-container">
          <Carousel className="custom-carousel" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img className="carousel-image" src={lorem} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={pyfac} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src={nmtc} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
  );
}

export default Slider;
