import { Carousel } from "react-bootstrap";
import React from "react";

function ImageMenu() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../Assets/mainpage_carousel.png").default}
          alt="First slide"
        />
        <Carousel.Caption />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageMenu;
