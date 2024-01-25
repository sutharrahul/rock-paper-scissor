import React from "react";
import paperIcon from "./assets/paper.png";
import rockIcon from "./assets/rock.png";
import scissorIcon from "./assets/scissor.png";

export default function Icon({ icon, onClick }) {
  let iconSrc = rockIcon;
  switch (icon) {
    case "rock":
      iconSrc = rockIcon;
      break;
    case "paper":
      iconSrc = paperIcon;
      break;
    case "sicssor":
      iconSrc = scissorIcon;
      break;
  }

  return (
    <>
      <a href="javascript:void(0)" onClick={onClick}>
        <img src={iconSrc} className="logo" alt={icon} />
      </a>
    </>
  );
}
