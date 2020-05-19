import React, { FC } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {
  WebbinarCard,
  WebbinarCardProps,
} from "../Card/WebinnarCard/WebinnarCard";
import { TextTitle } from "../Titles/TextTitle";
import styled from "styled-components";

const Mygrid = styled(Grid)`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export interface PresenterWebinarsProps {
  webinars: WebbinarCardProps[];
}

const renderWebbinars = ({ webinars }: PresenterWebinarsProps) => {
  return webinars.map(function(webbinar, index) {
    return (
      <Grid item key={index} xl={4} lg={4} md={4} sm={4} xs={12}>
        <WebbinarCard
          id = { webbinar.id}
          key = {index}
          name = {webbinar.name}
          image = {webbinar.image}
          presenter = {webbinar.presenter}
          presenterImage = {webbinar.presenterImage}
          keywords = {webbinar.keywords}
          date = {webbinar.date}
          link = {webbinar.link}
        />
      </Grid>
    );
  });
};

export const PresenterPageWebinars: FC<PresenterWebinarsProps> = ({
  webinars,
}) => {
  return (
    <Grid container>
      <Container maxWidth="md">
        <Mygrid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={0}
        >
          <TextTitle title="وبینار ها" dir="right" />
          {renderWebbinars({ webinars })}
        </Mygrid>
      </Container>
    </Grid>
  );
};

export default PresenterPageWebinars;
