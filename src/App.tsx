import { styled } from "goober";

import HeadshotBar from "./widgets/HeadshotBar";
import HeadshotSlider from "./widgets/HeadshotSlider";
import HeadshotStats from "./widgets/HeadshotStats";

const AppContainer = styled("div")`
  background-color: #000000;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <HeadshotBar />
      <HeadshotSlider />
      <HeadshotStats />
    </AppContainer>
  );
}

export default App;
