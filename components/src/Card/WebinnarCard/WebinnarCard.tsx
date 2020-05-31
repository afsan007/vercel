import React, { FC } from "react";
import { Card, Grid, CardMedia, Avatar, Typography } from "@material-ui/core";
import styled from "styled-components";
import { WebbinarKeyWords } from "../../KeyWords/KeyWords";
import moment from "jalali-moment";
// import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

const WebCard = styled(Card)`
    font-family: "IRANSans";
    margin: 0 auto;
    margin-top: 50px;
    width:260px;  
    justifyContent: 'space-between', 
    flexDirection: 'column'
    border-radius: 5px;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    padding: 13px 5px 13px 5px;  
    display: grid;
    grid-template-rows: auto 1px auto;
    box-sizing: content-box;
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

// const Like = styled.a`
//   font-family: "IRANSans";
//   float: left;
//   color: grey;
//   &:hover {
//     color: red;
//   }
// `;

const remainingdays = (webinarDate) => {
  let remainingDays ;
  let remaininghours ;
  if (moment().isBefore(moment(webinarDate))) {
    const momentWebinarDate = moment(webinarDate);
    const remaining = momentWebinarDate.diff(moment(), "hours");
    remainingDays = Math.floor(remaining / 24);
    remaininghours = remaining - remainingDays * 24;
  } else {
    const momentWebinarDate = moment(webinarDate);
    const remaining = moment().diff(momentWebinarDate, "hours");
    remainingDays = Math.floor(remaining / 24);
    remaininghours = remaining - remainingDays * 24;
  }
  return { remainingDays, remaininghours };
};

export interface WebbinarCardProps {
  id: string;
  presenterId?: string;
  name: string;
  image: string;
  presenter?: string;
  presenterImage?: string;
  keywords: string[];
  date: string;
  link: (children: JSX.Element, id: string) => JSX.Element;
  presenterLink?: (children: JSX.Element, id: string) => JSX.Element;
}

export const WebbinarCard: FC<WebbinarCardProps> = ({
  id,
  presenterId,
  name,
  image,
  presenter,
  presenterImage,
  keywords,
  date,
  link,
  presenterLink,
}) => {
  const remainingDay = moment().isBefore(moment(date)) ? (
    <Grid item xs={6}>
      <Title>ساعت دیگر</Title>
    </Grid>
  ) : (
    <Grid item xs={6}>
      <Title>ساعت پیش</Title>
    </Grid>
  );
  const avatar =
    presenterLink && presenterId ? (
      presenterLink(
        <PresenterAvatar
          aria-label="recipe"
          src={presenterImage}
          title={presenter}
        />,
        presenterId
      )
    ) : (
      <div></div>
    );
  const presenterName =
    presenterLink && presenterId ? (
      presenterLink(
        <Title>
          ارائه دهنده <NameText> {presenter} </NameText>
        </Title>,
        presenterId
      )
    ) : (
      <div></div>
    );
  return (
    <WebCard>
      {link(<MyMedia image={image} title={name} />, id)}
      {avatar}
      {link(<WebbinarName>{name}</WebbinarName>, id)}
      <FatherGrid
        xs={12}
        container
        direction="row"
        justify="flex-start"
        alignItems="baseline"
      >
        <Grid item xs={12}>
          {presenterName}
        </Grid>
      </FatherGrid>
      <FatherGrid
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
        xs={12}
        container
        direction="row"
        justify="center"
        alignItems="flex-end"
      >
        <Grid item xs={3}>
          <Title>تاریخ</Title>
        </Grid>
        <Grid item xs={9}>
          <NameText>
            {" "}
            {moment(date.toString(), "YYYY-M-D HH:mm:ss ")
              .add(3, "hours")
              .locale("fa")
              .format("HH:mm YYYY-M-D  ")}
          </NameText>
        </Grid>
        {/*TODO: Like should implenment in the future with our server-side or repo after authenticate */}
        {/* <Grid item xs={4} >
                            <Like href="#">
                                <FavoriteBorderOutlinedIcon />
                            </Like>
                        </Grid>                                          */}
      </FatherGrid>
      <FatherGrid
        xs={12}
        container
        direction="row"
        justify="center"
        alignItems="flex-end"
      >
        <Grid item xs={2}>
          <NameText>{remainingdays(date).remainingDays}</NameText>
        </Grid>
        <Grid item xs={2}>
          <Title>روز</Title>
        </Grid>
        <Grid item xs={2}>
          <NameText>{remainingdays(date).remaininghours}</NameText>
        </Grid>
        {remainingDay}
      </FatherGrid>
    </WebCard>
  );
};

export default WebbinarCard;
