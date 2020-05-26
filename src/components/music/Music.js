import React from "react";
import "./music.scss";

function Music() {
  return (
    <div className="music--wrapper">
      <div className="music--spotify">
        <a
          href="https://open.spotify.com/artist/6D53Kee5eQV6bW3TBNWIzE"
          target="_blank"
        >
          <img
            className="music--img"
            src="https://i.scdn.co/image/90d8d3ea4b10c8375ca60c6cca52f6c9541b03fe"
          ></img>
        </a>
        <div className="bd">
          <button className="music--button" title="Spotify'da takip et">
            <span className="bt-icon"></span>
            <span className="bt-text">Takip Et</span>
          </button>
          <div class="count" data-followers="163">
            <div class="count-num front">163</div>
            <div class="count-num back">+1</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;
