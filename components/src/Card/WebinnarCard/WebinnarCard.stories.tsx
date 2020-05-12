import React from "react";
import { WebbinarCard } from "./WebinnarCard";

export default {
  title: "ATOMS | Card / WebbinarCard",
  component: WebbinarCard,
};

const renderWebinarLink = (children: JSX.Element) => <a href="#">{children}</a>;

export const WebbinarCardStory = () => {
  const keywords = ["graphql", "coding", "برنامه نویسی", "OOP"];
  return (
    <WebbinarCard
      id="4564654654651"
      name="وبینار برای گراف کیوال"
      image="gph.png"
      presenter="سینا ماشینی"
      presenterImage="profile.jpg"
      keywords={keywords}
      date="22.12.1398"
      link={renderWebinarLink}
    />
  );
};
