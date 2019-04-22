import React from "react";
import Images from "./Images";

const About = () => {
  return (
    <section className="section-about" id="about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-seconday">Sing Color!</h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            結婚小物, 情人節
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            consectetur veniam nulla et! Amet vel minus molestias labore
            necessitatibus eveniet possimus sed, atque eos, provident voluptate
            fugit corporis iure facere.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Sing Color Test.
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique
            consectetur veniam nulla et! Amet vel minus molestias labore
            necessitatibus eveniet possimus sed, atque eos, provident voluptate
            fugit corporis iure facere.
          </p>
        </div>
        <Images />
      </div>
    </section>
  );
};

export default About;
