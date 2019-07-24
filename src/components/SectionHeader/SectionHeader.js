import React from "react";
import classes from "./SectionHeader.module.less";
import SocialRow from "components/SocialRow/SocialRow";

export default ({ type, img, title }) => (
  <div className={classes.container}>
    <div className={[classes.content, classes[type]].join(" ")}>
      <div className={classes.img}>
        <div className={classes.envelope}>
          <img src={img} />
        </div>
        <div className={classes.title}>
          <h1>{title}</h1>
        </div>
      </div>
      <SocialRow />
    </div>
  </div>
);
