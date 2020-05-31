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

const ContainerSection = styled(Grid)`
    display:flex;
`;


export interface PresenterWebinarsProps {
  webinars: WebbinarCardProps[];
}

const renderWebbinars = ({ webinars }: PresenterWebinarsProps) => {
  return webinars.map(function(webbinar, index) {
    return (
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
    );
  });
};

export const PresenterPageWebinars: FC<PresenterWebinarsProps> = ({
  webinars,
}) => {
  return (
    <ContainerSection container>
      <Container maxWidth="lg">
        <Mygrid
          container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
          spacing={0}
        >
          <TextTitle title="وبینار ها" dir="right" />
          {renderWebbinars({ webinars })}
        </Mygrid>
      </Container>
    </ContainerSection>
  );
};

export default PresenterPageWebinars;
