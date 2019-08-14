import React from "react";
import classes from "./SocialRow.module.less";
import { facebook, instagram, whatsapp, phoneSolid } from "../../images";

export default ({ style, gray }) => (
  <div
    className={[classes.social, gray ? classes.gray : ""].join(" ")}
    style={style}
  >
    <a
      href="https://www.facebook.com/Habitus-1085345214958630/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={facebook} alt="Facebook" title="Facebook" />
    </a>
    <a
      href="https://www.instagram.com/habitus.mx/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={instagram} alt="Instagram" title="Instagram" />
    </a>
    <a
      href={window.innerWidth > 700 ? "https://wa.me/5212227254692" : "tel:5212227254692"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={window.innerWidth > 700 ? whatsapp : phoneSolid} alt="Phone Icon" title="Phone Icon" />
    </a>
  </div>
);
