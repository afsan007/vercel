import React, { FC } from "react";
import { NextPage } from "next";
import { withApollo } from "$withApollo";
import { GET_WEBINARIDS, GET_WEBINARS } from "$queries";
import { GET_PRESENTERIDS, GET_PRESENTER } from "$queries";
import { useQuery } from "@apollo/react-hooks";
import Page from "$components/layout/Page";
import {
  Banner,
  Presnter,
  SimplePresenterProps,
  Services,
  ServiceCardProps,
  WebbinarCardProps,
  UpComingWebbbinars
} from "bp-components";
import Link from "next/link";
import {
  getWebbinarIds,
  getWebbinarIdsVariables,
} from "$gqlQueryTypes/getWebbinarIds";
import { getWebinars, getWebinarsVariables } from "$gqlQueryTypes/getWebinars";
import {
  getPresenterIds,
  getPresenterIdsVariables,
} from "$gqlQueryTypes/getPresenterIds";
import {
  getPresenters,
  getPresentersVariables,
} from "$gqlQueryTypes/getPresenters";

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
        presenter: item.presenter.presenterName,
        presenterImage: item.presenter.presenterImage,
        keywords: item.keywords,
        link: renderWebinarLink,
      };
    });
  }
  return webinars;
};

const Home: NextPage<FC> = () => {
  const webinarIds = FetchWebinarsIds();
  const webinars = FetchWebinars(webinarIds.ids, webinarIds.loading);
  const presentersIds = FetchPresentersIds();
  const presenters = FetchPresenters(presentersIds.ids, presentersIds.loading);

  return (
    <Page>
      <Banner
        title="درباره وبینار آوید"
        description="این سایت ابزاری برای برنامه ریزی و اجرای وبینارها برای عموم است. بسیاری از گویندگان Avid یا خارج از کشور می توانند وبینار خود را در اینجا اعلام کنند و ما بایگانی وبینارها و همچنین وبینارهای برنامه ریزی شده آینده را نشان می دهیم."
        linktitle="بیشتر بخوانید > "
        linkWrapper={renderAddItemLink}
      />
      <Services services={service} />
      <UpComingWebbbinars
        webbinars={webinars.data}
        loading={webinars.loading}
      />
      <Presnter presnters={presenters.data} loading={presenters.loading} />
    </Page>
  );
};

export default withApollo(Home);
