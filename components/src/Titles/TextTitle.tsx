import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styled from "styled-components";

const MyContainer = styled(Container)`
  text-align: ${props => props.dir}
`;

const SectionTitle = styled.span`
  font-family: "IRANSans";
  font-size: 21px;
  font-weight: bold;
  color: #323232
`;



export interface TextTitleProps {
  title: string;
  dir: string;
}

export const TextTitle = ({ title, dir}: TextTitleProps) => {
  return (
    <MyContainer dir = {dir} >
      <Typography variant="body2" color="textSecondary">
        <SectionTitle>{title}</SectionTitle>
      </Typography>
    </MyContainer>
  );
};

export default TextTitle;
