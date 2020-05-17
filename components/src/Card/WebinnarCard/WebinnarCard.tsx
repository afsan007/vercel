import React, { FC } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { WebbinarKeyWords } from "../../KeyWords/KeyWords";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

const WebCard = styled(Card)`
  font-family: "IRANSans";
  margin: 0 auto;
  margin-top: 50px;
  width: 243px;
  min-height: 327px;
  border-radius: 5px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 13px 5px 13px 5px;
`;

const FatherGrid = styled(Grid)`
  margin-top: 15px;
  font-family: "IRANSans";
`;

const MyMedia = styled(CardMedia)`
  width: 231px;
  height: 145px;
  margin: 0 auto;
  cursor: pointer;
  object-fit: contain;
`;

const KeyWords = styled(WebbinarKeyWords)`
  font-family: "IRANSans";
  color: #323232;
`;

const PresenterAvatar = styled(Avatar)`
  float: right;
  bottom: 15px;
  right: 22px;
`;

const WebbinarName = styled(Typography)`
  font-family: "IRANSans";
  font-size: 18px;
  letter-spacing: -0.29px;
  color: #323232;
  cursor: pointer;
  margin: 40px 15px 0px 0px;
`;

const Title = styled(Typography)`
  font-family: "IRANSans";
  font-size: 16px;
  letter-spacing: -0.29px;
  color: #c2c2c2;
  margin: 0px 15px 0px 0px;
`;

const NameText = styled.span`
  font-family: "IRANSans";
  color: #323232;
  font-size: 14px;
  margin-right: 15px;
`;

const Like = styled.a`
  font-family: "IRANSans";
  float: left;
  color: grey;
  &:hover {
    color: red;
  }
`;

export interface WebbinarCardProps {
  id: string;
  name: string;
  image: string;
  presenter: string;
  presenterImage: string;
  keywords: string[];
  date: string;
  link: (children: JSX.Element, id: string) => JSX.Element;
}

export const WebbinarCard: FC<WebbinarCardProps> = ({
  id,
  name,
  image,
  presenter,
  presenterImage,
  keywords,
  date,
  link,
}) => {
  return (
    <WebCard>
      {link(<MyMedia image={image} title={name} />, id)}
      <PresenterAvatar
        aria-label="recipe"
        src={presenterImage}
        title={presenter}
      />
      {link(<WebbinarName>{name}</WebbinarName>, id)}
      <FatherGrid
        item
        xs={12}
        container
        direction="row"
        justify="flex-start"
        alignItems="baseline"
      >
        <Grid item xs>
          <Title>
            ارائه دهنده <NameText> {presenter} </NameText>
          </Title>
        </Grid>
      </FatherGrid>
      <FatherGrid
        item
        xs={12}
        container
        direction="row"
        justify="center"
        alignItems="baseline"
      >
        <Grid item xs={4}>
          <Title>کلیدواژه ها</Title>
        </Grid>
        <Grid item xs={8}>
          <KeyWords keywords={keywords} />
        </Grid>
      </FatherGrid>
      <FatherGrid
        item
        xs={12}
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={4}>
          <Title>تاریخ</Title>
        </Grid>
        <Grid item xs={4}>
          <NameText>{date}</NameText>
        </Grid>
        <Grid item xs={4}>
          <Like href="#">
            <FavoriteBorderOutlinedIcon />
          </Like>
        </Grid>
      </FatherGrid>
    </WebCard>
  );
};

export default WebbinarCard;
