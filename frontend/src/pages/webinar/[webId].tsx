import React, { FC } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { 
  VideoCards, 
  VideoCardProps, 
  WebinarDescSection, 
  OtherFileCardProps, 
  OtherFileCards, 
  WebbinarCardProps, 
  WebinarCarousel,
  LoadingData } from "bp-components";
import Page from "$components/layout/Page";
import {getWebbinarIds, getWebbinarIdsVariables} from "$gqlQueryTypes/getWebbinarIds";
import { withApollo } from '$withApollo';
import { GET_WEBINARS,  GET_WEBINARIDS } from '$queries';
import { useQuery } from '@apollo/react-hooks';
import { getWebinars, getWebinarsVariables } from '$gqlQueryTypes/getWebinars';
import Link from "next/link";

const fetchWebinar = (webinarId) => {
    const { loading, error, data } = useQuery<getWebinars, getWebinarsVariables>(GET_WEBINARS, {
      variables: {
          Ids: webinarId
      }
    });
    return { loading, error, data };
}

const renderWebinarLink = (children: JSX.Element, id: string) => {
  return (
    <Link href="/webinar/[webId]" as={`/webinar/${id}`}>
      {children}
    </Link>
  );
};

const renderPresenterLink = (children: JSX.Element, id: string) => {
  return (
    <Link href="/presenter/[presenterId]" as={`/presenter/${id}`}>
      {children}
    </Link>
  );
};

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

const FetchWebinarsIds = () => {
  let { loading, error, data } = useQuery<
    getWebbinarIds,
    getWebbinarIdsVariables
  >(GET_WEBINARIDS, {
    variables: {
      parentId: "5ea559b3222115000aa8c02c",
      offset: 0,
      limit: 10,
    },
  });

  const ids = data?.search.items.map((item) => {
    return item._id;
  });
  return { loading, error, ids };
};

  const FetchWebinars = (ids, idsIsLoading) => {
    const { loading, error, data } = useQuery<getWebinars, getWebinarsVariables>(
      GET_WEBINARS,
      {
        variables: {
          Ids: ids,
        },
        skip: idsIsLoading,
      }
    );
    let webinars;
    if (loading === false) {
      webinars = createWebbinarData(data?.getWebinars);
    }
    return { loading, error, data: webinars };
  };


  const createWebbinarData = (items) => {
    let webinars: WebbinarCardProps[] = [];
    if (items) {
      webinars = items.map(function (item) {
        return {
          id: item._id,
          image: item.coverImageAddress,
          date: item.presentDate,
          name: item.title,
          presenter: item.presenterId.title,
          presenterImage: item.presenterId.profileImage,
          presenterId: item.presenterId._id,
          keywords: item.keywords,
          presenterLink: renderPresenterLink,
          link: renderWebinarLink,
        };
      });
    }
    return webinars;
  };
  

const Webinar: NextPage<FC> = () => {
    const router = useRouter();
    const webinarMetaData = fetchWebinar(router.query.webId);
    console.log("webinarMetaData:", webinarMetaData);
    const descData = webinarMetaData.data?.getWebinars[0];
    const attachments = filterVideosAndFiles(webinarMetaData.data?.getWebinars[0].Attachment, webinarMetaData.loading);
    const webinarIds = FetchWebinarsIds();
    const webinars = FetchWebinars(webinarIds.ids, webinarIds.loading);
    const loading = webinarIds.loading || webinarMetaData.loading || webinars.loading ;
    return (
      <Page>
        <LoadingData loading={loading} >
          {() => {
            return ( <>        
                <WebinarDescSection 
                      title = { descData?.title }
                      image = { descData?.coverImageAddress }
                      prsenterImage = { descData?.presenterId?.profileImage } 
                      prsenterName = { descData?.presenterId?.title}
                      prsenterEducation = { descData?.presenterId?.affiliation }          
                      keywords = { descData?.keywords } 
                      description = { descData?.description } 
                      loading = { webinarMetaData.loading }
                      presenterLink = {renderPresenterLink}
                      presenterId = {descData?.presenterId?._id}
                 />
                      <VideoCards videos = {attachments.videos} />
                      <OtherFileCards files = {attachments.files} />
                      <WebinarCarousel webbinars={webinars.data} />        
            </>)}}
        </LoadingData>
      </Page>
    );
  };

  export default withApollo(Webinar);
  