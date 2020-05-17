import React, { FC } from "react";
import { NextPage } from "next";
import {
  PresenterDescSection,
  PresenterPageWebinars,
  WebbinarCardProps,
} from "bp-components";
import { useRouter } from "next/router";
import Page from "$components/layout/Page";
import Link from "next/link";
import { withApollo } from "$withApollo";
import { GET_PRESENTER } from "$queries";
import { useQuery } from "@apollo/react-hooks";
import {
  getPresenters,
  getPresentersVariables,
} from "$gqlQueryTypes/getPresenters";

const renderWebinarLink = (children: JSX.Element, id: string) => {
  return (
    <Link href="/webinar/[webId]" as={`/webinar/${id}`}>
      {children}
    </Link>
  );
};

const fetchPresenter = (presenterId) => {
  const { loading, error, data } = useQuery<
    getPresenters,
    getPresentersVariables
  >(GET_PRESENTER, {
    variables: {
      PresenterIds: presenterId,
    },
  });

  return { loading, error, data };
};

const createWebbinarData = (items, presenterImage, presenterName) => {
  let webinars: WebbinarCardProps[] = [];
  if (items) {
    webinars = items.map(function (item) {
      return {
        id: item._id,
        image: item.coverImageAddress,
        date: item.presentDate,
        name: item.title,
        presenter: presenterName,
        presenterImage: presenterImage,
        keywords: item.keywords,
        link: renderWebinarLink,
      };
    });
  }
  return webinars;
};

const Presenter: NextPage<FC> = () => {
  const router = useRouter();
  const presenterMetaData = fetchPresenter(router.query.presenterId);
  const descData = presenterMetaData.data?.getPresenters[0];
  const presenterWebinars = createWebbinarData(
    descData?.Webinars,
    descData?.profileImage,
    descData?.title
  );

  return (
    <Page>
      <PresenterDescSection
        prsenterUniversity={descData?.affiliation}
        prsenterImage={descData?.profileImage}
        prsenterName={descData?.title}
        prsenterEducation={descData?.fieldOfStudy}
        description={descData?.biography}
      />
      <PresenterPageWebinars webinars={presenterWebinars} />
    </Page>
  );
};

export default withApollo(Presenter);

