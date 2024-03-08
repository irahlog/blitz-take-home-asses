import React from "react";
import { styled } from "goober";

// Styled component for the bar chart container
const BarChartContainer = styled("div")`
  background-color: #12161d;
  padding: 4px;
  display: flex;
  align-items: flex-end;
  height: 100px;
  width: 100%;
  border-radius: 4px;
  position: relative;
  margin-bottom: 20px;
`;

// Styled component for the dotted line
const DottedLine = styled("div")`
  position: absolute;
  bottom: 56%;
  left: 0;
  width: 100%;
  border-top: 1px dashed #444;
  z-index: 1;
`;

// Styled component for individual bars
const Bar = styled("div")<{ height: number }>`
  width: calc((100% - 2px * 14) / 15);
  height: ${({ height }) => `${height}%`};
  margin-right: 5px;
  background-color: #25282f;
  position: relative;
  transition: background-color 0.3s ease;
  background-clip: content-box;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: #595e66;
  }

  &:last-child {
    margin-right: 0;
    background-color: #16452d;

    &:before {
      background-color: #1ad25e;
    }
  }
`;

interface BarChartProps {
  values: number[];
}

const BarChart: React.FC<BarChartProps> = ({ values }) => {
  return (
    <BarChartContainer>
      <DottedLine />
      {values.map((value, index) => (
        <Bar key={index} height={value} />
      ))}
    </BarChartContainer>
  );
};

export default BarChart;
