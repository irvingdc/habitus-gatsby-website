import React from "react";
import classes from "./Lattice.module.less";

export default ({ img, model, selected, selectable, click, small }) => (
  <div
    onClick={click ? () => click(model) : () => {}}
    className={[
      classes.container,
      selected ? classes.selected : "",
      selectable ? classes.selectable : "",
      small ? classes.small : ""
    ].join(" ")}
  >
    <img src={img} title="Celosia" alt="Celosia" />
  </div>
);
