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
  @media (max-width: 768px) {
    background: transparent;
  }
`;

const BodyGrid = styled(Grid)`
  margin-top: 3px;
`;
const Title = styled(Grid)`
  margin-top: 150px;
  @media (max-width: 768px) {
    margin-top: 80px;
  }
`;

export interface ServiceProps {
  services: ServiceCardProps[];
}

const renderServices = ({ services }: ServiceProps) => {
  return services.map((services, index) => (
    <Grid key={index} item xs={12} sm={4} md={4} lg={4}>
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
      <Title item xl={12} xs={12} sm={12} md={12} lg={12}>
        <TextTitle title="سرویس ها" dir="center" />
      </Title>

      <Grid item xs={8} sm={12} md={12} lg={12}>
        <BodyGrid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={6}
        >
          {renderServices({ services })}
        </BodyGrid>
      </Grid>
    </Root>
  );
};

export default Services;
