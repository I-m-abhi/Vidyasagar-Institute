import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <>
    <div className="vidyasagar">
    <div className="footer">
      <div className="school">
        <h1>Vidyasagar Institute</h1>
        <hr />
      </div>
      <div className="events">
        <li>News & Events</li>
        <li>Photo Gallery</li>
        <li>Quiz</li>
        <li>Holidays</li>
        <li>Facilities</li>
        <hr />
      </div>
      <div className="founder">
        <li>Founder</li>
        <li>Co-Founder</li>
        <li>Teachers</li>
        <hr />
      </div>
    </div>
      <div className="developer">
        <hr />
        copyright: abhisasa2001@gmail.com <br />
        Developer: Abhishek Kumar
        <hr />
      </div>
    </div>
    </>
  )
}

export default Footer;
