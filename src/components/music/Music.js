import React from "react";
import "./music.scss";

function Music() {
  return (
    <div className="music--wrapper">
    <iframe title ='soundcloud'width="80%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/117203320&color=%232af598&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&mute=true"></iframe><div ><a href="https://soundcloud.com/musicbylenn" title="LENN" rel="noopener noreferrer" target="_blank" >LENN</a></div>
     {/* <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/117203320&color=%232af598&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> */}
    </div>
  );
 }
export default Music;
