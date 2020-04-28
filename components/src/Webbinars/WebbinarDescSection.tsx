import React ,{ FC } from "react";
import Grid from '@material-ui/core/Grid';
import { WebbinarDescription } from './WebbinarDescription'
import styled from "styled-components";

const MyConatiner = styled(Grid)`
  min-height: 416px;
  background-color: #a4d3ef;
`
const MyGrid = styled(Grid)`
  margin: 0 auto;
  margin-top:140px;
  margin-bottom:20px;
`

export interface WebinarDescSectionProps {
    image: string;
    title: string;
    prsenterName: string;
    prsenterImage: string;
    prsenterEducation: string;
    keywords: string[];
    description: string;
  };

export const WebinarDescSection: FC<WebinarDescSectionProps> = (props) =>{
    return(
        <MyConatiner container>
            <MyGrid>
                <WebbinarDescription
                    title = {props.title}
                    description = {props.description}
                    image = {props.image}
                    keywords = {props.keywords} 
                    prsenterName = {props.prsenterName}
                    prsenterImage = {props.prsenterImage}
                    prsenterEducation = {props.prsenterEducation}
                />
            </MyGrid>
        </MyConatiner>
    );

}

export default WebinarDescSection;