import React from "react";
import "./music.scss";

function Music() {
  return (
    <div className="music--wrapper">
      <iframe src="https://open.spotify.com/embed/artist/6D53Kee5eQV6bW3TBNWIzE" width="1000" height="450" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  );
 }
export default Music;
