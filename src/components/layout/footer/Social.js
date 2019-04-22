import React from "react";

const Social = props => {
  const { type, link } = props.social;

  return (
    <li className="footer__item">
      <a
        href={link}
        className="footer__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {type}
      </a>
    </li>
  );
};

export default Social;
