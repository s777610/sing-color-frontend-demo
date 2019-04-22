import React from "react";
import { infos } from "../../../data/infos";
import InfoItem from "./Info";

const Info = () => {
  return (
    <section className="section-features" id="contact">
      <div className="row">
        {infos.map(info => {
          return <InfoItem key={info.title} info={info} />;
        })}
      </div>
    </section>
  );
};

export default Info;
