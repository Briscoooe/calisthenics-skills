import React from "react";
import classnames from "classnames";
import "./AngledLine.css";

interface Props {
  position: {
    topX: number;
    topY: number;
    bottomX: number;
    bottomY: number;
  };
  className: string;
  direction: "left" | "right";
}

function AngledLine({ position, direction, className }: Props) {
  const { topX, topY, bottomX } = position;

  // no one:
  // css:
  const leftHorizontalStyles = {
    left: `${topX - 3}px`,
    transform: "scaleX(-1)",
    transformOrigin: "0 0",
    top: `${topY + 24}px`,
    width: `${topX - bottomX - 6}px`
  };

  const rightHorizontalStyles = {
    left: `${topX + 3}px`,
    top: `${topY + 24}px`,
    width: `${bottomX - topX - 6}px`
  };

  return (
    <React.Fragment>
      <div
        className={classnames(`${className} AngledLine AngledLine--vertical`, {
          "AngledLine--rounded-bottom-right": direction === "right",
          "AngledLine--rounded-top-right": direction === "left"
        })}
        style={{
          top: `${topY - 1}px`,
          left: `${topX + 3}px`,
          width: "29px"
        }}
      />
      <div
        className={`${className} AngledLine AngledLine--horizontal`}
        style={
          direction === "left" ? leftHorizontalStyles : rightHorizontalStyles
        }
      />
      <div
        className={classnames(`${className} AngledLine AngledLine--vertical`, {
          "AngledLine--rounded-top-left": direction === "right",
          "AngledLine--rounded-bottom-left": direction === "left"
        })}
        style={{
          top: `${topY + 24}px`,
          left: `${bottomX + 3}px`,
          width: "31px"
        }}
      />
    </React.Fragment>
  );
}

export default AngledLine;
