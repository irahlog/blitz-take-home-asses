import React from "react";
import { styled } from "goober";
import { state } from "../store";
import { useSnapshot } from "valtio";

const SliderContainer = styled("input")`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  margin: 10px 0;
  height: 10px;
  background-color: #12161d;

  /* Track styles */
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    border-radius: 4px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9), #19d25f);
  }

  /* Thumb styles */
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 30px;
    width: 30px;
    background: #fff;
    border-radius: 50%;
    cursor: pointer;
    margin-top: -9.5px;
  }
`;

const Slider: React.FC = () => {
  const snap = useSnapshot(state);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    state.sliderValue = parseFloat(event.target.value);
  };

  return (
    <SliderContainer
      type="range"
      min={snap.minSliderValue}
      max={snap.maxSliderValue}
      step={snap.sliderStep}
      value={snap.sliderValue}
      onChange={handleSliderChange}
    />
  );
};

export default Slider;
