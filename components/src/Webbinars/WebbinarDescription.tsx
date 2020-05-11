import React ,{ FC } from "react";
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Typography from '@material-ui/core/Typography';
import { ShowMoreText } from "../Text/ShowMore"
import { WebbinarKeyWords } from  '../KeyWords/KeyWords'
import styled from "styled-components";


const DescriptionDiv = styled(Grid)`
  padding: 26px 68px 34px 50px; 
  max-width: 850px;
  min-height: 301px;
  border-radius: 15px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  @media (max-width: 768px) {
    padding: 10px;
    width: unset;
  }
`;

const WebbinarTitle = styled(Typography)`
    font-family: "IRANSans";
    @media (max-width: 768px) {
      text-align: center;
    }
`

const FatherGrid = styled(Grid)`
  font-family: "IRANSans";
  margin-top: 5px;
`

const WebbinarImage = styled(CardMedia)`
  width: 229px;
  height: 143px;
  @media (max-width: 768px) {
   margin:0 auto;
  }
`;

const WebbinarDetail = styled.div`
  margin-top:10px;
`

const Title = styled.span`
  font-family: "IRANSans";
  font-size: 10px;
  letter-spacing: -0.29px;
  color: #c2c2c2;;
  margin: 0px 10px 0px 0px;
`;

const FullName = styled.span`
  font-family: "IRANSans";
  font-size: 12px;
  letter-spacing: -0.29px;
  color: #7a7a7a;
`;

const WebbinarDesc = styled.div`
  font-family: "IRANSans";
  min-height:150px;
  margin-top:25px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #7a7a7a;
`

const Oval = styled.div`
  position: relative;
  float:left;
  bottom:10px;
  left: 20px;
  width: 79px;
  height: 75px;
  background-color: #91bfd9;
  border-radius: 120px;
  text-align: center;
  color: white;
  cursor: pointer;
  @media (max-width: 768px) {
    bottom:0px;
    left: 0px;
    float: unset;
    margin: 0 auto;
   }
`

const SpaceBetween = styled.div`
  margin-top: 5px
`

const LikeSymbol = styled(FavoriteBorderIcon)`
  margin-top:15px;
  font-size: 48px;
`

export interface WebbinarDescriptionProps {
      image?: string | undefined | null;
      title?: string | undefined | null;
      prsenterName?: string | undefined | null;
      prsenterImage?: string | undefined | null;
      prsenterEducation?: string | undefined | null;
      keywords?: string[] | undefined | null;
      description?: string | undefined | null;
    };

export const WebbinarDescription: FC<WebbinarDescriptionProps> = (props) => {
  if (!props.image || !props.title || !props.prsenterImage || !props.prsenterName || !props.keywords || !props.description){
    return <div></div>;
  }
  return (   
        <DescriptionDiv>      
          <FatherGrid item xs={12} container direction="row" justify="flex-start" alignItems="flex-start">
            <Grid item lg={4} xl={4} md={4} sm={4} xs={12} >
                <WebbinarImage 
                          image = {props.image}
                          title = {props.title}                    
                      />    
                </Grid>
                <Grid item lg={8} xl={8} md={8} sm={4} xs={12} >
                  <WebbinarDetail>
                    <WebbinarTitle variant="h6" gutterBottom>{props.title}</WebbinarTitle>                 
                    <FatherGrid item xs={12} container direction="row" justify="flex-start" alignItems="center">
                      <Grid item xs={2} lg={1} xl={1} md={1} sm={2}>
                        <Avatar aria-label="recipe" src={props.prsenterImage} title={props.prsenterName} />                    
                      </Grid>
                      <Grid item xs={10} lg={11} xl={11} md={11} sm={10} >
                          <Title>ارائه دهنده:</Title> <FullName>{props.prsenterName}</FullName>
                      </Grid>
                      <SpaceBetween>
                      <Title>تحصیلات:</Title> <FullName>{props.prsenterEducation}</FullName>                                     
                      </SpaceBetween>
                    </FatherGrid>    
                    <FatherGrid item xs={12} container spacing={0} direction="row" justify="flex-start" alignItems="center">
                    <Grid item lg={2} xl={2} md={2} sm={4} xs={12} >
                        <Title>کلیدواژه ها</Title> 
                      </Grid>  
                      <Grid item lg={10} xl={10} md={10} sm={12} xs={12} >
                          <WebbinarKeyWords keywords={props.keywords} />                    
                      </Grid>  
                      </FatherGrid> 
                  </WebbinarDetail>            
                </Grid>
                <WebbinarDesc>
                    <ShowMoreText text={props.description} />
                  </WebbinarDesc>                  
            </FatherGrid>  
            <Oval>
                <LikeSymbol />
            </Oval>  
        </DescriptionDiv>
  );
};

export default WebbinarDescription;

