import React from "react";
import LOGO from "../../assets/sing_logo.png";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header__logo-box">
        <img src={LOGO} alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Sing Color</span>
          <span className="heading-primary--sub">Sing Your Colorful Life</span>
        </h1>

        <a href="#section-tours" className="btn btn--white btn--animated">
          Explore
        </a>
      </div>
    </header>
  );
};

export default Header;
