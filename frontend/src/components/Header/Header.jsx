import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <div className="header-badges">
          <span className="badge">🚀 30-Min Fast Delivery</span>
          <span className="badge star">⭐ 4.9 Super Rated</span>
        </div>
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <a href="#explore-menu" className="header-btn">View Menu</a>
      </div>
    </div>
  );
};

export default Header;
