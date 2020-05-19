import React,{ FC } from "react";
import { WebbinarCard, WebbinarCardProps } from '../Card/WebinnarCard/WebinnarCard';
import { TextTitle } from '../Titles/TextTitle';
import { ItemCarousel } from "../Carousel/ItemCarousel"
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import styled from "styled-components";

const ContainerSection = styled(Grid)`
    background-color: #ffffff;
    display:flex;
`;

const TitleDiv = styled.div`
  margin-top: 40px;
`

const FileSectionTitle = styled.div`
  border-top:1px solid #c2c2c2;
  margin: 30px 50px 0px 0px;
  @media (max-width: 768px) {
    margin-right: 0px;
  }
`

export interface WebinarCarouselProps {
      webbinars: WebbinarCardProps[];
    };

const renderWebbinars = ({ webbinars }) => {
   return webbinars.map(function (webbinar,index) {
        return(         
              <WebbinarCard                    
                    key = {index}    
                    id = {webbinar.id}               
                    name = {webbinar.name}
                    image = {webbinar.image}
                    presenter = {webbinar.presenter}
                    presenterImage = {webbinar.presenterImage}
                    keywords = {webbinar.keywords}
                    date = {webbinar.date}
                    link = {webbinar.link}
                    presenterId = {webbinar.presenterId}
                    presenterLink = {webbinar.presenterLink}
                     />
              );          
  });
}

export const WebinarCarousel: FC<WebinarCarouselProps> = ({webbinars}) => {
  return (   
        <ContainerSection container>
          <Container maxWidth="lg">
            <FileSectionTitle>
              <TitleDiv>
              <TextTitle title = "وبینارهای مشابه" dir = "right" />
              </TitleDiv>
            </FileSectionTitle>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="stretch"
              spacing={0}
            > 
            <ItemCarousel>
                  {renderWebbinars({webbinars})}   
            </ItemCarousel>     
        </Grid> 
          </Container>                       
        </ContainerSection>
  )
};

export default WebinarCarousel;
