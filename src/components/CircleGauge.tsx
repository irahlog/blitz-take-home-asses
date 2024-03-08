import React from "react";
import { styled } from "goober";
import { useSnapshot } from "valtio";

import { state } from "../store";

const GaugeContainer = styled("div")`
  position: relative;
  width: 200px;
  height: 200px;
`;

const GaugeBackground = styled("svg")`
  transform: rotate(-210deg);
  transform-origin: center;
  width: 100%;
  height: 100%;
`;

const GaugeForeground = styled("path")`
  fill: none;
  stroke: #58c85f;
  stroke-width: 10;
  transition: stroke-dashoffset 0.3s;
  transform: rotate(-240deg);
  transform-origin: center;
`;

const ValueContainer = styled("div")`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const ValueText = styled("div")`
  font-size: 30px;
  font-weight: bold;
  color: #19d25f;
  line-height: 1.5;
`;

const CircleGauge: React.FC = () => {
  const snap = useSnapshot(state);

  const radius = 80;
  const startAngle = 240;
  const endAngle = startAngle + (snap.sliderValue / 100) * 240;

  const circumference = radius * Math.PI * 2;
  const threeQuarterCircumference = circumference * 0.67;

  // Convert angles to radians
  const startRadians = (Math.PI * startAngle) / 180;
  const endRadians = (Math.PI * endAngle) / 180;

  const centerX = 100;
  const centerY = 100;
  const startX = centerX + radius * Math.cos(startRadians);
  const startY = centerY + radius * Math.sin(startRadians);
  const endX = centerX + radius * Math.cos(endRadians);
  const endY = centerY + radius * Math.sin(endRadians);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const arcPath =
    snap.sliderValue > 0
      ? `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`
      : "";

  return (
    <GaugeContainer>
      <GaugeBackground>
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="#333"
          strokeWidth="10"
          strokeDasharray={threeQuarterCircumference}
        />
        {snap.sliderValue > 0 && <GaugeForeground d={arcPath} />}
      </GaugeBackground>
      <ValueContainer>
        <ValueText>{snap.sliderValue.toFixed(1)}%</ValueText>
      </ValueContainer>
    </GaugeContainer>
  );
};

export default CircleGauge;
