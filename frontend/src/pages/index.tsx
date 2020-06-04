import React, { FC } from "react";
import { NextPage } from "next";
import { withApollo } from "$withApollo";
import {
  GET_WEBINARIDS,
  GET_WEBINARS,
  GET_SERVICESIDS,
  GET_SERVICES,
  GET_PRESENTERIDS,
  GET_PRESENTER,
} from "$queries";
import { useQuery } from "@apollo/react-hooks";
import Page from "$components/layout/Page";
import {
  Banner,
  Presnter,
  SimplePresenterProps,
  // Services,
  ServiceCardProps,
  WebbinarCardProps,
  UpComingWebinarsCarousel,
  LoadingData,
} from "bp-components";
import Link from "next/link";
import {
  getWebbinarIds,
  getWebbinarIdsVariables,
} from "$gqlQueryTypes/getWebbinarIds";
import {
  getServicesIds,
  getServicesIdsVariables,
} from "$gqlQueryTypes/getServicesIds";
import { getServices, getServicesVariables } from "$gqlQueryTypes/getServices";
import { getWebinars, getWebinarsVariables } from "$gqlQueryTypes/getWebinars";
import {
  getPresenterIds,
  getPresenterIdsVariables,
} from "$gqlQueryTypes/getPresenterIds";
import {
  getPresenters,
  getPresentersVariables,
} from "$gqlQueryTypes/getPresenters";
import moment from "jalali-moment";

const renderAddItemLink = (children: JSX.Element) => (
  <Link href="/">{children}</Link>
);

const renderPresenterLink = (children: JSX.Element, id: string) => {
  return (
    <Link href="/presenter/[presenterId]" as={`/presenter/${id}`}>
      {children}
    </Link>
  );
};

const FetchPresentersIds = () => {
  let { loading, error, data } = useQuery<
    getPresenterIds,
    getPresenterIdsVariables
  >(GET_PRESENTERIDS, {
    variables: {
      parentId: "5eb6b1ab923c300008351d9d",
      offset: 0,
      limit: 10,
    },
  });

  const ids = data?.search.items.map((item) => {
    return item._id;
  });
  return { loading, error, ids };
};

const FetchPresenters = (ids, idsIsLoading) => {
  const { loading, error, data } = useQuery<
    getPresenters,
    getPresentersVariables
  >(GET_PRESENTER, {
    variables: {
      PresenterIds: ids,
    },
    skip: idsIsLoading,
  });
  let presenters;
  if (loading === false) {
    presenters = createPresenterData(data?.getPresenters);
  }
  return { loading, error, data: presenters };
};

const createPresenterData = (items) => {
  let presenters: SimplePresenterProps[] = [];
  if (items) {
    presenters = items.map(function (item) {
      return {
        id: item._id,
        name: item.title,
        education: item.affiliation,
        image: item.profileImage,
        link: renderPresenterLink,
      };
    });
  }
  return presenters;
};

const renderWebinarLink = (children: JSX.Element, id: string) => {
  return (
    <Link href="/webinar/[webId]" as={`/webinar/${id}`}>
      {children}
    </Link>
  );
};

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

const fetchGenralServicesIds = () => {
  const { loading, error, data } = useQuery<
    getServicesIds,
    getServicesIdsVariables
  >(GET_SERVICESIDS, {
    variables: {
      parentId: "5eb7d2a1dad91000081488ec",
      offset: 0,
      limit: 20,
    },
  });
  const ids = data?.search.items.map((item) => {
    return item._id;
  });
  return { loading, error, ids };
};

const fetchAllServices = (ids, servicesIdsloading) => {
  const { loading, error, data } = useQuery<getServices, getServicesVariables>(
    GET_SERVICES,
    {
      variables: {
        Ids: ids,
      },
      skip: servicesIdsloading,
    }
  );
  let services;
  if (loading == false) {
    services = createServicesAndBanerData(data?.getGenerals);
  }
  return { loading, error, data: services };
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
  if (loading == false) {
    webinars = createWebbinarData(data?.getWebinars);
  }
  return { loading, error, data: webinars };
};

const createWebbinarData = (items) => {
  let newWebinars: WebbinarCardProps[] = [];
  let oldWebinars: WebbinarCardProps[] = [];

  if (items) {
    items.forEach((item?) => {
      if (moment().isBefore(moment(item?.presentDate))) {
        newWebinars.push({
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
        });
      } else {
        oldWebinars.push({
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
        });
      }
    });
    return { oldWebinars, newWebinars };
  }
};

const createServicesAndBanerData = (services) => {
  let generalServices: ServiceCardProps[] = [];
  let bannerContent = "";
  let bannerButtom = "";
  let bannerTitle = "";
  let bannerImage = "";
  let bgPictureServices = "";
  if (services) {
    services.map((service) => {
      if (service.listBody) {
        if (service.key === "ServicesComponent") {
          service.listBody.map((item) => {
            generalServices.push({
              image: item.image,
              name: item.title,
              description: item.text,
            });
          });
        } else if (service.key === "BannerComponent") {
          bannerContent = service.listBody[0].text;
          bannerImage = service.listBody[0].image;
          bannerButtom = service.listBody[0].input;
          bannerTitle = service.listBody[0].title;
        }
      } else if (service.key === "HowToBannerBgPic") {
        bgPictureServices = service.body;
      }
    });
  }

  return {
    generalServices,
    bannerContent,
    bannerImage,
    bannerTitle,
    bannerButtom,
    bgPictureServices,
  };
};

const Home: NextPage<FC> = () => {
  const allServicesIds = fetchGenralServicesIds();
  const allServices = fetchAllServices(
    allServicesIds.ids,
    allServicesIds.loading
  );
  const webinarIds = FetchWebinarsIds();
  const webinars = FetchWebinars(webinarIds.ids, webinarIds.loading);
  const presentersIds = FetchPresentersIds();
  const presenters = FetchPresenters(presentersIds.ids, presentersIds.loading);
  const loading =
    allServices.loading ||
    webinarIds.loading ||
    webinars.loading ||
    presentersIds.loading ||
    presenters.loading;

  return (
    <Page>
      <LoadingData loading={loading}>
        {() => {
          return (
            <>
              <Banner
                title={allServices.data?.bannerTitle}
                description={allServices.data?.bannerContent}
                linktitle={allServices.data?.bannerButtom}
                image={allServices.data?.bannerImage}
                linkWrapper={renderAddItemLink}
                loading={allServices.loading}
              />
              {/* <Services
                services={allServices.data?.generalServices}
                loading={allServices.loading}
                backgroundImg={allServices.data?.bgPictureServices}
              /> */}

              <UpComingWebinarsCarousel
                webbinars={webinars.data.newWebinars}
                title="وبینارهای آینده"
                color="#ededed"
              />

              <Presnter
                presnters={presenters.data}
                loading={presenters.loading}
              />
              <UpComingWebinarsCarousel
                webbinars={webinars.data.oldWebinars}
                title="وبینارهای گذشته"
                color="#ededed"
              />
            </>
          );
        }}
      </LoadingData>
    </Page>
  );
};

export default withApollo(Home);
