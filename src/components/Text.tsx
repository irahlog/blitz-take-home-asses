import React from "react";
import { styled } from "goober";

const TextStyled = styled("p")`
  color: #8c8e95;
  line-height: 1.5;
`;

interface TextProps {
  className?: string;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ className, children }) => (
  <TextStyled className={className}>{children}</TextStyled>
);

export default Text;
