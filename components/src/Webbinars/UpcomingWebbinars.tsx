import React from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { WebbinarCard, WebbinarCardProps } from '../Card/WebinnarCard/WebinnarCard';
import { TextTitle } from '../Titles/TextTitle';
import styled from "styled-components";


const ContainerSection = styled(Grid)`
    min-height: 507px;
    background-color: #ededed;
`;

const Mygrid = styled(Grid)`
    margin-top:30px;
    margin-bottom: 30px
`
export interface UpComingWebbbinarsProps {
      webbinars: WebbinarCardProps[]
    };

const renderWebbinars = ({ webbinars }: UpComingWebbbinarsProps) => {
      return webbinars.map(function (webbinar,index) {
        return(         
          <Grid item key = {index} xl={4} lg={4} md={4} sm={4} xs={12}>
              <WebbinarCard
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
}

export const UpComingWebbbinars = ({webbinars}: UpComingWebbbinarsProps) => {
  return (   
        <ContainerSection
            container
        >
          <Container maxWidth="lg">
            <Mygrid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <TextTitle title="وبینار ها" dir="center"/>
                {renderWebbinars({webbinars})}   
            </Mygrid> 
          </Container>                       
        </ContainerSection>
  );
};

export default UpComingWebbbinars;
