import React from "react";
import "./home.scss";
import Sound from "../sound/Sound";
import whitelogo from "../../logo/whitelogo.png"

function Home() {
  return (
    <div className="home--wrapper">
    <Sound/>

      <div className="home--logo">
        <img
          className="home--logo_img"
          src={whitelogo}
          alt="lenn-logo"
        />
         <img
          className="home--logo_img_mobile"
          src={whitelogo}
          alt="lenn-logo-mobile"
        />
      </div>
    </div>
  );
}

export default Home;
