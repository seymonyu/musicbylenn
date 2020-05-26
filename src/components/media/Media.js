import React from "react";
import "./media.scss";

function Media() {
  const images = [
    "https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/20/06/47/mountain-5195052_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/21/13/33/blue-flax-5200811_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/20/06/47/mountain-5195052_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/21/13/33/blue-flax-5200811_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/20/06/47/mountain-5195052_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/21/13/33/blue-flax-5200811_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/20/06/47/mountain-5195052_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/21/13/33/blue-flax-5200811_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/24/02/00/barber-shop-5212059_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/20/06/47/mountain-5195052_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/05/21/13/33/blue-flax-5200811_960_720.jpg",
  ];

  return (
    <div className="media--wrapper">
      <div className="media--gallery">
        {images.map((item, index) => (
          <img
            className="media--gallery_img "
            key={index}
            src={item}
            alt="index"
          />
        ))}
      </div>
    </div>
  );
}

export default Media;
