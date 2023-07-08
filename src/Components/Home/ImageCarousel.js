import Carousel from 'react-bootstrap/Carousel';
import pizzaImage1 from "./Images/pizza_image1.jpg"
import pizzaImage2 from "./Images/pizza_image2.jpg"
import pizzaImage3 from "./Images/pizza_image3.jpg"
import "./ImageCarousel.css"

import { useState } from 'react';


function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pizzaImage1}
          alt="First slide"
          id='img1'
          />
        <Carousel.Caption>
          <h3>Best Pizza</h3>
          <p>Just one slice is enough to make you hungry.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pizzaImage2}
          alt="Second slide"
          id='img2'
        />
        

        <Carousel.Caption>
          <h3>Fresh Pizza</h3>
          <p>We make Fresh and newly baked Pizza everyday.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pizzaImage3}
          alt="Third slide"
          id='img3'
          />

        <Carousel.Caption>
          <h3>Variety Pizza</h3>
          <p>
            We have lots of variety of pizza.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;