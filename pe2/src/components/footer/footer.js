import React from 'react';
import './footer.css'; // Import a CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="box1">
        <h2>Where to find us</h2>
        <p>Explore a variety of venues suited for all kinds of events.</p>
      </div>

      <div className="box2">
        <h2> Contact Us </h2>
        <p>Explore a variety of venues suited for all kinds of events.</p>
      </div>

      <div className="box3">
        <h2> Socials </h2>
        <ul className="social-list">
  <li><FaFacebook /></li>
  <li><FaTwitter /></li>
  <li><FaInstagram /></li>
  <li><FaTiktok /></li>
</ul>
      </div>    
    </footer>
  );
};

export default Footer;

