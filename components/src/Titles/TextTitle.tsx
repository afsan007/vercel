import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

const MyContainer = styled(Container)`
  text-align: center;
`;

const SectionTitle = styled.span`
  font-size: 21px;
  font-weight: bold;
  color: #323232
`;

export interface TextTitleProps {
  title: string;
}

export const TextTitle = ({ title }: TextTitleProps) => {
  return (
    <MyContainer>
      <Typography variant="body2" color="textSecondary">
        <SectionTitle>{title}</SectionTitle>
      </Typography>
    </MyContainer>
  );
};

export default TextTitle;
