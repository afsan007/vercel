import React from "react";
import { UpComingWebbbinars } from "./UpcomingWebbinars";
import { WebbinarCardProps } from "../Card/WebinnarCard/WebinnarCard";

export default {
    title: "Section Components | UpCommingWebinnars / Webbinars",
    component: UpComingWebbbinars
};


export const Webbinars = () => {
    const webbinars: WebbinarCardProps[] = [
        {
        name: "وبینار برای گراف کیوال",
        image:"gph.png",
        presenter:"سینا ماشینی",
        presenterImage:"profile.jpg",
        keywords:["OOP", "Grphql", "Programmig", "برنامه نویسی"],
        date:"1.10.1399"
    },
    {
        name: "وبینار برای گراف کیوال",
        image:"gph.png",
        presenter:"سینا ماشینی",
        presenterImage:"profile.jpg",
        keywords:["OOP", "Grphql", "Programmig", "برنامه نویسی"],
        date:"1.10.1399"
    },
    {
        name: "وبینار برای گراف کیوال",
        image:"gph.png",
        presenter:"سینا ماشینی",
        presenterImage:"profile.jpg",
        keywords:["OOP", "Grphql", "Programmig", "برنامه نویسی"],
        date:"1.10.1399"
    }
]
    return <UpComingWebbbinars webbinars = {webbinars} />
};
