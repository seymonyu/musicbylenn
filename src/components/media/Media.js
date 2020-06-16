import React from "react";
import "./media.scss";
import { data } from "../../API/data";
import { SRLWrapper } from "simple-react-lightbox";


function Media() {
  const images = data.images;
  const options = {
  settings: {

    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  buttons: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
 size: "40px",
   iconColor: '#009efd',
    showNextButton:true,
    showPrevButton: true,
    
  },
  caption: {
    captionColor: "#ffffff",
    captionFontFamily: "Roboto, sans-serif",
    captionFontWeight: "300",
   
  }
};

  return (
    <div className="media--wrapper">
       <SRLWrapper options={options}>
      <div className= "media--gallery">
        {images.map((item, index) => (
          <div className="media--grid">
          <img
           
            className= "media--gallery_img"
            key={index}
            src={item.url}
            alt={item.caption}
          />
          </div>
        ))}
      </div>
        </SRLWrapper>
    </div>
  );
}

export default Media;
