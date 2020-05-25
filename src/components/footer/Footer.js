import React from "react";
import "./footer.scss";
import instagram from "../../icons/instagram.svg";
import facebook from "../../icons/facebook.svg";
import twitter from "../../icons/twitter.svg";
import youtube from "../../icons/youtube.svg";
import spotify from "../../icons/spotify.svg";
import soundcloud from "../../icons/soundcloud.svg";
import apple from "../../icons/apple.svg";

function Footer() {
  return (
    <div className="footer--wrapper">
      <div className="footer--text"> © 2019 LENN</div>
      <div className="footer--links">
        <ul className="footer--links_list">
          <li
            className="
          footer--links_item"
          >
            <a
              className="footer--links_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/musicbylenn/"
            >
              <img
                alt="instagram"
                className="footer--icon"
                src={instagram}
              ></img>
            </a>
          </li>
          <li
            className="
          footer--links_item"
          >
            <a
              className="footer--links_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/musicbylenn"
            >
              <img alt="twitter" className="footer--icon" src={twitter}></img>
            </a>
          </li>
          <li
            className="
          footer--links_item"
          >
            <a
              className="footer--links_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/musicbylenn"
            >
              <img alt="facebook" className="footer--icon" src={facebook}></img>
            </a>
          </li>
          <li
            className="
          footer--links_item"
          >
            <a
              className="footer--links_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCKsCZ6DOGjfLh__-MTE_OFA?view_as=subscriber"
            >
              <img alt="youtube" className="footer--icon" src={youtube}></img>
            </a>
          </li>
          <li
            className="
          footer--links_item"
          >
            <a
              className="footer--links_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://open.spotify.com/artist/6D53Kee5eQV6bW3TBNWIzE?si=bzhgkzBOTPq_TmicVTFABA"
            >
              <img alt="spotify" className="footer--icon" src={spotify}></img>
            </a>
          </li>
          <li
            className="
          footer--links_item"
          >
            <a
              className="footer--links_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://soundcloud.com/musicbylenn"
            >
              <img
                alt="soundcloud"
                className="footer--icon"
                src={soundcloud}
              ></img>
            </a>
          </li>
          <li
            className="
          footer--links_item"
          >
            <a
              className="footer--links_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://music.apple.com/nl/artist/lenn/1445923270"
            >
              <img alt="apple" className="footer--icon" src={apple}></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
