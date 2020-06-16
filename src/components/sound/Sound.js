import React, { Component } from "react";
import Sound from "react-sound"
export default class Alert extends Component {
render() {
 return (
   <Sound
   url="https://open.spotify.com/track/5LbhhqwMKFPEYVBhbwfD4k?si=auvmV73YQxOWei-qXYswuw&mute=1"
   playStatus={Sound.status.PLAYING}
   onLoading={this.handleSongLoading}
   onPlaying={this.handleSongPlaying}
   onFinishedPlaying={this.handleSongFinishedPlaying}
   />
  );
 }
}