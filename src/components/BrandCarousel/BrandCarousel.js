import React from "react";
import { Carousel } from "react-bootstrap";
import BrandImage1 from "../../resources/Brand1.png";
import BrandImage2 from "../../resources/Brand2.png";
const BrandCarousel = () => {
  return (
    <div className="mb-5">
      <h4 className="fw-bold">Brand Partners</h4>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={BrandImage1}
            style={{ height: "180px" }}
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={BrandImage2}
            style={{ height: "180px" }}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
