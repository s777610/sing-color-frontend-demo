import React, { useState } from "react";

const Navbar = () => {
  const [isNavbarOpen, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!isNavbarOpen);
  };

  return (
    <div className="navigation">
      <input
        type="checkbox"
        checked={isNavbarOpen}
        onChange={toggleNavbar}
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a
              href="#header"
              className="navigation__link"
              onClick={toggleNavbar}
            >
              <span>01</span>Sing Color
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#about"
              className="navigation__link"
              onClick={toggleNavbar}
            >
              <span>02</span>產品相關
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#contact"
              className="navigation__link"
              onClick={toggleNavbar}
            >
              <span>03</span>聯絡資訊
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#order"
              className="navigation__link"
              onClick={toggleNavbar}
            >
              <span>04</span>立即下單
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#footer"
              className="navigation__link"
              onClick={toggleNavbar}
            >
              <span>05</span>社群媒體
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
