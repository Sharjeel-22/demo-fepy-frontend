import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FeaturedCategory from "./FeaturedCategories";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function FeaturedCategoryCarousel() {
  const onChange = (selectedIndex, selectedSlide) => {
    // Handle onChange event here if needed
  };

  const onClickItem = (index, item) => {
    // Handle onClickItem event here if needed
  };

  const onClickThumb = (index, item) => {
    // Handle onClickThumb event here if needed
  };
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="featured-category-main">
      <Slider {...settings} autoplay>
        <div className="box">
          <a href="https://www.fepy.com/home-improvement">
            <img
              className="swiper"
              src="https://ik.imagekit.io/fepy/cdn/catalog/category/thumbnail/Cater-05.png"
              alt="Home &amp; Furniture"
              width="250"
              height="250"
            />
          </a>
          <div className="cate-name">
            <p>Home &amp; Furniture</p>
          </div>
        </div>
        <div className="box">
          <a href="https://www.fepy.com/building-material/construction-chemical-materials">
            <img
              className="swiper"
              src="https://ik.imagekit.io/fepy/cdn/catalog/category/thumbnail/Cater-07.png"
              alt="Construction Chemical"
              width="250"
              height="250"
            />
          </a>
          <div className="cate-name">
            <p>Construction Chemical</p>
          </div>
        </div>
        <div className="box">
          <a href="https://www.fepy.com/building-material/gypsum">
            <img
              className="swiper"
              src="https://ik.imagekit.io/fepy/cdn/catalog/category/thumbnail/Cater-08.png"
              alt="Gypsum"
              width="250"
              height="250"
            />
          </a>
          <div className="cate-name">
            <p>Gypsum</p>
          </div>
          <div className="box">
          <a href="https://www.fepy.com/electrical-lightning">
            <img
              className="swiper"
              src="https://ik.imagekit.io/fepy/cdn/catalog/category/thumbnail/Cater-09.png"
              alt="Electrical &amp; Lighting"
              width="250"
              height="250"
            />
          </a>
          <div className="cate-name">
            <p>Electrical &amp; Lighting</p>
          </div>
        </div>
        <div className="box">
          <a href="https://www.fepy.com/plumbing">
            <img
              className="swiper"
              src="https://ik.imagekit.io/fepy/cdn/catalog/category/thumbnail/Cater-10.png"
              alt="Plumbing"
              width="250"
              height="250"
            />
          </a>
          <div className="cate-name">
            <p>Plumbing</p>
          </div>
        </div>
        </div>

      </Slider>
    </div>
  );
}
