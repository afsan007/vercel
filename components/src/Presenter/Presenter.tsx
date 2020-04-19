import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { Ipresenter } from './interfaces/presenter';
import { TextTitle } from "../Titles/TextTitle";
import { SimplePresenter } from "./SimplePresenter";

const BodyContainer = styled(Container)`
  margin-top: 20px;
`;

const BodyGrid = styled(Grid)`
  margin-top: 50px;
`;


export interface PresnterProps {
  presnters: Ipresenter[]
};

const renderPresenters: ({ presnters }: PresnterProps) => JSX.Element[] = function({ presnters }){
  return presnters.map(function (presenter) {
  return(             
            <SimplePresenter
              name={presenter.name}
              education={presenter.education}
              image={presenter.image}
          />
        );
});
}

export const Presnter = ({presnters}: PresnterProps) => {
  return (
    <BodyContainer>
      <TextTitle title="ارائه دهندگان" />
      <BodyGrid
        item
        xs={12}
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
         {renderPresenters({presnters})}
      </BodyGrid>
    </BodyContainer>
  );
};

export default Presnter;
