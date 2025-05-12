import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="simple-footer">
      <div className="footer-links">
        <a href="#">About</a>
        <a href="#">Blog</a>
        <a href="#">Team</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
        <a href="#">Terms</a>
      </div>
      <div className="footer-icons">
        <a href="#"><BsFacebook /></a>
        <a href="#"><BsInstagram /></a>
        <a href="#"><BsTwitter /></a>
        <a href="#"><BsGithub /></a>
        <a href="#"><BsDribbble /></a>
      </div>
      <p className="footer-copy">© 2021 SomeCompany, Inc. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
