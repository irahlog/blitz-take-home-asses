import React from "react";
import { styled } from "goober";
import { useSnapshot } from "valtio";

import Card from "../components/Card";
import CircleGauge from "../components/CircleGauge";
import BarChart from "../components/BarChart";
import StatisticsBar from "../components/StatisticsBar";

import { state } from "../store";

const HeadshotStats: React.FC = () => {
  const snap = useSnapshot(state);

  const CircleContainer = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `;

  const HeadshotText = styled("p")`
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 73%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #d6d8de;
    z-index: 1;
  `;
  const LabelText = styled("p")`
    font-size: 14px;
    margin-bottom: 20px;
    color: #8c8e95;
  `;

  const ValueText = styled("span")`
    font-size: 14px;
    font-weight: bold;
    color: #19d25f;
  `;

  return (
    <Card>
      <CircleContainer>
        <CircleGauge />
        <HeadshotText>Headshot</HeadshotText>
        <LabelText>
          <ValueText>{snap.sliderValue}%</ValueText> higher than your last 15
          average
        </LabelText>
      </CircleContainer>
      <BarChart
        values={[65, 55, 60, 40, 68, 72, 70, 60, 63, 55, 57, 35, 70, 66, 95]}
      />
      <StatisticsBar label="Statistics" value="999" progress={99} />
      <StatisticsBar label="Statistics" value="999" progress={99} />
      <StatisticsBar label="Statistics" value="999" progress={99} />
    </Card>
  );
};

export default HeadshotStats;
