import { proxy } from "valtio";

interface StoreState {
  sliderValue: number;
  minSliderValue: number;
  maxSliderValue: number;
  sliderStep: number;
}

export const state = proxy<StoreState>({
  sliderValue: 0, // Initial value for the slider
  minSliderValue: 0, // Minimum value for the slider
  maxSliderValue: 100, // Maximum value for the slider
  sliderStep: 0.1, // Step value for the slider
});
