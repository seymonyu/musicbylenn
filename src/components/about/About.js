import React, { useState } from "react";
import "./about.scss";
import Lenn from "../../images/lenns.jpg";
import Lennart from "../../images/lennart.JPG";
import Len from "../../images/len.JPG";

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
        Words can’t describe the special connection between these men. They are not only sharing the same name; they also share the same passion for music. Lennart Hoftijzer and Len Bloemers are two youth friends who have grown up together in Winterswijk, the Netherlands. Back in 2019, they formed the dj and producer duo ‘LENN’.Lennart is the man behind the knobs. He is self-taught and produces all the music himself. When he saw Martin Garrix, Hardwell and Dimitri Vegas & Like Mike performing at Mysteryland back in 2014, he was inspired and decided to start learning music production and DJ’ing.
Len started MC'ing in the summer of 2018. On a party, he thought the atmosphere could use a little boost. When he decided to pick up the microphone for the first time that night, it became clear that this would not be the last time. Len takes pleasure in entertaining the audience and sees mc'ing as an indispensable extension of the performance. With his inexhaustible energy and humor, he entertains every crowd in a unique way.
The energetic dance tracks produced by LENN have not gone unnoticed by the big names of the EDM scene. None other than Hardwell, Timmy Trumpet, Dimitri Vegas & Like Mike and Blasterjaxx have played music from LENN on the mainstages of the world's biggest dance festivals, including EDC in Mexico and Ultra Music Festival in Miami.
In addition, LENN has also released music on the label 'Green Room' of the former No. 1 DJ of the world Like Mike and LENN was allowed to create an official remix for Like Mike. LENN also has several releases on Rene Rodrigezz's Austrian label 'Big Smile Records'. Combined on all platforms, the counter stands at one million streams.
With lots of new music and collaborations on the way, LENN is working hard to make his mark on the EDM scene.
        </p>
      </div>
      <div className="about--container_white">
      <div className='about--wrapper_ind'>
        <div className="about--container_ind">
          <img className="about-img_ind" src={Lennart} alt="lennart" />
          <div className="about--box_ind">
            
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
