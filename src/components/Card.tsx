import React from "react";
import { styled } from "goober";

const CardContainer = styled("div")`
  background-color: #12161d;
  padding: 25px;
  margin-bottom: 65px;
  border-radius: 6px;
`;

interface CardProps {
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <CardContainer>{children}</CardContainer>
);

export default Card;
