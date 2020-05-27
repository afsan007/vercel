import React from "react";
import { UpComingWebinarsCarousel } from "./UpComingWebinarsCarousel";
import { WebbinarCardProps } from "../Card/WebinnarCard/WebinnarCard";

export default {
  title: "Section Components | Webinar / UpCommingWebinars ",
  component: UpComingWebinarsCarousel,
};

const renderWebinarLink = (children: JSX.Element) => <a href="#">{children}</a>;

export const Webbinars = () => {
  const webbinars: WebbinarCardProps[] = [
    {
      id: "4564654654651",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date:"2019-12-12T19:52:49",
      link: renderWebinarLink,
      presenterId: "445465456546",
      presenterLink: renderWebinarLink,
    },
    {
      id: "4564654654fdf651",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date:"2020-12-12T19:52:49",
      link: renderWebinarLink,
      presenterId: "445465456546",
      presenterLink: renderWebinarLink,
    },
    {
      id: "4564654654fdffdfsd651",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date:"2021-12-12T19:52:49",
      link: renderWebinarLink,
      presenterId: "445465456546",
      presenterLink: renderWebinarLink,
    },
  ];
  return (
    <UpComingWebinarsCarousel
      webbinars={webbinars}
      title="وبینار های آینده"
      color="#ededed"
    />
  );
};
