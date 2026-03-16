import React from "react";
import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="footer-logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
            nostrum iure suscipit maiores non harum incidunt unde magnam
            molestias ipsum qui vel aut natus aspernatur ipsa dignissimos,
            numquam assumenda deserunt.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/profile.php?id=100022417778040" target="_blank" rel="noreferrer">
              <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="https://www.instagram.com/ramnayak._/" target="_blank" rel="noreferrer">
              <img src={assets.instagram_icon} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/ram-chandra-nayak-7594a121a/" target="_blank" rel="noreferrer">
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+92-308-4900522</li>
            <li>contact@crazybite.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2026 @ CrazyBite.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
