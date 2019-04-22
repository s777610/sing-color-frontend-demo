import React from "react";

const InfoItem = props => {
  const { title, item1, phone, email } = props.info;

  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        <i className="feature-box__icon icon-basic-star" />
        <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
        <p className="feature-box__text">
          {item1} <br />
          Phone: {phone}
          <br />
          Email: {email}
        </p>
      </div>
    </div>
  );
};

export default InfoItem;
