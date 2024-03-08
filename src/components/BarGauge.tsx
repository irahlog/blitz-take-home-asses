import React from "react";
import { styled } from "goober";

const BarContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1px;
  overflow: hidden;
  padding: 4px;
`;

const Bar = styled("div")`
  height: 32px;
  flex-grow: 1;
  background-color: #58c85f;
  &:first-child {
    border-radius: 8px 0 0 8px;
  }
  &:nth-last-child(1) {
    border-radius: 0 8px 8px 0;
  }
`;
interface BarGaugeProps {
  sliderValue: number;
}

const BarGauge: React.FC<BarGaugeProps> = ({ sliderValue }) => {
  // Slider value is from 0 to 75
  const filledBars = Math.round((sliderValue / 75) * 14);

  return (
    <BarContainer>
      {[...Array(14)].map((_, index) => (
        <Bar
          key={index}
          style={{
            width: "100%",
            backgroundColor: index < filledBars ? "#1ad25e" : "#282a30",
          }}
        />
      ))}
    </BarContainer>
  );
};

export default BarGauge;
