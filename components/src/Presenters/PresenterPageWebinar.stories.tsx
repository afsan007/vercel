import React from "react";
import { PresenterPageWebbbinars } from "./PresenterPageWebinar";
import { WebbinarCardProps } from "../Card/WebinnarCard/WebinnarCard";

export default {
  title: "Section Components | Presenters / PresenterPageWebbbinars ",
  component: PresenterPageWebbbinars,
};

const renderWebinarLink = (children: JSX.Element) => <a href="#">{children}</a>;

export const PresenterWebbbinars = () => {
  const webbinars: WebbinarCardProps[] = [
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
  return <PresenterPageWebbbinars webbinars={webbinars} />;
};
