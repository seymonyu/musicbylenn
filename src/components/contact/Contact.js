import React from "react";
import "./contact.scss";

function Contact() {
  const scrollDown = () => {
    window.scrollTo({ top: 1000, behavior: "smooth" });
  };
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="contact--wrapper">
      <p className="contact--scroll">scroll</p>
      <div onClick={scrollDown} class="contact-hello">
        <h1 className="contact--header">SAY HELLO</h1>
        <p className="contact--click">click</p>
      </div>
      <div onClick={scrollUp} class="contact--details">
        <div className="contact--booking">
          <h1 className="contact--detail_header">
            BOOKINGS | PRESS-KIT | QUESTIONS
          </h1>
          <h4 className="contact--email">
            <a
              className="contact--email_link"
              href="mailto:info@musicbylenn.com"
            >
              info@musicbylenn.com​
            </a>
          </h4>
        </div>
        <div className="contact--demo">
          <h1 className="contact--detail_header">DEMO | PROMO | COLLABS</h1>
          <h4 className="contact--email">
            {" "}
            <a
              className="contact--email_link"
              href="mailto:demo@musicbylenn.com"
            >
              demo@musicbylenn.com
            </a>
          </h4>
        </div>
        <p className="contact--up">up</p>
      </div>
    </div>
  );
}

export default Contact;
