import React from "react";
import "./home.scss";
import Sound from "../sound/Sound";

function Home() {
  return (
    <div className="home--wrapper">
    <Sound/>

      <div className="home--logo">
        <img
          className="home--logo_img"
          src="https://static.wixstatic.com/media/e5e60c_cc0de99490764ccca7848c6ba9eb8ad6~mv2.png/v1/fill/w_853,h_119,al_c,q_85,usm_0.66_1.00_0.01/LOGO%20LENN%202019%20wit.webp"
          alt="lenn-logo"
        />
         <img
          className="home--logo_img_mobile"
          src="https://static.wixstatic.com/media/e5e60c_cc0de99490764ccca7848c6ba9eb8ad6~mv2.png/v1/fill/w_853,h_119,al_c,q_85,usm_0.66_1.00_0.01/LOGO%20LENN%202019%20wit.webp"
          alt="lenn-logo-mobile"
        />
      </div>
    </div>
  );
}

export default Home;
