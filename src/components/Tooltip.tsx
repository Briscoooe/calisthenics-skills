import React from "react";
import "./Tooltip.css";

// does the bottom of the tooltip touch the bottom of the page?
// if so the bottom of the tooltip is atthe samelevel as the bottom of the box.

function Tooltip() {
  return (
    <div className="Tooltip__hover-container">
      <div className="Tooltip">
        <h1 className="Tooltip__title">Hey there</h1>
        <p className="Tooltip__content">Some information</p>
      </div>
    </div>
  );
}

export default Tooltip;
