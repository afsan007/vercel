import React from "react";
import { UpComingWebbbinars } from "./UpcomingWebbinars";
import { WebbinarCardProps } from "../Card/WebinnarCard/WebinnarCard";

export default {
    title: "Section Components | Webbinar / UpCommingWebinnars ",
    component: UpComingWebbbinars
};

const renderWebinarLink = (children: JSX.Element) =>(
    <a href="#">{children}</a>
  )

export const Webbinars = () => {
    const webbinars: WebbinarCardProps[] = [
        {
        name: "وبینار برای گراف کیوال",
        image:"gph.png",
        presenter:"سینا ماشینی",
        presenterImage:"profile.jpg",
        keywords:["OOP", "Grphql", "Programmig", "برنامه نویسی"],
        date:"1.10.1399",
        link: renderWebinarLink
    },
    {
        name: "وبینار برای گراف کیوال",
        image:"gph.png",
        presenter:"سینا ماشینی",
        presenterImage:"profile.jpg",
        keywords:["OOP", "Grphql", "Programmig", "برنامه نویسی"],
        date:"1.10.1399",
        link: renderWebinarLink
    },
    {
        name: "وبینار برای گراف کیوال",
        image:"gph.png",
        presenter:"سینا ماشینی",
        presenterImage:"profile.jpg",
        keywords:["OOP", "Grphql", "Programmig", "برنامه نویسی"],
        date:"1.10.1399",
        link: renderWebinarLink
    }
]
    return <UpComingWebbbinars webbinars = {webbinars} />
};
