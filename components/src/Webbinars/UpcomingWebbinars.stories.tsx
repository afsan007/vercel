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
        id: "4564654654651",
        name: "وبینار برای گراف کیوال",
        image:"gph.png",
        presenter:"سینا ماشینی",
        presenterImage:"profile.jpg",
        keywords:["OOP", "Grphql", "Programmig", "برنامه نویسی"],
        date:"1.10.1399",
        link: renderWebinarLink,
        presenterId:"445465456546",
        presenterLink: renderWebinarLink
    },
    {   id: "4564654654fdf651",
        name: "وبینار برای گراف کیوال",
        image:"gph.png",
        presenter:"سینا ماشینی",
        presenterImage:"profile.jpg",
        keywords:["OOP", "Grphql", "Programmig", "برنامه نویسی"],
        date:"1.10.1399",
        link: renderWebinarLink,
        presenterId:"445465456546",
        presenterLink: renderWebinarLink
    },
    {
        id: "4564654654fdffdfsd651",
        name: "وبینار برای گراف کیوال",
        image:"gph.png",
        presenter:"سینا ماشینی",
        presenterImage:"profile.jpg",
        keywords:["OOP", "Grphql", "Programmig", "برنامه نویسی"],
        date:"1.10.1399",
        link: renderWebinarLink,
        presenterId:"445465456546",
        presenterLink: renderWebinarLink
    }
]
    return <UpComingWebbbinars webbinars = {webbinars} />
};
