import React, { Component } from "react";
import classes from "./BlogCard.module.css";
import { navigate } from "gatsby";

export default ({ title, img, date, href }) => (
  <div className={classes.card} onClick={() => navigate(href)}>
    <div
      className={classes.img}
      style={{
        background: `url(${img}) center center / cover no-repeat`
      }}
    />
    <h5>{title}</h5>
    <p>{date}</p>
  </div>
);
