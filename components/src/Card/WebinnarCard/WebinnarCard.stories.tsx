import React from "react";
import { WebbinarCard } from "./WebinnarCard";

export default {
    title: "Card / WebbinarCard",
    component: WebbinarCard
};

export const WebbinarCardStory = () => {
    const keywords = ["graphql","coding", "برنامه نویسی", "OOP"];
    return <WebbinarCard
        name="وبینار برای گراف کیوال"
        image="gph.png" presenter="سینا ماشینی"
        presenterImage="profile.jpg"
        keywords = {keywords}
        date="22.12.1398" />
};