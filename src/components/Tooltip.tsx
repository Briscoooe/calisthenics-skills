import React from "react";
import "./Tooltip.css";
import HSeparator from "./ui/HSeparator";

// does the bottom of the tooltip touch the bottom of the page?
// if so the bottom of the tooltip is atthe samelevel as the bottom of the box.
interface Props {
  tooltipTitle?: string;
  tooltipDescription?: string;
}

function Tooltip({
  tooltipTitle = "Title",
  tooltipDescription = "Some information"
}: Props) {
  return (
    <div className="Tooltip__hover-container">
      <div className="Tooltip">
        <h1 className="Tooltip__title">{tooltipTitle}</h1>
        <HSeparator />
        <p className="Tooltip__content">{tooltipDescription}</p>
      </div>
    </div>
  );
}

export default Tooltip;
