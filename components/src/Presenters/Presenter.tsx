import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { TextTitle } from "../Titles/TextTitle";
import {
  SimplePresenter,
  SimplePresenterProps,
} from "../Card/SimplePresenterCard/SimplePresenter";

const BodyContainer = styled(Container)`
  margin-top: 20px;
`;

const BodyGrid = styled(Grid)`
  margin-top: 50px;
`;

export interface PresnterProps {
  presnters: SimplePresenterProps[];
}

const renderPresenters = ({ presnters }: PresnterProps) => {
  return presnters.map(function(presenter, index) {
    return (
      <Grid item key={index} xl={3} lg={3} md={3} sm={3} xs={12}>
        <SimplePresenter
          key={index}
          name={presenter.name}
          education={presenter.education}
          image={presenter.image}
          link={presenter.link}
        />
      </Grid>
    );
  });
};

export const Presnter = ({ presnters }: PresnterProps) => {
  return (
    <BodyContainer maxWidth="md">
      <TextTitle title="ارائه دهندگان" dir="center" />
      <BodyGrid
        item
        xs={12}
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        {renderPresenters({ presnters })}
      </BodyGrid>
    </BodyContainer>
  );
};

export default Presnter;
