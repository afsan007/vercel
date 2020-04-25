import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { TextTitle } from "../Titles/TextTitle";
import {
  ServiceCard,
  ServiceCardProps,
} from "../Card/ServicesCard/ServiceCard";

const Root = styled(Grid)`
  background-image: url("HowTo.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const BodyGrid = styled(Grid)`
  margin-top: 3px;
`;
const Title = styled(Grid)`
  margin-top: 160px;
`;

export interface ServiceProps {
  services: ServiceCardProps[];
}

const renderServices = ({ services }: ServiceProps) => {
  return services.map((services, index) => (
    <Grid key={index} item xs={12} sm={12} md={4} lg={4}>
      <ServiceCard
        name={services.name}
        description={services.description}
        image={services.image}
      />
    </Grid>
  ));
};

export const Services = ({ services }: ServiceProps) => {
  return (
    <Root container direction="column" justify="center" alignItems="center">
      <Title item xl={12} xs={10} sm={4} md={6} lg={12}>
        <TextTitle title="سرویس ها" />
      </Title>

      <Grid item xs={8} sm={4} md={12} lg={12}>
        <BodyGrid
          container
          direction="row"
          justify="space-around"
          alignItems="stretch"
          spacing={8}
        >
          {renderServices({ services })}
        </BodyGrid>
      </Grid>
    </Root>
  );
};

export default Services;
