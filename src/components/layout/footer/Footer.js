import React from "react";
import { socials } from "../../../data/social";
import Social from "./Social";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              {socials.map(social => {
                return <Social key={social.type} social={social} />;
              })}
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{" "}
            <a
              href="https://s777610.github.io/weicheng-portfolio/#/"
              className="footer__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wei Cheng
            </a>
            . Copyright &copy; by Wei Cheng Hung
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
