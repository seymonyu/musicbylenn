import React, { useState } from "react";
import "./about.scss";
import Lenn from "../../images/Lenns.webp";
import Lennart from "../../images/lennart.webp";
import Len from "../../images/len.webp";

function About() {
  const [back, setBack] = useState("about--wrapper");

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setBack("about--wrapper_white");
    } else {
      setBack("about--wrapper");
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div className={back}>
      <div className="about--container">
        <img className="about--image" src={Lenn} alt="lenn" />
        <h1 className="about--header">ABOUT</h1>
        <p className="about--text">
          Lennart Hoftijzer and Len Bloemers are two youth-friends from the
          Netherlands, who founded the dj, producer and mc-duo 'LENN'. Their
          music is categorized in tech-house and future/electro house. The calm
          and perfectionist personality of Lennart is complemented by Len's
          uplifting energy, humor and enthusiasm. Because of this, they
          complement each other perfect in both the studio or stage. There are
          two more significant reasons for the phenomenal connection between
          these two personalities: their name and their passion for music. They
          love to share their passion and love for music with their audience.
        </p>
      </div>
      <div className="about--container_white">
      <div className='about--wrapper_ind'>
        <div className="about--container_ind">
          <img className="about-img_ind" src={Lennart} alt="lennart" />
          <div className="about--box_ind">
            {" "}
            <h3 className="about--header_ind">
              LENNART HOFTIJZER , DJ & PRODUCER
            </h3>
            <p className="about--text_ind">
              Lennart began with producing electronic dance music at the age of
              19. After visiting Mysterland in the Netherlands, he was deeply
              influenced by the music and performances from Hardwell, Dimitri
              Vegas & Like Mike and Martin Garrix. The next day, Lennart
              downloaded the DAW (digital audio workstation) FL Studio’, and
              taught himself how to compose tracks.{" "}
            </p>
          </div>
        </div>
        <div className="about--container_ind">
          <img className="about-img_ind" src={Len} alt="len" />
          <div className="about--box_ind">
            <h3 className="about--header_ind">LEN BLOEMERS , MC & DJ </h3>
            <p className="about--text_ind">
              Len started with MC'ing in the summer of 2017. On his own
              organized party, he realized the atmosphere could use a little
              boost. When he decided to grab for the first time, it became clear
              that this would not be the last time. Len gets his pleasure out of
              entertaining the public and he loves to be the extension of the
              music that is playing. With its inexhaustible energy and humor, he
              entertains every visitor.
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
