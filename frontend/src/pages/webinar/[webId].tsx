import React, { FC } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { VideoCards, VideoCardProps, WebinarDescSection, OtherFileCardProps, OtherFileCards } from "bp-components";
import Page from "$components/layout/Page";
import { withApollo } from '$withApollo';
import { GET_WEBINARS } from '$queries';
import { useQuery } from '@apollo/react-hooks';
import { getWebinars, getWebinarsVariables } from '$gqlQueryTypes/getWebinars';

const fetchWebinar = (webinarId) => {
    const { loading, error, data } = useQuery<getWebinars, getWebinarsVariables>(GET_WEBINARS, {
      variables: {
          Ids: webinarId
      }
    });
    return { loading, error, data };
}

const filterVideosAndFiles = (attachments, loading) => {
     let files:OtherFileCardProps [] = [];
     let videos:VideoCardProps [] = [];
     let videosAndFiles = {files, videos};
     if (loading) return videosAndFiles

     attachments.forEach(attachment => {
        if(attachment.Kind === "video") {       
             videos.push({          
               desc: attachment.Title,
               duration: attachment.Duration,
               video: attachment.URL         
              })
           }
        else {
          files.push({    
            title: attachment.Title,
            type: attachment.format ,
            src: attachment.Thumbnail ,
            image: attachment.Thumbnail,          
          })
          }
     });

     return videosAndFiles = { files, videos }
}

const Webinar: NextPage<FC> = () => {
    const router = useRouter();
    const webinarMetaData = fetchWebinar(router.query.webId);
    const descData = webinarMetaData.data?.getWebinars[0];
    const attachments = filterVideosAndFiles(webinarMetaData.data?.getWebinars[0].Attachment, webinarMetaData.loading);
    let videoComponent = (attachments.videos.length) ? <VideoCards videos = {attachments.videos} />  : <div></div>;
    let fileComponent = (attachments.files.length) ? <OtherFileCards files = {attachments.files} /> : <div></div>;
    
    return (
      <Page>
            <WebinarDescSection 
              title = { descData?.title }
              image = { descData?.coverImageAddress }
              prsenterImage = { descData?.presenter?.presenterImage } 
              prsenterName = { descData?.presenter?.presenterName }
              prsenterEducation = { descData?.presenter?.presenterEducation }          
              keywords = { descData?.keywords } 
              description = { descData?.description } 
              loading = { webinarMetaData.loading }
              />
            {videoComponent}
            {fileComponent}
      </Page>
    );
  };
  
  export default withApollo(Webinar);
  