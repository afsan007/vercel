import React from "react";
import styled from "styled-components";

const SectionTitle = styled.span`
  font-family: "IRANSans";
  font-size: 21px;
  font-weight: bold;
  color: #323232;
`;

export interface TextTitleProps {
  title: string;
  direction: string | null;
}

export const TextTitle = ({ title }: TextTitleProps) => {
  return <SectionTitle>{title}</SectionTitle>;
};

export default TextTitle;
