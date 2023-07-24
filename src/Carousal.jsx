import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FeaturedCategory from "./FeaturedCategories";

export default function CarouselFun() {
  const onChange = (selectedIndex, selectedSlide) => {
    // Handle onChange event here if needed
  };

  const onClickItem = (index, item) => {
    // Handle onClickItem event here if needed
  };

  const onClickThumb = (index, item) => {
    // Handle onClickThumb event here if needed
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-row flex">
        <div className="carousel-content flex justify-center">
          <Carousel
            autoPlay
            width={650}
            onChange={onChange}
            onClickItem={onClickItem}
            onClickThumb={onClickThumb}
          >
            <div>
              <img
                className="images"
                src="https://img.freepik.com/free-vector/desktop-computer-concept-illustration_114360-13052.jpg?w=1380&t=st=1690236470~exp=1690237070~hmac=50bb44b9c9cb67ab07bc714582d4ab48ba391c1da8e4e805a74557dc80f99a54"
                alt="Slide 1"
              />
            </div>
            <div>
              <img
                className="images"
                src="https://img.freepik.com/free-vector/professional-desk-with-isometric-perspective_23-2147687154.jpg?w=826&t=st=1690236491~exp=1690237091~hmac=81175f1f3a6d082e959272e70cd310f0c570397f4efdf97ab80ea287bb7df391"
                alt="Slide 2"
              />
            </div>
            <div>
              <img
                className="images"
                src="https://img.freepik.com/free-vector/modern-desktop-compute-concept-illustration_114360-12156.jpg?w=1380&t=st=1690236400~exp=1690237000~hmac=a2be1fbf6cf128aea17f24307ce51b207e5a1322ab680ce873f8dfaad4094088"
                alt="Slide 3"
              />
            </div>
            <div>
              <img
                className="images"
                src="https://img.freepik.com/free-vector/modern-desktop-computer-concept-illustration_114360-11616.jpg?w=826&t=st=1690236428~exp=1690237028~hmac=aa4c92b2d8da4fc5dfe6f11f2a4382c7b7f80cd652bb4088b7fd922fa35527b6"
                alt="Slide 4"
              />
            </div>
            <div>
              <img
                className="images"
                src="https://img.freepik.com/free-vector/modern-desktop-computer-concept-illustration_114360-16235.jpg?w=1380&t=st=1690236445~exp=1690237045~hmac=60d76f2607c1d04cf31338ac3b650ca6579223a00ff7cd90f3589cfb3f19325c"
                alt="Slide 5"
              />
            </div>
            <div>
              <img
                className="images"
                src="https://img.freepik.com/free-vector/desktop-computer-concept-illustration_114360-13052.jpg?w=1380&t=st=1690236470~exp=1690237070~hmac=50bb44b9c9cb67ab07bc714582d4ab48ba391c1da8e4e805a74557dc80f99a54"
                alt="Slide 6"
              />
            </div>
          </Carousel>
        </div>
        <div className="side-content">
          <div
            className="col-md-12 col-sm-12 col-12"
            style={{
              paddingLeft: " 0px",
              paddingRight: " 0px",
              textAlign: " center",
            }}
          >
            <a href="#">
              <img
                style={{ height: "220px" }}
                src="https://ik.imagekit.io/fepy/cdn/wysiwyg/Home/NewLayout/App-Download.png"
                alt=""
              />
            </a>
          </div>
          <div
            className="col-md-12 col-sm-12 col-12 mt-2"
            style={{
              paddingLeft: " 0px",
              paddingRight: " 0px",
              textAlign: " center",
            }}
          >
            <a href="/request-a-quote">
              <img
                style={{ height: "220px" }}
                src="https://ik.imagekit.io/fepy/cdn/wysiwyg/Home/NewLayout/RFQ.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    <div className="featured-categories">
    <FeaturedCategory />
    </div>
    </div>
  );
}
