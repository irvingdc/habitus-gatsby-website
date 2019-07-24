import React from "react";
import classes from "./Button.module.css";

export default ({ children, ghost, reverse, size, click }) => (
  <button
    className={[
      classes.button,
      ghost ? classes.ghost : "",
      reverse ? classes.reverse : "",
      size ? classes[size] : ""
    ].join(" ")}
    onClick={click ? click : () => {}}
  >
    {children}
  </button>
);
