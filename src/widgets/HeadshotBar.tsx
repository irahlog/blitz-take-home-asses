import { styled } from "goober";
import { useSnapshot } from "valtio";

import BarGauge from "../components/BarGauge";
import Card from "../components/Card";
import Value from "../components/Value";

import { state } from "../store";

const ValueContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 8px;
`;

const WeaponText = styled("p")`
  color: #757981;
  font-size: 12px;
  margin-bottom: 10px;
  line-height: 1.5;
`;

const LabelText = styled("p")`
  font-size: 14px;
  margin-bottom: 20px;
  color: #8c8e95;
  line-height: 1.5;
`;

const HeadshotBar: React.FC = () => {
  const snap = useSnapshot(state);

  return (
    <Card>
      <ValueContainer>
        <Value>{snap.sliderValue.toFixed(1)}%</Value>
        <WeaponText>AK-47</WeaponText>
      </ValueContainer>
      <LabelText>Headshot</LabelText>
      <BarGauge sliderValue={snap.sliderValue} />
    </Card>
  );
};

export default HeadshotBar;
