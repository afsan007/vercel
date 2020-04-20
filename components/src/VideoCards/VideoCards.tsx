import React from "react";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { VideoCard, VideoCardProps } from '../Card/VideoCard/VideoCard';
import { TextTitle } from '../Titles/TextTitle';
import styled from "styled-components";


const ContainerSection = styled(Grid)`
    min-height: 507px;
`;


const Mygrid = styled(Grid)`
    margin-top:30px;
    margin-bottom: 30px
`
export interface VideosCardProps {
        videos: VideoCardProps[]
    };

const renderVideos = ({ videos }: VideosCardProps) => {
      return videos.map(function (video, index) {
        return(             
              <VideoCard
                    key = {index}   
                    desc = {video.desc}
                    video = {video.video}
                    duration = {video.duration}              
                />
              );
  });
}

export const VideoCards = ({videos}: VideosCardProps) => {
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
                <TextTitle title = "ویدیوها" />
                {renderVideos({videos})}   
            </Mygrid> 
          </Container>                       
        </ContainerSection>
  );
};

export default VideoCards;
