import React from "react";
import "./promo.scss";

function Promo() {
  return (
    <div className="promo--wrapper">
      <div className="promo--container">
        <iframe
          title="promo"
          width="876"
          height="493"
          src="https://www.youtube.com/embed/id7cz9FxZpw?autoplay=1&mute=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Promo;
