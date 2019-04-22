import React from "react";
import PIC1 from "../../../assets/pic-1.jpg";
import PIC2 from "../../../assets/pic-2.jpg";
import PIC3 from "../../../assets/pic-3.jpg";

const Images = () => {
  return (
    <div className="col-1-of-2">
      <div className="composition">
        <img
          src={PIC1}
          alt="product 1"
          className="composition__photo composition__photo--p1"
        />
        <img
          src={PIC2}
          alt="product 2"
          className="composition__photo composition__photo--p2"
        />
        <img
          src={PIC3}
          alt="product 3"
          className="composition__photo composition__photo--p3"
        />
      </div>
    </div>
  );
};

export default Images;
