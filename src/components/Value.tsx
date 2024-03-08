import React from "react";
import { styled } from "goober";

const ValueStyled = styled("p")`
  font-size: 24px;
  font-weight: bold;
  color: #19d25f;
  line-height: 1.5;
`;

interface ValueProps {
  children: React.ReactNode;
}

const Value: React.FC<ValueProps> = ({ children }) => (
  <ValueStyled>{children}</ValueStyled>
);

export default Value;
