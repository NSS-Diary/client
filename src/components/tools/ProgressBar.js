import React from "react";
import ProgressProvider from "./ProgressProvider";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./ProgressProvider";
const ProgressBar = ({ percent, color }) => {
  const [valueEnd, setValueEnd] = React.useState(percent);
  return (
    <AnimatedProgressProvider
      valueStart={0}
      valueEnd={percent}
      duration={1.4}
      easingFunction={easeQuadInOut}
    >
      {(value) => {
        const roundedValue = Math.round(value);
        return (
          <CircularProgressbar
            value={value}
            text={`${roundedValue}%`}
            styles={buildStyles({
              pathTransition: "none",
              trailColor: "#7493BC",
              pathColor: color,
              textColor: "#3E4756",
            })}
          />
        );
      }}
    </AnimatedProgressProvider>
  );
};

export default ProgressBar;
