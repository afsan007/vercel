import React from "react";
import { PresenterPageWebinars } from "./PresenterPageWebinar";
import { WebbinarCardProps } from "../Card/WebinnarCard/WebinnarCard";

export default {
  title: "Section Components | Presenters / PresenterPageWebbbinars ",
  component: PresenterPageWebinars,
};

const renderWebinarLink = (children: JSX.Element) => <a href="#">{children}</a>;

export const PresenterWebbbinars = () => {
  const webinars: WebbinarCardProps[] = [
    {
      id: "6545645646565",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "1.10.1399",
      link: renderWebinarLink,
    },
    {
      id: "6545645646565",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "1.10.1399",
      link: renderWebinarLink,
    },
    {
      id: "6545645646565",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "1.10.1399",
      link: renderWebinarLink,
    },
    {
      id: "6545645646565",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "1.10.1399",
      link: renderWebinarLink,
    },
    {
      id: "6545645646565",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "1.10.1399",
      link: renderWebinarLink,
    },
    {
      id: "6545645646565",
      name: "وبینار برای گراف کیوال",
      image: "gph.png",
      presenter: "سینا ماشینی",
      presenterImage: "profile.jpg",
      keywords: ["OOP", "Grphql", "Programmig", "برنامه نویسی"],
      date: "1.10.1399",
      link: renderWebinarLink,
    },
  ];
  return <PresenterPageWebinars webinars={webinars} />;
};
