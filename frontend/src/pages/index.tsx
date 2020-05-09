import React, { FC } from "react";
import { NextPage } from "next";
import { withApollo } from '$withApollo';
import { GET_WEBINARIDS, GET_WEBINARS } from '$queries';
import { useQuery } from '@apollo/react-hooks';
import Page from "$components/layout/Page";
import {
  Banner,
  Presnter,
  SimplePresenterProps,
  UpComingWebbbinars,
  WebbinarCardProps,
  Services,
  ServiceCardProps,
} from "bp-components";
import Link from "next/link";
import { getWebbinarIds, getWebbinarIdsVariables } from "$gqlQueryTypes/getWebbinarIds";
import { getWebinars, getWebinarsVariables } from "$gqlQueryTypes/getWebinars";

const service: ServiceCardProps[] = [
  {
    name: "کتاب",
    description:
      "کتاب یکی از ابزار هایی که است می توان در لرنیتو به آن دسترسی داشت",
    image: "reader.png",
  },
  {
    name: "آزمون",
    description:
      "آزمون یکی از ابزار هایی که است می توان در لرنیتو به آن دسترسی داشت",
    image: "studio.png",
  },
  {
    name: "ویدیو",
    description:
      "ویدیو یکی از ابزار هایی که است می توان در لرنیتو به آن دسترسی داشت",
    image: "Store.png",
  },
];

const presnters: SimplePresenterProps[] = [
  {
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
  },
  {
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
  },
  {
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
  },
  {
    name: "سینا ماشینی",
    education: "دانشگاه آزاد",
    image: "profile.jpg",
  },
];

const renderWebinarLink = (children: JSX.Element,id :string ) => {
  return <Link href="/webinnar/[webId]" as={`/webinnar/${id}`}>{children}</Link>
};


const renderAddItemLink = (children: JSX.Element) => (
  <Link href="/">{children}</Link>
);

const FetchWebinarsIds = () =>
{  
  let { loading, error, data } = useQuery<getWebbinarIds, getWebbinarIdsVariables>(GET_WEBINARIDS, {
    variables: {
      parentId: '5ea559b3222115000aa8c02c',
      offset: 0,
      limit: 10,
    }
  });   
 
  const ids = data?.search.items.map(item =>
  {
    return item._id
  });
  return  { loading, error, ids }
}

const FetchWebinars = (ids, idsIsLoading) =>
{  
  const { loading, error, data  } = useQuery<getWebinars, getWebinarsVariables>(GET_WEBINARS, {
    variables: {
      Ids: ids
    },
    skip: idsIsLoading
  });   
  let webinars ;
  if(loading === false){
    webinars = createWebbinarData(data?.getWebinars)
  }
  return { loading, error, data: webinars }
}

const createWebbinarData = (items) =>
{
  let webinars: WebbinarCardProps[] = [];
  if(items)
  {
      webinars = items.map(function (item) {
        return {
          id: item._id,
          image: item.coverImageAddress,
          date: item.presentDate,
          name: item.title,
          presenter: item.presenter.presenterName,
          presenterImage: item.presenter.presenterImage,
          keywords: item.keywords,
          link:renderWebinarLink
        }
      })
  }
  return webinars;
}

const Home: NextPage<FC> = () => {
  const webinarIds = FetchWebinarsIds();
  const webinars = FetchWebinars(webinarIds.ids, webinarIds.loading);

  return (        
        <Page>
            <Banner
              title="درباره وبینار آوید"
              description="این سایت ابزاری برای برنامه ریزی و اجرای وبینارها برای عموم است. بسیاری از گویندگان Avid یا خارج از کشور می توانند وبینار خود را در اینجا اعلام کنند و ما بایگانی وبینارها و همچنین وبینارهای برنامه ریزی شده آینده را نشان می دهیم."
              linktitle="بیشتر بخوانید > "
              linkWrapper={renderAddItemLink}
            />
            <Services services={service} />
            <UpComingWebbbinars webbinars={webinars.data} loading={webinars.loading} />
            <Presnter presnters={presnters} />
        </Page>
  );
};

export default withApollo(Home);
