import React from "react";
import { Carousel } from "react-bootstrap";
import BrandImage1 from "../../resources/Brand1.png";
import BrandImage2 from "../../resources/Brand2.png";
const BrandCarousel = () => {
  return (
    <>
      <h4 className="fw-bold">Brand Partners</h4>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={BrandImage1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={BrandImage2} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default BrandCarousel;
