import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./slider.scss";

function Slider() {
  let sliderArr = [
    "https://scontent.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/100621654_348177959495286_1305776094600223606_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=0vq3HygE8wUAX87dsxi&oh=4e05aba682d3e282815d17d12bf440b7&oe=5EF5DFA4",
    2,
    3,
    4,
    5,
  ];
  const [x, setX] = useState(0);
  const props = useSpring({
    config: { duration: 1500 },
    opacity: 1,
    from: { opacity: 0 },
  });
  const goLeft = () => {
    x === 0 ? setX(-120 * (sliderArr.length - 1)) : setX(x + 120);
  };
  const goRight = () => {
    x === -120 * (sliderArr.length - 1) ? setX(0) : setX(x - 120);
  };
  return (
    <animated.div style={props}>
      <div className="slider-main">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="slide-item"
              style={{ transform: `translateX(${x}%)` }}
            >
              <img src={item} alt="items" />
            </div>
          );
        })}

        <button id="goLeft" onClick={goLeft}>
          click
        </button>
        <button id="goRight" onClick={goRight}>
          click
        </button>
      </div>
    </animated.div>
  );
}

export default Slider;
