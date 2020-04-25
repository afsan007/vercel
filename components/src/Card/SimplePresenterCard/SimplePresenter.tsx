import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const PresenterCard = styled(Card)`
  font-family: "IRANSans";
  width: 185px;
  min-height: 220px;
  border-radius: 5px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 13px 5px 13px 5px;
  margin:0 auto;
  margin-bottom: 10px;
`;

const MyMedia = styled(CardMedia)`
  font-family: "IRANSans";
  width: 169px;
  height: 130px;
  margin: 0 auto;
  object-fit: contain;
`;

const FullName = styled(Typography)`
  font-family: "IRANSans";
  text-align: right;
  font-size: 18px;
  letter-spacing: -0.29px;
  color: #323232;
  margin-bottom: 5px;
`;

const Education = styled(Typography)`
  font-family: "IRANSans";
  text-align: right;
  font-size: 16px;
  letter-spacing: -0.25px;
  color: #c2c2c2;
`;

export interface SimplePresenterProps {
  name: string;
  image: string;
  education: string;
}

export const SimplePresenter = ({
  name,
  image,
  education,
}: SimplePresenterProps) => {
  return (
        <PresenterCard>
          <MyMedia image={image} title={name} />
          <CardContent>
            <FullName>{name}</FullName>
            <Education>{education}</Education>
          </CardContent>
        </PresenterCard>
  );
};

export default SimplePresenter;
