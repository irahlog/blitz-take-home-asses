import React from "react";
import { styled } from "goober";

const StatisticsContainer = styled("div")`
  width: 100%;
  background-color: #12161d;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  margin-top: 10px;
`;

const StatisticsHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
`;

const ProgressBarContainer = styled("div")`
  background-color: #25282f;
  height: 10px;
  border-radius: 2px;
  position: relative;
`;

const ProgressBarIndicator = styled("div")<{ width: number }>`
  width: ${({ width }) => width}%;
  height: 100%;
  background-color: #16452d;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 3px;
    height: 100%;
    background-color: #58c85f;
  }
`;

const ProgressBarMarker = styled("div")`
  width: 3px;
  height: 18px;
  background-color: #b37f35;
  position: absolute;
  top: -2.5px;
  right: 40px;
`;

const StatisticsText = styled("div")`
  font-size: 14px;
  color: #8c8e95;
`;

const ValueText = styled("div")`
  color: #e3e5ea;
  line-height: 1.5;
`;

interface StatisticsBarProps {
  label: string;
  value: string;
  progress: number;
}

const StatisticsBar: React.FC<StatisticsBarProps> = ({
  label,
  value,
  progress,
}) => {
  return (
    <StatisticsContainer>
      <StatisticsHeader>
        <StatisticsText>{label}</StatisticsText>
        <ValueText>{value}</ValueText>
      </StatisticsHeader>
      <ProgressBarContainer>
        <ProgressBarIndicator width={progress} />
        <ProgressBarMarker />
      </ProgressBarContainer>
    </StatisticsContainer>
  );
};

export default StatisticsBar;
