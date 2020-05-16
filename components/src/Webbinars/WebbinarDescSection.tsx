import React ,{ FC } from "react";
import Grid from '@material-ui/core/Grid';
import { WebbinarDescription } from './WebbinarDescription'
import { LoadingData } from "../Progress/LoadingData"
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
    image?: string | undefined | null;
    title?: string | undefined | null;
    prsenterName?: string | undefined | null;
    prsenterImage?: string | undefined | null;
    prsenterEducation?: string | undefined | null;
    keywords?: string[] | undefined | null;
    description?: string | undefined | null;
    loading: boolean;
    presenterId: string | undefined | null;
    presenterLink: (children: JSX.Element,id: string) => JSX.Element;
  };

export const WebinarDescSection: FC<WebinarDescSectionProps> = (props) =>{
    return(
      <MyConatiner container>
          <MyGrid>
              <LoadingData loading = {props.loading} >
                  {() => {
                    return (
                      <>
                        <WebbinarDescription
                                title = {props.title}
                                description = {props.description}
                                image = {props.image}
                                keywords = {props.keywords} 
                                prsenterName = {props.prsenterName}
                                prsenterImage = {props.prsenterImage}
                                prsenterEducation = {props.prsenterEducation}
                                presenterId = {props.presenterId}
                                presenterLink = {props.presenterLink}
                            />
                        </>
                    )}}
              </LoadingData> 
          </MyGrid>
      </MyConatiner>
    );

}

export default WebinarDescSection;